import { BriefWizard } from "@/components/home/brief-wizard";
import { Device, KitchenScreen, cop, sampleTotal } from "@/components/home/device";
import { DeviceShowcase } from "@/components/home/device-showcase";
import { OrderTour } from "@/components/home/order-tour";
import {
  alfredHref,
  audiences,
  contactEmail,
  faqs,
  location,
  navigation,
  sampleDishes,
  services,
  supportEmail,
  ticker,
  whatsappHref,
  whatsappNumber,
  workSteps,
} from "@/data/home";

function Nav() {
  return (
    <nav className="topnav glass" aria-label="Navegación principal">
      <a className="wordmark" href="#inicio" aria-label="NexFlow Labs, inicio">
        NexFlow Labs
      </a>
      <div className="topnav__links">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <a className="button button--small" href="#solicitud">
        Cuéntenos<span className="topnav__more">&nbsp;su proyecto</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="inicio">
      <p className="hero__kicker">Desarrollo web · Aplicaciones · Soporte técnico</p>
      <h1 className="hero__title">
        Construimos
        <br />
        su software
      </h1>
      <p className="hero__lead">
        Sitios, aplicaciones y soporte para pymes, empresas medianas y startups. Como Alfred, la carta QR que hicimos para
        restaurantes.
      </p>
      <div className="actions hero__actions">
        <a className="button" href="#solicitud">
          Cuéntenos su proyecto
        </a>
        <a className="button button--glass glass" href="#alfred">
          Ver Alfred
        </a>
      </div>

      <div className="stage">
        <span className="glow" aria-hidden="true" />
        <span className="glow glow--warm" aria-hidden="true" />
        <div className="stage__rise">
          <div className="stage__tilt">
            <Device label="Celular mostrando la carta de Alfred">
              <div className="app">
                <div className="app__head">
                  <span className="app__title">Carta</span>
                  <span className="app__meta">Mesa 4</span>
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
              </div>
              <div className="app__sheet glass glass--light">
                <span>Mesa 4</span>
                <span>Pedir · {cop(sampleTotal)}</span>
              </div>
            </Device>
          </div>
        </div>
        <div className="widget glass widget--1" aria-hidden="true">
          <small>Alfred · ahora</small>
          <span className="widget__row">
            <span className="widget__dot" />
            <b>Mesa 4</b>
          </span>
          <span>Pedido enviado a cocina</span>
        </div>
        <div className="widget glass widget--2" aria-hidden="true">
          <small>Cocina</small>
          <b>3 en curso</b>
          <span>Mesa 4 · Mesa 7 · Barra</span>
        </div>
        <div className="widget glass widget--3" aria-hidden="true">
          <small>Cobro con QR</small>
          <b>{cop(sampleTotal)}</b>
          <span>Bre-B o Nequi</span>
        </div>
      </div>
    </header>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker">
      <p className="sr-only">Servicios: {ticker.join(", ")}.</p>
      <div className="ticker__track" aria-hidden="true">
        {items.map((label, index) => (
          <span key={`${label}-${index}`} className="ticker__group">
            <span className={index % 2 ? "ticker__item ticker__item--outline" : "ticker__item"}>{label}</span>
            <span className="ticker__sep" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <section className="highlights container" aria-label="Lo que hacemos">
      <p>
        Hacemos <span className="hl">sitios web que traen clientes</span>,{" "}
        <span className="hl">aplicaciones que ordenan su operación</span> y damos{" "}
        <span className="hl">soporte cuando algo falla</span>. Todo hecho a la medida de su negocio, desde {location}.
      </p>
    </section>
  );
}

function AlfredSpin() {
  return (
    <section className="spin" id="alfred" aria-labelledby="spin-title">
      <div className="spin__pin">
        <div className="spin__copy">
          <span className="eyebrow">Proyecto destacado</span>
          <h2 className="section-title" id="spin-title">
            Alfred, de frente
          </h2>
          <p className="section__sub">La carta QR para restaurantes, cafés y bares, en el celular de sus clientes.</p>
          <a className="button" href={alfredHref}>
            Conocer Alfred
          </a>
        </div>
        <div className="spin__device">
          <Device label="Celular mostrando la pantalla de cocina de Alfred" dark>
            <KitchenScreen />
          </Device>
        </div>
        <div className="spin__chips" aria-hidden="true">
          <span className="chip glass chip--1">Sin descargar nada</span>
          <span className="chip glass chip--2">Pedidos en vivo a cocina</span>
          <span className="chip glass chip--3">Cobro con Bre-B o Nequi</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section container services" id="servicios" aria-labelledby="services-title">
      <div className="section__head reveal">
        <h2 className="section-title" id="services-title">
          Lo que hacemos
        </h2>
        <p className="section__sub">
          Para {audiences.slice(0, -1).join(", ").toLowerCase()} y {audiences[audiences.length - 1].toLowerCase()}.
        </p>
      </div>
      <div className="services__grid">
        <span className="services__backdrop" aria-hidden="true">
          NexFlow
        </span>
        {services.map((item) => (
          <article className="service glass reveal" id={`servicio-${item.slug}`} key={item.slug}>
            <svg className="service__icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={item.icon} />
            </svg>
            <h3 className="service__name">{item.name}</h3>
            <p>{item.text}</p>
            <ul className="service__examples">
              {item.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="band" id="como-trabajamos" aria-labelledby="process-title">
      <div className="section container process">
        <div className="section__head reveal">
          <h2 className="section-title" id="process-title">
            Cómo trabajamos
          </h2>
          <p className="section__sub">Tres pasos, con usted al tanto en cada uno.</p>
        </div>
        <div className="process__track" aria-hidden="true">
          <span className="process__line" />
        </div>
        <ol className="process__steps">
          {workSteps.map((step) => (
            <li className="process__step reveal" key={step.name}>
              <span className="process__when">{step.when}</span>
              <h3 className="process__name">{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Brief() {
  return (
    <section className="section container brief" id="solicitud" aria-labelledby="brief-title">
      <div className="brief__intro reveal">
        <h2 className="section-title" id="brief-title">
          Arme su solicitud
        </h2>
        <p className="section__sub">
          Tres preguntas y queda listo el mensaje. Lo envía usted por WhatsApp o por correo; aquí no guardamos nada.
        </p>
        <p className="note">
          También puede escribirnos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a> o al {whatsappNumber}.
        </p>
      </div>
      <BriefWizard />
    </section>
  );
}

function Faq() {
  return (
    <section className="band" id="preguntas" aria-labelledby="faq-title">
      <div className="section container faq">
        <h2 className="faq__title reveal" id="faq-title">
          Preguntas frecuentes
        </h2>
        <div className="faq__text reveal">
          {faqs.map(([question, answer]) => (
            <p key={question}>
              <strong>{question}</strong> {answer}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing container" id="contacto" aria-labelledby="closing-title">
      <span className="glow" aria-hidden="true" />
      <div className="closing__card glass reveal">
        <h2 className="closing__title" id="closing-title">
          Hablemos de su proyecto
        </h2>
        <p className="section__sub">Cuéntenos qué necesita y le respondemos con una propuesta.</p>
        <div className="actions">
          <a className="button" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <a className="button button--glass glass" href={whatsappHref}>
            WhatsApp {whatsappNumber}
          </a>
        </div>
        <p className="note">
          ¿Ya es cliente? <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__cols">
          <p>
            <strong>NexFlow Labs S.A.S.</strong> · {location}, Colombia
          </p>
          <p className="footer__links">
            <a href={alfredHref}>Alfred</a>
            <a href={whatsappHref}>WhatsApp</a>
            <a href={`mailto:${contactEmail}`}>Correo</a>
          </p>
        </div>
        <svg className="footer__wordmark" viewBox="0 0 1000 150" role="img" aria-label="NexFlow Labs">
          <text x="0" y="122" textLength="1000" lengthAdjust="spacingAndGlyphs">
            NEXFLOW LABS
          </text>
        </svg>
        <p className="footer__legal">
          © 2026 NexFlow Labs S.A.S. Todos los derechos reservados. Logotipo en{" "}
          <a href="https://www.behance.net/gallery/33808280/Elianto-Free-Font">Elianto</a>, de Emanuele Papale. Tipografía{" "}
          <a href="https://www.behance.net/gallery/26132489/Nidus-Sans-Font-Download">Nidus Sans</a>, de NiDBiLD (
          <a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>).
        </p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="home">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Highlights />
        <AlfredSpin />
        <section className="section container" id="recorrido" aria-labelledby="tour-title">
          <OrderTour />
        </section>
        <DeviceShowcase />
        <Services />
        <Process />
        <Brief />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <a className="whatsapp-float glass" href={whatsappHref} aria-label="Escribir a NexFlow Labs por WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21l1.7-4.6A8.5 8.5 0 1 1 8 19.6z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2z" />
        </svg>
      </a>
    </div>
  );
}
