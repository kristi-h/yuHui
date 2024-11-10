import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout-container min-h screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
