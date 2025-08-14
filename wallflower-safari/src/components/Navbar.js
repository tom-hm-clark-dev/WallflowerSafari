import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
        padding: "1rem", 
        background: "#222",
        position: "sticky",
        top: "0",
        left: "0",
        height:  "60px",
        width: "100%",
        }}>

      <ul style={{
        display: "flex",
        gap: "4rem",
        listStyle: "none",
        justifyContent: "flex-end",
        margin: "0",
        padding: "0rem 1rem"
      }}>
        <li><Link style= {{ color: "#fff" }} to="/">Home</Link></li>
        <li><Link style= {{ color: "#fff" }} to="/music">Music</Link></li>
        <li><Link style= {{ color: "#fff" }} to="/about">About</Link></li>
        <li><Link style= {{ color: "#fff" }} to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}