export default function Pill({href, children}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href= { href }
      target= { href ? "_blank" : undefined }
      rel= { href ? "noopener noreferrer" : undefined }
      className="pill"
      >
    <div 
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "160px",
        padding: "0.5rem 1rem",
        background: "rgba(0, 0, 0, 0.7)",
        borderRadius: "4px",
        gap: "0.5rem"
    }}
    >    

    {
      children
    }
        </div>
        </Tag>

  );
}