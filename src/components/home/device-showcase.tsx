"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { deviceServices } from "@/data/home";

type Kind = (typeof deviceServices)[number]["device"];

const BOX = { width: 1000, height: 620 }; // tamaño de diseño de la escena; se escala al espacio disponible

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
  const [active, setActive] = useState(0);
  const focus = deviceServices[active].device;

  useEffect(() => {
    const root = section.current;
    const box = stage.current;
    if (!root || !box) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = root.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const enter = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
      root.style.setProperty("--enter", enter.toFixed(3));
      setActive(Math.min(deviceServices.length - 1, Math.floor(progress * deviceServices.length)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const fit = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      box.style.setProperty("--fit", (Math.min(1, width / BOX.width, height / BOX.height) * 0.92).toFixed(3));
    });

    fit.observe(box);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      fit.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (index: number) => {
    const root = section.current;
    if (!root) return;
    const travel = root.offsetHeight - window.innerHeight;
    window.scrollTo({ top: root.offsetTop + ((index + 0.5) / deviceServices.length) * travel, behavior: "smooth" });
  };

  const device = (kind: Kind, label: string, children: ReactNode) => (
    <div className={`dev dev--${kind}${focus === kind ? " is-focus" : ""}`} role="img" aria-label={label}>
      {children}
    </div>
  );

  return (
    <section className="devices" id="dispositivos" ref={section} aria-labelledby="devices-title">
      <div className="devices__pin">
        <div className="devices__copy">
          <span className="eyebrow">Servicios</span>
          <h2 className="section-title" id="devices-title">
            Cada servicio, en su pantalla
          </h2>
          <ol className="devices__list">
            {deviceServices.map((service, index) => (
              <li key={service.name} className={index === active ? "is-on" : undefined}>
                <button type="button" aria-current={index === active ? "step" : undefined} onClick={() => goTo(index)}>
                  {service.name}
                </button>
                <p>{service.text}</p>
              </li>
            ))}
          </ol>
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
                  <span className="dev__base" />
                </>,
              )}
              {device(
                "tablet",
                "Tableta con una pantalla de ejemplo",
                <div className="dev__slate">
                  <div className="dev__panel">{screenFor("tablet", active)}</div>
                  <span className="dev__glare" />
                </div>,
              )}
              {device(
                "phone",
                "Celular con una pantalla de ejemplo",
                <div className="dev__slate dev__slate--phone">
                  <span className="dev__island" />
                  <div className="dev__panel">{screenFor("phone", active)}</div>
                  <span className="dev__glare" />
                </div>,
              )}
            </div>
          </div>
          <p className="devices__note">Pantallas de ejemplo</p>
        </div>
      </div>
    </section>
  );
}
