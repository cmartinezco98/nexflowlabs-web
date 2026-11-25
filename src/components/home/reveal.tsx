"use client";

import { useEffect } from "react";

// Marca [data-reveal] al entrar en pantalla. Sin JS, el contenido queda visible (el CSS solo oculta bajo .has-reveal).
export function Reveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    document.documentElement.classList.add("has-reveal");
    return () => observer.disconnect();
  }, []);

  return null;
}
