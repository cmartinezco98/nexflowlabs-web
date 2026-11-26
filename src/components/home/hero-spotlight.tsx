"use client";

import { useEffect } from "react";

// Con mouse, el reflector del hero sigue el cursor sobre el título. No pinta nada propio.
export function HeroSpotlight() {
  useEffect(() => {
    const hero = document.getElementById("inicio");
    const title = hero?.querySelector<HTMLElement>(".hero__title");
    if (!hero || !title || !matchMedia("(hover: hover)").matches) return;

    const move = (event: PointerEvent) => {
      const box = title.getBoundingClientRect();
      title.style.setProperty("--mx", `${event.clientX - box.left}px`);
      title.style.setProperty("--my", `${event.clientY - box.top}px`);
      hero.style.setProperty("--bx", `${(event.clientX - innerWidth / 2) * 0.4}px`);
    };
    const leave = () => {
      title.style.removeProperty("--mx");
      title.style.removeProperty("--my");
      hero.style.removeProperty("--bx");
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, []);

  return null;
}
