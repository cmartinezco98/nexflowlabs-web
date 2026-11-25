# Diseño del sistema — sitio comercial NexFlow Labs

## Propósito

Presentar a NexFlow Labs como empresa de desarrollo web, aplicaciones y soporte técnico, mostrar a Alfred como proyecto destacado y facilitar el contacto por correo o WhatsApp. No define la arquitectura de las aplicaciones que NexFlow construye para sus clientes.

## Estado y decisiones

| Tema | Estado | Decisión actual |
|---|---|---|
| Framework web | Implementado | Next.js 16.4.6, App Router |
| Lenguaje | Implementado | TypeScript |
| Estilos | Implementado | CSS propio (`home.css`, `globals.css`), sin framework |
| Renderizado | Verificado | Una página prerenderizada estáticamente |
| Hosting | Implementado | Vercel, despliegue automático desde `main` |
| Páginas de documentos | Retiradas (nov 2026) | `/neural-docs`, `/modulos` y `/cotizador` redirigen a `/` |
| Contacto | Confirmado | Correo (contacto@, soporte@) y WhatsApp +57 315 246 6020 |
| Leads dentro de la web | Fuera de alcance | Sin formularios ni almacenamiento propio |
| Backend/API/base de datos | Fuera de alcance | No necesarios |

## Estructura de la home

1. **Cabecera:** nombre en Elianto, navegación (Servicios, Alfred, Preguntas, Contacto) y botón de correo.
2. **Hero:** "Construimos su software", con botones de correo y WhatsApp y tres tarjetas que llevan a cada servicio.
3. **Servicios:** desarrollo web, aplicaciones y soporte técnico, y el público al que se dirigen.
4. **Alfred:** qué es, una comanda de ejemplo interactiva (mesa → cocina → listo) y sus funciones según alfred.nexflowlabs.co.
5. **Preguntas frecuentes.**
6. **Contacto:** correo, WhatsApp y correo de soporte para clientes.
7. **Pie:** razón social y ciudad, enlaces y créditos tipográficos.

## Arquitectura

```text
Navegador
  └── Sitio Next.js (estático)
      ├── src/data/home.ts           contenido
      ├── src/components/home/       secciones; order-ticket y reveal son de cliente
      └── CTA externos: mailto / wa.me / alfred.nexflowlabs.co
```

## Límites de confianza y privacidad

- La web no recibe ni guarda información del visitante.
- Los ejemplos usan datos ficticios y se marcan como ejemplo.
- No incluir secretos en el código cliente.

## Calidad de producto

- Responsive desde móvil hasta escritorio.
- HTML semántico, teclado, focos visibles y contraste AA.
- Las transiciones usan solo opacidad y transform y se desactivan con `prefers-reduced-motion`.
- No publicar cifras, clientes, precios o plazos sin confirmación del negocio.

## Pendientes

- Confirmar el copy de servicios y de las preguntas frecuentes.
- Agregar otros proyectos o clientes cuando haya permiso para nombrarlos.
- Imágenes reales: capturas de Alfred o de otros proyectos.
