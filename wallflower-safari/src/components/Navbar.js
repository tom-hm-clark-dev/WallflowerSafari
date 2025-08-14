import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">

          <div className="logo">
            <h1>Wallflower Safari</h1>
          </div>

          <div onClick={() => setIsOpen(!isOpen)}
            className="hamburger"
            > 
            <span/>
            <span/>
            <span/>
          </div>

      <ul
      className={isOpen ? "menu open" : "menu"}
      >
        <li><Link onClick={handleLinkClick} style= {{ color: "#fff" }} to="/">Home</Link></li>
        <li><Link onClick={handleLinkClick} style= {{ color: "#fff" }} to="/music">Music</Link></li>
        <li><Link onClick={handleLinkClick} style= {{ color: "#fff" }} to="/about">About</Link></li>
        <li><Link onClick={handleLinkClick} style= {{ color: "#fff" }} to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}