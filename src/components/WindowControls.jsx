import { useWindowStore } from "../store";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow } = useWindowStore();

  const handleClose = () => closeWindow(target);
  const handleMinimize = () => minimizeWindow(target);

  return (
    <div className="window-controls">
      <button
        className="control close"
        onClick={handleClose}
        aria-label="Close window"
        type="button"
      />
      <button
        className="control minimize"
        onClick={handleMinimize}
        aria-label="Minimize window"
        type="button"
      />
      <button
        className="control maximize"
        aria-label="Maximize window"
        type="button"
      />
    </div>
  );
};

export default WindowControls;
