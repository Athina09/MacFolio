import { useState, useEffect } from "react";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";

const galleryImages = [
  { src: "/images/library-students.JPG", alt: "Students in library studying together" },
  { src: "/images/speaker-podium.jpeg", alt: "Speaking at conference podium" },
  { src: "/images/hackathon-event.jpg", alt: "Hackathon event with participants working on laptops" },
];

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="photos-window">
        <div className="window-header">
          <WindowControls target="photos" />
          <span className="window-title">Gallery</span>
        </div>

        <div className="photos-content">
          <div className="photos-sidebar">
            <h4>Library</h4>
            <ul>
              <li className="active">All Photos</li>
              <li>Favorites</li>
              <li>Recent</li>
            </ul>
            <h4>Albums</h4>
            <ul>
              <li>Projects</li>
              <li>Events</li>
              <li>Screenshots</li>
            </ul>
          </div>

          <div className="photos-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="photo-item"
                onClick={() => handleImageClick(image)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="photo-modal-overlay" onClick={handleCloseModal}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="photo-modal-close"
              onClick={handleCloseModal}
              aria-label="Close image"
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="photo-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
