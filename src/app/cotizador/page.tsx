import { FigmaCotizadorPage } from "@/components/figma/cotizador-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal de Cotización & Diagnóstico Operativo",
};

export default function CotizadorPage() {
  return <FigmaCotizadorPage />;
}
