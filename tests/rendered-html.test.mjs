import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
}

test("server-renders the complete Sementinhas de Fé landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  const requiredCopy = [
    "Toda mãe cristã sonha em ver o filho amando a Bíblia.",
    "mais de 400 atividades bíblicas prontas para imprimir",
    "Quem preparou isso pra você",
    "Isso já aconteceu com você?",
    "O Método Sementinha",
    "O que vem dentro do Sementinhas de Fé",
    "Para quem é o Sementinhas de Fé",
    "Por que confiar",
    "O que as famílias podem viver com o material",
    "Material completo + 5 bônus especiais",
    "Perguntas frequentes",
    "Seu filho não precisa esperar crescer para conhecer a Bíblia",
  ];

  for (const copy of requiredCopy) {
    assert.ok(html.includes(copy), `expected rendered HTML to include: ${copy}`);
  }

  assert.ok(html.includes('id="foto-criadora"'));
  assert.ok(html.includes('src="foto-thais-kelly.jpg"'));
  assert.ok(html.includes("R$27,00"));
  assert.ok(html.includes("Cartões de Promessas Bíblicas"));
  assert.ok(html.includes("Desafio 7 Dias com a Bíblia"));
  assert.ok(html.includes("Quadro de Recompensas Pequenos Heróis da Fé"));
  assert.equal((html.match(/class="bonus-card"/g) ?? []).length, 5);
  assert.equal((html.match(/class="testimonial-card"/g) ?? []).length, 5);
  assert.ok(html.includes("Relatos ilustrativos"));
  assert.doesNotMatch(html, /R\$19,90|primeiro grupo|primeira leva/i);
  assert.doesNotMatch(html, /oferta de lançamento|fase de lançamento|bônus de lançamento/i);
  assert.doesNotMatch(html, /contato@SEUDOMINIO\.com\.br|mailto:/i);
  assert.ok(html.includes("PIXEL_META_ADS_AQUI"));
  assert.ok(html.includes("GA_AQUI"));
  assert.ok(html.includes("/og-400.png"));
  assert.doesNotMatch(html, /lorem ipsum|insira o texto aqui|headline vazia|a definir/i);

  const checkoutLinks = html.match(/href="https:\/\/SEU-CHECKOUT-AQUI\.com"/g) ?? [];
  assert.ok(checkoutLinks.length >= 4, `expected at least four checkout CTAs, found ${checkoutLinks.length}`);
});

test("GitHub Pages export is static and self-contained", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");

  assert.ok(html.includes("mais de 400 atividades bíblicas prontas para imprimir"));
  assert.ok(html.includes("PIXEL_META_ADS_AQUI"));
  assert.ok(html.includes("GA_AQUI"));
  assert.ok(html.includes("og-400.png"));
  assert.ok(html.includes("foto-thais-kelly.jpg"));
  assert.ok(html.includes("R$27,00"));
  assert.equal((html.match(/class="bonus-card"/g) ?? []).length, 5);
  assert.equal((html.match(/class="testimonial-card"/g) ?? []).length, 5);
  assert.ok(html.includes("Relatos ilustrativos"));
  assert.doesNotMatch(html, /R\$19,90|primeiro grupo|primeira leva/i);
  assert.doesNotMatch(html, /oferta de lançamento|fase de lançamento|bônus de lançamento/i);
  assert.doesNotMatch(html, /contato@SEUDOMINIO\.com\.br|mailto:/i);
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /\/(?:_build|_next)\//i);

  const checkoutLinks = html.match(/href="https:\/\/SEU-CHECKOUT-AQUI\.com"/g) ?? [];
  assert.ok(checkoutLinks.length >= 4, `expected at least four checkout CTAs, found ${checkoutLinks.length}`);
});
