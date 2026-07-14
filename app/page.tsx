const pillars = [
  {
    icon: "🎨",
    title: "Desenhos para colorir",
    text: "Momentos tranquilos de criatividade enquanto as histórias da Bíblia ganham cor.",
    image: "capa ou página real dos desenhos",
  },
  {
    icon: "🔤",
    title: "Alfabetização cristã",
    text: "Letras, palavras e primeiros aprendizados conectados a valores que permanecem.",
    image: "capa ou página real de alfabetização",
  },
  {
    icon: "🧮",
    title: "Matemática com propósito",
    text: "Desafios adequados ao universo infantil com temas bíblicos que aproximam e envolvem.",
    image: "capa ou página real de matemática",
  },
  {
    icon: "📖",
    title: "Histórias ilustradas",
    text: "Narrativas bíblicas apresentadas de forma visual, simples e memorável para os pequenos.",
    image: "capa ou página real das histórias",
  },
  {
    icon: "🙏",
    title: "Devocionais infantis",
    text: "Um caminho acolhedor para conversar sobre Deus e cultivar a fé na rotina da família.",
    image: "capa ou página real dos devocionais",
  },
  {
    icon: "✂️",
    title: "Recorte, colagem e jogos",
    text: "Atividades manuais que estimulam a atenção, a coordenação e a participação ativa.",
    image: "capa ou página real dos jogos",
  },
  {
    icon: "⛪",
    title: "Escola bíblica",
    text: "Recursos práticos para apoiar professores da Escola Dominical ou Escola Sabatina.",
    image: "capa ou página real do material para escola bíblica",
  },
  {
    icon: "🏅",
    title: "Certificados e recompensas",
    text: "Pequenos marcos para celebrar cada aprendizado e fortalecer a motivação das crianças.",
    image: "capa ou página real dos certificados",
  },
];

const benefits = [
  ["⚡", "Acesso imediato", "Receba o material digital logo após a confirmação da compra."],
  ["🖨️", "Pronto para A4", "Imprima apenas as atividades que quiser usar, quando precisar."],
  ["🏡", "Para diferentes rotinas", "Use em casa, na igreja, na Escola Dominical ou na Escola Sabatina."],
  ["📱", "Digital e prático", "Arquivos em PDF organizados para acessar e preparar sem complicação."],
];

