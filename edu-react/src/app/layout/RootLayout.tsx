import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="appShell"
      style={{
        display: "grid",
        gridTemplateColumns: collapsed ? "84px 1fr" : "260px 1fr",
        minHeight: "100vh",
      }}
    >
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

      <main className="main" style={{ padding: 18 }}>
        <Outlet />
      </main>
    </div>
  );
}
