import { useRef } from "react";
import { dockApps } from "../constants";
import { useGSAP } from "@gsap/react";
import { useWindowStore } from "../store";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const dockRef = useRef(null);
  const { windows, openWindow, closeWindow, restoreWindow } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconCenter = rect.left + rect.width / 2;
        const distance = Math.abs(mouseX - iconCenter);

        const intensity = Math.exp(-(distance ** 2) / 15000);
        const scale = 1 + 0.3 * intensity;
        const translateY = -18 * intensity;

        // Direct DOM manipulation - fastest possible
        icon.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      });
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        icon.style.transform = 'scale(1) translateY(0)';
      });
    };

    const handleMouseMove = (e) => {
      animateIcons(e.clientX);
    };

    const handleMouseLeave = () => {
      resetIcons();
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];

    if (window.isMinimized) {
      // Restore minimized window
      restoreWindow(app.id);
    } else if (window.isOpen) {
      // Close open window
      closeWindow(app.id);
    } else {
      // Open closed window
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img src={icon} alt={name} />
            </button>
          </div>
        ))}
      </div>
      <Tooltip
        id="dock-tooltip"
        place="top"
        className="dock-tooltip"
      />
    </section>
  );
};

export default Dock;
