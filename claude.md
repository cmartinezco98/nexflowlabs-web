# Guía para Claude

Lee primero [`agents.md`](./agents.md), [`readme.md`](./readme.md) y [`system-design.md`](./system-design.md). El sitio es una sola página (`/`) que presenta a NexFlow Labs como empresa de desarrollo web, aplicaciones y soporte técnico, con Alfred como proyecto destacado.

## Reglas

- Nov 2026: el sitio dejó de vender automatización de documentos y ya no sigue el diseño de Figma. Las páginas `/neural-docs`, `/modulos` y `/cotizador` se retiraron y redirigen a `/`. No volver a crearlas ni retomar ese copy sin pedirlo el usuario.
- El código de la home está en `src/components/home/`, los estilos en `src/app/home.css` y el contenido en `src/data/home.ts`.
- Datos confirmados por el usuario: contacto@ y soporte@nexflowlabs.co, WhatsApp +57 315 246 6020, Mosquera (Cundinamarca). No publicar el NIT.
- No publicar precios, plazos, clientes, cifras, certificaciones ni SLA sin confirmación del negocio. Sobre Alfred, usar solo lo que publica alfred.nexflowlabs.co.
- Los ejemplos interactivos (como el pedido de Alfred) usan datos ficticios y deben marcarse como ejemplo.
- No crear backend, base de datos, autenticación ni formularios que guarden datos sin una solicitud explícita.
- Si falta un dato o un enlace definitivo, preguntar o dejar un marcador claramente identificado; no inventar información de NexFlow Labs.
- Antes de implementar, inspeccionar el proyecto y sus dependencias.
- Aplicar Clean Code de forma pragmática: claridad, cohesión, tipado útil, componentes enfocados y mínima complejidad.
- Priorizar accesibilidad, responsive design, SEO básico y rendimiento.
- Hacer push a `main` publica en producción (Vercel): hacerlo solo cuando el usuario lo pida.
- Explicar brevemente decisiones y verificaciones; distinguir hechos confirmados de propuestas.
