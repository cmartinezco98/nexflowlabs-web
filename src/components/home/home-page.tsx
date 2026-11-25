import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { DocumentCheck } from "@/components/home/document-check";
import { IndustryTabs } from "@/components/home/industry-tabs";
import { Reveal } from "@/components/home/reveal";
import { contactEmail, contactHref, faqs, importQueue, navigation, stages } from "@/data/home";

const cop = (value: number) => `$${value.toLocaleString("es-CO")}`;
const delay = (index: number) => ({ "--i": index }) as CSSProperties;

function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="NexFlow Labs, inicio">
      <span className="wordmark__n">N</span>exFlow Labs
    </Link>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__talk">
        <div className="hero__top">
          <Wordmark />
        </div>
        <p className="hero__lead">
          Leemos sus facturas y guías, las validamos con la DIAN y las cargamos en su ERP.
        </p>
        <a className="button" href={contactHref}>
          Agendar un diagnóstico
        </a>
      </div>

      <div className="hero__wide">
        <nav className="nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <h1 className="hero__title" id="hero-title">
          <span className="mask">
            <span>Deje de</span>
          </span>
          <span className="mask">
            <span>digitar.</span>
          </span>
        </h1>
      </div>

      <div className="hero__figure">
        <div className="hero__badge">
          <p className="hero__badge-figure">$0</p>
          <p>de descuadre: si no cuadra al peso, no entra a su ERP.</p>
        </div>
        <div className="queue" data-ui aria-label="Ejemplo de cola de importación a Siigo">
          <div className="queue__bar">
            <span>Importación a Siigo · hoy</span>
            <span>Datos de ejemplo</span>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">Proveedor</th>
                <th scope="col">Documento</th>
                <th scope="col" className="num">
                  Total
                </th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {importQueue.map((row) => (
                <tr key={row.doc} className={row.ok ? undefined : "is-flagged"}>
                  <td>{row.supplier}</td>
                  <td>{row.doc}</td>
                  <td className="num">{cop(row.total)}</td>
                  <td>
                    <span className={row.ok ? "status status--ok" : "status status--review"}>
                      {row.ok ? "Cargada" : "Revisar IVA"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <h2 className="intro__title" id="intro-title" data-reveal>
        Copiar facturas no es contabilidad.
      </h2>
      <p className="intro__text" data-reveal style={delay(1)}>
        Cada mes alguien copia NIT, IVA y retenciones de cientos de PDF al ERP, y luego busca por qué no cuadra.
        Eso lo hacemos nosotros.
      </p>
      <figure className="intro__photo">
        <Image
          src="/images/home/archive-boxes.jpg"
          alt="Estantes con cajas de archivo llenas de documentos"
          width={1920}
          height={2560}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </figure>
      <figure className="intro__small" data-reveal style={delay(2)}>
        <Image
          src="/images/home/ledger-portrait.jpg"
          alt="Libro de contabilidad antiguo, de tapa verde"
          width={1911}
          height={3000}
          sizes="(max-width: 900px) 50vw, 360px"
        />
      </figure>
    </section>
  );
}

function Stages() {
  return (
    <section className="stages" aria-labelledby="stages-title">
      <h2 className="section-title" id="stages-title" data-reveal>
        Del correo al ERP.
      </h2>
      <ol className="stages__bar" data-ui>
        {stages.map((stage, index) => (
          <li
            key={stage.name}
            className={`stage stage--${stage.tone}`}
            style={{ ...delay(index + 1), flexGrow: stage.grow }}
            data-reveal
          >
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
    <section className="industries" aria-labelledby="industries-title">
      <div className="industries__head">
        <h2 className="industries__title" id="industries-title" data-reveal>
          <span className="soft">Qué leemos</span>
          <br />
          en cada industria.
        </h2>
        <a className="button" href={contactHref} data-reveal style={delay(1)}>
          Agendar un diagnóstico
        </a>
      </div>
      <div data-reveal style={delay(2)}>
        <IndustryTabs />
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <h2 className="sr-only" id="showcase-title">
        Pruebe la validación
      </h2>
      <div data-reveal>
        <DocumentCheck />
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-title">
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
    </section>
  );
}

function Closing() {
  const photos = [
    { src: "/images/home/truck-colombia.jpg", alt: "Camión de estacas detenido en una carretera de Colombia", w: 1024, h: 768 },
    { src: "/images/home/archive-stacks.jpg", alt: "Pasillo de un archivo con estantes de documentos", w: 1920, h: 1241 },
    { src: "/images/home/ledger-met.jpg", alt: "Libro de cuentas abierto con anotaciones a mano", w: 1920, h: 1440 },
  ];
  return (
    <section className="closing" id="contacto" aria-labelledby="closing-title">
      <div className="closing__strip">
        {photos.map((photo, index) => (
          <Image key={photo.src} src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes="(max-width: 900px) 100vw, 34vw" data-reveal style={delay(index)} />
        ))}
      </div>
      <div className="closing__band">
        <h2 className="closing__title" id="closing-title" data-reveal>
          Hablemos de sus documentos.
        </h2>
        <p className="closing__statement" data-reveal style={delay(1)}>
          <a href={contactHref}>Cuéntenos qué digita su equipo</a> y le mostramos cómo llegaría a su ERP, ya
          validado.
        </p>
        <div className="closing__notes" data-reveal style={delay(2)}>
          <p>
            Le respondemos desde <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
          <p>
            ¿Quiere una cifra antes? <Link href="/cotizador">Use el cotizador</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div>
          <p className="footer__lead">NexFlow Labs S.A.S.</p>
          <p>NIT 901.784.329-1</p>
          <p>Cundinamarca, Colombia</p>
        </div>
        <div>
          <p className="footer__lead">Páginas</p>
          {navigation.slice(0, 3).map((item) => (
            <p key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </p>
          ))}
        </div>
        <div>
          <p className="footer__lead">Contacto</p>
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
        <p className="footer__credits">
          Fotos: <a href="https://commons.wikimedia.org/w/index.php?curid=63121088">“Boxes of archival documents”</a>, Smallison,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>;{" "}
          <a href="https://collections.museumsvictoria.com.au/items/1346936">“Accounts Ledger, The Embassy Cake Shop”</a>, Museums Victoria,{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>;{" "}
          <a href="https://www.flickr.com/photos/42391519@N02/4279011513">“Colombia, truck by the highway 005”</a>, momentcaptured1,{" "}
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>;{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=16634316">“Documents stacks in a repository”</a>, The National Archives (UK),{" "}
          <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>;{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=58742698">“Account Book Ledger”</a>, John Carlin, CC0.
        </p>
      </div>
      <svg className="footer__wordmark" viewBox="0 0 1000 150" role="img" aria-label="NexFlow Labs">
        <text x="0" y="122" textLength="1000" lengthAdjust="spacingAndGlyphs">
          NexFlow Labs
        </text>
      </svg>
      <p className="footer__legal">© 2026 NexFlow Labs S.A.S. Todos los derechos reservados.</p>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="home">
      <main className="home__main">
        <Hero />
        <Intro />
        <Stages />
        <Industries />
        <Showcase />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <Reveal />
    </div>
  );
}
