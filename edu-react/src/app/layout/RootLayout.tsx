import { NavLink, Outlet } from "react-router-dom";

const navLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  padding: "8px 10px",
  borderRadius: 8,
  textDecoration: "none",
  color: "#000",
  border: "1px solid #ddd",
  background: isActive ? "#f1f5f9" : "transparent",
  fontWeight: isActive ? 600 : 400,
});

export function RootLayout() {
  return (
    <div className="appShell">
      <aside className="sidebar">
        <div className="brand">GoLearn</div>

        <nav className="nav">
          <NavLink to="/" end style={navLinkStyle}>
            Головна
          </NavLink>
          
          <NavLink to="/lessons" end style={navLinkStyle}>
            Уроки
          </NavLink>

          <NavLink to="/progress" style={navLinkStyle}>
            Прогрес
          </NavLink>
        </nav>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
