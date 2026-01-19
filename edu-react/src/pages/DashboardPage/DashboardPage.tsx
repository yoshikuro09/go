import { Link } from "react-router-dom";
import { lessons } from "../../features/lessons/lessons.data";
import { useProgress } from "../../features/progress/useProgress";

export function DashboardPage() {
  const { progress } = useProgress();

  const nextLesson =
    lessons.find((l) => !progress.completedLessons.includes(l.id)) ?? null;

  return (
    <div>
      <h1 className="pageTitle">Головна</h1>

      <div className="stack">
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Ласкаво просимо до GoLearn 👋</h2>

          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            GoLearn — це інтерактивна навчальна платформа для вивчення основ веб-розробки,
            створена для студентів та початківців, які хочуть впевнено розпочати свій шлях
            у світі сучасних веб-технологій.
          </p>

          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            Платформа поєднує структуровані теоретичні матеріали, практикоорієнтовані уроки
            та інтерактивні квізи, що допомагають не лише засвоїти інформацію, а й перевірити
            рівень розуміння кожної теми.
          </p>

          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            Навчальний процес побудований таким чином, щоб користувач міг навчатися у
            власному темпі: повертатися до вже пройдених тем, повторювати матеріал та
            відстежувати особистий прогрес упродовж усього курсу.
          </p>

          <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
            Розпочніть навчання з каталогу уроків або продовжіть з того місця, де ви
            зупинилися, і зробіть перший крок до опанування веб-розробки разом із GoLearn.
          </p>
        </section>

        {nextLesson ? (
          <Link
            to={`/lessons/${nextLesson.id}`}
            className="card cardLink"
            aria-label={`Продовжити навчання: ${nextLesson.title}`}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>
              Продовжити навчання
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 700 }}>{nextLesson.title}</div>
              <div style={{ opacity: 0.8 }}>{nextLesson.description}</div>
            </div>

            <div style={{ marginTop: 10, opacity: 0.7, fontSize: 14 }}>
              Натисніть, щоб відкрити урок →
            </div>
          </Link>
        ) : (
          <section className="card">
            <div style={{ fontWeight: 800, marginBottom: 8 }}>
              Продовжити навчання
            </div>
            <div style={{ opacity: 0.8 }}>
              Вітаємо! Ви пройшли всі уроки 🎉
            </div>
          </section>
        )}

        <section className="card">
          <div style={{ fontWeight: 800, marginBottom: 10 }}>
            Можливості платформи
          </div>

          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureIcon">📘</div>
              <div className="featureTitle">Інтерактивні уроки</div>
              <div className="featureText">
                Структуровані матеріали для вивчення основ веб-розробки.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon">🧠</div>
              <div className="featureTitle">Квізи для перевірки знань</div>
              <div className="featureText">
                Закріплення матеріалу за допомогою тестових завдань.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon">📊</div>
              <div className="featureTitle">Система відстеження прогресу</div>
              <div className="featureText">
                Перегляд пройдених уроків і результатів квізів.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon">🚀</div>
              <div className="featureTitle">Навчання у власному темпі</div>
              <div className="featureText">
                Можливість навчатися у зручний для користувача час.
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div style={{ fontWeight: 800, marginBottom: 10 }}>
            Як проходить навчання
          </div>

          <div className="stack" style={{ gap: 10 }}>
            <div>1️⃣ Оберіть урок у каталозі</div>
            <div>2️⃣ Вивчіть теоретичний матеріал</div>
            <div>3️⃣ Пройдіть квіз для перевірки знань</div>
            <div>4️⃣ Відстежуйте результати у вкладці «Прогрес»</div>
          </div>
        </section>
      </div>
    </div>
  );
}
