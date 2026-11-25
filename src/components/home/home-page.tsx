import Link from "next/link";
import type { CSSProperties } from "react";
import { DocumentCheck } from "@/components/home/document-check";
import { IndustryTabs } from "@/components/home/industry-tabs";
import { Reveal } from "@/components/home/reveal";
import { contactEmail, contactHref, faqs, industries, integrations, morePages, navigation, stages } from "@/data/home";

const delay = (index: number) => ({ "--i": index }) as CSSProperties;

function Header() {
  return (
    <header className="topbar">
      <Link className="wordmark" href="/" aria-label="NexFlow Labs, inicio">
        NexFlow Labs
      </Link>
      <nav className="nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a className="button button--small" href={contactHref}>
          Agendar un diagnóstico
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__kicker">Automatización de documentos contables</p>
      <h1 className="hero__title" id="hero-title">
        <span className="mask">
          <span>Deje de digitar</span>
        </span>
      </h1>
      <p className="hero__lead">
        Cada mes alguien copia facturas al ERP y busca por qué no cuadra. Nosotros las leemos, las validamos con la
        DIAN y las cargamos.
      </p>
      <a className="button" href={contactHref}>
        Agendar un diagnóstico
      </a>

      <div className="picker">
        <h2 className="picker__title">¿Qué documentos digita su equipo?</h2>
        <div className="picker__grid">
          {industries.map((item, index) => (
            <a className="tile" href={`#industria-${item.slug}`} key={item.slug} style={delay(index)}>
              <svg className="tile__icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={item.icon} />
              </svg>
              <span className="tile__name">{item.name}</span>
              <span className="tile__detail">{item.detail}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section className="band-section showcase" id="demo" aria-labelledby="showcase-title">
      <div className="container">
        <div className="showcase__head">
          <h2 className="section-title" id="showcase-title" data-reveal>
            Pruebe la validación
          </h2>
          <div className="zero" data-reveal style={delay(1)}>
            <p className="zero__figure">$0</p>
            <p className="zero__text">de descuadre: si un documento no cuadra al peso, no entra a su ERP.</p>
          </div>
        </div>
        <div data-reveal style={delay(2)}>
          <DocumentCheck />
        </div>
      </div>
    </section>
  );
}

function Stages() {
  return (
    <section className="container stages" id="como-funciona" aria-labelledby="stages-title">
      <h2 className="section-title" id="stages-title" data-reveal>
        Del correo al ERP
      </h2>
      <span className="stages__line" aria-hidden="true" data-reveal />
      <ol className="stages__bar">
        {stages.map((stage, index) => (
          <li key={stage.name} className={`stage stage--${stage.tone}`} style={delay(index * 4 + 2)} data-reveal>
            <span className="stage__name">{stage.name}</span>
            <span className="stage__text">{stage.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Industries() {
  return (
    <section className="band-section industries" id="industrias" aria-labelledby="industries-title">
      <div className="container">
        <h2 className="section-title" id="industries-title" data-reveal>
          Qué leemos en cada industria
        </h2>
        <div data-reveal style={delay(1)}>
          <IndustryTabs />
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="container erp" aria-labelledby="erp-title">
      <h2 className="erp__title" id="erp-title" data-reveal>
        Se conecta con su ERP
      </h2>
      <p className="erp__list" data-reveal style={delay(1)}>
        {integrations.join(" · ")} <span className="soft">· o Excel y CSV si no usa ERP</span>
      </p>
    </section>
  );
}

function Faq() {
  return (
    <section className="band-section faq" aria-labelledby="faq-title">
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
        Hablemos de sus documentos
      </h2>
      <p className="closing__statement" data-reveal style={delay(1)}>
        Cuéntenos qué digita su equipo y le mostramos cómo llegaría a su ERP, ya validado.
      </p>
      <a className="button" href={contactHref} data-reveal style={delay(2)}>
        Agendar un diagnóstico
      </a>
      <p className="closing__notes" data-reveal style={delay(3)}>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> · <Link href="/cotizador">Estimar el costo en el cotizador</Link>
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
            <strong>NexFlow Labs S.A.S.</strong> · NIT 901.784.329-1 · Cundinamarca, Colombia
          </p>
          <p className="footer__links">
            {morePages.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
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
        <Demo />
        <Stages />
        <Industries />
        <Integrations />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <Reveal />
    </div>
  );
}
