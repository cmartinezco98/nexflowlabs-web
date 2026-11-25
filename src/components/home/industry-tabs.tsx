"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { industries } from "@/data/home";

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const [marker, setMarker] = useState<CSSProperties>({ opacity: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const industry = industries[active];

  // El fondo claro se desliza hasta la pestaña activa; se recalcula si cambia el ancho (columna o rejilla en móvil).
  useLayoutEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const place = () => {
      const tab = tabs.querySelector<HTMLElement>(`#tab-${active}`);
      if (!tab) return;
      setMarker({
        width: tab.offsetWidth,
        height: tab.offsetHeight,
        transform: `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`,
      });
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(tabs);
    return () => observer.disconnect();
  }, [active]);

  // Las tarjetas del hero enlazan a #industria-<slug>; abre esa pestaña.
  useEffect(() => {
    const sync = () => {
      const index = industries.findIndex((item) => `#industria-${item.slug}` === window.location.hash);
      if (index >= 0) setActive(index);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <div className="agenda">
      {industries.map((item) => (
        <span className="agenda__anchor" id={`industria-${item.slug}`} key={item.slug} />
      ))}
      <div className={`agenda__tabs${"transform" in marker ? " has-marker" : ""}`} role="tablist" aria-label="Industria" ref={tabsRef}>
        <span className="agenda__marker" aria-hidden="true" style={marker} />
        {industries.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={index === active}
            aria-controls="industry-panel"
            tabIndex={index === active ? 0 : -1}
            className="agenda__tab"
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
              if (!step) return;
              event.preventDefault();
              const next = (active + step + industries.length) % industries.length;
              setActive(next);
              document.getElementById(`tab-${next}`)?.focus();
            }}
          >
            <span className="agenda__tab-name">{item.name}</span>
            <span className="agenda__tab-detail">{item.detail}</span>
          </button>
        ))}
      </div>

      <ul className="agenda__bands" id="industry-panel" role="tabpanel" aria-labelledby={`tab-${active}`} key={industry.name}>
        {industry.docs.map((doc, index) => (
          <li className="band" key={doc.title} style={{ "--i": index } as CSSProperties}>
            <span className="band__format">{doc.format}</span>
            <span className="band__what">
              <span className="band__title">{doc.title}</span>
              <span className="band__note">{doc.note}</span>
            </span>
            <span className="band__to">{doc.to}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
