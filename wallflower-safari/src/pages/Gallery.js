import Section from "../components/Section"
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  return (
    <Section>
      <h1>Gallery</h1>
      <div className="gallery-container">
        <Lightbox
        title = "Coopers Arms - 10/05/25"
        images= {[
          "/assets/gallery/_MG_5773.jpg",
          "/assets/gallery/_MG_5778.jpg",
          "/assets/gallery/_MG_5863-Enhanced-NR.jpg",
          "/assets/gallery/_MG_5869.jpg",
          "/assets/gallery/_MG_5875-Enhanced-NR-2.jpg",
          "/assets/gallery/_MG_5880.jpg",
          "/assets/gallery/_MG_5904.jpg",
          "/assets/gallery/_MG_5920-Enhanced-NR.jpg",
          "/assets/gallery/_MG_5939-Enhanced-NR-2.jpg",
          "/assets/gallery/_MG_5971-Enhanced-NR.jpg",
          "/assets/gallery/_MG_5973-Enhanced-NR-2.jpg",
          "/assets/gallery/_MG_5995-Enhanced-NR.jpg",
        ]}>
        </Lightbox>
      </div>
    </Section>
  );
}