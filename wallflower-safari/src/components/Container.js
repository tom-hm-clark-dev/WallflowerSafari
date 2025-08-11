export default function Container ({children}) {
  return (
    <div 
      style={{ 
        Width: "100%", 
        height: "auto", 
        display:"flex", 
        flexDirection:"row",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        gap: "0.5rem"
      }}
    >
    {
      children
    }
    </div>
  );
}