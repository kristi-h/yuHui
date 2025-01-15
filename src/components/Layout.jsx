import Header from "./Header";
import { Outlet } from "react-router-dom";
import Fireflies from "./fireflies/Fireflies";

export default function Layout() {
  return (
    <div className="layout-container min-h screen">
      <Header />
      <main>
        <Fireflies />
        <Outlet />
      </main>
    </div>
  );
}
