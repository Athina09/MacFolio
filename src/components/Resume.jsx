import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";

const Resume = () => {
  return (
    <div className="resume-window">
      <div className="window-header">
        <WindowControls target="resume" />
        <span className="window-title">Resume.pdf</span>
      </div>

      <div className="resume-content">
        <div className="pdf-toolbar">
          <button className="toolbar-btn">−</button>
          <span className="zoom-level">100%</span>
          <button className="toolbar-btn">+</button>
          <button className="toolbar-btn download">
            <a
              href="/files/ATHINA KARTHIKEYAN_Software Integration Engineer_20250813 (1) (2).pdf"
              download
            >
              ⬇ Download
            </a>
          </button>
        </div>

        <div className="pdf-viewer">
          <iframe
            src="/files/ATHINA KARTHIKEYAN_Software Integration Engineer_20250813 (1) (2).pdf"
            title="Resume PDF"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
