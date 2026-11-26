"use client";

import { useEffect } from "react";

// Con mouse, el punto de luz de cada texto .spotlight sigue el cursor; en el hero también se mueve el haz. No pinta nada propio.
export function Spotlight() {
  useEffect(() => {
    if (!matchMedia("(hover: hover)").matches) return;
    const cleanups = [...document.querySelectorAll<HTMLElement>(".spotlight")].map((text) => {
      const area = text.closest<HTMLElement>("section, header") ?? text;
      const isHero = area.id === "inicio";

      const move = (event: PointerEvent) => {
        const box = text.getBoundingClientRect();
        text.style.setProperty("--mx", `${event.clientX - box.left}px`);
        text.style.setProperty("--my", `${event.clientY - box.top}px`);
        if (isHero) area.style.setProperty("--bx", `${(event.clientX - innerWidth / 2) * 0.4}px`);
      };
      const leave = () => {
        text.style.removeProperty("--mx");
        text.style.removeProperty("--my");
        area.style.removeProperty("--bx");
      };

      area.addEventListener("pointermove", move);
      area.addEventListener("pointerleave", leave);
      return () => {
        area.removeEventListener("pointermove", move);
        area.removeEventListener("pointerleave", leave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
