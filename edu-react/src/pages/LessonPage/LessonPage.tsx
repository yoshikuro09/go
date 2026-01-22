import { Link, useParams } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import { markLessonCompleted, unmarkLessonCompleted } from "../../features/progress/progress.storage";
import { useProgress } from "../../features/progress/useProgress";

export function LessonPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Некоректний URL (немає id уроку).</div>;

  const lesson = lessons.find((l) => l.id === id);
  const { progress, refresh } = useProgress();

  if (!lesson) return <div>Урок не знайдено.</div>;

  const isCompleted = progress.completedLessons.includes(lesson.id);

  return (
    <div>
  <header className="lessonHero">
    <h1 className="lessonTitle">{lesson.title}</h1>
    <p className="lessonSubtitle">{lesson.description}</p>
  </header>

  <section className="lessonContent">
    {lesson.content}
  </section>

  <div className="rowBetween lessonActions">
    <div className="row">
      <Link className="btn" to={`/lessons/${lesson.id}/quiz`}>
        Пройти квіз
      </Link>

      <Link className="btn" to="/lessons">
        Назад до уроків
      </Link>
    </div>

    <button
      className={`btn ${isCompleted ? "btn--danger" : "btn--success"}`}
      onClick={() => {
        if (isCompleted) unmarkLessonCompleted(lesson.id);
        else markLessonCompleted(lesson.id);
        refresh();
      }}
    >
      {isCompleted ? "Скасувати «Пройдено»" : "Позначити як «Пройдено»"}
    </button>
  </div>
</div>
  );
}
