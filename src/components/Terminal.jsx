import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "./WindowControls.jsx";

const Terminal = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@adrian %</span>
          show tech stack
        </p>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
