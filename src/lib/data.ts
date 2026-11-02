const PHONE = "5585997890700";

export const wa = (msg = "Olá, Dr. Erich! Vim pelo site e gostaria de agendar uma consulta.") =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const WA = wa();
export const waDuvida = (assunto: string) => wa(`Olá, Dr. Erich! Vim pelo site e tenho dúvidas sobre ${assunto}.`);

export const CONTACT = {
  whatsapp: "(85) 99789-0700",
  tel: "tel:+5585997890700",
  phone2: "(85) 98573-7766",
  wa2: "https://wa.me/5585985737766",
  fixo: "(85) 3272-2181",
  telFixo: "tel:+558532722181",
  email: "contato@erichmotta.com.br",
  instagram: "https://instagram.com/dr.erichmotta",
  addr1: "Rua Professor Dias da Rocha, 2310",
  addr2: "Dionísio Torres, Fortaleza – CE",
  cep: "60170-311",
  mapEmbed:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("Rua Professor Dias da Rocha, 2310, Dionísio Torres, Fortaleza - CE") +
    "&z=16&output=embed",
  route:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Rua Professor Dias da Rocha 2310 Dionisio Torres Fortaleza CE"),
  reviews:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Dr. Erich Motta Cirurgia Plástica Fortaleza"),
};

export const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export const HERO_STATS = [
  { value: "★ 4,7", label: "72 avaliações no Google" },
  { value: "20+ anos", label: "como cirurgião plástico" },
  { value: "SBCP", label: "Membro Especialista" },
  { value: "23 mil", label: "seguidores no Instagram" },
];

type Proc = { name: string; desc: string; regions?: string[] };
export type Area = { label: string; quoteA: string; quoteB: string; img: string; pos?: string; items: Proc[] };

export const AREAS: Area[] = [
  {
    label: "Mamas",
    quoteA: "Nem toda prótese precisa ",
    quoteB: "ficar artificial.",
    img: "/images/fotos/mama-realcando-o-colo-limpa.jpg",
    items: [
      { name: "Prótese mamária", desc: "Volume e contorno escolhidos com você, em proporção ao seu corpo. Nem toda prótese precisa ficar artificial." },
      { name: "Mastopexia", desc: "Levanta e reposiciona as mamas, retirando o excesso de pele. Pode ser combinada à prótese quando o planejamento indicar." },
      { name: "Mamoplastia redutora", desc: "Reduz o volume das mamas para trazer leveza, proporção e conforto ao dia a dia." },
    ],
  },
  {
    label: "Corpo",
    quoteA: "Lipo não é tratamento ",
    quoteB: "para emagrecimento.",
    img: "/images/fotos/lipo-corpo-pele-morena-limpa.jpg",
    pos: "40% center",
    items: [
      {
        name: "Lipoaspiração, lipoescultura e vibrolipo",
        desc: "Contorno e definição para gordura localizada, com técnica escolhida para o seu caso. Lipo não é tratamento para emagrecimento.",
        regions: ["Papada", "Braços", "Costas e flancos", "Culote", "Barriga", "Coxas", "Panturrilhas"],
      },
      { name: "Abdominoplastia", desc: "Retira o excesso de pele e reconstrói a parede abdominal, muito procurada após gestações." },
      { name: "Pochete", desc: "Trata o volume localizado no baixo ventre, devolvendo o contorno da região." },
      { name: "Braquioplastia", desc: "Remove a flacidez da parte interna dos braços e redefine o contorno." },
      { name: "Lifting de coxas", desc: "Trata a flacidez da parte interna das coxas com cicatriz planejada para ficar discreta." },
      { name: "Prótese de glúteo", desc: "Projeção e formato pensados em harmonia com o restante do corpo." },
    ],
  },
  {
    label: "Face",
    quoteA: "Valorizar a sua anatomia, ",
    quoteB: "sem transformar quem você é.",
    // Sem foto de face no perfil: usa o retrato da modelo até a clínica enviar uma
    img: "/images/fotos/mulher-maio-preto-fundo-nude-limpa.jpg",
    pos: "center top",
    items: [
      { name: "Rinoplastia", desc: "Harmoniza o nariz com os traços do rosto, respeitando a sua identidade." },
      { name: "Blefaroplastia", desc: "Trata o excesso de pele e as bolsas das pálpebras, suavizando o olhar cansado." },
      { name: "Otoplastia", desc: "Corrige o formato e a projeção das orelhas." },
      { name: "Ritidoplastia", desc: "Lifting facial que reposiciona os tecidos com resultado natural." },
    ],
  },
  {
    label: "Não cirúrgicos",
    quoteA: "Sutileza ou impacto? ",
    quoteB: "Qual desses é para você?",
    img: "/images/fotos/dr-erich-jaleco-avaliacao-google-limpa.jpg",
    pos: "75% center",
    items: [
      { name: "Botox", desc: "Suaviza linhas de expressão sem apagar a sua expressão." },
      { name: "Preenchimento facial", desc: "Repõe volume e contorno com ácido hialurônico, na medida certa para o seu rosto." },
      { name: "Rinomodelação", desc: "Ajustes sutis no contorno do nariz, sem cirurgia." },
    ],
  },
];

