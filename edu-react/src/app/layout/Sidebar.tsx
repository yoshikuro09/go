import { NavLink } from "react-router-dom";

type NavItem = {
  to: string;
  label: string;
  iconSrc: string;
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
    { to: "/", label: "Головна", end: true, iconSrc: "/icons/home.png" },
    { to: "/lessons", label: "Уроки", iconSrc: "/icons/lessons.png" },
    { to: "/progress", label: "Прогрес", iconSrc: "/icons/progress.png" },
  ];

  return (
    <aside className={`sb ${collapsed ? "sb--collapsed" : ""}`}>
      <div className="sb__top">
        <div className="sb__brand">
          <div className="sb__logo" aria-hidden>
            <img
              className="sb__logoImg"
              src="/logo.png"
              alt=""
              draggable={false}
            />
          </div>

          {!collapsed && <div className="sb__name">GoLearn</div>}
        </div>

        <button
          className="sb__toggle"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Розгорнути" : "Згорнути"}
        >
          {collapsed ? "›" : "‹"}
        </button>
      </div>

      <nav className="sb__nav">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            title={collapsed ? it.label : undefined}
            className={({ isActive }) => `sb__item ${isActive ? "is-active" : ""}`}
          >
            <span className="sb__icon" aria-hidden>
              <img
                className="sb__iconImg"
                src={it.iconSrc}
                alt=""
                draggable={false}
              />
            </span>

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
