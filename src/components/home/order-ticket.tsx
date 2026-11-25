"use client";

import { useState } from "react";

// Pedido de ejemplo: muestra el recorrido mesa → cocina de Alfred. Datos ficticios.
const items = [
  { qty: 2, name: "Hamburguesa de la casa", price: 28000 },
  { qty: 1, name: "Papas rústicas", price: 12000 },
  { qty: 2, name: "Limonada de coco", price: 9000 },
];

const steps = [
  { label: "Pedido desde la mesa", action: "Enviar a cocina" },
  { label: "En la pantalla de cocina", action: "Marcar como listo" },
  { label: "Listo para servir", action: "Nuevo pedido" },
];

const cop = (value: number) => `$${value.toLocaleString("es-CO")}`;
const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

export function OrderTicket() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <div className="ticket">
      <article className="ticket__sheet" data-ui aria-label="Pedido de ejemplo">
        <header className="ticket__head">
          <p className="ticket__table">Mesa 4</p>
          <p className="ticket__code">Pedido 0127</p>
        </header>
        <ul className="ticket__items">
          {items.map((item) => (
            <li key={item.name}>
              <span>
                {item.qty} × {item.name}
              </span>
              <span>{cop(item.qty * item.price)}</span>
            </li>
          ))}
        </ul>
        <p className="ticket__total">
          <span>Total</span>
          <span>{cop(total)}</span>
        </p>
        <p className="ticket__sample">Pedido de ejemplo.</p>
      </article>

      <ol className="ticket__steps" aria-label="Recorrido del pedido">
        {steps.map((item, index) => (
          <li key={item.label} className={index <= step ? "is-done" : undefined} aria-current={index === step ? "step" : undefined}>
            {item.label}
          </li>
        ))}
      </ol>

      <p className="ticket__status" role="status">
        <span key={step}>{current.label}</span>
      </p>
      <button type="button" className="ticket__next" onClick={() => setStep((step + 1) % steps.length)}>
        {current.action}
      </button>
    </div>
  );
}
