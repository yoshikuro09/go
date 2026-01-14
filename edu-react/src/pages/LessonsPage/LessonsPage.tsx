import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import type { LessonLevel } from "../../features/lessons/lessons.types";

export function LessonsPage() {
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
      <h1 style={{ marginTop: 0 }}>Каталог уроков</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск по названию, описанию, тегам..."
          style={{ padding: 10, minWidth: 280, border: "1px solid #ddd", borderRadius: 10 }}
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as LessonLevel | "all")}
          style={{ padding: 10, border: "1px solid #ddd", borderRadius: 10 }}
        >
          <option value="all">Все уровни</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {filtered.map((l) => (
          <article key={l.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
            <h3 style={{ margin: "0 0 6px" }}>
              <Link to={`/lessons/${l.id}`}>{l.title}</Link>
            </h3>

            <div style={{ opacity: 0.85 }}>{l.description}</div>

            <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "2px 8px", border: "1px solid #ddd", borderRadius: 999 }}>
                {l.level}
              </span>
              {l.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontSize: 12, padding: "2px 8px", border: "1px solid #ddd", borderRadius: 999 }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </article>
        ))}

        {filtered.length === 0 && <div>Ничего не найдено.</div>}
      </div>
    </div>
  );
}
