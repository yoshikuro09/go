export type QuizResult = {
  score: number;
  total: number;
  lastAttemptAt: string; // ISO date
};

export type ProgressState = {
  completedLessons: string[];
  quizResults: Record<string, QuizResult>;
};

export const defaultProgressState: ProgressState = {
  completedLessons: [],
  quizResults: {},
};
