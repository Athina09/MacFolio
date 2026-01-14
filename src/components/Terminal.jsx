import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <p>Window Controls</p>
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

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default Terminal;