const faqs = [
  {
    question: "Qual é o formato do produto e como eu recebo?",
    answer:
      "O material é digital, em formato PDF e preparado para impressão em folha A4. O acesso é liberado após a confirmação da compra pelo checkout.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "[PREENCHER: informe a licença de uso e as regras reais de impressão do material].",
  },
  {
    question: "Para qual faixa etária é indicado?",
    answer: "[PREENCHER: faixa etária real e, se necessário, o nível de acompanhamento de um adulto].",
  },
  {
    question: "Funciona no celular ou tablet?",
    answer:
      "Os arquivos em PDF podem ser abertos em dispositivos compatíveis. As atividades foram pensadas principalmente para impressão em papel A4.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "[PREENCHER: resuma aqui o prazo, as condições e o canal real para solicitar a garantia].",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "O pagamento será processado pelo ambiente seguro do checkout escolhido. [PREENCHER: nome da plataforma de pagamento].",
  },
];

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="check-item">
      <span className="check-mark" aria-hidden="true">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function ProductPlaceholder({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <div className={`product-placeholder${large ? " product-placeholder--large" : ""}`}>
      <span className="placeholder-tag">IMAGEM REAL</span>
      <span className="placeholder-icon" aria-hidden="true">
        ▧
      </span>
      <strong>[PREENCHER]</strong>
      <small>Inserir {label}</small>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark" aria-hidden="true">
            ❤
          </span>
          <span>
            <strong>[PREENCHER: nome do produto]</strong>
            <small>Atividades bíblicas infantis</small>
          </span>
        </a>
        <span className="format-pill">Material digital • PDF</span>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="hero-copy">
            <span className="eyebrow">✦ Ensine a Palavra de um jeito que toca o coração</span>
            <h1>
              Semeie a fé no coração dos pequenos <em>brincando, aprendendo e vivendo.</em>
            </h1>
            <p className="hero-lead">
              Um ecossistema de atividades bíblicas para transformar momentos comuns em memórias de fé — em
              casa, na igreja ou na escola bíblica.
            </p>
            <div className="proof-row">
              <span className="proof-chip">[PREENCHER: quantidade real] atividades e eBooks</span>
              <span className="proof-chip">Acesso imediato</span>
            </div>
            <a className="button button--primary" href="#oferta">
              Quero ensinar com propósito <span aria-hidden="true">→</span>
            </a>
            <p className="microcopy">PDF digital • Impressão A4 • Acesso após a compra</p>
            <div className="authority-strip">
              <span className="authority-avatar">K</span>
              <p>
                <strong>Criado por Kelly</strong>
                <span>Há 3 anos especializada em ensino lúdico cristão infantil</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Espaço reservado para o mockup real do produto">
            <span className="visual-note visual-note--top">✓ Pronto para imprimir</span>
            <ProductPlaceholder label="mockup real do kit completo" large />
            <span className="visual-note visual-note--bottom">♡ Feito com propósito</span>
          </div>
        </section>

        <section className="verse-ribbon" aria-label="Versículo central">
          <p>
            “Instrui a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.”
          </p>
          <span>PROVÉRBIOS 22:6</span>
        </section>

        <section className="section about" id="sobre">
          <div className="portrait-wrap">
            <div className="portrait-placeholder">
              <span className="placeholder-tag">FOTO REAL</span>
              <span aria-hidden="true">☺</span>
              <strong>[PREENCHER]</strong>
              <small>Foto ou identidade visual da Kelly</small>
            </div>
            <div className="handwritten-note">com carinho, Kelly ♡</div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Por trás de cada atividade</span>
            <h2>Uma educadora com uma missão no coração</h2>
            <p className="lead">
              Sou Kelly, produtora de atividades bíblicas infantis e, há 3 anos, dedico meu trabalho à pedagogia
              lúdica aplicada à formação cristã de crianças.
            </p>
            <p>
              Minha missão é ajudar pais e igrejas a viverem Provérbios 22:6 na rotina: com recursos que tornam o
              aprendizado mais leve, participativo e cheio de significado.
            </p>
            <div className="mission-card">
              <span aria-hidden="true">✦</span>
              <p>
                <strong>Mais do que ocupar o tempo.</strong>
                Cada proposta foi pensada para abrir conversas, aproximar a família e plantar valores eternos.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="ecossistema">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Um ecossistema completo</span>
            <h2>Aprender, criar e crescer na fé</h2>
            <p>Recursos para diferentes momentos da jornada infantil, reunidos em um só lugar.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <span className="pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className="extra-item">
            <span aria-hidden="true">+</span>
            <p>
              <strong>[PREENCHER: outros itens reais do produto]</strong>
              Acrescente aqui somente os materiais que fazem parte do kit.
            </p>
          </div>
        </section>

        <section className="section" id="por-dentro">
          <div className="section-heading">
            <span className="eyebrow">Veja o que você vai receber</span>
            <h2>Materiais que convidam a criança a participar</h2>
            <p>
              Substitua cada espaço abaixo por uma capa ou página interna real. Assim, as famílias enxergam com
              clareza o que estão adquirindo.
            </p>
          </div>
          <div className="material-grid">
            {pillars.map((pillar, index) => (
              <article className="material-card" key={pillar.title}>
                <ProductPlaceholder label={pillar.image} />
                <div className="material-copy">
                  <span className="material-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="discipleship">
          <div className="discipleship-inner">
            <span className="eyebrow eyebrow--light">Fé que cabe na rotina</span>
            <blockquote>
              Não é apenas papel para imprimir. É um instrumento de <em>discipulado familiar.</em>
            </blockquote>
            <div className="discipleship-points">
              <p>
                <span aria-hidden="true">⌛</span>
                <strong>Tempo de qualidade</strong>
                Momentos intencionais para aprender e conversar em família.
              </p>
              <p>
                <span aria-hidden="true">☀</span>
                <strong>Menos telas</strong>
                Uma pausa para criar, recortar, colorir e estar presente.
              </p>
              <p>
                <span aria-hidden="true">♡</span>
                <strong>Caráter e fé</strong>
                Verdades bíblicas compartilhadas de forma leve e afetiva.
              </p>
            </div>
          </div>
        </section>

        <section className="section samples" id="metodologia">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Conheça antes de escolher</span>
            <h2>Transparência que gera confiança</h2>
            <p>
              Como ainda não foram fornecidos depoimentos autorizados, este espaço valoriza a metodologia e as
              amostras reais do material.
            </p>
          </div>
          <div className="method-grid">
            <article>
              <span className="method-step">1</span>
              <h3>Uma verdade bíblica</h3>
              <p>Cada proposta parte de um tema cristão apresentado em linguagem acolhedora para a infância.</p>
            </article>
            <article>
              <span className="method-step">2</span>
              <h3>Uma experiência lúdica</h3>
              <p>A criança aprende fazendo: colore, pensa, escreve, calcula, recorta e conversa.</p>
            </article>
            <article>
              <span className="method-step">3</span>
              <h3>Uma conversa que continua</h3>
              <p>A atividade cria oportunidades para pais e educadores aprofundarem valores no dia a dia.</p>
            </article>
          </div>
          <div className="sample-grid">
            <ProductPlaceholder label="amostra real 1" />
            <ProductPlaceholder label="amostra real 2" />
            <ProductPlaceholder label="amostra real 3" />
          </div>
          <div className="testimonial-slot">
            <span aria-hidden="true">“</span>
            <p>
              <strong>[PREENCHER: depoimento real autorizado]</strong>
              Nome real • mãe, professora, pastor(a) ou função correta
            </p>
          </div>
        </section>

        <section className="section section--tint" id="beneficios">
          <div className="benefit-layout">
            <div className="section-heading">
              <span className="eyebrow">Feito para facilitar</span>
              <h2>Prático para quem ensina. Encantador para quem aprende.</h2>
              <p>
                Você escolhe a atividade, imprime e prepara o momento com liberdade — sem depender de materiais
                difíceis de encontrar.
              </p>
              <div className="real-differential">
                <strong>Tem outro diferencial real?</strong>
                <span>[PREENCHER: atualizações, suporte ou outro benefício verdadeiro]</span>
              </div>
            </div>
            <div className="benefit-list">
              {benefits.map(([icon, title, text]) => (
                <article key={title}>
                  <span className="benefit-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section offer-section" id="oferta">
          <div className="offer-card">
            <div className="offer-included">
              <span className="eyebrow eyebrow--light">Tudo em um só acesso</span>
              <h2>[PREENCHER: nome do produto]</h2>
              <p>Seu ecossistema digital de atividades bíblicas infantis.</p>
              <ul className="check-list">
                <Check>Desenhos bíblicos para colorir</Check>
                <Check>Alfabetização e matemática com temas cristãos</Check>
                <Check>Histórias ilustradas e devocionais infantis</Check>
                <Check>Jogos, recortes, colagens e certificados</Check>
                <Check>Material para Escola Dominical ou Sabatina</Check>
                <Check>[PREENCHER: outros itens reais]</Check>
              </ul>
              <div className="bonus-box">
                <span>BÔNUS</span>
                <p>
                  <strong>[PREENCHER: nome do bônus real]</strong>
                  [PREENCHER: descrição e valor percebido real]
                </p>
              </div>
            </div>

            <div className="price-panel">
              <p className="price-label">Acesso ao material completo</p>
              <p className="price-from">De [PREENCHER: valor real]</p>
              <p className="price-main">[PREENCHER: valor por]</p>
              <p className="payment-note">[PREENCHER: condição real de pagamento]</p>
              <a className="button button--light" href="#checkout-pendente">
                Quero receber o material <span aria-hidden="true">→</span>
              </a>
              <p className="secure-note">🔒 Compra processada em ambiente seguro</p>
              <div className="checkout-missing" id="checkout-pendente">
                <strong>Link do checkout</strong>
                <span>[PREENCHER: Hotmart, Kiwify, Eduzz ou outro link real]</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section guarantee">
          <div className="guarantee-seal" aria-hidden="true">
            <span>✓</span>
            GARANTIA
          </div>
          <div className="guarantee-copy">
            <span className="eyebrow">Sua compra com clareza</span>
            <h2>[PREENCHER: prazo real] dias de garantia</h2>
            <p>
              Para apresentar uma política transparente, complete os dados abaixo exatamente conforme as regras do
              seu checkout.
            </p>
            <dl className="guarantee-details">
              <div>
                <dt>Como solicitar</dt>
                <dd>[PREENCHER: procedimento real]</dd>
              </div>
              <div>
                <dt>Canal de contato</dt>
                <dd>[PREENCHER: e-mail ou canal real]</dd>
              </div>
              <div>
                <dt>Condições</dt>
                <dd>[PREENCHER: condições reais do reembolso]</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section faq" id="duvidas">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Tudo o que você precisa saber</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            <details>
              <summary>
                [PREENCHER: outra dúvida frequente real]
                <span aria-hidden="true">+</span>
              </summary>
              <p>[PREENCHER: resposta correta e objetiva].</p>
            </details>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-mark" aria-hidden="true">
            ✦
          </div>
          <p className="eyebrow">Uma semente plantada hoje</p>
          <h2>Transforme o tempo juntos em aprendizado para toda a vida.</h2>
          <p>
            Viva Provérbios 22:6 na rotina com atividades que aproximam a criança da Palavra — e você dela.
          </p>
          <a className="button button--primary" href="#oferta">
            Quero ensinar com propósito <span aria-hidden="true">→</span>
          </a>
          <small>Material digital em PDF • Acesso após a confirmação da compra</small>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kelly • Atividades bíblicas infantis</p>
        <p>[PREENCHER: contato, CNPJ/CPF ou dados legais aplicáveis e links de políticas]</p>
      </footer>

      <div className="mobile-cta" aria-label="Atalho para a oferta">
        <span>
          <small>Acesso digital</small>
          <strong>[PREENCHER: preço]</strong>
        </span>
        <a href="#oferta">Quero conhecer</a>
      </div>
    </>
  );
}
