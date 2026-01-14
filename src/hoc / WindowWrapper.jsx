import { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.js";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      if (isOpen && ref.current) {
        gsap.fromTo(
          ref.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }, [isOpen]);

    useGSAP(() => {
      if (ref.current) {
        Draggable.create(ref.current, {
          trigger: `#${windowKey} .window-header`,
          bounds: "body",
          onDragStart: () => focusWindow(windowKey),
        });
      }
    }, []);

    useLayoutEffect(() => {
      if (isOpen && ref.current) {
        ref.current.style.zIndex = zIndex;
      }
    }, [isOpen, zIndex]);

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onClick={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
