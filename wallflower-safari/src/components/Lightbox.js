import React, {useState, useEffect} from "react";
import "../pages/Gallery.css";

export default function Lightbox( {images = [], title} ) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedIndex(null);
    } else if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => {
        if (prev === null) return null;
        return (prev + 1) % images.length;
      });
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) => {
        if (prev === null) return null;
        return (prev - 1 + images.length) % images.length;
      });
    }
  };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, 
    [images.length]
  );

  return (
    <>
    <div className="title">
      <p>{title}</p>
    </div>
    <div className="gallery">
      {images.map((src, index) => (
        <img
        className= "thumbnail"
        key= {index}
        src= {src}
        alt= ""
        onClick={() => setSelectedIndex(index)}>
        </img>
      ))
      }
      {
      selectedIndex !== null && (
        <div 
        className="lightbox" 
        onClick={() => setSelectedIndex(null)}
        >
          <img 
            src = {images[selectedIndex]} 
            alt = "" 
            className = "lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        
      )
      }
    </div>
    </>
  );
}