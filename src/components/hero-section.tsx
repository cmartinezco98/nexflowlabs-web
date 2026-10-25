export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />
      <div className="section-container hero-container">
        <div className="hero-telemetry">
          <div className="engine-label">
            <span className="status-dot status-dot--red" />
            DEEP NEURAL EXTRACTION // INGESTION ENGINE V4.8
          </div>
          <div className="hero-metrics" aria-label="Métricas de la demostración">
            <span>
              <span className="status-dot status-dot--blue" />
              LATENCIA PROMEDIO: <strong>342ms</strong>
            </span>
            <i>/</i>
            <span>
              PRECISIÓN VECTORIAL: <strong>99.984%</strong>
            </span>
            <i>/</i>
            <span>
              CHECKSUM COMPLIANT: <strong className="text-blue">DIAN UBL 2.1</strong>
            </span>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <h1 id="hero-title">
              NexFlow Neural Docs: <span>De Documentos Caóticos a Datos Puros</span>
            </h1>
            <p>
              Procesamiento cognitivo con tolerancia cero a errores. Nuestro motor de IA lee,
              valida y concilia facturas, remisiones y comprobantes bancarios en microsegundos,
              eliminando la intervención humana en cuentas por pagar y logística.
            </p>
          </div>

          <aside className="cluster-card" aria-label="Estado del cluster">
            <div className="cluster-card__topline">
              <span>ESTADO DEL CLUSTER</span>
              <strong>SYNAPSE-ONLINE</strong>
            </div>
            <div className="cluster-progress" aria-hidden="true">
              <span />
            </div>
            <div className="cluster-card__bottomline">
              <span>NODOS H100: 48/48 ACTIVOS</span>
              <span>RPS: 1,840/s</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
