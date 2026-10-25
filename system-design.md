# Diseño del sistema — sitio comercial NexFlow Labs

## Propósito

Documentar la arquitectura del sitio comercial de NexFlow Labs a partir de los frames Core, Neural Docs, Módulos y Cotizador & Terminal. Su objetivo es explicar la propuesta de valor y facilitar el contacto con nuevos clientes. No define la arquitectura de las aplicaciones de producción de NexFlow.

## Estado y decisiones

| Tema | Estado | Decisión actual |
|---|---|---|
| Framework web | Implementado | Next.js 16.4.3, App Router |
| Lenguaje | Implementado | TypeScript 5.9.3 |
| Estilos | Implementado | CSS global, sin framework de estilos |
| Renderizado | Verificado | Página prerenderizada estáticamente |
| Interactividad de demo | Confirmada | Estados visuales fijos; no inventar transiciones |
| Procesamiento documental | Fuera de alcance | No se ejecutan OCR ni modelos de IA |
| Contacto | Confirmado | Enlaces externos de WhatsApp o email |
| Leads dentro de la web | Fuera de alcance | Sin formulario conectado ni almacenamiento propio |
| Backend/API/base de datos | Fuera de alcance | No necesarios para la primera versión acordada |
| Hosting y librerías | Pendiente | Evaluar al crear el scaffold; no fijar proveedor todavía |

## Experiencia prevista

El archivo Figma contiene cuatro páginas principales:

- **Core:** hero, terminal/visualizador neuronal, cuatro pilares, compatibilidad/social proof y CTA de despliegue.
- **Neural Docs:** hero y telemetría, playground de ingestión, pipeline de cuatro fases, casos por industria y CTA de benchmarking.
- **Módulos:** introducción, tres módulos de producto con sus visualizadores y matriz de compatibilidad/integraciones.
- **Cotizador & Terminal:** configurador de cotización, telemetría de retorno, canales de contacto, plan sugerido y mesa de operaciones.

Los nombres, indicadores y resultados del diseño son contenido de presentación. Cifras, sellos, validaciones y datos DIAN de los mocks no deben mostrarse como resultados reales o garantías del servicio.

## Arquitectura conceptual

```text
Navegador
  └── Sitio Next.js
      ├── Secciones comerciales y contenido estático
      ├── Demo visual
      │   ├── Fixtures locales ficticios
      │   └── Datos y estados visuales precargados, sin procesamiento
      └── CTA externos: WhatsApp / email
```

- **Presentación:** Next.js para las rutas, layout, metadatos y composición de las cuatro páginas.
- **Contenido:** textos y datos de muestra versionados localmente. Separarlos de los componentes visuales para facilitar su edición.
- **Demo:** representación visual con datos y estados predefinidos. Mantener los controles sin acción hasta que Figma o el usuario especifiquen sus transiciones. No enviar documentos ni llamar a servicios de IA.
- **Contacto:** enlaces externos con valores aprobados por el negocio. La web no recibe ni persiste información del visitante.
- **Despliegue:** proveedor pendiente. Las páginas actuales se prerenderizan estáticamente; la escalabilidad serverless no es un requisito de esta versión.

## Límites de confianza y privacidad

- No manejar información sensible, archivos cargados por usuarios ni credenciales.
- Usar datos sintéticos en facturas, NIT, valores, CUFE y ejemplos sectoriales; no copiar documentos de clientes a la demo.
- Validar los destinos de WhatsApp/email antes del lanzamiento y evitar incluir datos personales en parámetros de URL.
- No incluir secretos en código cliente ni en fixtures.

## Calidad de producto

- Responsive desde móvil hasta escritorio.
- HTML semántico, navegación por teclado, focos visibles y contraste suficiente.
- Metadatos y contenido claros para SEO; optimizar imágenes del diseño.
- Respetar `prefers-reduced-motion` si se añaden animaciones.
- No representar datos de muestra como telemetría viva, procesamiento real, cumplimiento certificado o métricas verificadas.

## Evolución futura (no aprobada en este alcance)

Si NexFlow decide ofrecer carga y procesamiento real, tratarlo como una iniciativa separada. Primero definir autenticación, tipos/tamaño de archivos, consentimiento, retención y eliminación, controles de acceso, seguridad, proveedores de OCR/IA, validación determinista, observabilidad y costos. El procesamiento asíncrono podría requerir almacenamiento de objetos, cola y workers; no agregar esos componentes a la landing por anticipado. Las futuras aplicaciones pueden usar otras tecnologías.

## Pendientes antes del lanzamiento

- Confirmar nombres y destinos definitivos de WhatsApp y email.
- Confirmar el contenido/copy final, idioma(s) y requisitos SEO.
- Decidir si se conservará exactamente la composición del Figma en móvil y cómo adaptar el playground.
- Confirmar si se agregará un destino de WhatsApp; no está definido en Figma.
- Validar con NexFlow las cifras, sellos y afirmaciones de seguridad/servicio que aparecen en el diseño antes de publicar.
- Elegir el proveedor de despliegue y confirmar los destinos definitivos de los CTA.
