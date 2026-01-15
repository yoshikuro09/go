import { Link, NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <aside style={{ borderRight: "1px solid #ddd", padding: 16 }}>
        <div style={{ fontWeight: 800, marginBottom: 12 }}>
        <Link to="/" style={{ fontWeight: 800, fontSize: 18 }}>
          GoLearn
        </Link>
        </div>

        <nav style={{ display: "grid", gap: 8 }}>
          <NavLink to="/" end>Уроки</NavLink>
          <NavLink to="/progress">Прогресс</NavLink>
        </nav>
      </aside>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
