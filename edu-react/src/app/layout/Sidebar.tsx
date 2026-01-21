import { NavLink } from "react-router-dom";

type NavItem = {
  to: string;
  label: string;
  icon: React.ReactNode;
  end?: boolean;
};

export function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const items: NavItem[] = [
    { to: "/", label: "Головна", end: true, icon: <DotIcon /> },
    { to: "/lessons", label: "Уроки", icon: <DotIcon /> },
    { to: "/progress", label: "Прогрес", icon: <DotIcon /> },
  ];

  return (
    <aside className={`sb ${collapsed ? "sb--collapsed" : ""}`}>
      <div className="sb__top">
        <div className="sb__brand">
          <div className="sb__logo" aria-hidden>
            G
          </div>
          {!collapsed && <div className="sb__name">GoLearn</div>}
        </div>

        <button className="sb__toggle" onClick={onToggle} aria-label="Toggle sidebar">
          {collapsed ? "›" : "‹"}
        </button>
      </div>

      <nav className="sb__nav">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            className={({ isActive }) => `sb__item ${isActive ? "is-active" : ""}`}
          >
            <span className="sb__icon">{it.icon}</span>
            {!collapsed && <span className="sb__label">{it.label}</span>}
            {!collapsed && <span className="sb__chev" aria-hidden>›</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sb__bottom">
        {!collapsed && (
          <div className="sb__hint">
            <div className="sb__hintTitle">Порада</div>
            <div className="sb__hintText">Пройди урок → зроби квіз → перевір прогрес.</div>
          </div>
        )}

        <div className="sb__foot">© GoLearn</div>
      </div>
    </aside>
  );
}

function DotIcon() {
  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        display: "inline-block",
        background: "currentColor",
        opacity: 0.9,
      }}
    />
  );
}
