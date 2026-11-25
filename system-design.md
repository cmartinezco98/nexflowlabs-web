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

Patrones adaptados (nov 2026) de las páginas de producto de Apple (iPhone Air y Duo), K3A Solutions, Zennovia y ToGrow: solo diseño y movimiento, sin su marca, imágenes, textos, cifras ni formularios que guarden datos. El celular está dibujado en CSS (`device.tsx`) y no imita un modelo real.

1. **Barra de vidrio** fija que se asienta al bajar.
2. **Hero:** "Construimos su software"; un celular con Alfred sube al cargar, se inclina al bajar y lo rodean tres avisos de vidrio.
3. **Cinta de servicios** en movimiento continuo.
4. **Párrafo** con frases clave que se encienden con el scroll.
5. **Alfred, de frente:** el celular gira de canto a frente mientras la sección queda fija.
6. **Recorra un pedido:** control segmentado de vidrio que cambia la pantalla (carta, pedido, cocina, pago).
7. **Servicios** en tarjetas de vidrio.
8. **Cómo trabajamos:** tres pasos con una línea que se llena.
9. **Arme su solicitud:** tres preguntas que arman un mensaje para WhatsApp o correo.
10. **Preguntas frecuentes, cierre en vidrio, pie** y botón flotante de WhatsApp.

Las animaciones ligadas al scroll usan CSS `animation-timeline` (Chrome y Edge); en otros navegadores el contenido queda visible, de frente y quieto.

## Arquitectura

```text
Navegador
  └── Sitio Next.js (estático)
      ├── src/data/home.ts           contenido
      ├── src/components/home/       secciones; order-tour y brief-wizard son de cliente; device dibuja el celular
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
