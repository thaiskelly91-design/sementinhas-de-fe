const LINK_DO_CHECKOUT = "https://SEU-CHECKOUT-AQUI.com";

const dores = [
  "Você já separou um tempinho para fazer o devocional com seu filho à noite... e a rotina engoliu de novo.",
  "Você abre o Instagram e vê outras mães postando 'cantinho da Bíblia' organizado, enquanto você nem sabe por onde começar.",
  "Seu filho passa mais tempo olhando pra uma tela do que ouvindo uma história bíblica — e isso pesa na consciência.",
  "Você já baixou uns 3 materiais 'gratuitos' de atividades bíblicas na internet... e nenhum deles você realmente usou até o fim.",
];

const itensInclusos = [
  "Mais de 400 atividades bíblicas para imprimir (colorir, caça-palavras, ligar pontos)",
  "10 histórias bíblicas recontadas em linguagem simples para crianças de 3 a 10 anos",
  "Perguntas de reflexão prontas para fazer com seu filho depois de cada atividade",
  "Certificado 'Pequeno Guerreiro da Fé' para imprimir e comemorar o progresso",
  "Guia rápido para a mamãe aplicar sem complicação, mesmo sem experiência",
];

const paraVoce = [
  "Você é mãe (ou pai) cristão e quer ensinar a Bíblia ao seu filho de forma leve",
  "Seu filho tem entre 3 e 10 anos",
  "Você tem pouco tempo e quer algo pronto para aplicar hoje",
];

const naoParaVoce = [
  "Você procura um curso de teologia aprofundado",
  "Seu filho já é adolescente",
];

const perguntas = [
  {
    pergunta: "Preciso saber muito sobre a Bíblia para aplicar?",
    resposta: "Não. O material já vem com a explicação pronta, você só acompanha o seu filho.",
  },
  {
    pergunta: "Para qual idade é indicado?",
    resposta: "De 3 a 10 anos — as atividades têm níveis diferentes de dificuldade.",
  },
  {
    pergunta: "Como recebo o material?",
    resposta:
      "É 100% digital (PDF). Você recebe o acesso por e-mail assim que o pagamento é confirmado, e pode imprimir em casa quantas vezes quiser.",
  },
  {
    pergunta: "E se eu não gostar?",
    resposta: "Você tem 7 dias de garantia — devolvemos 100% do valor, sem burocracia.",
  },
];

const bonusOferta = [
  {
    icone: "✎",
    titulo: "Kit de Versículos para Colorir",
    descricao: "5 cartões ilustrados com versículos bíblicos simples, prontos para a criança colorir e você pendurar no quarto dela.",
  },
  {
    icone: "✓",
    titulo: "Planner da Semana da Fé",
    descricao: "Uma folha semanal para marcar os dias em que vocês fizeram o devocional juntos e anotar o que seu filho mais gostou naquele dia.",
  },
  {
    icone: "♡",
    titulo: "Cartões de Promessas Bíblicas",
    descricao: "12 cartões para recortar, compartilhar em família e lembrar as crianças das promessas e do cuidado de Deus.",
  },
  {
    icone: "7",
    titulo: "Desafio 7 Dias com a Bíblia",
    descricao: "Um roteiro simples de sete dias para criar o hábito do momento bíblico em família, com apenas 10 minutos por dia.",
  },
  {
    icone: "★",
    titulo: "Quadro de Recompensas Pequenos Heróis da Fé",
    descricao: "Uma folha imprimível para acompanhar cada atividade concluída e celebrar o progresso da criança de forma positiva.",
  },
];

