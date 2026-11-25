"use client";

import { useState } from "react";
import { Device, KitchenScreen, MenuScreen, OrderScreen, PayScreen } from "@/components/home/device";
import { alfredStory } from "@/data/home";

const screens = [<MenuScreen key="menu" note="Importada" />, <OrderScreen key="order" />, <KitchenScreen key="kitchen" />, <PayScreen key="pay" />];

// Selector de vidrio: cada paso del pedido cambia la pantalla del celular.
export function OrderTour() {
  const [active, setActive] = useState(0);
  const step = alfredStory[active];

  return (
    <div className="tour">
      <div className="tour__copy reveal">
        <h2 className="section-title" id="tour-title">
          Recorra un pedido
        </h2>
        <p className="section__sub">Toque cada paso y vea lo que ve su cliente.</p>
        <div className="segmented glass" role="tablist" aria-label="Pasos del pedido">
          <span className="segmented__thumb" style={{ transform: `translateX(${active * 100}%)` }} aria-hidden="true" />
          {alfredStory.map((item, index) => (
            <button
              key={item.tab}
              id={`paso-${index}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls="paso-panel"
              className="segmented__option"
              onClick={() => setActive(index)}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="tour__step" id="paso-panel" role="tabpanel" aria-labelledby={`paso-${active}`} key={step.tab}>
          <h3 className="tour__title">{step.title}</h3>
          <p>{step.text}</p>
        </div>
      </div>
      <div className="tour__device reveal">
        <span className="glow" aria-hidden="true" />
        <Device label={`Pantalla de ejemplo de Alfred: ${step.tab}`} dark={active === 2}>
          <div className="tour__screen" key={step.tab}>
            {screens[active]}
          </div>
        </Device>
      </div>
    </div>
  );
}
