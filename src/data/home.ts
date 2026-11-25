// Contenido de la home. Los datos de Alfred salen de alfred.nexflowlabs.co; el pedido de la demo es un ejemplo.

export const contactEmail = "contacto@nexflowlabs.co";
export const supportEmail = "soporte@nexflowlabs.co";
export const whatsappNumber = "+57 315 246 6020";
export const location = "Mosquera, Cundinamarca";

const mailBody = [
  "Hola, equipo de NexFlow Labs:",
  "",
  "Empresa o proyecto:",
  "Qué necesitamos (sitio web, aplicación o soporte):",
  "Para cuándo lo necesitamos:",
].join("\n");

export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Nuevo proyecto",
)}&body=${encodeURIComponent(mailBody)}`;

export const whatsappHref = `https://wa.me/573152466020?text=${encodeURIComponent(
  "Hola, NexFlow Labs. Quiero contarles sobre un proyecto.",
)}`;

export const alfredHref = "https://alfred.nexflowlabs.co/";

export const services = [
  {
    slug: "web",
    name: "Desarrollo web",
    detail: "Sitios y landing pages",
    icon: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01",
    text: "Una página clara que explica qué hace su negocio y lleva a sus clientes a escribirle, comprar o reservar.",
    examples: ["Sitio de empresa", "Landing page", "Catálogo en línea"],
  },
  {
    slug: "apps",
    name: "Aplicaciones",
    detail: "Web y móviles",
    icon: "M7 2h10v20H7zM11 18h2M3 8v8M21 8v8",
    text: "Herramientas a la medida para vender, tomar pedidos o llevar su operación. Alfred, nuestra carta QR para restaurantes, es una de ellas.",
    examples: ["Aplicación web", "Aplicación móvil", "Panel de administración"],
  },
  {
    slug: "soporte",
    name: "Soporte técnico",
    detail: "Mantenimiento y ayuda",
    icon: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z",
    text: "Mantenemos sus sistemas al día y atendemos cuando algo falla, para que su equipo siga trabajando.",
    examples: ["Mantenimiento", "Ajustes y mejoras", "Atención de fallas"],
  },
] as const;

export const audiences = ["Pymes y negocios locales", "Empresas medianas", "Emprendedores y startups"] as const;

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Alfred", href: "#alfred" },
  { label: "Contacto", href: "#solicitud" },
] as const;

export const ticker = [
  "Sitios web",
  "Landing pages",
  "Aplicaciones web",
  "Aplicaciones móviles",
  "Paneles de administración",
  "Mantenimiento",
  "Soporte técnico",
] as const;

export const workSteps = [
  { when: "Primero", name: "Conversamos", text: "Nos cuenta qué necesita y entendemos cómo funciona su negocio." },
  { when: "Después", name: "Construimos", text: "Diseñamos y desarrollamos, mostrándole avances para ajustar a tiempo." },
  { when: "Siempre", name: "Acompañamos", text: "Publicamos y le damos soporte cuando lo necesite." },
] as const;

// Recorrido de un pedido en Alfred, según alfred.nexflowlabs.co. Platos y precios de las pantallas son de ejemplo.
export const alfredStory = [
  { tab: "Carta", label: "Carta con IA", title: "Suba su carta", text: "Con una foto, un PDF o el texto, Alfred arma la carta digital." },
  { tab: "Pedido", label: "Pedido desde la mesa", title: "El cliente pide", text: "Escanea el QR de su mesa y pide desde el celular, sin descargar nada." },
  { tab: "Cocina", label: "Pantalla de cocina", title: "Llega a cocina", text: "El pedido aparece en vivo con el número de mesa." },
  { tab: "Pago", label: "Cobro con QR", title: "Paga sin datáfono", text: "Con Bre-B o Nequi." },
] as const;

export const sampleDishes = [
  { qty: 2, name: "Hamburguesa de la casa", price: 28000 },
  { qty: 1, name: "Papas rústicas", price: 12000 },
  { qty: 2, name: "Limonada de coco", price: 9000 },
] as const;

export const briefQuestions = [
  { key: "need", question: "¿Qué necesita?", options: ["Un sitio web", "Una aplicación", "Soporte técnico", "Aún no lo sé"] },
  { key: "when", question: "¿Para cuándo?", options: ["Lo antes posible", "En 1 a 3 meses", "Sin fecha todavía"] },
  { key: "who", question: "¿Su negocio es…?", options: ["Pyme o negocio local", "Empresa mediana", "Emprendimiento o startup"] },
] as const;

export const faqs = [
  ["¿Cómo empezamos?", "Escríbanos por correo o WhatsApp contándonos qué necesita. Conversamos y le enviamos una propuesta con el alcance y el valor."],
  ["¿Trabajan con negocios pequeños?", "Sí. Trabajamos con pymes y negocios locales, empresas medianas y emprendedores que arrancan su primer producto."],
  ["¿Qué es Alfred?", "Nuestra carta QR para restaurantes, cafés y bares: el cliente pide desde la mesa y el pedido llega a cocina. Se puede probar 14 días gratis, sin tarjeta."],
  ["¿Ya es cliente y necesita ayuda?", `Escriba a ${supportEmail} o por WhatsApp al ${whatsappNumber}.`],
] as const;
