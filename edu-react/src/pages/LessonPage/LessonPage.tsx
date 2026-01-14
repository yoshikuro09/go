import { Link, useParams } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";

export function LessonPage() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) return <div>Урок не найден.</div>;

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>{lesson.title}</h1>
      <p style={{ opacity: 0.8 }}>{lesson.description}</p>

      <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
        {lesson.content}
      </section>

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <Link to={`/lessons/${lesson.id}/quiz`} style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}>
          Пройти квиз
        </Link>
        <Link to="/" style={{ padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 }}>
          Назад к урокам
        </Link>
      </div>
    </div>
  );
}
