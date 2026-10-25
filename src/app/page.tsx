import { FigmaCorePage } from "@/components/figma/core-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core",
};

export default function HomePage() {
  return <FigmaCorePage />;
}
