"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { deviceServices } from "@/data/home";

type Kind = (typeof deviceServices)[number]["device"];

// Tamaño de diseño de la escena; solo se reduce (nunca se agranda) para que las pantallas se vean nítidas.
const BOX = { wide: { width: 1000, height: 620 }, compact: { width: 560, height: 440 } };
const STEP_MS = 4500;

// Pantallas de ejemplo, una por servicio. Nombres y datos son ficticios.
const screens: ReactNode[] = [
  <div className="scr" key="soporte">
    <p className="scr__title">Soporte · Solicitudes</p>
    {[
      ["Impresora sin conexión", "Resuelto", "ok"],
      ["Correo no sincroniza", "En revisión", "wait"],
      ["Equipo lento en caja", "Programado", "plan"],
      ["Red wifi de bodega", "Resuelto", "ok"],
    ].map(([task, state, tone]) => (
      <p className="scr__row" key={task}>
        <span>{task}</span>
        <span className={`scr__tag scr__tag--${tone}`}>{state}</span>
      </p>
    ))}
  </div>,
  <div className="scr scr--site" key="sitio">
    <p className="scr__nav">
      <b>Panadería La Esquina</b>
      <span>Carta · Pedidos · Contacto</span>
    </p>
    <p className="scr__hero">Pan del día, horneado esta mañana</p>
    <span className="scr__cta">Hacer pedido</span>
    <span className="scr__photo" />
  </div>,
  <div className="scr scr--landing" key="landing">
    <span className="scr__photo" />
    <p className="scr__hero">Clases de yoga al aire libre</p>
    <p>Primera clase sin costo</p>
    <span className="scr__cta">Reservar cupo</span>
  </div>,
  <div className="scr" key="webapp">
    <p className="scr__title">Inventario</p>
    {["Harina de trigo", "Azúcar morena", "Mantequilla", "Levadura"].map((item, index) => (
      <p className="scr__row" key={item}>
        <span>{item}</span>
        <span className="scr__meter">
          <span style={{ width: `${[78, 42, 18, 64][index]}%` }} />
        </span>
      </p>
    ))}
  </div>,
  <div className="scr scr--app" key="movil">
    <p className="scr__title">Mis citas</p>
    {["Martes · Corte", "Jueves · Barba", "Sábado · Color"].map((item) => (
      <p className="scr__card" key={item}>
        {item}
      </p>
    ))}
    <p className="scr__tabs">
      <span className="is-on" />
      <span />
      <span />
    </p>
  </div>,
  <div className="scr scr--admin" key="panel">
    <p className="scr__side">
      <span className="is-on">Pedidos</span>
      <span>Clientes</span>
      <span>Productos</span>
      <span>Usuarios</span>
    </p>
    <div className="scr__main">
      <p className="scr__title">Pedidos de la semana</p>
      <p className="scr__bars">
        {[40, 62, 55, 80, 70, 92, 48].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </p>
      <p className="scr__row">
        <span>Pedido de ejemplo</span>
        <span className="scr__tag scr__tag--ok">Entregado</span>
      </p>
    </div>
  </div>,
  <div className="scr" key="mantenimiento">
    <p className="scr__title">Mantenimiento</p>
    {[
      ["Copia de seguridad", "ok"],
      ["Actualizaciones", "ok"],
      ["Certificado del sitio", "ok"],
      ["Revisión de velocidad", "wait"],
    ].map(([task, tone]) => (
      <p className="scr__row" key={task}>
        <span>{task}</span>
        <span className={`scr__check scr__check--${tone}`} />
      </p>
    ))}
  </div>,
];

// Cada equipo muestra la pantalla del último servicio suyo que ya pasó (o el primero).
function screenFor(kind: Kind, active: number) {
  const own = deviceServices.flatMap((service, index) => (service.device === kind ? [index] : []));
  const shown = [...own].reverse().find((index) => index <= active) ?? own[0];
  return (
    <div className="scr__swap" key={shown}>
      {screens[shown]}
    </div>
  );
}

export function DeviceShowcase() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const focus = deviceServices[active].device;

  // Escala la escena al espacio disponible; en pantallas angostas se muestra un equipo a la vez.
  useEffect(() => {
    const box = stage.current;
    if (!box) return;
    const fit = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const size = width < 700 ? BOX.compact : BOX.wide;
      box.style.setProperty("--fit", Math.min(1, width / size.width, height / size.height).toFixed(3));
    });
    fit.observe(box);
    return () => fit.disconnect();
  }, []);

  // Avanza solo mientras la sección está a la vista; se detiene si el visitante elige un servicio.
  useEffect(() => {
    const root = section.current;
    if (!root || !auto || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const seen = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting) {
        timer = window.setInterval(() => setActive((index) => (index + 1) % deviceServices.length), STEP_MS);
      }
    }, { threshold: 0.4 });
    seen.observe(root);
    return () => {
      seen.disconnect();
      window.clearInterval(timer);
    };
  }, [auto]);

  // En celular la lista es una fila deslizable: centra el servicio activo sin mover la página.
  useEffect(() => {
    const row = list.current;
    const chip = row?.children[active] as HTMLElement | undefined;
    if (!row || !chip || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: chip.offsetLeft - (row.clientWidth - chip.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const choose = (index: number) => {
    setAuto(false);
    setActive(index);
  };

  const device = (kind: Kind, label: string, children: ReactNode) => (
    <div className={`dev dev--${kind}${focus === kind ? " is-focus" : ""}`} role="img" aria-label={label}>
      {children}
      <span className="dev__contact" />
    </div>
  );

  return (
    <section className="devices" id="dispositivos" ref={section} aria-label="Servicios">
      <div className="devices__copy">
        <span className="eyebrow">Servicios</span>
        <ol className="devices__list" ref={list}>
          {deviceServices.map((service, index) => (
            <li key={service.name} className={index === active ? "is-on" : undefined}>
              <button type="button" aria-pressed={index === active} onClick={() => choose(index)}>
                {service.name}
                {index === active && auto && <span className="devices__timer" key={active} aria-hidden="true" />}
              </button>
              <p>{service.text}</p>
            </li>
          ))}
        </ol>
        <p className="devices__caption">{deviceServices[active].text}</p>
      </div>

      <div className="devices__stage" ref={stage}>
        <span className="glow" aria-hidden="true" />
        <div className="devices__enter">
          <div className="devices__rig" data-focus={focus}>
            {device(
              "desktop",
              "Computador de escritorio con una pantalla de ejemplo",
              <>
                <div className="dev__monitor">
                  <div className="dev__panel">{screenFor("desktop", active)}</div>
                  <span className="dev__glare" />
                </div>
                <span className="dev__neck" />
                <span className="dev__foot" />
              </>,
            )}
            {device(
              "laptop",
              "Portátil con una pantalla de ejemplo",
              <>
                <div className="dev__lid">
                  <span className="dev__cam" />
                  <div className="dev__panel">{screenFor("laptop", active)}</div>
                  <span className="dev__glare" />
                </div>
                <span className="dev__hinge" />
                <span className="dev__base" />
              </>,
            )}
            {device(
              "tablet",
              "Tableta con una pantalla de ejemplo",
              <div className="dev__slate">
                <span className="dev__key dev__key--top" />
                <span className="dev__lens" />
                <div className="dev__panel">{screenFor("tablet", active)}</div>
                <span className="dev__glare" />
              </div>,
            )}
            {device(
              "phone",
              "Celular con una pantalla de ejemplo",
              <div className="dev__slate dev__slate--phone">
                <span className="dev__key dev__key--side" />
                <span className="dev__key dev__key--vol" />
                <span className="dev__island" />
                <div className="dev__panel">{screenFor("phone", active)}</div>
                <span className="dev__glare" />
              </div>,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
