# NexFlow Labs — Web comercial

## Resumen

Sitio comercial de NexFlow Labs para presentar su propuesta de automatización inteligente de documentos y generar conversaciones con potenciales clientes. La experiencia parte del diseño de Figma **“NexFlow Labs - Neural Docs”**.

## Estado

Desarrollo inicial en curso sobre Next.js, guiado por el diseño de Figma. La demo es estática y usa contenido precargado; no implementa procesamiento documental real.

## Alcance inicial

- Cuatro páginas guiadas por los frames del archivo Figma: Core (`/`), Neural Docs (`/neural-docs`), Módulos (`/modulos`) y Cotizador & Terminal (`/cotizador`).
- Landing comercial en español, responsive donde el diseño permite adaptarlo.
- Demostración visual del flujo de documentos con contenido de ejemplo precargado.
- Resultados, telemetría y datos simulados localmente; no representan procesamiento real.
- CTA de contacto por email en los destinos especificados por Figma. No se añadió un enlace de WhatsApp porque el diseño no proporciona un número/URL.
- Navegación entre los cuatro frames; Terminal apunta a la sección de operaciones del Cotizador.
- Orientación a clientes potenciales, no a operar las aplicaciones de producción de NexFlow.

## Fuera de alcance

- Subida, almacenamiento o procesamiento real de documentos.
- OCR, modelos de IA, APIs, base de datos, autenticación o panel de clientes.
- Captura y almacenamiento de leads dentro del sitio.
- Implementación de las aplicaciones web futuras de NexFlow Labs. Esos productos pueden usar tecnologías distintas y se diseñarán por separado.

## Stack actual

- **Next.js 16.4.3**, App Router y TypeScript.
- React 19.3.1 y CSS global; no se incorporó Tailwind ni una librería de UI.
- Contenido de la demo en fixtures locales. Los controles sin transiciones definidas se mantienen visuales.
- La página se prerenderiza estáticamente; el hosting queda pendiente.

No añadir backend, funciones serverless, procesamiento real, ni persistencia para el alcance actual.

## Desarrollo local

```bash
npm install
npm run dev
```

Verificaciones disponibles: `npm run typecheck`, `npm run lint` y `npm run build`.

## Referencia de diseño

[Diseño en Figma — NexFlow Labs - Neural Docs](https://www.figma.com/design/xCcHG9fHYekKENIFXidfZP/Sin-t%C3%ADtulo?node-id=1-2&t=R7Afp2VGFbz2IqNE-0)

El diseño incluye encabezado y métricas, playground de ingestión de tres columnas, pipeline de cuatro fases, casos de uso en logística/retail/salud, CTA de benchmarking y footer. El enlace inicial selecciona un rectángulo de fondo; el frame principal está en la página “Page 1”.

## Documentación relacionada

- [`agents.md`](./agents.md): reglas generales de trabajo para asistentes.
- [`claude.md`](./claude.md): instrucciones complementarias para Claude.
- [`system-design.md`](./system-design.md): arquitectura conceptual, alcance y decisiones pendientes.
- [Agente OpenCode Next.js Expert](./.opencode/agents/nextjs-expert.md): agente reutilizable para trabajo futuro en Next.js.
