const pillars = [
  {
    icon: "🎨",
    title: "Desenhos para colorir",
    text: "Momentos tranquilos de criatividade enquanto as histórias da Bíblia ganham cor.",
    position: "0% 0%",
  },
  {
    icon: "🔤",
    title: "Alfabetização cristã",
    text: "Letras, palavras e primeiros aprendizados conectados a valores que permanecem.",
    position: "33.333% 0%",
  },
  {
    icon: "🧮",
    title: "Matemática com propósito",
    text: "Desafios adequados ao universo infantil com temas bíblicos que aproximam e envolvem.",
    position: "66.666% 0%",
  },
  {
    icon: "📖",
    title: "Histórias ilustradas",
    text: "Narrativas bíblicas apresentadas de forma visual, simples e memorável para os pequenos.",
    position: "100% 0%",
  },
  {
    icon: "🙏",
    title: "Devocionais infantis",
    text: "Um caminho acolhedor para conversar sobre Deus e cultivar a fé na rotina da família.",
    position: "0% 100%",
  },
  {
    icon: "✂️",
    title: "Recorte, colagem e jogos",
    text: "Atividades manuais que estimulam a atenção, a coordenação e a participação ativa.",
    position: "33.333% 100%",
  },
  {
    icon: "⛪",
    title: "Escola bíblica",
    text: "Recursos práticos para apoiar professores e líderes da Escola Bíblica.",
    position: "66.666% 100%",
  },
  {
    icon: "🏅",
    title: "Certificados e recompensas",
    text: "Pequenos marcos para celebrar cada aprendizado e fortalecer a motivação das crianças.",
    position: "100% 100%",
  },
];

