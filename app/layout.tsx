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
    title: "Sementinhas de Fé | Atividades Bíblicas para Imprimir",
    description:
      "30 atividades bíblicas prontas para imprimir e ensinar a Palavra de Deus em só 10 minutos por dia.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: origin,
      title: "Sementinhas de Fé",
      description: "30 atividades bíblicas prontas para imprimir. 10 minutos por dia.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Sementinhas de Fé — 30 atividades bíblicas prontas para imprimir",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sementinhas de Fé",
      description: "30 atividades bíblicas prontas para imprimir. 10 minutos por dia.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head
        dangerouslySetInnerHTML={{
          __html: "<!-- PIXEL_META_ADS_AQUI -->\n<!-- GA_AQUI -->",
        }}
      />
      <body>{children}</body>
    </html>
  );
}
