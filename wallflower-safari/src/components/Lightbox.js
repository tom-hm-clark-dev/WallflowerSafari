import React, {useState, useEffect} from "react";
import Gallery from "../pages/Gallery.css";

export default function Lightbox( {images = [], title} ) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, 
  []
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
        onClick={() => setSelectedImage(src)}>
        </img>
      ))
      }
      {
      selectedImage && (
        <div 
        className="lightbox" 
        onClick={() => setSelectedImage(null)}
        >
          <img 
            src = {selectedImage} 
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