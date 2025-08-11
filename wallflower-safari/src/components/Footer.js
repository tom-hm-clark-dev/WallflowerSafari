import Socials from "./Socials"

export default function Footer() {
  return (
    <footer style={{
      padding: "1rem",
      background: "#222", 
      color: "#fff", 
      display: "flex", 
      justifyContent: "space-between"}}>
      <p>&copy; {new Date().getFullYear()} Wallflower Safari. All rights reserved</p>
      <Socials/>
      <p>Website by TMC Web Design</p>
    </footer>
  );
}