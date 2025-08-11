import Socials from "./Socials";

export default function Hero() {
  return (
    <section 
    style= {{
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      flex: "1",
      top: "0",
      left: "0",
      height: "100dvh",
      width: "100%",
      background: "#f1c4c9",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <h1>Wallflower Safari</h1>
      <Socials className="socials"/>
    </section>
  );
}