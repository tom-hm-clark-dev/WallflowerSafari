export default function Section({children}) {
  return (
  <section style= 
  {{
    display: "flex", 
    flexDirection: "column",
    background: "#222", 
    minHeight: "100dvh", 
    padding: "2rem", 
    textAlign: "center",
    gap: "1rem" 
    }} 
    > 
    {
      children
    }
  </section>
);
}