import { useRef } from "react";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import { projects } from "../constants";
import { useWindowStore } from "../store";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const finderRef = useRef(null);

  const handleOpenGallery = () => {
    const finderElement = document.getElementById("finder");
    if (finderElement) {
      const rect = finderElement.getBoundingClientRect();
      const photosHeight = 400; // Approximate height of photos window
      const offset = 20; // Gap between windows
      
      // Calculate position above Finder window
      const topPosition = Math.max(20, rect.top - photosHeight - offset);
      
      openWindow("photos", {
        animationType: "upward",
        position: {
          left: rect.left,
          top: topPosition,
        },
      });
    } else {
      // Fallback: open without specific position
      openWindow("photos");
    }
  };

  return (
    <div className="finder-window" ref={finderRef}>
      <div className="window-header">
        <WindowControls target="finder" />
        <span className="window-title">Projects</span>
      </div>

      <div className="finder-content">
        <div className="finder-sidebar">
          <div className="sidebar-section">
            <h4>Favorites</h4>
            <ul>
              <li className="active">
                <img src="/images/folder.png" alt="folder" />
                Projects
              </li>
              <li onClick={handleOpenGallery} className="clickable">
                <img src="/images/photos.png" alt="gallery" />
                Gallery
              </li>
              <li>
                <img src="/images/folder.png" alt="folder" />
                Documents
              </li>
              <li>
                <img src="/images/folder.png" alt="folder" />
                Downloads
              </li>
            </ul>
          </div>
        </div>

        <div className="finder-main">
          <div className="finder-toolbar">
            <div className="view-options">
              <button className="view-btn active">⊞</button>
              <button className="view-btn">☰</button>
            </div>
            <span className="item-count">{projects.length} items</span>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-icon"
                />
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tech">{project.tech}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        📂 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
