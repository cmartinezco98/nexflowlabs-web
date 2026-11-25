# NexFlow Labs — Web comercial

## Resumen

Sitio de NexFlow Labs S.A.S. (Mosquera, Cundinamarca), empresa de desarrollo web, aplicaciones y soporte técnico para pymes y negocios locales, empresas medianas y emprendedores. Presenta los tres servicios y a **Alfred** (la carta QR para restaurantes, https://alfred.nexflowlabs.co) como proyecto destacado.

## Estado

Una sola página (`/`) en Next.js, prerenderizada estáticamente y desplegada en Vercel desde `main` (https://www.nexflowlabs.co).

En noviembre de 2026 se retiraron las páginas de automatización de documentos (`/neural-docs`, `/modulos`, `/cotizador`), que venían del diseño en Figma. Sus URLs redirigen a la home (ver `next.config.ts`).

## Contenido y datos confirmados

- Todo el texto vive en `src/data/home.ts`.
- Contacto: `contacto@nexflowlabs.co` (nuevos proyectos), `soporte@nexflowlabs.co` (clientes) y WhatsApp +57 315 246 6020.
- Ubicación: Mosquera, Cundinamarca. El NIT no se publica.
- Las funciones de Alfred se toman de su propia página. El pedido de la demo de Alfred es un ejemplo ficticio.

## Fuera de alcance

- Backend, base de datos, autenticación o formularios que guarden datos. El contacto es por correo o WhatsApp.
- Precios, plazos, clientes, cifras o certificaciones que el negocio no haya confirmado.

## Stack

- Next.js 16.4.6 (App Router), React 19.3, TypeScript.
- CSS propio en `src/app/home.css` (paleta Noche) y `src/app/globals.css` (base mínima). Sin Tailwind ni librerías de UI.
- Tipografías:
  - Elianto, solo en el nombre de la empresa (`public/fonts`).
  - Oxanium, en los títulos (Google Fonts, OFL).
  - Nidus Sans, en los textos cortos (`public/fonts`, CC BY-ND 4.0, con crédito en el pie).
  - Space Grotesk, en los párrafos.
- Transiciones con CSS y `ViewTransition` de React. Todas respetan `prefers-reduced-motion`.

## Desarrollo local

```bash
npm install
npm run dev
```

Verificaciones: `npm run typecheck`, `npm run lint` y `npm run build`.

## Documentación relacionada

- [`agents.md`](./agents.md): reglas de trabajo para asistentes.
- [`claude.md`](./claude.md): instrucciones para Claude.
- [`system-design.md`](./system-design.md): estructura y decisiones.
