import { Link } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import { useProgress } from "../../features/progress/useProgress";

export function ProgressPage() {
  const { progress } = useProgress();

  const total = lessons.length;
  const completed = progress.completedLessons.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const completedLessons = lessons.filter((l) => progress.completedLessons.includes(l.id));

  return (
    <div>
      <h1 className="pageTitle">Прогрес</h1>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{percent}%</div>

        <div style={{ opacity: 0.8 }}>
          Пройдено уроків: {completed} з {total}
        </div>

        <div
          style={{
            marginTop: 10,
            height: 10,
            background: "var(--surface-2)",
            borderRadius: 999,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: "var(--text)",
            }}
          />
        </div>
      </div>

      <h2 style={{ margin: "0 0 10px" }}>Пройдені уроки</h2>

      {completedLessons.length === 0 ? (
        <div>
          Поки що немає пройдених уроків. Перейдіть до <Link to="/lessons">каталогу</Link>.
        </div>
      ) : (
        <div className="stack">
          {completedLessons.map((l) => {
            const qr = progress.quizResults[l.id];

            return (
              <Link
                key={l.id}
                to={`/lessons/${l.id}`}
                className="card cardLink rowBetween"
                style={{ alignItems: "center" }}
              >
                <div style={{ minWidth: 0 }}>{l.title}</div>

                {qr && (
                  <span className="badge--status badge--info">
                    🎯 {qr.score}/{qr.total}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
