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
      <div className="quiz">
        <div className="pageHeader">
          <h1 className="pageHeader__title">Квіз: {lesson.title}</h1>
          <div className="pageHeader__subtitle">
            Перевірте свої знання
          </div>
        </div>
        <div>Для цього уроку поки що немає запитань.</div>

        <div className="quiz__actions">
          <Link className="btn" to={`/lessons/${lesson.id}`}>
            Назад до уроку
          </Link>
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
      return;
    }
    setFinished(true);
    saveQuizResult(lessonId, { score, total });
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setFinished(false);
    setAnswers(questions.map(() => ({ selectedIndex: null, isCorrect: null })));
  }

  const showResult = state.selectedIndex !== null;

  return (
    <div className="quiz">
      <div className="pageHeader">
          <h1 className="pageHeader__title">Квіз: {lesson.title}</h1>
          <div className="pageHeader__subtitle">
            Перевірте свої знання
          </div>
        </div>
      {!finished && (
        <div className="quiz__meta">
          Питання {step + 1} з {total}
        </div>
      )}

      <section className="card">
        <div className="quiz__question">{current.text}</div>

        <div className="quiz__options">
          {current.options.map((opt, idx) => {
            const isSelected = state.selectedIndex === idx;
            const isCorrectOption = idx === current.correctIndex;

            let cls = "quiz__option";

            if (showResult) {
              if (isSelected && state.isCorrect) cls += " quiz__option--correct";
              else if (isSelected && state.isCorrect === false) cls += " quiz__option--wrong";
              else if (!isSelected && isCorrectOption) cls += " quiz__option--correctGhost";
            } else if (isSelected) {
              cls += " quiz__option--selected";
            }

            return (
              <button
                key={`${current.id}-${idx}`}
                type="button"
                className={cls}
                onClick={() => selectOption(idx)}
                disabled={finished}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showResult && state.isCorrect === true && current.explanation && (
          <div className="explanation">{current.explanation}</div>
        )}
      </section>

      {!finished ? (
        <div className="quiz__actions">
          <div className="quiz__actionsLeft">
            <button type="button" className="btn" onClick={prev} disabled={step === 0}>
              Назад
            </button>

            <button
              type="button"
              className="btn"
              onClick={next}
              disabled={state.selectedIndex === null}
            >
              {step === total - 1 ? "Завершити" : "Далі"}
            </button>
          </div>

          <Link className="btn" to={`/lessons/${lesson.id}`}>
            До уроку
          </Link>
        </div>
      ) : (
        <div className="quiz__actions">
          <div className="quiz__actionsLeft">
            <button type="button" className="btn" onClick={restart}>
              Пройти ще раз
            </button>
          </div>

          <Link className="btn" to={`/lessons/${lesson.id}`}>
            До уроку
          </Link>
        </div>
      )}

      {finished && (
        <div className="card quiz__result">
          <div className="quiz__resultTitle">
            Результат: {score} / {total}
          </div>
          <div className="quiz__resultText">Результат збережено у прогресі.</div>
        </div>
      )}
    </div>
  );
}
