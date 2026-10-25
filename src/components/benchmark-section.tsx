const contactEmail = "contacto@nexflowlabs.com";

export function BenchmarkSection() {
  const sandboxHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Prueba de estrés NexFlow Neural Docs")}`;

  return (
    <section className="benchmark-section" id="benchmark" aria-labelledby="benchmark-title">
      <div className="section-container">
        <div className="benchmark-card">
          <div className="benchmark-copy">
            <p className="benchmark-copy__eyebrow">PRUEBA DE ESTRÉS CON SUS PROPIOS DATOS</p>
            <h2 id="benchmark-title">¿Listo para auditar 1,000 facturas de su ERP?</h2>
            <p>
              Conecte una muestra ciega de sus documentos más problemáticos. En menos de 2 horas entregamos
              un reporte comparativo de precisión matemática frente a su proceso manual actual.
            </p>
          </div>
          <div className="benchmark-actions">
            <a className="benchmark-button benchmark-button--primary" href={sandboxHref}>
              Solicitar Sandbox &amp;<br />Claves API
            </a>
            <span className="benchmark-button benchmark-button--secondary" aria-disabled="true">
              Calcular ROI en<br />Cotizador
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
