import { defaultProgressState, type ProgressState, type QuizResult } from "./progress.types";

const KEY = "edu_progress_v1";

export function readProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgressState;

    const parsed = JSON.parse(raw) as ProgressState;

    if (!Array.isArray(parsed.completedLessons) || typeof parsed.quizResults !== "object") {
      return defaultProgressState;
    }

    return parsed;
  } catch {
    return defaultProgressState;
  }
}

export function writeProgress(state: ProgressState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function markLessonCompleted(lessonId: string) {
  const state = readProgress();
  if (state.completedLessons.includes(lessonId)) return;

  const next: ProgressState = {
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
  };

  writeProgress(next);
}

export function unmarkLessonCompleted(lessonId: string) {
  const state = readProgress();

  const next: ProgressState = {
    ...state,
    completedLessons: state.completedLessons.filter((id) => id !== lessonId),
  };

  writeProgress(next);
}

export function saveQuizResult(lessonId: string, result: Omit<QuizResult, "lastAttemptAt">) {
  const state = readProgress();

  const next: ProgressState = {
    ...state,
    quizResults: {
      ...state.quizResults,
      [lessonId]: { ...result, lastAttemptAt: new Date().toISOString() },
    },
  };

  writeProgress(next);
}
