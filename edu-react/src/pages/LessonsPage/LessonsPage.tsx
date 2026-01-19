import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import type { LessonLevel } from "../../features/lessons/lessons.types";
import { useProgress } from "../../features/progress/useProgress";

export function LessonsPage() {
  const { progress } = useProgress();

  const [q, setQ] = useState("");
  const [level, setLevel] = useState<LessonLevel | "all">("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return lessons.filter((l) => {
      const byLevel = level === "all" || l.level === level;

      const byQuery =
        query.length === 0 ||
        l.title.toLowerCase().includes(query) ||
        l.description.toLowerCase().includes(query) ||
        l.tags.some((t) => t.toLowerCase().includes(query));

      return byLevel && byQuery;
    });
  }, [q, level]);

  return (
    <div>
      <h1 className="pageTitle">GoLearn — каталог уроків</h1>

      {/* Фільтри */}
      <div className="row" style={{ marginBottom: 16 }}>
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Пошук за назвою, описом, тегами..."
        />

        <select
          className="select"
          value={level}
          onChange={(e) => setLevel(e.target.value as LessonLevel | "all")}
        >
          <option value="all">Усі рівні</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Каталог */}
      <div className="stack">
        {filtered.map((l) => {
          const isCompleted = progress.completedLessons.includes(l.id);
          const quizResult = progress.quizResults[l.id];

          return (
            <Link
              key={l.id}
              to={`/lessons/${l.id}`}
              className={`card cardLink ${isCompleted ? "card--completed" : ""}`}
            >
              <div className="rowBetween">
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ margin: "0 0 6px" }}>{l.title}</h3>

                  <div style={{ opacity: 0.85 }}>{l.description}</div>

                  {/* Теги */}
                  <div className="row" style={{ marginTop: 10, gap: 6 }}>
                    <span className="badge">{l.level}</span>

                    {l.tags.map((t) => (
                      <span key={t} className="badge">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stack" style={{ justifyItems: "end" }}>
                  {isCompleted && (
                    <span className="badge--status badge--success">✔ Пройдено</span>
                  )}

                  {quizResult && (
                    <span className="badge--status badge--info">
                      🎯 {quizResult.score}/{quizResult.total}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}

        {filtered.length === 0 && <div>Нічого не знайдено.</div>}
      </div>
    </div>
  );
}
