"use client";

import { useState } from "react";
import { services } from "@/data/home";

export function ServiceAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="accordion">
      {services.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={`acc reveal${isOpen ? " is-open" : ""}`} key={item.slug} id={`servicio-${item.slug}`}>
            <h3 className="acc__heading">
              <button
                type="button"
                className="acc__button"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.slug}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <svg className="acc__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={item.icon} />
                </svg>
                <span className="acc__label">
                  <span className="acc__name">{item.name}</span>
                  <span className="acc__detail">{item.detail}</span>
                </span>
                <span className="acc__toggle" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            {isOpen && (
              <div className="acc__panel" id={`panel-${item.slug}`}>
                <p>{item.text}</p>
                <ul className="acc__examples">
                  {item.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
