import { BriefWizard } from "@/components/home/brief-wizard";
import { ServiceAccordion } from "@/components/home/service-accordion";
import {
  alfredHref,
  alfredStory,
  audiences,
  contactEmail,
  faqs,
  location,
  navigation,
  sampleDishes,
  supportEmail,
  ticker,
  whatsappHref,
  whatsappNumber,
  workSteps,
} from "@/data/home";

const cop = (value: number) => `$${value.toLocaleString("es-CO")}`;
const sampleTotal = sampleDishes.reduce((sum, dish) => sum + dish.qty * dish.price, 0);

function Nav() {
  return (
    <nav className="topnav" aria-label="Navegación principal">
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

// Pantallas de Alfred dibujadas en HTML. Platos y precios son de ejemplo.
function MenuScreen({ note }: { note: string }) {
  return (
    <>
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
    </>
  );
}

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true">
        <span className="hero__scan" />
      </div>
      <div className="hero__copy">
        <p className="hero__kicker">Desarrollo web · Aplicaciones · Soporte técnico</p>
        <h1 className="hero__title">
          <span className="mask">
            <span>Construimos</span>
          </span>
          <span className="mask mask--2">
            <span>su software</span>
          </span>
        </h1>
        <p className="hero__lead">
          Sitios web, aplicaciones y soporte para pymes, empresas medianas y startups. Desde {location}.
        </p>
        <div className="actions hero__actions">
          <a className="button" href="#solicitud">
            Cuéntenos su proyecto
          </a>
          <a className="button button--ghost" href="#alfred">
            Ver Alfred en acción
          </a>
        </div>
      </div>

      <div className="stage" role="img" aria-label="Alfred, la carta QR de NexFlow Labs, en un teléfono y en la pantalla de cocina">
        <div className="stage__back">
          <div className="float float--late">
            <div className="tablet">
              <div className="app__head">
                <span className="app__title">Cocina</span>
                <span className="app__live">En vivo</span>
              </div>
              <div className="tablet__cols">
                <div className="mini">
                  <b>Mesa 4</b>
                  <span>2 × Hamburguesa</span>
                  <span>1 × Papas</span>
                  <span className="tag">Nuevo</span>
                </div>
                <div className="mini">
                  <b>Mesa 7</b>
                  <span>3 × Limonada</span>
                </div>
                <div className="mini">
                  <b>Barra</b>
                  <span>2 × Café</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stage__front">
          <div className="float">
            <div className="phone">
              <span className="phone__notch" />
              <div className="screen">
                <MenuScreen note="Mesa 4" />
                <span className="app__pill">Pedir · {cop(sampleTotal)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stage__chip">
          <span className="stage__dot" />
          Pedido enviado a cocina
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

function Statement() {
  return (
    <section className="statement container" aria-label="Lo que hacemos por su negocio">
      <p className="statement__text">
        <span>
          Hacemos que su negocio se vea, venda y funcione mejor con software hecho a su medida, y nos quedamos para que siga
          funcionando.
        </span>
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="section container" id="servicios" aria-labelledby="services-title">
      <div className="section__head reveal">
        <h2 className="section-title" id="services-title">
          Lo que hacemos
        </h2>
        <p className="section__sub">Abra cada servicio para ver qué incluye.</p>
      </div>
      <ServiceAccordion />
      <p className="audiences reveal">
        <span className="audiences__label">Para</span>
        {audiences.join(" · ")}
      </p>
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

function AlfredStory() {
  return (
    <section className="section container" id="alfred" aria-labelledby="alfred-title">
      <div className="section__head reveal">
        <div className="alfred__intro">
          <span className="eyebrow">Proyecto destacado</span>
          <h2 className="alfred__title" id="alfred-title">
            Alfred
          </h2>
        </div>
        <p className="section__sub">La carta QR para restaurantes, cafés y bares, hecha por NexFlow Labs. Así recorre un pedido.</p>
      </div>

      <div className="story">
        <ol className="story__steps">
          {alfredStory.map((step, index) => (
            <li className={`story__step story__step--${index + 1}`} key={step.title}>
              <span className="eyebrow">{step.label}</span>
              <h3 className="story__title">{step.title}</h3>
              <p>{step.text}</p>
              {index === alfredStory.length - 1 && (
                <a className="button" href={alfredHref}>
                  Conocer Alfred
                </a>
              )}
            </li>
          ))}
        </ol>

        <div className="story__sticky">
          <div className="phone" role="img" aria-label="Pantallas de ejemplo de Alfred">
            <span className="phone__notch" />
            <div className="screen screen--1">
              <MenuScreen note="Importada" />
              <span className="app__meta app__foot">Carta de ejemplo</span>
            </div>
            <div className="screen screen--2">
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
              <span className="app__pill">Enviar a cocina</span>
            </div>
            <div className="screen screen--dark screen--3">
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
            </div>
            <div className="screen screen--4 screen--center">
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
              <span className="app__pill">Pagado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brief() {
  return (
    <section className="band" id="solicitud" aria-labelledby="brief-title">
      <div className="section container brief">
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
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section container faq" id="preguntas" aria-labelledby="faq-title">
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
    </section>
  );
}

function Closing() {
  return (
    <section className="closing container" id="contacto" aria-labelledby="closing-title">
      <h2 className="closing__title reveal" id="closing-title">
        Hablemos de su proyecto
      </h2>
      <p className="section__sub reveal">Cuéntenos qué necesita y le respondemos con una propuesta.</p>
      <div className="actions reveal">
        <a className="button" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <a className="button button--ghost" href={whatsappHref}>
          WhatsApp {whatsappNumber}
        </a>
      </div>
      <p className="note reveal">
        ¿Ya es cliente? <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
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
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Statement />
        <Services />
        <Process />
        <AlfredStory />
        <Brief />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <a className="whatsapp-float" href={whatsappHref} aria-label="Escribir a NexFlow Labs por WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21l1.7-4.6A8.5 8.5 0 1 1 8 19.6z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2z" />
        </svg>
      </a>
    </div>
  );
}
