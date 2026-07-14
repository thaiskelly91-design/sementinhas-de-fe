# Página de vendas — Atividades Bíblicas Infantis

Landing page responsiva criada para o ecossistema de atividades bíblicas infantis da Kelly.

## O que precisa ser preenchido antes de divulgar

Procure por `[PREENCHER` no arquivo `app/page.tsx`. Os campos estão agrupados nestas categorias:

1. **Identidade:** nome real do produto e foto/identidade visual da Kelly.
2. **Escala:** quantidade real de atividades e eBooks.
3. **Produto:** imagens reais do kit, das capas, das páginas internas e das amostras.
4. **Conteúdo:** outros itens que realmente fazem parte do kit.
5. **Prova social:** somente depoimentos reais, autorizados, com nome e função corretos.
6. **Diferenciais:** atualizações, suporte ou benefícios que de fato são oferecidos.
7. **Oferta:** bônus reais, preço praticado, condição de pagamento e link real do checkout.
8. **Garantia:** prazo, procedimento, canal de contato e condições exatamente iguais às do checkout.
9. **FAQ:** licença de impressão, faixa etária e dúvidas reais dos clientes.
10. **Rodapé:** contato, dados legais aplicáveis e links para as políticas.

Não publique a página enquanto houver informações essenciais marcadas como `[PREENCHER]`.

## Como trocar as imagens

1. Otimize as fotos e páginas reais em `.webp` ou `.jpg`.
2. Coloque os arquivos dentro da pasta `public`.
3. Substitua cada bloco `ProductPlaceholder` correspondente por uma imagem, por exemplo:

```tsx
<img src="/nome-da-imagem.webp" alt="Descrição clara do material" />
```

Use somente imagens reais do produto. A imagem `public/og.png` é a prévia de compartilhamento social da página.

## Como conectar o checkout

No arquivo `app/page.tsx`, troque os links de oferta (`href="#oferta"` e `href="#checkout-pendente"`) pela URL completa e real do checkout. Faça isso em todos os botões de compra, inclusive no botão fixo do celular.

## Publicação

O projeto está preparado para publicação pelo Sites. Antes de publicar a versão final, confira no celular:

- nome, quantidade, preços e garantia;
- todos os botões de compra;
- imagens e textos alternativos;
- depoimentos e respectivas autorizações;
- contato, políticas e dados legais.
