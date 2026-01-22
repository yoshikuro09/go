import { Link } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import { useProgress } from "../../features/progress/useProgress";

export function ProgressPage() {
  const { progress } = useProgress();

  const total = lessons.length;
  const completed = progress.completedLessons.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const completedLessons = lessons.filter((l) =>
    progress.completedLessons.includes(l.id)
  );

  return (
    <div>
      <div className="pageHeader">
        <h1 className="pageHeader__title">Прогрес</h1>
        <div className="pageHeader__subtitle">
          Ваші результати та пройдені уроки
        </div>
      </div>

      <div className="card progressCard">
        <div className="progressPercent">{percent}%</div>

        <div className="progressText">
          Пройдено уроків: {completed} з {total}
        </div>

        <div className="progressBar">
          <div
            className="progressBar__fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <h2 className="progressSubtitle">Пройдені уроки</h2>

      {completedLessons.length === 0 ? (
        <div>
          Поки що немає пройдених уроків. Перейдіть до{" "}
          <Link to="/lessons">каталогу</Link>.
        </div>
      ) : (
        <div className="stack">
          {completedLessons.map((l) => {
            const qr = progress.quizResults[l.id];

            return (
              <Link
                key={l.id}
                to={`/lessons/${l.id}`}
                className="card cardLink rowBetween progressLesson"
              >
                <div className="progressLessonTitle">{l.title}</div>

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