const depoimentosIlustrativos = [
  {
    texto: "Com uma atividade pronta, fica muito mais fácil separar dez minutos do dia e transformar esse momento em conexão com meu filho.",
    perfil: "Exemplo de mãe de uma criança de 6 anos",
  },
  {
    texto: "Meu filho se envolve mais quando pode colorir, responder e conversar sobre a história. O aprendizado deixa de parecer uma obrigação.",
    perfil: "Exemplo de família com criança de 5 anos",
  },
  {
    texto: "Ter as histórias e as perguntas organizadas me dá segurança para conduzir o momento bíblico, mesmo sem saber explicar tudo sozinha.",
    perfil: "Exemplo de mãe iniciando o devocional em casa",
  },
  {
    texto: "O planner ajuda a manter a constância sem transformar a rotina em cobrança. Cada dia concluído vira uma pequena conquista em família.",
    perfil: "Exemplo de família usando o planner semanal",
  },
  {
    texto: "É uma alternativa simples para diminuir um pouco o tempo de tela e criar lembranças afetivas enquanto a criança aprende sobre a Bíblia.",
    perfil: "Exemplo de responsável por uma criança de 8 anos",
  },
];

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`cta ${className}`} href={LINK_DO_CHECKOUT}>
      <span>{children}</span>
      <span className="cta-arrow" aria-hidden="true">→</span>
    </a>
  );
}

