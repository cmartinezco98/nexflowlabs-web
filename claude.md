# Guía para Claude

Lee primero [`agents.md`](./agents.md), [`readme.md`](./readme.md) y [`system-design.md`](./system-design.md). El sitio contiene cuatro rutas comerciales Next.js basadas en Figma; sus demos son estáticas y no implementan procesamiento documental en producción.

## Reglas

- Excepción aprobada (nov 2026): la home (`/`) se rediseñó fuera de Figma, con código propio en `src/components/home/`, estilos en `src/app/home.css` y contenido en `src/data/home.ts`. Las reglas de fidelidad a Figma siguen aplicando a `/neural-docs`, `/modulos` y `/cotizador`. En la home no se publican certificaciones, SLA ni cifras de rendimiento sin confirmación del negocio.

- No empezar funcionalidades de backend, OCR, IA, persistencia, autenticación o carga real de documentos sin una solicitud explícita.
- Tratar la información de la demo como ficticia y precargada; no presentarla como evidencia de rendimiento real.
- Mantener las aplicaciones futuras de NexFlow fuera del alcance de este sitio.
- Si la tarea pide implementación, inspeccionar primero el proyecto y sus dependencias; no asumir que el scaffold ya existe.
- Aplicar Clean Code de forma pragmática: claridad, cohesión, tipado útil, componentes enfocados y mínima complejidad.
- Priorizar accesibilidad, responsive design, SEO básico y rendimiento.
- Para una implementación guiada por Figma, tratar el frame y sus assets originales como fuente de verdad. Mantener el orden, el contenido, la jerarquía, los colores, la tipografía, las proporciones y los estados visibles; no inventar secciones, copy, métricas, assets, destinos ni interacciones.
- Si Figma no define un enlace o comportamiento, no asumir su destino ni hacerlo parecer funcional. Consultar al usuario o conservarlo como elemento visual sin acción.
- Usar los assets locales descargados del diseño; nunca dejar URLs temporales de Figma como fuentes de runtime ni sustituirlos por imágenes similares.
- La demo permanece precargada y simulada: no aceptar ni enviar archivos y no ejecutar procesamiento real.
- Si faltan datos de contacto o enlaces definitivos, usar placeholders claramente identificados y pedir confirmación; no inventar información de NexFlow Labs.
- Explicar brevemente decisiones y verificaciones; distinguir hechos confirmados de propuestas.
