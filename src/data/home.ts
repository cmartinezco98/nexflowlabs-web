// Contenido de la home. Empresas, NIT y valores de los documentos son ficticios (datos de ejemplo).

export const contactEmail = "contacto@nexflowlabs.co";

const mailBody = [
  "Hola, equipo de NexFlow Labs:",
  "",
  "Empresa:",
  "Documentos que digitamos hoy (facturas, guías, órdenes…):",
  "Volumen aproximado al mes:",
  "ERP o sistema contable:",
].join("\n");

export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Diagnóstico de documentos",
)}&body=${encodeURIComponent(mailBody)}`;

export const navigation = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Industrias", href: "#industrias" },
  { label: "Precios", href: "/cotizador" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const morePages = [
  { label: "Módulos", href: "/modulos" },
  { label: "Neural Docs", href: "/neural-docs" },
  { label: "Cotizador", href: "/cotizador" },
] as const;

export const integrations = ["Siigo", "SAP", "Alegra", "Helisa", "World Office"] as const;

export const stages = [
  { name: "Llega", grow: 1, tone: "navy", text: "Primero llega por correo, WhatsApp, SFTP o webhook, como ya se lo envían." },
  { name: "Se lee", grow: 2.2, tone: "blue", text: "Luego se lee: PDF, XML UBL 2.1 o la foto torcida de una guía." },
  { name: "Se valida", grow: 2.2, tone: "coral", text: "Después se recalculan IVA, retenciones y totales, y se verifica el CUFE." },
  { name: "Entra al ERP", grow: 1.3, tone: "paper", text: "Al final entra a Siigo, SAP o Alegra. Si no cuadra, lo revisa una persona." },
] as const;

export const industries = [
  {
    name: "Transporte",
    slug: "transporte",
    icon: "M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    detail: "Guías y fletes",
    docs: [
      { format: "Foto", title: "Guía o remesa terrestre", note: "Placa, peso neto, flete y anticipo de combustible", to: "Conciliación de fletes" },
      { format: "PDF", title: "Manifiesto de carga", note: "Número, origen, destino y valor del viaje", to: "ERP o Excel" },
      { format: "XML", title: "Factura de combustible", note: "Galones, NIT de la estación, IVA y retenciones", to: "Siigo o SAP" },
    ],
  },
  {
    name: "Comercio",
    slug: "comercio",
    icon: "M4 5h2l2 10h10l2-7H7M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    detail: "Proveedores y bodega",
    docs: [
      { format: "XML", title: "Factura de proveedor", note: "NIT, ítems, IVA, retefuente, ReteICA y CUFE", to: "Siigo, SAP o Alegra" },
      { format: "PDF", title: "Orden de compra", note: "Cantidades y precios para cruzar con la factura", to: "Cruce de 3 vías" },
      { format: "Foto", title: "Remisión de bodega", note: "Lo que de verdad llegó, contra lo facturado", to: "Inventario" },
    ],
  },
  {
    name: "Salud",
    slug: "salud",
    icon: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
    detail: "IPS y clínicas",
    docs: [
      { format: "Escaneo", title: "Orden médica", note: "Paciente, médico y códigos CUPS", to: "Sistema de la IPS" },
      { format: "PDF", title: "Autorización de EPS", note: "Número, vigencia y servicios autorizados", to: "Radicación" },
      { format: "JSON", title: "Archivo RIPS", note: "Campos completos y coherentes antes de radicar", to: "Radicación" },
    ],
  },
  {
    name: "Restaurantes",
    slug: "restaurantes",
    icon: "M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 3-3 7h3v11",
    detail: "Compras y reservas",
    docs: [
      { format: "XML", title: "Factura de insumos", note: "Ítems, cantidades, IVA y proveedor", to: "Inventario y costos" },
      { format: "Voz", title: "Reserva por llamada o WhatsApp", note: "Nombre, personas y hora, confirmadas por un agente", to: "Libro de reservas" },
      { format: "QR", title: "Pedido desde la carta", note: "Mesa y platos, directo a cocina", to: "POS" },
    ],
  },
] as const;

export type SampleDocument = {
  id: string;
  label: string;
  kind: string;
  issuer: string;
  nit: string;
  number: string;
  date: string;
  lines: { description: string; qty: number; price: number }[];
  ivaRate: number;
  retentionRate: number;
  retentionLabel: string;
  destination: string;
};

export const sampleDocuments: SampleDocument[] = [
  {
    id: "factura",
    label: "Factura de proveedor",
    kind: "Factura electrónica de venta",
    issuer: "Distribuidora La Sabana S.A.S.",
    nit: "900.418.275-3",
    number: "FE-4471",
    date: "18 nov 2026",
    lines: [
      { description: "Resma papel carta 75 g", qty: 40, price: 18500 },
      { description: "Tóner láser negro 58A", qty: 6, price: 285000 },
      { description: "Silla ergonómica", qty: 2, price: 650000 },
    ],
    ivaRate: 0.19,
    retentionRate: 0.025,
    retentionLabel: "Retefuente compras 2,5 %",
    destination: "Siigo",
  },
  {
    id: "guia",
    label: "Guía de transporte",
    kind: "Remesa terrestre de carga",
    issuer: "Transportes del Valle S.A.S.",
    nit: "901.230.884-1",
    number: "RM-2290",
    date: "17 nov 2026",
    lines: [
      { description: "Flete Bogotá – Buenaventura, 18.400 kg", qty: 1, price: 4200000 },
      { description: "Cargue y descargue", qty: 2, price: 180000 },
    ],
    ivaRate: 0,
    retentionRate: 0.01,
    retentionLabel: "Retefuente transporte 1 %",
    destination: "SAP",
  },
  {
    id: "orden",
    label: "Orden de compra",
    kind: "Orden de compra OC-0418",
    issuer: "Su empresa (comprador)",
    nit: "900.000.000-0",
    number: "OC-0418",
    date: "10 nov 2026",
    lines: [
      { description: "Resma papel carta 75 g", qty: 40, price: 18500 },
      { description: "Tóner láser negro 58A", qty: 6, price: 285000 },
      { description: "Silla ergonómica", qty: 2, price: 650000 },
    ],
    ivaRate: 0.19,
    retentionRate: 0,
    retentionLabel: "Sin retención",
    destination: "Alegra",
  },
];

export const faqs = [
  ["¿Qué documentos leen?", "Facturas electrónicas en XML y PDF, órdenes de compra, guías y remesas, manifiestos, órdenes médicas y autorizaciones. También fotos tomadas con el celular, aunque estén torcidas o con sombra."],
  ["¿Por dónde llegan?", "Por donde ya le llegan hoy: un buzón de correo, WhatsApp, una carpeta SFTP o un webhook de su sistema. No hay que cambiar la forma en que sus proveedores le envían."],
  ["¿Con qué sistemas se conectan?", "Siigo, SAP, Alegra, Helisa y World Office. Si no usa un ERP, le entregamos el resultado en Excel o CSV."],
  ["¿Qué pasa si un documento no cuadra?", "No entra. Si el total no es exactamente la suma de ítems, impuestos y retenciones, el documento pasa a una persona de su equipo con el campo que falla marcado."],
  ["¿Revisan la parte tributaria?", "Sí. Verificamos el CUFE y la estructura UBL 2.1 de cada factura electrónica y recalculamos IVA, retefuente, ReteICA y ReteIVA."],
  ["¿Tengo que cambiar mi software?", "No. Trabajamos sobre lo que ya tiene; su equipo sigue usando el mismo ERP y las mismas carpetas."],
  ["¿También atienden llamadas?", "Sí. Nuestros agentes de voz y WhatsApp toman reservas y pedidos y los pasan al POS, y las cartas QR envían la comanda directo a cocina."],
  ["¿Cuánto cuesta?", "Depende del volumen de documentos y de los módulos que necesite. En el cotizador puede hacer una estimación antes de hablar con nosotros."],
] as const;