function CheckList({ items, tone = "positive" }: { items: string[]; tone?: "positive" | "negative" }) {
  return (
    <ul className={`feature-list feature-list--${tone}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="list-icon" aria-hidden="true">{tone === "positive" ? "✓" : "×"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProductMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-mockup ${compact ? "product-mockup--compact" : ""}`} aria-label="Ilustração de uma pilha de atividades bíblicas impressas com lápis de cor" role="img">
      <div className="spark spark--one" aria-hidden="true">✦</div>
      <div className="spark spark--two" aria-hidden="true">✦</div>
      <div className="page page--back">
        <span className="page-kicker">10 histórias</span>
        <span className="page-doodle">☀</span>
      </div>
      <div className="page page--middle">
        <span className="page-kicker">400+ atividades</span>
        <span className="page-doodle">★</span>
      </div>
      <div className="page page--front">
        <span className="seed-logo" aria-hidden="true"><i /></span>
        <small>MÉTODO SEMENTINHA</small>
        <strong>Sementinhas<br />de Fé</strong>
        <span>Atividades bíblicas para imprimir</span>
        <div className="cover-line" />
        <div className="cover-icons"><b>ABC</b><b>1•2•3</b><b>✎</b></div>
      </div>
      <div className="pencil pencil--yellow" aria-hidden="true" />
      <div className="pencil pencil--coral" aria-hidden="true" />
      {!compact && (
        <div className="children-scene" aria-hidden="true">
          <span className="child child--one"><i /></span>
          <span className="child child--two"><i /></span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Sementinhas de Fé — voltar ao início">
          <span className="brand-seed" aria-hidden="true"><i /></span>
          <span><strong>Sementinhas de Fé</strong><small>Método Sementinha</small></span>
        </a>
        <span className="header-note">PDF digital • acesso imediato</span>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">10 minutos por dia</span>
            <h1>Toda mãe cristã sonha em ver o filho amando a Bíblia. Mas entre a correria do dia a dia e a tela do tablet, sobra pouco tempo pra isso — não é mesmo?</h1>
            <p className="hero-lead">“Sementinhas de Fé” são mais de 400 atividades bíblicas prontas para imprimir, feitas para ensinar a Palavra de Deus em só 10 minutos por dia — sem você precisar preparar nada.</p>
            <Cta>Quero as Atividades por R$27,00</Cta>
            <p className="trust-line"><span aria-hidden="true">🔒</span> Pagamento seguro · Acesso imediato · Garantia de 7 dias</p>
          </div>
          <ProductMockup />
        </section>

        <section className="section creator" aria-labelledby="titulo-criadora">
          <div className="creator-photo-wrap">
            <img
              id="foto-criadora"
              src="foto-thais-kelly.jpg"
              alt="Thaís Kelly, criadora do Sementinhas de Fé"
              width="720"
              height="901"
            />
            <span className="creator-badge">Criado com carinho</span>
          </div>
          <div className="creator-copy">
            <span className="section-number" aria-hidden="true">01</span>
            <h2 id="titulo-criadora">Quem preparou isso pra você</h2>
            <p>Oi, eu sou Thaís Kelly. Criei o Sementinhas de Fé porque eu mesma vivia essa correria: queria ensinar meus filhos sobre a Bíblia, mas nunca sobrava tempo nem ideia pronta pra sentar e fazer isso de um jeito que a criança realmente gostasse. Então organizei em atividades simples, prontas, para qualquer mãe aplicar hoje mesmo — mesmo sem saber teologia.</p>
          </div>
        </section>

        <section className="section pain" aria-labelledby="titulo-dor">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">A rotina é real</span>
            <h2 id="titulo-dor">Isso já aconteceu com você?</h2>
          </div>
          <ul className="pain-grid">
            {dores.map((dor, index) => (
              <li key={dor}>
                <span className="pain-icon" aria-hidden="true">{["◷", "⌂", "▣", "⌁"][index]}</span>
                <p>{dor}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="method" aria-labelledby="titulo-metodo">
          <div className="method-art" aria-hidden="true">
            <span className="ground" />
            <span className="sprout"><i /><b /></span>
            <span className="sun">✦</span>
            <span className="drop drop--one">•</span>
            <span className="drop drop--two">•</span>
          </div>
          <div className="method-copy">
            <span className="eyebrow eyebrow--light">10 minutos • sem preparação</span>
            <h2 id="titulo-metodo">O Método Sementinha</h2>
            <p>Não é sobre ter mais tempo. É sobre ter o material certo, pronto, na hora certa. O Método Sementinha organiza o ensino bíblico em doses pequenas — 10 minutos por dia — com atividade, história e uma pergunta simples pra puxar conversa com a criança. Você não precisa preparar nada, não precisa saber explicar teologia. Só abrir, imprimir e sentar com seu filho. Cada atividade concluída é uma sementinha plantada — e sementinha, com tempo, sempre vira árvore.</p>
            <Cta>Quero as Atividades por R$27,00</Cta>
          </div>
        </section>

        <section className="section included" aria-labelledby="titulo-incluido">
          <div className="included-copy">
            <span className="section-number" aria-hidden="true">02</span>
            <h2 id="titulo-incluido">O que vem dentro do Sementinhas de Fé</h2>
            <CheckList items={itensInclusos} />
            <Cta>Quero as Atividades por R$27,00</Cta>
          </div>
          <ProductMockup compact />
        </section>

        <section className="section audience" aria-labelledby="titulo-publico">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Feito para a sua rotina</span>
            <h2 id="titulo-publico">Para quem é o Sementinhas de Fé</h2>
          </div>
          <div className="audience-grid">
            <article className="audience-card audience-card--yes">
              <span className="audience-symbol" aria-hidden="true">✓</span>
              <h3>É para você se:</h3>
              <CheckList items={paraVoce} />
            </article>
            <article className="audience-card audience-card--no">
              <span className="audience-symbol" aria-hidden="true">×</span>
              <h3>Não é para você se:</h3>
              <CheckList items={naoParaVoce} tone="negative" />
            </article>
          </div>
        </section>

        <section className="trust-section" aria-labelledby="titulo-confiar">
          <div className="guarantee-seal" aria-hidden="true">
            <span>7</span>
            <strong>DIAS</strong>
            <small>GARANTIA</small>
          </div>
          <div className="trust-copy">
            <span className="eyebrow eyebrow--light">Transparência de verdade</span>
            <h2 id="titulo-confiar">Por que confiar</h2>
            <p>Você recebe uma garantia simples: se aplicar o material e sentir que ele não fez sentido para sua família, devolvemos 100% do seu dinheiro em até 7 dias, sem perguntas e sem burocracia.</p>
            <strong className="guarantee-text">Garantia incondicional de 7 dias</strong>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="titulo-depoimentos">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Relatos ilustrativos</span>
            <h2 id="titulo-depoimentos">O que as famílias podem viver com o material</h2>
            <p className="testimonials-disclosure">Os relatos abaixo são exemplos ilustrativos da experiência proposta pelo Sementinhas de Fé. Quando você tiver avaliações reais, eles poderão ser substituídos pelos comentários das famílias.</p>
          </div>
          <div className="testimonial-carousel" aria-label="Carrossel de relatos ilustrativos">
            {depoimentosIlustrativos.map((depoimento, index) => (
              <article className="testimonial-card" id={`depoimento-${index + 1}`} key={depoimento.texto}>
                <span className="testimonial-stars" aria-label="Cinco estrelas">★★★★★</span>
                <blockquote><p>“{depoimento.texto}”</p></blockquote>
                <div className="testimonial-author">
                  <strong>Relato ilustrativo</strong>
                  <span>{depoimento.perfil}</span>
                </div>
              </article>
            ))}
          </div>
          <nav className="carousel-dots" aria-label="Escolher relato ilustrativo">
            {depoimentosIlustrativos.map((depoimento, index) => (
              <a href={`#depoimento-${index + 1}`} aria-label={`Ver relato ${index + 1}`} key={depoimento.perfil} />
            ))}
          </nav>
          <p className="carousel-hint">Deslize para o lado para ver todos os relatos</p>
        </section>

        <section className="section offer" aria-labelledby="titulo-oferta">
          <div className="offer-heading">
            <span className="bonus-pill">PACOTE ESPECIAL</span>
            <h2 id="titulo-oferta">Material completo + 5 bônus especiais</h2>
            <p>Além de receber o material completo, você leva 5 bônus digitais sem custo extra para tornar o momento bíblico em família ainda mais especial.</p>
          </div>
          <div className="bonus-grid">
            {bonusOferta.map((bonus, index) => (
              <article className="bonus-card" key={bonus.titulo}>
                <span className="free-badge">GRÁTIS</span>
                <span className="bonus-icon" aria-hidden="true">{bonus.icone}</span>
                <p className="bonus-label">{`Bônus ${index + 1}`}</p>
                <h3>{bonus.titulo}</h3>
                <p>{bonus.descricao}</p>
              </article>
            ))}
          </div>
          <div className="price-box">
            <p>De <s>R$47,00</s> por <strong>R$27,00</strong> <span>· pagamento único</span></p>
            <Cta>Quero garantir o material + 5 bônus</Cta>
            <small><span aria-hidden="true">🔒</span> Pagamento seguro · Acesso imediato · Garantia de 7 dias</small>
          </div>
        </section>

        <section className="section faq" aria-labelledby="titulo-faq">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Tudo bem explicado</span>
            <h2 id="titulo-faq">Perguntas frequentes</h2>
          </div>
          <div className="faq-list">
            {perguntas.map((item, index) => (
              <details key={item.pergunta} open={index === 0}>
                <summary>{item.pergunta}<span aria-hidden="true">+</span></summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="titulo-final">
          <span className="final-sprout" aria-hidden="true"><i /></span>
          <h2 id="titulo-final">Seu filho não precisa esperar crescer para conhecer a Bíblia de um jeito que ele realmente goste. Comece hoje, com 10 minutos.</h2>
          <Cta>Quero as Atividades por R$27,00</Cta>
          <p>Pagamento seguro · Acesso imediato · Garantia de 7 dias</p>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#inicio">Sementinhas de Fé</a>
        <p>Todos os direitos reservados</p>
        <nav aria-label="Links legais">
          <a href="#termos">Termos de uso</a>
          <a href="#privacidade">Política de privacidade</a>
        </nav>
      </footer>

      <div className="sticky-cta" aria-label="Atalho para comprar Sementinhas de Fé">
        <span><small>Pagamento único</small><strong>R$27,00</strong></span>
        <Cta>Quero as Atividades por R$27,00</Cta>
      </div>
    </>
  );
}
