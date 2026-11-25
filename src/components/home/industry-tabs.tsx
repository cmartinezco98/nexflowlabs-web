"use client";

import { useState } from "react";
import { industries } from "@/data/home";

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <div className="agenda">
      <div className="agenda__tabs" role="tablist" aria-label="Industria">
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
        {industry.docs.map((doc) => (
          <li className="band" key={doc.title}>
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
