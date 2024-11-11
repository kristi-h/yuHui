import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="header-title" to="/">
        YuHui
      </Link>
    </header>
  );
}
