import { demoSamples, invoice, telemetry } from "@/data/neural-docs";

const formattedTelemetry = JSON.stringify(telemetry, null, 2);
const tokenPattern = /("(?:\\.|[^"\\])*"(?=\s*:))|("(?:\\.|[^"\\])*")|(-?\d+(?:\.\d+)?)|(true|false|null)|([{}\[\],:])/g;

function highlightJsonLine(line: string, lineIndex: number) {
  const parts = line.split(tokenPattern);

  return parts.map((part, index) => {
    if (!part) return null;
    let className = "";

    if (/^".*"$/.test(part)) {
      className = parts[index + 1]?.trimStart().startsWith(":") ? "json-key" : "json-string";
    } else if (/^-?\d/.test(part)) {
      className = "json-number";
    } else if (/^(true|false|null)$/.test(part)) {
      className = "json-boolean";
    }

    return (
      <span className={className} key={`${lineIndex}-${index}`}>
        {part}
      </span>
    );
  });
}

function DocumentPreview() {
  return (
    <article className="document-panel" aria-label="Vista previa simulada de factura">
      <div className="document-panel__header">
        <span className="document-panel__filename">
          <span className="material-symbol">document_scanner</span>
          FACTURA_ELECTRONICA_DIAN_901784.PDF
        </span>
        <span className="document-panel__polygons">
          <span className="status-dot status-dot--red" /> 7 POLÍGONOS CONFIRMADOS
        </span>
      </div>

      <div className="document-stage">
        <div className="invoice-sheet">
          <div className="invoice-heading">
            <div className="invoice-issuer">
              <div className="bounding-box bounding-box--issuer">
                <span className="bounding-label">RAZÓN SOCIAL (0.999)</span>
                <strong>{invoice.issuer}</strong>
              </div>
              <p>{invoice.address}</p>
            </div>
            <strong className="invoice-number">FE-<br />009412</strong>
          </div>

          <div className="invoice-meta">
            <div className="bounding-box bounding-box--nit">
              <span>NIT: <strong>{invoice.nit}</strong></span>
              <span className="bounding-label bounding-label--below">NIT COMPROBADO</span>
            </div>
            <span>FECHA: {invoice.date}</span>
          </div>

          <div className="invoice-items">
            <div className="invoice-row invoice-row--head">
              <span>DESCRIPCIÓN</span><span>SUBTOTAL</span>
            </div>
            {invoice.items.map((item) => (
              <div className="invoice-row" key={item.description}>
                <span>{item.description}</span><span>{item.subtotal}</span>
              </div>
            ))}
          </div>

          <div className="invoice-totals">
            <div className="invoice-row">
              <span>SUBTOTAL GRAVABLE</span>
              <strong className="highlight-box">{invoice.subtotal}</strong>
            </div>
            <div className="invoice-row">
              <span>IVA GENERADO (19%)</span>
              <strong className="bounding-box bounding-box--value">
                {invoice.iva}<span className="bounding-label">IVA 19% MATCH</span>
              </strong>
            </div>
            <div className="invoice-row"><span>RETEFUENTE (2.5%)</span><strong>{invoice.retefuente}</strong></div>
            <div className="invoice-row invoice-row--total">
              <b>TOTAL A PAGAR</b>
              <strong className="bounding-box bounding-box--total">
                {invoice.total}<span className="bounding-label">TOTAL VERIFICADO</span>
              </strong>
            </div>
          </div>

          <div className="cufe-box">
            <span className="bounding-label">CUFE MATCH 100%</span>
            <b>CUFE VALIDADOR DIAN:</b>
            <span>{invoice.cufe}</span>
          </div>
        </div>
      </div>

      <div className="document-panel__footer">
        <span>CONFIANZA GLOBAL: <strong>99.89%</strong></span>
        <span>TIEMPO INFERENCIA: <strong>184 ms</strong></span>
      </div>
    </article>
  );
}

function TelemetryPanel() {
  return (
    <aside className="telemetry-panel" aria-label="Inspector de telemetría JSON simulado">
      <div className="telemetry-panel__heading">
        <span className="telemetry-panel__title">
          <span className="material-symbol">data_object</span>
          03 // INSPECTOR DE TELEMETRÍA JSON
        </span>
        <span className="sync-badge">LIVE SYNC</span>
      </div>

      <div className="accounting-alert">
        <span className="material-symbol accounting-alert__icon">verified</span>
        <div>
          <strong>REGLA CONTABLE: APROBADA</strong>
          <span>Ecuación: Subtotal + IVA - Rete = Total</span>
        </div>
        <b>0x9f8c...3b1d</b>
      </div>

      <pre className="json-viewer" aria-label="Datos JSON de ejemplo">
        <code>
          {formattedTelemetry.split("\n").map((line, index) => (
            <span className="json-line" key={index}>
              {highlightJsonLine(line, index)}
            </span>
          ))}
        </code>
      </pre>

      <div className="export-actions">
        <h3>DISPARO &amp; EXPORTACIÓN AUTOMATIZADA</h3>
        <div className="export-actions__targets" aria-label="Destinos representados en el diseño">
          <div><span className="material-symbol">database</span><b>Supabase</b></div>
          <div><span className="material-symbol">storage</span><b>PostgreSQL</b></div>
          <div><span className="material-symbol">table_view</span><b>Excel XLS</b></div>
        </div>
        <div className="export-actions__primary" aria-disabled="true">
          <span className="material-symbol">send</span>
          <b>Disparar Ingesta al ERP / Core Bancario</b>
        </div>
      </div>
    </aside>
  );
}

export function DemoPlayground() {
  return (
    <section className="playground-section" id="playground" aria-labelledby="playground-title">
      <div className="section-container playground-container">
        <div className="section-heading playground-heading">
          <div className="section-heading__title-group">
            <span className="material-symbol section-heading__icon">biotech</span>
            <div>
              <h2 id="playground-title">Laboratorio de Ingesta &amp; Inferencia en Vivo</h2>
              <p>Inspección de capas OCR Zero-Shot, segmentación poligonal y resolución determinista</p>
            </div>
          </div>
          <div className="view-toggle" role="group" aria-label="Modo de visualización representado en la demo">
            <span className="is-active" aria-current="true">MODO AUDITORÍA</span>
            <span>VECTOR VIEW</span>
          </div>
        </div>

        <div className="playground-grid">
          <aside className="source-panel" aria-label="Fuente de entrada simulada">
            <div className="panel-label-row">
              <span>01 // FUENTE DE ENTRADA</span>
              <span className="material-symbol">input</span>
            </div>
            <div className="sample-picker">
              <h3>Seleccionar Matriz de Prueba</h3>
              <div className="sample-list">
                {demoSamples.map((sample, index) => (
                  <div
                    className={`sample-option${index === 0 ? " is-selected" : ""}`}
                    key={sample.title}
                    aria-current={index === 0 ? "true" : undefined}
                  >
                    <span className="sample-option__main">
                      <strong>{sample.title}</strong>
                      <span className="sample-option__format">{sample.format}</span>
                    </span>
                    <span className="sample-option__company">{sample.company}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dropzone-mock" aria-label="Zona de carga representada en la demo; no acepta archivos">
              <span className="material-symbol dropzone-mock__icon">cloud_upload</span>
              <strong>Arrastre Documento Crudo</strong>
              <span>PDF, TIFF, JPG escaneado, XML<br />(máx 25MB)</span>
              <span className="dropzone-mock__tag">AUTO DESKEW ACTIVADO</span>
            </div>

            <div className="buffer-card">
              <div><span>ESTADO BUFFER</span><strong>100% READY</strong></div>
              <p>Hash SHA-256 verificado en origen</p>
            </div>
          </aside>

          <DocumentPreview />
          <TelemetryPanel />
        </div>
      </div>
    </section>
  );
}
