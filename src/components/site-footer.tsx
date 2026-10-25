const complianceLabels = ["ISO-27001", "SOC2 COMPLIANT", "AES-256 ENCRYPTED", "SLA 99.99%"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container site-footer__container">
        <div className="site-footer__top">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <strong>NEXFLOW LABS</strong>
              <span>S.A.S.</span>
            </div>
            <p>Soberanía Operacional &amp; Orquestación de Agentes Autónomos</p>
          </div>
          <div className="compliance-badges" aria-label="Etiquetas mostradas en el diseño">
            {complianceLabels.map((label, index) => (
              <span className={index === 3 ? "compliance-badge compliance-badge--status" : "compliance-badge"} key={label}>
                {index === 3 && <span className="status-dot status-dot--blue" />}
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="footer-details">
            <span>NIT: 901.784.329-1</span>
            <span>Ubicación: Cundinamarca, Colombia</span>
            <a href="mailto:contacto@nexflowlabs.com">contacto@nexflowlabs.com</a>
          </div>
          <p>© 2025 NexFlow Labs S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
