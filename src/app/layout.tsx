import type { Metadata } from "next";
import { ViewTransition } from "react";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- App Router root layout applies these design fonts globally. */

export const metadata: Metadata = {
  title: {
    default: "NexFlow Labs",
    template: "%s | NexFlow Labs",
  },
  description: "Desarrollo web, aplicaciones y soporte técnico desde Mosquera, Cundinamarca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200;300&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Fundido entre rutas con la View Transitions API; sin soporte, la navegación no cambia. */}
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
