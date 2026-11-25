"use client";

import { useState } from "react";
import { briefQuestions, contactEmail } from "@/data/home";

type Answers = Partial<Record<(typeof briefQuestions)[number]["key"], string>>;

// Arma un mensaje con tres respuestas; el visitante lo envía por WhatsApp o correo. No se guarda nada.
export function BriefWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= briefQuestions.length;
  const current = briefQuestions[Math.min(step, briefQuestions.length - 1)];
  const message = `Hola, NexFlow Labs. Necesito: ${answers.need ?? ""}. Plazo: ${answers.when ?? ""}. Somos: ${answers.who ?? ""}.`;

  return (
    <div className="brief__card reveal">
      <div className="brief__bars" aria-hidden="true">
        {briefQuestions.map((item, index) => (
          <span key={item.key} className={index < step ? "is-on" : undefined} />
        ))}
      </div>

      {done ? (
        <div className="brief__panel" key="done">
          <p className="brief__question">Su mensaje está listo</p>
          <p className="brief__message" role="status">
            {message}
          </p>
          <div className="actions">
            <a className="button" href={`https://wa.me/573152466020?text=${encodeURIComponent(message)}`}>
              Enviar por WhatsApp
            </a>
            <a
              className="button button--ghost"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Nuevo proyecto")}&body=${encodeURIComponent(message)}`}
            >
              Enviar por correo
            </a>
          </div>
          <button
            type="button"
            className="brief__back"
            onClick={() => {
              setAnswers({});
              setStep(0);
            }}
          >
            Empezar de nuevo
          </button>
        </div>
      ) : (
        <fieldset className="brief__panel" key={current.key}>
          <legend className="brief__question">
            <span className="brief__step">
              Paso {step + 1} de {briefQuestions.length}
            </span>
            {current.question}
          </legend>
          <div className="brief__options">
            {current.options.map((option) => (
              <button
                key={option}
                type="button"
                className="brief__option"
                aria-pressed={answers[current.key] === option}
                onClick={() => {
                  setAnswers({ ...answers, [current.key]: option });
                  setStep(step + 1);
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" className="brief__back" onClick={() => setStep(step - 1)}>
              Volver
            </button>
          )}
        </fieldset>
      )}
    </div>
  );
}
