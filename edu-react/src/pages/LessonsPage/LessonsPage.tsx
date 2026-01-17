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
      <h1 style={{ marginTop: 0 }}>GoLearn — каталог уроків</h1>

      {/* Фільтри */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Пошук за назвою, описом, тегами..."
          style={{
            padding: 10,
            minWidth: 280,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as LessonLevel | "all")}
          style={{ padding: 10, border: "1px solid #ddd", borderRadius: 10 }}
        >
          <option value="all">Усі рівні</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Каталог */}
      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((l) => {
          const isCompleted = progress.completedLessons.includes(l.id);
          const quizResult = progress.quizResults[l.id];

          return (
            <article
              key={l.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 12,
                background: isCompleted ? "#f8fafc" : "transparent",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ margin: "0 0 6px" }}>
                    <Link to={`/lessons/${l.id}`}>{l.title}</Link>
                  </h3>

                  <div style={{ opacity: 0.85 }}>{l.description}</div>

                  {/* Теги */}
                  <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={badgeStyle()}>{l.level}</span>
                    {l.tags.map((t) => (
                      <span key={t} style={badgeStyle()}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                  {isCompleted && (
                    <span style={statusStyle("#dcfce7", "#166534")}>✔ Пройдено</span>
                  )}

                  {quizResult && (
                    <span style={statusStyle("#e0f2fe", "#075985")}>
                      🎯 {quizResult.score}/{quizResult.total}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {filtered.length === 0 && <div>Нічого не знайдено.</div>}
      </div>
    </div>
  );
}

function badgeStyle(): React.CSSProperties {
  return {
    fontSize: 12,
    padding: "2px 8px",
    border: "1px solid #ddd",
    borderRadius: 999,
    whiteSpace: "nowrap",
  };
}

function statusStyle(bg: string, fg: string): React.CSSProperties {
  return {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 999,
    background: bg,
    color: fg,
    border: "1px solid #ddd",
    whiteSpace: "nowrap",
  };
}
