"use client";

import { useState } from "react";
import { sampleDocuments, type SampleDocument } from "@/data/home";

const cop = (value: number) => `$${Math.round(value).toLocaleString("es-CO")}`;

// Simula un error típico de digitación: alguien teclea mal el total.
const TYPO_DELTA = 90000;

function totals(doc: SampleDocument) {
  const subtotal = doc.lines.reduce((sum, line) => sum + line.qty * line.price, 0);
  const iva = subtotal * doc.ivaRate;
  const total = subtotal + iva;
  const retention = subtotal * doc.retentionRate;
  return { subtotal, iva, total, retention, net: total - retention };
}

export function DocumentCheck() {
  const [activeId, setActiveId] = useState(sampleDocuments[0].id);
  const [typo, setTypo] = useState(false);
  const doc = sampleDocuments.find((item) => item.id === activeId) ?? sampleDocuments[0];
  const sums = totals(doc);
  const printedTotal = sums.total + (typo ? TYPO_DELTA : 0);
  const difference = printedTotal - sums.total;

  return (
    <div className="check">
      <div className="check__index" role="group" aria-label="Documento de ejemplo">
        {sampleDocuments.map((item) => (
          <button
            key={item.id}
            type="button"
            className="check__name"
            aria-pressed={item.id === activeId}
            onClick={() => {
              setActiveId(item.id);
              setTypo(false);
            }}
          >
            {item.label}
          </button>
        ))}
        <p className="check__hint">
          Cambie el total como si alguien lo hubiera digitado mal y vea qué hace la validación.
        </p>
        <button type="button" className="check__typo" aria-pressed={typo} onClick={() => setTypo(!typo)}>
          {typo ? "Corregir el total" : `Sumar ${cop(TYPO_DELTA)} al total`}
        </button>
      </div>

      <div className="check__stage">
        <article className="sheet" data-ui key={doc.id} aria-label={`${doc.label} de ejemplo`}>
          <header className="sheet__head">
            <div>
              <p className="sheet__issuer">{doc.issuer}</p>
              <p>NIT {doc.nit}</p>
            </div>
            <div className="sheet__meta">
              <p className="sheet__kind">{doc.kind}</p>
              <p>
                {doc.number} · {doc.date}
              </p>
            </div>
          </header>
          <table className="sheet__table">
            <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Cant.</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              {doc.lines.map((line) => (
                <tr key={line.description}>
                  <td>{line.description}</td>
                  <td>{line.qty}</td>
                  <td>{cop(line.qty * line.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <dl className="sheet__sums">
            <div>
              <dt>Subtotal</dt>
              <dd>{cop(sums.subtotal)}</dd>
            </div>
            <div>
              <dt>IVA {Math.round(doc.ivaRate * 100)} %</dt>
              <dd>{cop(sums.iva)}</dd>
            </div>
            <div className={typo ? "is-wrong" : undefined}>
              <dt>Total</dt>
              <dd>{cop(printedTotal)}</dd>
            </div>
            <div>
              <dt>{doc.retentionLabel}</dt>
              <dd>−{cop(sums.retention)}</dd>
            </div>
          </dl>
          <p className="sheet__sample">Documento de ejemplo con datos ficticios.</p>
        </article>

        <p className={`verdict${difference === 0 ? " verdict--ok" : " verdict--fail"}`} role="status">
          {difference === 0
            ? `Cuadra al peso. Neto a pagar ${cop(sums.net)}, listo para ${doc.destination}.`
            : `No cuadra por ${cop(difference)}. No entra a ${doc.destination}: pasa a revisión de una persona.`}
        </p>
      </div>
    </div>
  );
}
