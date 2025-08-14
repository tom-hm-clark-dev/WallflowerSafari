import Socials from "./Socials";
import "./Footer.css"

export default function Footer() {
  return (
    <footer style={{
      padding: "1rem",
      background: "#222", 
      color: "#fff", 
      }}
      >
        <div className="grid-container">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Wallflower Safari. All rights reserved</p>
      </div>
      <div className="socials-header">
        <h2>Follow Wallflower Safari</h2>
      </div>
      <div className="socials">
        <Socials/>
      </div>
      <div className="disclaimer">
        <p>Website by TMC Web Design</p>
      </div>
      </div>
    </footer>
  );
}