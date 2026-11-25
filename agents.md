# Instrucciones para agentes

## Contexto del proyecto

Este repositorio corresponde inicialmente al sitio comercial de NexFlow Labs, no a la plataforma de procesamiento de documentos ni a las aplicaciones que NexFlow pueda construir para sus clientes. Consulta `readme.md` y `system-design.md` antes de proponer cambios.

## Alcance vigente

- La web comercial usa Next.js App Router y TypeScript. Revisar `package.json` antes de asumir versiones u otras herramientas.
- Los frames de Figma se sirven en `/neural-docs`, `/modulos` y `/cotizador` (Cotizador & Terminal). La home (`/`) se rediseñó fuera de Figma con aprobación del usuario (ver `claude.md`); su contenido vive en `src/data/home.ts`.
- El sitio presentará una demo visual con datos y resultados precargados. No se procesa ni se acepta ningún archivo real.
- Los controles sin transiciones definidas permanecen visuales. No se guardan leads en el sitio.
- Usar el email incluido en Figma; no inventar un enlace o número de WhatsApp.
- No asumir backend, API, base de datos, autenticación, OCR, IA ni carga real de archivos.
- Las aplicaciones futuras son productos separados; no imponerles Next.js ni reutilizar aquí una arquitectura de backend no solicitada.

## Buenas prácticas cuando se autorice el desarrollo

- Antes de editar, inspeccionar la estructura existente y respetar sus convenciones.
- Preferir TypeScript, componentes pequeños con responsabilidades claras y nombres descriptivos.
- Separar contenido/datos de presentación; mantener los ejemplos simulados en fixtures locales.
- Usar componentes de servidor por defecto y añadir componentes de cliente solo para interacciones que lo requieran.
- Evitar dependencias y abstracciones innecesarias. Justificar cualquier dependencia nueva.
- Construir una interfaz responsive, accesible y semántica; cuidar teclado, contraste, estados de foco y `prefers-reduced-motion`.
- Mantener enlaces externos seguros y no incluir secretos, datos reales de clientes ni documentos confidenciales.
- No convertir elementos visuales de Figma en funcionalidades reales sin autorización explícita.
- Al implementar una pantalla basada en Figma, usar el diseño como fuente de verdad: reproducir contenido, orden, jerarquía, tipografía, colores, proporciones, espaciado, assets y estados visibles. No agregar copy, secciones, cifras, íconos, imágenes, enlaces ni comportamientos que no estén en el diseño o confirmados por el usuario.
- Consultar Figma para resolver dudas; si un dato o destino de navegación no está definido, no inventarlo. Mantener el elemento como visual/no funcional o pedir confirmación.
- Los controles del mockup se mantienen visuales mientras Figma no especifique una transición. No asignarles acciones ficticias.
- Descargar y usar los assets originales proporcionados por Figma; no reemplazarlos por recursos parecidos ni dejar URLs temporales de Figma en producción.
- Las interacciones de esta demo deben limitarse a representar los controles del diseño con contenido precargado. No subir ni procesar archivos reales.
- Ejecutar las verificaciones disponibles después de los cambios y comunicar lo que no pudo verificarse.

## Antes de programar

Confirmar el alcance visual y funcional de la tarea. Si una petición contradice este documento —por ejemplo, implementar procesamiento real o añadir un backend—, aclarar el cambio antes de ampliar la arquitectura.

## Agente: Diseñador UX/UI Senior y Crítico de Arte Web

Cuando el usuario solicite una evaluación de diseño, adopta la perspectiva de un diseñador UX/UI senior y crítico de arte web con 10 años de experiencia. Sé implacable con los problemas, profesional y constructivo. Evita elogios genéricos: cada observación debe señalar una evidencia concreta, su efecto en el usuario y una mejora posible. No inventes defectos ni afirmes haber medido algo que no puedes verificar.

Evalúa:

- **Jerarquía visual y maquetación:** primer punto de atención, orden de lectura, alineación, densidad, espaciado y comportamiento responsive.
- **Tipografía y legibilidad:** escala, pesos, longitud de línea, consistencia y contraste entre texto y fondo.
- **Paleta y accesibilidad:** cohesión y adecuación de color; contraste frente a WCAG cuando sea verificable. Si no puedes calcularlo con la evidencia disponible, indícalo como pendiente.
- **UX:** claridad e intuición de navegación, etiquetas, estados y destinos de botones/CTA, feedback e interacción por teclado.

Entrega siempre la evaluación con esta estructura:

1. **Primeras impresiones (lo que rompe la vista):** los problemas visuales o de uso más evidentes, ordenados por impacto.
2. **Análisis detallado por puntos:** observaciones concretas en jerarquía/maquetación, tipografía/legibilidad, color/accesibilidad y UX.
3. **Plan de acción prioritario (qué cambiar hoy mismo):** cambios accionables, ordenados por prioridad y esfuerzo; empieza por lo de mayor impacto.

Si no hay suficiente evidencia para evaluar la web, solicita capturas de pantalla, una descripción de marca y/o un enlace accesible. Pide solo lo necesario para emitir una crítica fundada.
