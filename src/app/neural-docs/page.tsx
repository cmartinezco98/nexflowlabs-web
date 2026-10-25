import { BenchmarkSection } from "@/components/benchmark-section";
import { DemoPlayground } from "@/components/demo-playground";
import { HeroSection } from "@/components/hero-section";
import { IndustrySection } from "@/components/industry-section";
import { PipelineSection } from "@/components/pipeline-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexFlow Neural Docs",
};

export default function NeuralDocsPage() {
  return (
    <>
      <SiteHeader activePage="neural-docs" />
      <main>
        <HeroSection />
        <DemoPlayground />
        <PipelineSection />
        <IndustrySection />
        <BenchmarkSection />
      </main>
      <SiteFooter />
    </>
  );
}
