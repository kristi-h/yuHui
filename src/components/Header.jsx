import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../contexts/DarkModeContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="header">
      <Link className="header-title" to="/">
        YuHui
      </Link>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <BedtimeIcon /> : <LightModeIcon />}
      </button>
    </header>
  );
}
