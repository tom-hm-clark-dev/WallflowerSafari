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

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

   const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <>
    <div className="title">
      <p>{title}</p>
    </div>
    <div className="gallery">
      {images.map((src, index) => (
        <div className="thumbnail-container" key={index}>
            <img
            className= "thumbnail"
            key= {index}
            src= {src}
            alt= {`Gallery: "${src}"`}
            onClick={() => setSelectedIndex(index)}>
          </img>     
          <div className="fullscreen-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>   
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
          <div 
            className="next-icon" 
            onClick={
              (e) => 
              { 
                e.stopPropagation(); nextImage(e);
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <div 
            className="prev-icon" 
            onClick={
              (e) => 
              { 
                e.stopPropagation(); prevImage(e);
              }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="close-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      )
      }
    </div>
    </>
  );
}