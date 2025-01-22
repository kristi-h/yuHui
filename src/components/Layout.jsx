import { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Fireflies from "./fireflies/Fireflies";
import Lanterns from "../components/lanterns/Lanterns";
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function Layout() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="layout-container min-h screen">
      <Header />
      <main>
        {isDarkMode ? <Fireflies /> : <Lanterns />}
        <Outlet />
      </main>
    </div>
  );
}
