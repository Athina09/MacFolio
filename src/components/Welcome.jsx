import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{
      fontVariationSettings: `'wght' ${baseWeight}`
    }}>{char === " " ? '\u00A0' : char}</span>
  ))
}

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      fontVariationSettings: `'wght' ${weight}`,
      duration,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="text-2xl font-georama opacity-80">
        {renderText("Hey, I'm Athina! Welcome to my", "letter-subtitle", 200)}
      </p>
      <h1 ref={titleRef} className="text-8xl font-georama font-bold italic mt-2">
        {renderText("portfolio", "letter-title", 400)}
      </h1>
      <p className="text-lg mt-6 font-roboto opacity-60">
        Click on the dock icons to explore my work
      </p>
      <div className="small-screen">
        <p>⚠️ For the best experience, please view on a larger screen</p>
      </div>
    </section>
  )
}

export default Welcome
