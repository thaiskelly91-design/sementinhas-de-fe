import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host") || "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Sementinhas da Fé | Atividades Bíblicas Infantis",
    description:
      "Oito coleções de atividades bíblicas infantis em PDF para aprender, criar e crescer na fé em casa, na igreja ou na Escola Bíblica.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: origin,
      title: "Sementinhas da Fé — Atividades Bíblicas Infantis",
      description: "Um ecossistema de atividades em PDF criado por Kelly para semear a fé brincando.",
      images: [
        {
          url: `${origin}/og-sementinhas.png`,
          width: 1536,
          height: 1024,
          alt: "Sementinhas da Fé, atividades bíblicas infantis criadas por Kelly",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sementinhas da Fé — Atividades Bíblicas Infantis",
      description: "Um ecossistema de atividades em PDF criado por Kelly para semear a fé brincando.",
      images: [`${origin}/og-sementinhas.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
