export const demoSamples = [
  {
    title: "Factura DIAN UBL 2.1",
    format: "XML+PDF",
    company: "TechLogix Latam S.A.S. (Bogotá)",
  },
  {
    title: "Remisión de Carga Masiva",
    format: "OCR AR",
    company: "Transportes Andinos // Guía 884-A",
  },
  {
    title: "PO Internacional (Multidivisa)",
    format: "USD/COP",
    company: "Global Silicon Corp. // INV-9902",
  },
] as const;

export const invoice = {
  issuer: "TECHLOGIX LATAM S.A.S.",
  address: "Carrera 7 # 156-68, Edificio North Point, Bogotá",
  number: "FE-009412",
  nit: "901.442.119-4",
  date: "24/FEB/2025",
  items: [
    { description: "Cluster Compute H100 vNode (30D)", subtotal: "$ 24,500,000 COP" },
    { description: "Soporte Enterprise 24/7 SLA 99.99%", subtotal: "$ 3,800,000 COP" },
  ],
  subtotal: "$ 28,300,000",
  iva: "$ 5,377,000",
  retefuente: "-$ 707,500",
  total: "$ 32,969,500",
  cufe: "9a4b87e21a0f37ccb801a6b4c1029e88d1f0449a882bb4f729e92b8d002a",
} as const;

export const telemetry = {
  status: "VALIDATED",
  checksum: "0x9f8c0029b47e3b1d",
  confidence_score: 0.9998,
  document_type: "DIAN_UBL_INVOICE",
  parsed_entities: {
    issuer: {
      name: "TECHLOGIX LATAM S.A.S.",
      nit: "901.442.119-4",
      city: "Bogotá D.C.",
    },
    financials: {
      currency: "COP",
      subtotal: 28300000,
      iva_rate: 0.19,
      iva_amount: 5377000,
      retefuente_rate: 0.025,
      retefuente_amount: 707500,
      total_payable: 32969500,
    },
    cufe: invoice.cufe,
    dian_validation: {
      is_valid: true,
      dian_timestamp: "2025-02-24T14:28:11Z",
    },
  },
  deterministic_reconciliation: {
    math_delta: 0,
    purchase_order_match: "PO-2025-8891",
  },
} as const;

export const pipelinePhases = [
  {
    number: "01",
    eyebrow: "FASE 01 // ENTRADA",
    title: "Ingestión Multicanal",
    description:
      "Recepción pasiva y en tiempo real a través de Webhooks dedicados, buzones de Email corporativo, servidores SFTP seguros y WhatsApp Business API para operarios en ruta.",
    tags: ["IMAP IDLE", "SFTP AES", "META CLOUD"],
    icon: "/images/pipeline/phase-1.svg",
    tone: "coral",
  },
  {
    number: "02",
    eyebrow: "FASE 02 // VISIÓN COMPUTACIONAL",
    title: "Preprocesamiento Óptico",
    description:
      "Deskew automático (corrección angular de perspectiva), remoción de sombras de smartphones, realce adaptativo de contraste y OCR Zero-Shot para tipografías matriciales desgastadas.",
    tags: ["DESKEW 3D", "ZERO-SHOT OCR", "BILATERAL FILTER"],
    icon: "/images/pipeline/phase-2.svg",
    tone: "blue",
  },
  {
    number: "03",
    eyebrow: "FASE 03 // RAZONAMIENTO LLM",
    title: "Normalización Semántica",
    description:
      "Modelos fundacionales especializados y fine-tuned en taxonomía tributaria LATAM y DIAN UBL. Desambiguación semántica entre ICA, Retefuente, ReteIVA y tarifas diferenciales.",
    tags: ["TAXONOMÍA DIAN", "FINE-TUNED", "EMBEDDINGS 8K"],
    icon: "/images/pipeline/phase-3.svg",
    tone: "red",
  },
  {
    number: "04",
    eyebrow: "FASE 04 // DETERMINISMO",
    title: "Reglas & Disparo a DB",
    description:
      "Validación matemática estricta con cero tolerancia a alucinaciones. Si el total no coincide exactamente con la suma de ítems e impuestos, el documento pasa a cola de excepción humana supervisada.",
    tags: ["DELTA 0.00", "POSTGRES ACCORD", "HITL FALLBACK"],
    icon: "/images/pipeline/phase-4.svg",
    tone: "blue",
  },
] as const;

export const industryCases = [
  {
    image: "/images/industries/logistics.png",
    imageAlt: "",
    category: "TRANSPORTE & CADENA",
    title: "Conciliación de Manifiestos y Guías de Carga",
    description:
      "Lectura de guías terrestres arrugadas, selladas físicamente y fotos de remisiones enviadas por conductores vía WhatsApp. Extracción automática de placas, peso neto, fletes y anticipos de combustible.",
    metrics: [
      ["Ahorro en digitalización:", "-88% horas hombre"],
      ["Tiempo de conciliación:", "12 seg / manifiesto"],
    ],
  },
  {
    image: "/images/industries/retail.png",
    imageAlt: "",
    category: "RETAIL & DISTRIBUCIÓN",
    title: "Ingreso Masivo de Facturas de Proveedores",
    description:
      "Procesamiento de miles de facturas diarias en múltiples formatos tributarios. Cruce automático 3-Way Match con órdenes de compra existentes y recepción física de bodega en SAP, Oracle y Siigo.",
    metrics: [
      ["3-Way Match automático:", "96.4% sin intervención"],
      ["Cierre contable mensual:", "Reducido de 5 a 1 día"],
    ],
  },
  {
    image: "/images/industries/healthcare.png",
    imageAlt: "",
    category: "SALUD & IPS / EPS",
    title: "Autorizaciones y Órdenes Médicas",
    description:
      "Lectura de órdenes médicas manuscritas y códigos de procedimiento CUPS. Validación de vigencia de pólizas de salud y conciliación de cuentas médicas hospitalarias contra acuerdos contractuales.",
    metrics: [
      ["Identificación de glosas:", "Detección preventiva 99%"],
      ["Tiempo de radicación:", "De 48 hrs a 15 min"],
    ],
  },
] as const;