const benefits = [
  ["⚡", "Acesso imediato", "Receba o material digital logo após a confirmação da compra."],
  ["🖨️", "Pronto para A4", "Imprima apenas as atividades que quiser usar, quando precisar."],
  ["🏡", "Para diferentes rotinas", "Use em casa, na igreja ou na Escola Bíblica."],
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
    answer:
      "Sim. Você pode reimprimir as atividades para uso pessoal, familiar ou com uma turma da Escola Bíblica. A revenda e o compartilhamento dos arquivos digitais não são permitidos.",
  },
  {
    question: "Para qual faixa etária é indicado?",
    answer:
      "É indicado para crianças de 4 a 10 anos. As menores ou que ainda não leem aproveitam melhor com o acompanhamento de um adulto.",
  },
  {
    question: "Funciona no celular ou tablet?",
    answer:
      "Os arquivos em PDF podem ser abertos em dispositivos compatíveis. As atividades foram pensadas principalmente para impressão em papel A4.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias corridos após a compra para solicitar o reembolso pela central de suporte da plataforma de pagamento.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. O pagamento é processado em ambiente protegido pelo checkout oficial e os dados financeiros não ficam armazenados nesta página.",
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
            <strong>Sementinhas da Fé</strong>
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
              <span className="proof-chip">8 coleções + bônus em PDF</span>
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

          <div className="hero-visual">
            <span className="visual-note visual-note--top">✓ Pronto para imprimir</span>
            <img
              className="hero-product-image"
              src="/hero-sementinhas.webp"
              width="1536"
              height="2048"
              alt="Mockup do kit Sementinhas da Fé com tablet, caderno e atividades impressas"
              fetchPriority="high"
            />
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
            <img
              className="portrait-image"
              src="/kelly-retrato.webp"
              width="1024"
              height="2048"
              alt="Retrato ilustrativo de Kelly em um espaço acolhedor de educação infantil"
              loading="lazy"
            />
            <span className="image-disclosure">Imagem ilustrativa</span>
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
              <strong>Calendário de Hábitos da Fé + cartões de versículos</strong>
              Recursos extras para transformar o aprendizado em uma rotina leve e memorável.
            </p>
          </div>
        </section>

        <section className="section" id="por-dentro">
          <div className="section-heading">
            <span className="eyebrow">Veja o que você vai receber</span>
            <h2>Materiais que convidam a criança a participar</h2>
            <p>
              Oito coleções com propostas diferentes para você escolher a atividade certa para cada momento.
            </p>
          </div>
          <div className="material-grid">
            {pillars.map((pillar, index) => (
              <article className="material-card" key={pillar.title}>
                <div
                  className="material-visual"
                  style={{ backgroundPosition: pillar.position }}
                  role="img"
                  aria-label={`Capa ilustrativa da coleção ${pillar.title}`}
                >
                  <span>COLEÇÃO DIGITAL</span>
                </div>
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
              Veja exemplos do estilo das atividades e conheça a experiência que o material foi criado para proporcionar.
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
            <div className="sample-visual" style={{ backgroundPosition: "0% 50%" }} role="img" aria-label="Amostra de atividade para colorir sobre a arca de Noé">
              <span>Colorir e conversar</span>
            </div>
            <div className="sample-visual" style={{ backgroundPosition: "50% 50%" }} role="img" aria-label="Amostra de atividade de alfabetização com figuras bíblicas">
              <span>Letras e descobertas</span>
            </div>
            <div className="sample-visual" style={{ backgroundPosition: "100% 50%" }} role="img" aria-label="Amostra de atividade de contagem com estrelas, pães e peixes">
              <span>Contar e aprender</span>
            </div>
          </div>
          <div className="testimonial-card">
            <img
              className="testimonial-photo"
              src="/familia-atividades.webp"
              width="1536"
              height="1024"
              alt="Cena ilustrativa de mãe e filho fazendo uma atividade bíblica juntos"
              loading="lazy"
            />
            <div className="testimonial-copy">
              <span className="testimonial-kicker">Relato ilustrativo</span>
              <blockquote>
                “Foi lindo ver meu filho deixar o celular de lado e pedir para fazermos mais uma atividade juntos.”
              </blockquote>
              <p>Mariana • personagem ilustrativa de mãe e professora da Escola Bíblica</p>
            </div>
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
                <strong>Organizado para facilitar sua rotina</strong>
                <span>Coleções separadas por tipo de aprendizagem para encontrar, imprimir e aplicar com rapidez.</span>
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
              <h2>Sementinhas da Fé</h2>
              <p>Seu ecossistema digital de atividades bíblicas infantis.</p>
              <ul className="check-list">
                <Check>Desenhos bíblicos para colorir</Check>
                <Check>Alfabetização e matemática com temas cristãos</Check>
                <Check>Histórias ilustradas e devocionais infantis</Check>
                <Check>Jogos, recortes, colagens e certificados</Check>
                <Check>Material para Escola Bíblica</Check>
                <Check>Calendário de hábitos e cartões de versículos</Check>
              </ul>
              <div className="bonus-box">
                <span>BÔNUS</span>
                <p>
                  <strong>Devocional 7 Dias em Família</strong>
                  Sete momentos guiados para começar uma rotina de fé, incluído gratuitamente no acesso.
                </p>
              </div>
            </div>

            <div className="price-panel">
              <p className="price-label">Acesso ao material completo</p>
              <p className="price-main">R$ 27,90</p>
              <p className="payment-note">Pagamento único • acesso imediato</p>
              <a className="button button--light" href="#checkout-oficial">
                Quero receber o material <span aria-hidden="true">→</span>
              </a>
              <p className="secure-note">🔒 Compra processada em ambiente seguro</p>
              <div className="checkout-missing" id="checkout-oficial">
                <strong>Checkout oficial</strong>
                <span>O acesso é liberado por e-mail após a confirmação do pagamento.</span>
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
            <h2>7 dias de garantia</h2>
            <p>
              Conheça o material com tranquilidade. Se ele não fizer sentido para a sua família ou turma, solicite o reembolso dentro do prazo.
            </p>
            <dl className="guarantee-details">
              <div>
                <dt>Como solicitar</dt>
                <dd>Acesse o pedido na plataforma de pagamento e selecione a opção de suporte ou reembolso.</dd>
              </div>
              <div>
                <dt>Canal de contato</dt>
                <dd>Central de ajuda da plataforma onde a compra foi realizada.</dd>
              </div>
              <div>
                <dt>Condições</dt>
                <dd>Solicitação feita em até 7 dias corridos após a confirmação da compra.</dd>
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
                Preciso imprimir todo o material de uma vez?
                <span aria-hidden="true">+</span>
              </summary>
              <p>Não. Você pode escolher e imprimir somente as páginas que combinam com o tema e o momento da criança.</p>
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
        <p>© {new Date().getFullYear()} Kelly • Sementinhas da Fé</p>
        <p>Suporte pelo canal informado no e-mail de acesso • Termos e privacidade disponíveis no checkout</p>
      </footer>

      <div className="mobile-cta" aria-label="Atalho para a oferta">
        <span>
          <small>Acesso digital</small>
          <strong>R$ 27,90</strong>
        </span>
        <a href="#oferta">Quero conhecer</a>
      </div>
    </>
  );
}
