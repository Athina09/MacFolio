import { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "../store";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const windowState = windows[windowKey];
    const isOpen = windowState?.isOpen ?? false;
    const isMinimized = windowState?.isMinimized ?? false;
    const zIndex = windowState?.zIndex ?? 10;
    const animationType = windowState?.animationType;
    const position = windowState?.position;
    const ref = useRef(null);
    const focusWindowRef = useRef(focusWindow);
    focusWindowRef.current = focusWindow;

    useGSAP(() => {
      if (isOpen && !isMinimized && ref.current) {
        if (animationType === "upward" && position) {
          // Set initial state
          gsap.set(ref.current, {
            left: `${position.left}px`,
            top: `${position.top + 100}px`,
            scale: 0.8,
            opacity: 0,
          });
          
          // Animate from bottom to top
          gsap.to(ref.current, {
            top: position.top,
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else if (animationType === "upward") {
          // Fallback: animate from bottom to top without specific position
          gsap.fromTo(
            ref.current,
            { 
              scale: 0.8, 
              opacity: 0, 
              y: 100 
            },
            { 
              scale: 1, 
              opacity: 1, 
              y: 0,
              duration: 0.4, 
              ease: "power2.out"
            }
          );
        } else {
          // Default animation
          gsap.fromTo(
            ref.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        }
      } else if (isMinimized && ref.current) {
        gsap.to(ref.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }, [isOpen, isMinimized, animationType, position]);

    useGSAP(() => {
      if (!ref.current) return;

      const draggables = Draggable.create(ref.current, {
        trigger: `#${windowKey} .window-header`,
        bounds: "body",
        onDragStart: () => focusWindowRef.current(windowKey),
      });

      return () => {
        draggables.forEach((d) => d.kill());
      };
    }, []);

    useLayoutEffect(() => {
      if (isOpen && ref.current) {
        ref.current.style.zIndex = zIndex;
        if (position && animationType === "upward") {
          // Use fixed positioning for dynamic placement
          ref.current.style.position = "fixed";
          ref.current.style.left = `${position.left}px`;
          ref.current.style.top = `${position.top}px`;
        } else {
          // Use default CSS positioning (absolute with CSS classes)
          ref.current.style.position = "absolute";
          // Don't override left/top if not set dynamically
          if (!position) {
            ref.current.style.left = "";
            ref.current.style.top = "";
          }
        }
      }
    }, [isOpen, zIndex, position, animationType]);

    if (!isOpen || isMinimized) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="window absolute"
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
