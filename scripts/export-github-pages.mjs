import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../docs/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("github-pages-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://example.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Não foi possível renderizar a página: HTTP ${response.status}`);
}

const renderedHtml = await response.text();
const bodyMatch = renderedHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

if (!bodyMatch) {
  throw new Error("O conteúdo principal da página não foi encontrado.");
}

const body = bodyMatch[1]
  .replace(/<script\b[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["'](?:stylesheet|preload|modulepreload)["'][^>]*>/gi, "")
  .replace(/<!--(?:\$|\/\$|\$\?|\$!)-->/g, "")
  .trim();

const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <!-- PIXEL_META_ADS_AQUI -->
    <!-- GA_AQUI -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#FFF8ED">
    <title>Sementinhas de Fé | Atividades Bíblicas para Imprimir</title>
    <meta name="description" content="Mais de 400 atividades bíblicas prontas para imprimir e ensinar a Palavra de Deus em só 10 minutos por dia.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Sementinhas de Fé">
    <meta property="og:description" content="Mais de 400 atividades bíblicas prontas para imprimir. 10 minutos por dia.">
    <meta property="og:image" content="og-400.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Sementinhas de Fé">
    <meta name="twitter:description" content="Mais de 400 atividades bíblicas prontas para imprimir. 10 minutos por dia.">
    <meta name="twitter:image" content="og-400.png">
    <link rel="icon" href="favicon.png">
    <style>${css}</style>
  </head>
  <body>
${body}
  </body>
</html>
`;

if (/\/(?:_build|_next)\//.test(html)) {
  throw new Error("A exportação ainda contém dependências do servidor.");
}

await mkdir(outputRoot, { recursive: true });
await writeFile(new URL("index.html", outputRoot), html, "utf8");
await writeFile(new URL(".nojekyll", outputRoot), "", "utf8");
await copyFile(new URL("../public/og-400.png", import.meta.url), new URL("og-400.png", outputRoot));
await copyFile(new URL("../public/favicon.png", import.meta.url), new URL("favicon.png", outputRoot));

console.log("GitHub Pages exportado em docs/");
