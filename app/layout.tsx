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
    title: "Atividades Bíblicas Infantis | por Kelly",
    description:
      "Atividades bíblicas infantis em PDF para ensinar a Palavra com criatividade, afeto e propósito em casa ou na igreja.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: origin,
      title: "Atividades bíblicas para semear a fé brincando",
      description: "Um ecossistema de atividades infantis em PDF criado por Kelly.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "Atividades bíblicas infantis criadas por Kelly",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Atividades bíblicas para semear a fé brincando",
      description: "Um ecossistema de atividades infantis em PDF criado por Kelly.",
      images: [`${origin}/og.png`],
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