export const FAQS = [
  {
    q: "Qual a diferença entre mastopexia e prótese?",
    a: "A prótese aumenta o volume. A mastopexia levanta e reposiciona a mama, retirando o excesso de pele. Quando existe flacidez e também o desejo de mais volume, as duas podem ser combinadas na mesma cirurgia. Quem define é o seu planejamento, feito na consulta.",
  },
  {
    q: "Quando posso voltar à academia?",
    a: "Cada recuperação tem o seu ritmo. A liberação é individual e acontece nas consultas de revisão: caminhadas leves costumam voltar cedo, enquanto exercícios com carga e impacto só depois da liberação. Respeitar o tempo do seu corpo faz parte do resultado.",
  },
  {
    q: "O que ninguém te conta antes de fazer uma lipo?",
    a: "Que lipo não é tratamento para emagrecimento. Ela trata gordura localizada e contorno, e o resultado final aparece aos poucos, com o desinchaço. Cinta, drenagem e acompanhamento no pós-operatório fazem toda a diferença.",
  },
  {
    q: "Como cuidar das cicatrizes?",
    a: "As incisões são planejadas para ficar em áreas discretas. Depois, a cicatriz amadurece ao longo de meses: proteção solar, hidratação e as orientações da equipe em cada fase ajudam nesse processo.",
  },
  {
    q: "Sutileza ou impacto?",
    a: "Não existe resposta certa, existe a que combina com você. Na consulta, conversamos sobre seus objetivos e sobre o que a sua anatomia permite, para chegar a um resultado que pareça naturalmente seu.",
  },
];

export const CONCERNS = ["Cicatrizes", "Pós-operatório", "Resultado", "Nada me preocupa"];

export const STEPS = [
  {
    title: "Consulta de avaliação e escuta",
    desc: "Você conta seus objetivos e suas dúvidas. O Dr. Erich avalia a sua anatomia e explica cada possibilidade.",
  },
  {
    title: "Planejamento individualizado",
    desc: "Técnica, exames e expectativas definidos para o seu caso, com cada etapa explicada antes da cirurgia.",
  },
  {
    title: "Cirurgia com segurança",
    desc: "Realizada em ambiente hospitalar, com equipe completa e os protocolos que o seu procedimento exige.",
  },
  {
    title: "Pós-operatório acompanhado de perto",
    desc: "A equipe acompanha a sua recuperação, com a enfermeira Poliana disponível para orientar cada fase.",
  },
];

export const CREDS = [
  { a: "Título de especialista", b: "SBCP" },
  { a: "Título de cirurgião plástico", b: "MEC" },
  { a: "Atuação em Fortaleza", b: "Há mais de 20 anos" },
  { a: "Registro", b: "CRM-CE 8826" },
];

export const REVIEWS = [
  {
    name: "Greycianne K.",
    text: "Dr. Erich Motta foi a minha melhor escolha. Profissional ético e megaaaa competente. Ele realizou meu maior sonho após gestação gemelar, de voltar a gostar de me olhar no espelho.",
  },
  {
    name: "Luciana G.",
    text: "Dr. Erich é um excelente profissional, extremamente cuidadoso, competente e dedicado, e transmite muita segurança em cada etapa do processo. […] Todos sempre muito atenciosos, educados e disponíveis para esclarecer todas as minhas dúvidas.",
  },
  {
    name: "Larisse F.",
    text: "Desde a primeira consulta já deixou tudo bem claro, me explicou tudo nos mínimos detalhes e me passou bastante segurança. […] Sua assistente enfermeira Poliana, sempre dando assistência no pós-cirúrgico.",
  },
  {
    name: "Rayanne M.",
    text: "Dr. Erich foi super atencioso, passou muita segurança e me deixou tranquila em todo o processo.",
  },
  {
    name: "Márcia M.",
    text: "O resultado da minha cirurgia ficou lindo, e não consigo explicar em palavras o quanto estou feliz com tudo!",
  },
];

export const REVIEW_TAGS = ["gratidão", "segurança", "prótese", "atendente"];
