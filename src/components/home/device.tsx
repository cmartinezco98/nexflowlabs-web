import type { ReactNode } from "react";
import { sampleDishes } from "@/data/home";

const cop = (value: number) => `$${value.toLocaleString("es-CO")}`;
export const sampleTotal = sampleDishes.reduce((sum, dish) => sum + dish.qty * dish.price, 0);

// Celular dibujado en CSS (marco, botones, isla y reflejo), sin marca de fabricante.
export function Device({ label, dark = false, children }: { label: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className="device" role="img" aria-label={label}>
      <span className="device__button device__button--1" />
      <span className="device__button device__button--2" />
      <span className="device__button device__button--3" />
      <span className="device__button device__button--4" />
      <div className={dark ? "device__screen device__screen--dark" : "device__screen"}>
        <span className="device__island" />
        {children}
        <span className="device__home" />
        <span className="device__glare" />
      </div>
    </div>
  );
}

// Pantallas de Alfred. Platos y precios son de ejemplo.
export function MenuScreen({ note }: { note: string }) {
  return (
    <div className="app">
      <div className="app__head">
        <span className="app__title">Carta</span>
        <span className="app__meta">{note}</span>
      </div>
      {sampleDishes.map((dish) => (
        <div className="app__dish" key={dish.name}>
          <span>
            <b>{dish.name}</b>
            <span className="app__meta">{cop(dish.price)}</span>
          </span>
          <span className="app__add">+</span>
        </div>
      ))}
      <span className="app__meta app__foot">Carta de ejemplo</span>
    </div>
  );
}

export function OrderScreen() {
  return (
    <>
      <div className="app">
        <div className="app__head">
          <span className="app__title">Su pedido</span>
          <span className="app__meta">Mesa 4</span>
        </div>
        {sampleDishes.map((dish) => (
          <div className="app__row" key={dish.name}>
            <span>
              {dish.qty} × {dish.name.split(" ")[0]}
            </span>
            <span>{cop(dish.qty * dish.price)}</span>
          </div>
        ))}
        <div className="app__row app__row--total">
          <span>Total</span>
          <span>{cop(sampleTotal)}</span>
        </div>
      </div>
      <div className="app__sheet glass glass--light">
        <span>Mesa 4</span>
        <span>Enviar a cocina</span>
      </div>
    </>
  );
}

export function KitchenScreen() {
  return (
    <div className="app">
      <div className="app__head">
        <span className="app__title">Cocina</span>
        <span className="app__live">En vivo</span>
      </div>
      <div className="ticket">
        <span className="tag">Nuevo</span>
        <b className="app__title">Mesa 4</b>
        {sampleDishes.map((dish) => (
          <span key={dish.name}>
            {dish.qty} × {dish.name.split(" ")[0]}
          </span>
        ))}
      </div>
      <div className="ticket ticket--dim">
        <b className="app__title">Mesa 7</b>
        <span>3 × Limonada</span>
      </div>
      <div className="ticket ticket--dimmer">
        <b className="app__title">Barra</b>
        <span>2 × Café</span>
      </div>
    </div>
  );
}

export function PayScreen() {
  return (
    <>
      <div className="app app--center">
        <div className="app__head">
          <span className="app__title">Pagar</span>
          <span className="app__meta">Mesa 4</span>
        </div>
        <svg className="qr" width="170" height="170" viewBox="0 0 29 29" aria-hidden="true">
          <rect width="29" height="29" fill="#fff" />
          <g fill="#0e141c">
            <path d="M1 1h7v7H1zM21 1h7v7h-7zM1 21h7v7H1z" />
            <path fill="#fff" d="M2 2h5v5H2zM22 2h5v5h-5zM2 22h5v5H2z" />
            <path d="M3 3h3v3H3zM23 3h3v3h-3zM3 23h3v3H3zM10 2h2v2h-2zM14 1h1v3h-1zM10 6h3v1h-3zM16 5h2v2h-2zM9 9h2v2H9zM13 9h4v1h-4zM19 9h2v3h-2zM24 10h3v1h-3zM2 10h4v1H2zM10 13h1v4h-1zM13 12h2v2h-2zM16 14h3v1h-3zM22 13h2v2h-2zM25 14h2v4h-2zM3 14h2v2H3zM6 16h2v1H6zM12 17h4v1h-4zM18 18h3v2h-3zM10 20h2v3h-2zM14 21h1v2h-1zM16 22h4v1h-4zM22 21h2v2h-2zM25 21h2v1h-2zM12 25h3v2h-3zM17 25h2v2h-2zM21 24h1v3h-1zM24 25h3v2h-3z" />
          </g>
        </svg>
        <b className="app__amount">{cop(sampleTotal)}</b>
        <span className="app__meta">Escanee con Bre-B o Nequi</span>
      </div>
      <div className="app__sheet glass glass--light">
        <span>Pagado</span>
        <span>Gracias</span>
      </div>
    </>
  );
}

export { cop };
