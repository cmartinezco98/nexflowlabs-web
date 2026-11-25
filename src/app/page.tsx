import { HomePage } from "@/components/home/home-page";
import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  title: "Desarrollo web, aplicaciones y soporte técnico",
  description:
    "NexFlow Labs construye sitios web y aplicaciones y da soporte técnico a pymes, empresas medianas y startups. Creadores de Alfred, la carta QR para restaurantes.",
};

export default function Page() {
  return <HomePage />;
}
