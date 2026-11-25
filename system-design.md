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

Patrones adaptados (nov 2026) de K3A Solutions, Zennovia y ToGrow; solo diseño y movimiento, sin su contenido, cifras ni formularios que guarden datos.

1. **Barra flotante tipo píldora** que se compacta al bajar.
2. **Hero:** "Construimos su software" sobre una cuadrícula de plano con línea de escaneo; Alfred en un teléfono y una pantalla de cocina que flotan.
3. **Cinta de servicios** en movimiento continuo.
4. **Frase** que se ilumina con el scroll.
5. **Servicios en acordeón** y público.
6. **Cómo trabajamos:** tres pasos con una línea que se llena.
7. **Alfred:** cuatro pasos (carta, pedido, cocina, pago) con el teléfono fijo y la pantalla cambiando.
8. **Arme su solicitud:** tres preguntas que arman un mensaje; el visitante lo envía por WhatsApp o correo.
9. **Preguntas frecuentes, cierre, pie** y botón flotante de WhatsApp.

Las animaciones ligadas al scroll usan CSS `animation-timeline` (Chrome y Edge); en otros navegadores el contenido queda visible y quieto.

## Arquitectura

```text
Navegador
  └── Sitio Next.js (estático)
      ├── src/data/home.ts           contenido
      ├── src/components/home/       secciones; service-accordion y brief-wizard son de cliente
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
