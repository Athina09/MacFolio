import WindowWrapper from "../hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";
import { skills } from "../constants";

const techStack = [
  { category: "Frontend", technologies: "React.js, HTML, CSS, JavaScript, Three.js" },
  { category: "Styling", technologies: "GSAP, CSS, Tailwind CSS" },
  { category: "UI/UX", technologies: "Figma" },
  { category: "Dev Tools", technologies: "Git, GitHub" },
];

const Terminal = () => {
  return (
    <div className="terminal-window">
      <div className="window-header">
        <WindowControls target="terminal" />
        <span className="window-title">Tech Stack</span>
      </div>

      <div className="terminal-content">
        <div className="terminal-prompt">
          <span className="prompt-user">@athina</span>
          <span className="prompt-symbol">%</span>
          <span className="prompt-command">show tech stack</span>
        </div>

        <table className="tech-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {techStack.map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="check">✓</span> {item.category}
                </td>
                <td>{item.technologies}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="terminal-status">
          <p className="success">✓ 4 of 4 stacks loaded successfully (100%)</p>
          <p className="render-time">■ Render time: 6ms</p>
        </div>
      </div>
    </div>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
