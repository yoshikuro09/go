import { Link, useParams } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import {markLessonCompleted, unmarkLessonCompleted,} from "../../features/progress/progress.storage";
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
      <h1 style={{ marginTop: 0 }}>{lesson.title}</h1>
      <p style={{ opacity: 0.8 }}>{lesson.description}</p>

      <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
        {lesson.content}
      </section>

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <button
          onClick={() => {
            if (isCompleted) unmarkLessonCompleted(lesson.id);
            else markLessonCompleted(lesson.id);
            refresh();
          }}
          style={{
            padding: "10px 12px",
            border: "1px solid #ddd",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          {isCompleted ? "Скасувати «Пройдено»" : "Позначити як «Пройдено»"}
        </button>

        <Link
          to={`/lessons/${lesson.id}/quiz`}
          style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}
        >
          Пройти квіз
        </Link>

        <Link
          to="/"
          style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}
        >
          Назад до уроків
        </Link>
      </div>
    </div>
  );
}
