import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  const handleKeyDown = (handler) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler();
    }
  };

  const handleClose = () => closeWindow(target);
  const handleMinimize = () => {
    // TODO: implement minimize functionality
  };
  const handleMaximize = () => {
    // TODO: implement maximize functionality
  };

  return (
    <div className="window-controls">
      <button
        className="close"
        onClick={handleClose}
        onKeyDown={handleKeyDown(handleClose)}
        aria-label="Close window"
        type="button"
      />
      <button
        className="minimize"
        onClick={handleMinimize}
        onKeyDown={handleKeyDown(handleMinimize)}
        aria-label="Minimize window"
        type="button"
      />
      <button
        className="maximize"
        onClick={handleMaximize}
        onKeyDown={handleKeyDown(handleMaximize)}
        aria-label="Maximize window"
        type="button"
      />
    </div>
  );
};

export default WindowControls;
