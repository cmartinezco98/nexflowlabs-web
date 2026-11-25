import Link from "next/link";
import type { CSSProperties } from "react";
import { OrderTicket } from "@/components/home/order-ticket";
import { Reveal } from "@/components/home/reveal";
import {
  alfredFeatures,
  alfredHref,
  audiences,
  contactEmail,
  contactHref,
  faqs,
  location,
  navigation,
  services,
  supportEmail,
  whatsappHref,
  whatsappNumber,
} from "@/data/home";

const delay = (index: number) => ({ "--i": index }) as CSSProperties;

function Icon({ path, size = 36 }: { path: string; size?: number }) {
  return (
    <svg className="tile__icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function Header() {
  return (
    <header className="topbar">
      <Link className="wordmark" href="/" aria-label="NexFlow Labs, inicio">
        NexFlow Labs
      </Link>
      <nav className="nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="button button--small" href={contactHref}>
          Cuéntenos su proyecto
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__kicker">Desarrollo web, aplicaciones y soporte técnico</p>
      <h1 className="hero__title" id="hero-title">
        <span className="mask">
          <span>Construimos su software</span>
        </span>
      </h1>
      <p className="hero__lead">
        Sitios web, aplicaciones y soporte para pymes, empresas medianas y startups. Le ayudamos a vender más y a
        trabajar con menos trámites.
      </p>
      <div className="hero__actions">
        <a className="button" href={contactHref}>
          Cuéntenos su proyecto
        </a>
        <a className="button button--ghost" href={whatsappHref}>
          Escribir por WhatsApp
        </a>
      </div>

      <div className="picker">
        <h2 className="picker__title">¿Qué necesita?</h2>
        <div className="picker__grid picker__grid--3">
          {services.map((item, index) => (
            <a className="tile" href={`#servicio-${item.slug}`} key={item.slug} style={delay(index)}>
              <Icon path={item.icon} />
              <span className="tile__name">{item.name}</span>
              <span className="tile__detail">{item.detail}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="band-section services" id="servicios" aria-labelledby="services-title">
      <div className="container">
        <h2 className="section-title" id="services-title" data-reveal>
          Lo que hacemos
        </h2>
        <ol className="services__list">
          {services.map((item, index) => (
            <li className="service" id={`servicio-${item.slug}`} key={item.slug} data-reveal style={delay(index + 1)}>
              <h3 className="service__name">{item.name}</h3>
              <p className="service__text">{item.text}</p>
              <ul className="service__examples">
                {item.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="audiences" data-reveal>
          <span className="audiences__label">Para</span>
          {audiences.join(" · ")}
        </p>
      </div>
    </section>
  );
}

function Alfred() {
  return (
    <section className="container alfred" id="alfred" aria-labelledby="alfred-title">
      <div className="alfred__intro">
        <p className="alfred__kicker" data-reveal>
          Proyecto destacado
        </p>
        <h2 className="section-title" id="alfred-title" data-reveal style={delay(1)}>
          Alfred
        </h2>
        <p className="alfred__lead" data-reveal style={delay(2)}>
          La carta QR para restaurantes, cafés y bares. El cliente escanea el código de su mesa, pide desde el celular
          sin descargar nada y el pedido llega a cocina con el número de mesa.
        </p>
        <a className="button" href={alfredHref} data-reveal style={delay(3)}>
          Conocer Alfred
        </a>
      </div>
      <div data-reveal style={delay(2)}>
        <OrderTicket />
      </div>
      <ul className="alfred__features">
        {alfredFeatures.map(([name, text], index) => (
          <li key={name} data-reveal style={delay(index)}>
            <span className="alfred__feature-name">{name}</span>
            <span className="alfred__feature-text">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Faq() {
  return (
    <section className="band-section faq" id="preguntas" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <h2 className="faq__title" id="faq-title" data-reveal>
          Preguntas frecuentes
        </h2>
        <div className="faq__text" data-reveal style={delay(1)}>
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
    <section className="container closing" id="contacto" aria-labelledby="closing-title">
      <h2 className="closing__title" id="closing-title" data-reveal>
        Hablemos de su proyecto
      </h2>
      <p className="closing__statement" data-reveal style={delay(1)}>
        Cuéntenos qué necesita y le respondemos con una propuesta.
      </p>
      <div className="hero__actions" data-reveal style={delay(2)}>
        <a className="button" href={contactHref}>
          Escribir un correo
        </a>
        <a className="button button--ghost" href={whatsappHref}>
          WhatsApp {whatsappNumber}
        </a>
      </div>
      <p className="closing__notes" data-reveal style={delay(3)}>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> · Clientes: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
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
      <main>
        <Header />
        <Hero />
        <Services />
        <Alfred />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <Reveal />
    </div>
  );
}
