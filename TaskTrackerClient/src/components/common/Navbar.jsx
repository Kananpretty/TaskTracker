import React from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-3 px-6 py-4 border-b shadow-sm sticky top-0">
      <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
      <h1 className="text-xl font-semibold text-gray-800 grow">Task Tracker</h1>
      <img src={menu} alt="menu" style={{ height: "40px", width: "auto" }} />
    </nav>
  );
};

export default Navbar;
