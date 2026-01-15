import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import { saveQuizResult } from "../../features/progress/progress.storage";

type AnswerState = {
  selectedIndex: number | null;
  isCorrect: boolean | null;
};

export function QuizPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Некорректный URL (нет id урока).</div>;

  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) return 
  <div>Урок не найден.</div>;
  const lessonId = lesson.id;

  const questions = lesson.quiz;
  const total = questions.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(
    () => questions.map(() => ({ selectedIndex: null, isCorrect: null }))
  );
  const [finished, setFinished] = useState(false);

  if (total === 0) {
    return (
      <div>
        <h1 style={{ marginTop: 0 }}>Квиз: {lesson.title}</h1>
        <div>Для этого урока пока нет вопросов.</div>
        <div style={{ marginTop: 12 }}>
          <Link to={`/lessons/${lesson.id}`}>Назад к уроку</Link>
        </div>
      </div>
    );
  }

  const current = questions[step];
  const state = answers[step];

  const score = answers.reduce((acc, a) => acc + (a.isCorrect ? 1 : 0), 0);

  function selectOption(optionIndex: number) {
    if (finished) return;

    const isCorrect = optionIndex === current.correctIndex;

    setAnswers((prev) => {
      const next = [...prev];
      next[step] = { selectedIndex: optionIndex, isCorrect };
      return next;
    });
  }

  function next() {
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setFinished(true);
      saveQuizResult(lessonId, { score, total });
    }
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setFinished(false);
    setAnswers(questions.map(() => ({ selectedIndex: null, isCorrect: null })));
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Квиз: {lesson.title}</h1>

      <div style={{ opacity: 0.8, marginBottom: 12 }}>
        Вопрос {step + 1} из {total}
      </div>

      <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
        <div style={{ fontWeight: 700, marginBottom: 10 }}>{current.text}</div>

        <div style={{ display: "grid", gap: 8 }}>
          {current.options.map((opt, idx) => {
            const isSelected = state.selectedIndex === idx;

            const showResult = state.selectedIndex !== null;
            const isCorrectOption = idx === current.correctIndex;

            let border = "1px solid #ddd";
            let background = "transparent";

            if (showResult) {
              if (isSelected && state.isCorrect) {
                border = "1px solid #16a34a";
                background = "#dcfce7";
              } else if (isSelected && state.isCorrect === false) {
                border = "1px solid #dc2626";
                background = "#fee2e2";
              } else if (!isSelected && isCorrectOption) {
                border = "1px solid #16a34a";
                background = "#f0fdf4";
              }
            } else if (isSelected) {
              border = "1px solid #333";
              background = "#f3f3f3";
            }

            return (
              <button
                key={opt}
                onClick={() => selectOption(idx)}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  borderRadius: 10,
                  border,
                  background,
                  cursor: "pointer",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {state.selectedIndex !== null && current.explanation && (
          <div style={{ marginTop: 12, padding: 10, border: "1px solid #ddd", borderRadius: 10, opacity: 0.9 }}>
            {current.explanation}
          </div>
        )}
      </section>

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <button
          onClick={prev}
          disabled={step === 0}
          style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10, cursor: "pointer" }}
        >
          Назад
        </button>

        <button
          onClick={next}
          disabled={state.selectedIndex === null}
          style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10, cursor: "pointer" }}
        >
          {step === total - 1 ? "Завершить" : "Далее"}
        </button>

        <Link to={`/lessons/${lesson.id}`} style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}>
          К уроку
        </Link>

        <Link to="/progress" style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}>
          Прогресс
        </Link>
      </div>

      {finished && (
        <div style={{ marginTop: 16, border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>Результат: {score} / {total}</div>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Результат сохранён в прогресс.
          </div>

          <button
            onClick={restart}
            style={{ marginTop: 12, padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10, cursor: "pointer" }}
          >
            Пройти ещё раз
          </button>
        </div>
      )}
    </div>
  );
}
