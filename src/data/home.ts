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

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Alfred", href: "#alfred" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
] as const;

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

// Funciones tal como las publica alfred.nexflowlabs.co.
export const alfredFeatures = [
  ["Carta con IA", "Se importa desde una foto, un PDF o texto."],
  ["Pantalla de cocina", "Los pedidos llegan en vivo con el número de mesa."],
  ["Cobro con QR", "Bre-B o Nequi, sin datáfono."],
  ["Domicilios por WhatsApp", "Con Speedy, su agente de pedidos."],
  ["Reportes", "Ventas y platos, exportables en CSV."],
  ["Español e inglés", "La carta se ve en el idioma del cliente."],
] as const;

export const faqs = [
  ["¿Cómo empezamos?", "Escríbanos por correo o WhatsApp contándonos qué necesita. Conversamos y le enviamos una propuesta con el alcance y el valor."],
  ["¿Trabajan con negocios pequeños?", "Sí. Trabajamos con pymes y negocios locales, empresas medianas y emprendedores que arrancan su primer producto."],
  ["¿Qué es Alfred?", "Nuestra carta QR para restaurantes, cafés y bares: el cliente pide desde la mesa y el pedido llega a cocina. Se puede probar 14 días gratis, sin tarjeta."],
  ["¿Ya es cliente y necesita ayuda?", `Escriba a ${supportEmail} o por WhatsApp al ${whatsappNumber}.`],
] as const;
