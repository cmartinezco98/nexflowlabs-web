import Image from "next/image";
import { pipelinePhases } from "@/data/neural-docs";

export function PipelineSection() {
  return (
    <section className="pipeline-section" id="pipeline" aria-labelledby="pipeline-title">
      <div className="section-container">
        <div className="pipeline-heading">
          <div className="eyebrow-row">
            <span>ARQUITECTURA DEL MOTOR NEURONAL</span>
            <span className="status-dot status-dot--red" />
          </div>
          <h2 id="pipeline-title">Pipeline de 4 Fases con Inferencia Cuantizada</h2>
          <p>
            Diseñado para resiliencia bancaria. Cada documento atraviesa cuatro barreras
            criptográficas y lógicas antes de registrarse en el libro mayor contable o almacén relacional.
          </p>
        </div>

        <div className="phase-grid">
          {pipelinePhases.map((phase) => (
            <article className="phase-card" key={phase.number}>
              <div className="phase-card__topline">
                <span>{phase.number}</span>
                <Image
                  src={phase.icon}
                  width={phase.number === "01" ? 40 : phase.number === "03" ? 35 : 36}
                  height={phase.number === "01" ? 39 : phase.number === "03" ? 36 : phase.number === "04" ? 32 : 34}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="phase-card__content">
                <p className={`phase-card__eyebrow tone-${phase.tone}`}>{phase.eyebrow}</p>
                <h3>{phase.title}</h3>
                <p className="phase-card__description">{phase.description}</p>
              </div>
              <div className="phase-tags">
                {phase.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="infrastructure-banner">
          <div className="infrastructure-banner__copy">
            <span className="infrastructure-banner__icon material-symbol">speed</span>
            <div>
              <h3>Capacidad de Ingesta Diaria: 1.2M Documentos</h3>
              <p>Concurrencia distribuida en clústeres elásticos con réplica geográfica activa en Colombia y US-East.</p>
            </div>
          </div>
          <div className="infrastructure-banner__metrics">
            <div><span>ERROR RATE HISTÓRICO</span><strong>0.0012%</strong></div>
            <span className="infrastructure-banner__divider" />
            <div><span>DISPONIBILIDAD SLA</span><strong>99.995%</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
