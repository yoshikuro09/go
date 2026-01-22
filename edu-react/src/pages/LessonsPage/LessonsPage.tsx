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
      <div className="pageHeader">
        <h1 className="pageHeader__title">GoLearn — каталог уроків</h1>
        <div className="pageHeader__subtitle">
          Оберіть урок та почніть навчання
        </div>
      </div>

      {/* Фільтри */}
      <div className="row lessonsFilters">
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
                <div className="lessonCardMain">
                  <h3 className="lessonCardTitle">{l.title}</h3>

                  <div className="lessonCardDesc">{l.description}</div>

                  {/* Теги */}
                  <div className="row lessonCardTags">
                    <span className="badge">{l.level}</span>

                    {l.tags.map((t) => (
                      <span key={t} className="badge">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stack lessonCardMeta">
                  {isCompleted && (
                    <span className="badge--status badge--success">
                      ✔ Пройдено
                    </span>
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
