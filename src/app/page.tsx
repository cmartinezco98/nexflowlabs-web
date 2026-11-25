import { HomePage } from "@/components/home/home-page";
import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  title: "Automatización de facturas y documentos contables",
  description:
    "NexFlow Labs lee sus facturas, guías y órdenes, las valida con las reglas de la DIAN y las carga en Siigo, SAP o Alegra.",
};

export default function Page() {
  return <HomePage />;
}
