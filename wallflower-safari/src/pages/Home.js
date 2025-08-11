import Button from "../components/Button";

export default function Home() {
  return (
    <section style= {{ background: "#40e3c8ff", height: "100dvh", padding: "2rem", textAlign: "center" }}>
      <h1 style={{color: "#222"}}>Wallflower Safari</h1>
      <p>Aberystwyth based post punk. Welcome to our official site</p>
      <img 
      src="https://placehold.co/800x300" 
      alt="Placeholder image"
      style={{ marginTop: "1rem", borderRadius: "8px"}}>
      </img>
      <Button/>
    </section>
  );
}