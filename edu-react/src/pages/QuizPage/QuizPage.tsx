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

  if (!id) return <div>Некоректний URL (немає id уроку).</div>;

  const lesson = lessons.find((l) => l.id === id);
  if (!lesson) return <div>Урок не знайдено.</div>;

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
        <h1 style={{ marginTop: 0 }}>Квіз: {lesson.title}</h1>
        <div>Для цього уроку поки що немає запитань.</div>
        <div style={{ marginTop: 12 }}>
          <Link to={`/lessons/${lesson.id}`}>Назад до уроку</Link>
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
      <h1 style={{ marginTop: 0 }}>Квіз: {lesson.title}</h1>

      {!finished && (
        <div style={{ opacity: 0.8, marginBottom: 12 }}>
          Питання {step + 1} з {total}
        </div>
      )}

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
                key={`${current.id}-${idx}`}
                onClick={() => selectOption(idx)}
                disabled={finished}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  borderRadius: 10,
                  border,
                  background,
                  cursor: finished ? "default" : "pointer",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {state.selectedIndex !== null && state.isCorrect === true && current.explanation && (
          <div
            style={{
              marginTop: 12,
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 10,
              opacity: 0.9,
            }}
          >
            {current.explanation}
          </div>
        )}
      </section>

      {!finished ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 16,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={prev}
              disabled={step === 0}
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Назад
            </button>

            <button
              onClick={next}
              disabled={state.selectedIndex === null}
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              {step === total - 1 ? "Завершити" : "Далі"}
            </button>
          </div>

          <Link
            to={`/lessons/${lesson.id}`}
            style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}
          >
            До уроку
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 16,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={restart}
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Пройти ще раз
            </button>
          </div>

          <Link
            to={`/lessons/${lesson.id}`}
            style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}
          >
            До уроку
          </Link>
        </div>
      )}

      {finished && (
        <div style={{ marginTop: 16, border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>
            Результат: {score} / {total}
          </div>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Результат збережено у прогресі.
          </div>
        </div>
      )}
    </div>
  );
}
