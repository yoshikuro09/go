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
      <h1 style={{ marginTop: 0 }}>Прогрес</h1>

      <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12, marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{percent}%</div>
        <div style={{ opacity: 0.8 }}>
          Пройдено уроків: {completed} з {total}
        </div>

        <div style={{ marginTop: 10, height: 10, background: "#eee", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ width: `${percent}%`, height: "100%", background: "#333" }} />
        </div>
      </div>

      <h2 style={{ margin: "0 0 10px" }}>Пройдені уроки</h2>

      {completedLessons.length === 0 ? (
        <div>
          Поки що немає пройдених уроків. Перейдіть до <Link to="/">каталогу</Link>.
        </div>
      ) : (
        <ul>
          {completedLessons.map((l) => (
            <li key={l.id}>
              <Link to={`/lessons/${l.id}`}>{l.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
