import Image from "next/image";
import { industryCases } from "@/data/neural-docs";

export function IndustrySection() {
  return (
    <section className="industry-section" id="industry" aria-labelledby="industry-title">
      <div className="section-container">
        <div className="industry-heading">
          <div>
            <p className="industry-heading__eyebrow">IMPACTO OPERATIVO COMPROBADO</p>
            <h2 id="industry-title">Casos de Uso por Industria</h2>
          </div>
          <p className="industry-heading__summary">
            Adaptabilidad total a los formatos físicos y digitales más exigentes de la economía real latinoamericana.
          </p>
        </div>

        <div className="industry-grid">
          {industryCases.map((industry) => (
            <article className="industry-card" key={industry.category}>
              <div className="industry-card__image">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="industry-card__photo"
                />
                <div className="industry-card__gradient" />
                <span className="industry-card__category">{industry.category}</span>
              </div>
              <div className="industry-card__body">
                <div className="industry-card__copy">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
                <dl className="industry-metrics">
                  {industry.metrics.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
