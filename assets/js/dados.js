/**
 * DADOS CENTRALIZADOS DA ZAIRE ARQUITETURA
 * ---------------------------------------------------------------------------
 * Edite apenas este arquivo para atualizar:
 * - nomes das arquitetas, WhatsApp e Instagram;
 * - caminhos de logo, pattern, foto inicial e foto da equipe;
 * - lista de projetos, filtros e projetos em destaque na página inicial.
 */

window.ZAIRE_CONFIG = {
  nomeMarca: "Zaire Arquitetura",
  arquitetas: {
    primeira: "Gabriela",
    segunda: "Lavinya"
  },
  cidadesPresenciais: "São Tiago e São João del-Rei, MG",
  whatsapp: {
    // Somente números com DDI (55) + DDD + número
    numero: "5532998498788",
    numeroExibicao: "(32) 99849-8788",
    mensagemPadrao: "Olá! Vim pelo site da Zaire Arquitetura e gostaria de conversar sobre um projeto."
  },
  // Deixe vazio ("") enquanto não quiser exibir o Instagram.
  // Exemplo quando configurar: "https://www.instagram.com/zairearquitetura/"
  instagramUrl: "https://www.instagram.com/arquitetagabriela_/",
  instagramArroba: "@arquitetagabriela_",

  // Arquivos de marca e fotos institucionais (caminhos relativos)
  marca: {
    // Deixe vazio ("") enquanto a logo não estiver na pasta: o site exibe "Zaire Arquitetura" em texto.
    logoPrincipal: "assets/img/marca/logo-zaire.png",
    logoClara: "assets/img/marca/logo-zaire-clara.png",
    // Opcional: caminho para o pattern (ex.: "assets/img/marca/pattern-zaire.svg").
    pattern: "assets/img/marca/pattern-zaire.svg",
    fotoHero: "assets/img/marca/hero-placeholder.webp",
    fotoHeroAlt: "Ambiente arquitetônico com luz natural — Zaire Arquitetura",
    fotoEquipe: "assets/img/equipe/equipe-placeholder.webp",
    fotoEquipeAlt: "Espaço reservado para foto das arquitetas Gabriela e Lavinya, da Zaire Arquitetura"
  }
};

/**
 * PROJETOS DO PORTFÓLIO
 * ---------------------------------------------------------------------------
 * Valores aceitos para filtros:
 * - uso: "Residencial" | "Comercial" | "Outro"
 * - servicos (array com 1 ou mais): "Obra nova" | "Reforma" | "Interiores" | "Consultoria"
 * - destaque: true (até 3 projetos aparecem na página inicial) ou false
 * - demonstracao: true (sinaliza exemplos de teste; remova estes itens antes de publicar)
 *
 * Campos cidade, area e ano são opcionais: se ficarem vazios (""), são ocultados na página.
 * Pode usar etiqueta
 * Exemplo:
 * etiqueta:"recente",
 */
window.ZAIRE_PROJETOS = [
  {
    id: "casa-a-e-a",
    nome: "Casa A & A",
    demonstracao: false,
    destaque: true,
    uso: "Residencial",
    servicos: ["Obra nova"],
    cidade: "São Tiago, MG",
    area: "195 m²",
    ano: "2025",
    resumo: "Casa contemporânea em lote estreito, com privacidade, integração com jardins e espaços de lazer, pensada para acompanhar as diferentes fases da vida.",
    descricao: "Para o jovem casal, o projeto parte de um lote estreito, comprido e com testada de quase 10 metros, vencendo os desafios da implantação e da topografia para criar uma casa que funciona como um refúgio introspectivo, seguro e privativo atrás dos muros.  Com respiros laterais e jardins ao longo do terreno, a proposta entrega uma residência completa com área de lazer, piscina e escritório integrado, mantendo a acessibilidade no primeiro pavimento e a flexibilidade para acompanhar as diferentes fases da vida do casal ao longo do tempo.",
    capa: {
      src: "assets/img/projetos/casa-a-e-a-02.webp",
      alt: "Vista diurna do muro da fachada",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/casa-a-e-a-01.webp",
        alt: "Vista diurna do muro da fachada",
        largura: 1200,
        altura: 900,
        legenda: "Muro frontal | Vista noturna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-02.webp",
        alt: "Vista diurna do muro da fachada",
        largura: 900,
        altura: 1125,
        legenda: "Muro frontal com entorno real | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-03.webp",
        alt: "Vista diurna do muro da fachada",
        largura: 1400,
        altura: 875,
        legenda: "Muro frontal | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-04.webp",
        alt: "Vista diurna do muro da fachada",
        largura: 1200,
        altura: 900,
        legenda: "Acessos pelo muro frontal | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-05.webp",
        alt: "Vista diurna da garagem por dentro do muro",
        largura: 900,
        altura: 1125,
        legenda: "Garagem | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-06.webp",
        alt: "Vista norturna da garagem por dentro do muro",
        largura: 1400,
        altura: 875,
        legenda: "Garagem | Vista noturna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-07.webp",
        alt: "Vista diurna da prota de entrada",
        largura: 1200,
        altura: 900,
        legenda: "Porta de acesso para sala de estar | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-08.webp",
        alt: "Vista noturna da prota de entrada",
        largura: 900,
        altura: 1125,
        legenda: "Porta de acesso para sala de estar | Vista noturna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-09.webp",
        alt: "Vista do corredor que acessa aos quartos",
        largura: 1400,
        altura: 875,
        legenda: "Corredor de acesso aos quartos | Pavimento Térreo"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-10.webp",
        alt: "Vista diurna do corredor externo",
        largura: 1200,
        altura: 900,
        legenda: "Corredor externo de acesso à área de lazer | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-11.webp",
        alt: "Vista diurna do corredor externo",
        largura: 900,
        altura: 1125,
        legenda: "Corredor externo de acesso à área de lazer | Vista noturna."
      },
      {
        src: "assets/img/projetos/casa-a-e-a-12.webp",
        alt: "Vista diurna da área de lazer",
        largura: 1400,
        altura: 875,
        legenda: "Área de lazer | Vista diurna"
      },
      {
        src: "assets/img/projetos/casa-a-e-a-13.webp",
        alt: "Vista noturna da área de lazer",
        largura: 1400,
        altura: 875,
        legenda: "Área de lazer | Vista noturna"
      }
    ]
  },
  {
    id: "emporio-ambira",
    nome: "Empório Ambira",
    demonstracao: false,
    destaque: false,
    uso: "Comercial",
    servicos: ["Interiores"],
    cidade: "São João del-Rei, MG",
    area: "71,75 m²",
    ano: "2023",
    resumo: "Empório repaginado, com setores estratégicos e diversidade de produtos para atrair moradores e viajantes.",
    descricao: "O objetivo central foi estabelecer um novo conceito para o estabelecimento a partir do remodelamento dos produtos ofertados para ampliação do público alvo: viajantes e moradores locais. A setorização do espaço foi a principal solução adotada como forma de ocupar todo o espaço, induzindo o cliente a percorrer todo o empório. Devido a diversidade de produtos, cada setor ficou dividido de maneira perceptível a fim de alcançar todo o público almejado.",
    capa: {
      src: "assets/img/projetos/emporio-ambira-01.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/emporio-ambira-01.webp",
        alt: "Vista do acesso ao Empória",
        largura: 1200,
        altura: 900,
        legenda: "Acesso"
      },
      {
        src: "assets/img/projetos/emporio-ambira-02.webp",
        alt: "Vista para a estante de exposição",
        largura: 1200,
        altura: 900,
        legenda: "Vista para a estante de exposição"
      },
      {
        src: "assets/img/projetos/emporio-ambira-03.webp",
        alt: "Vista dos fundos para o lavatório e parede de destaque",
        largura: 1200,
        altura: 900,
        legenda: "Lavatório e parede de destaque"
      },
      {
        src: "assets/img/projetos/emporio-ambira-05.webp",
        alt: "Vista para os freezers de self service",
        largura: 1200,
        altura: 900,
        legenda: "Setor de self service"
      },
      {
        src: "assets/img/projetos/emporio-ambira-06.webp",
        alt: "Vista para o balcão",
        largura: 1200,
        altura: 900,
        legenda: "Balcão"
      },
      {
        src: "assets/img/projetos/emporio-ambira-07.webp",
        alt: "Vista para área de interação do setor de self service",
        largura: 1200,
        altura: 900,
        legenda: "Setor de self service"
      },
      {
        src: "assets/img/projetos/emporio-ambira-08.webp",
        alt: "Vista por dentro do balcão",
        largura: 1200,
        altura: 900,
        legenda: "Vista pelo balcão"
      },
      {
        src: "assets/img/projetos/emporio-ambira-09.webp",
        alt: "Percpectiva da entrada",
        largura: 1200,
        altura: 900,
        legenda: "Perspectiva do acesso principal"
      },
      {
        src: "assets/img/projetos/emporio-ambira-10.webp",
        alt: "Vista do baleiro do balcão",
        largura: 1200,
        altura: 900,
        legenda: "Detalhes do baleiro | Balcão"
      },
      {
        src: "assets/img/projetos/emporio-ambira-11.webp",
        alt: "Vista para a parede de destaque e freezers",
        largura: 1200,
        altura: 900,
        legenda: "Parede de destaque para exposição"
      },
      {
        src: "assets/img/projetos/emporio-ambira-12.webp",
        alt: "Percpectva do balcão",
        largura: 1200,
        altura: 900,
        legenda: "Percpectva do balcão"
      },
       {
        src: "assets/img/projetos/emporio-ambira-14.webp",
        alt: "Percpectva aproximada do balcão",
        largura: 1200,
        altura: 900,
        legenda: "Percpectva aproximada do balcão"
      },
      {
        src: "assets/img/projetos/emporio-ambira-13.webp",
        alt: "Vista da vitrine",
        largura: 1200,
        altura: 900,
        legenda: "Vitrine de exposição"
      },
      {
        src: "assets/img/projetos/emporio-ambira-15.webp",
        alt: "Vista para a estante de exposição",
        largura: 1200,
        altura: 900,
        legenda: "Vista para a estante de exposição"
      },
      {
        src: "assets/img/projetos/emporio-ambira-fachada-01.webp",
        alt: "Fachada com todas as luzes acesas",
        largura: 1200,
        altura: 900,
        legenda: "Fachada | Luzes gerais acesas"
      },
      {
        src: "assets/img/projetos/emporio-ambira-fachada-02.webp",
        alt: "Fachada com as luzes de destaque acesas",
        largura: 1200,
        altura: 900,
        legenda: "Fachada | Luzes de desrtaque acesas"
      },
      {
        src: "assets/img/projetos/emporio-ambira-planta-baixa.webp",
        alt: "Planta baixa do espaço",
        largura: 1200,
        altura: 900,
        legenda: "Planta baixa"
      }
    ]
  },
  {
    id: "reforma-e-ampliacao-residencial-f-filva",
    nome: "Reforma e ampliação residencial - Família Silva",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Reforma"],
    cidade: "São Tiago, MG",
    area: "177,14m²",
    ano: "2024",
    resumo: "Reforma e ampliação residencial que preserva a história da casa, priorizando conforto, acessibilidade e convivência familiar.",
    descricao: "Desde 1950, a casa carrega histórias e paredes de tijolos maciços que pediram um novo respiro para acolher os pais com mais conforto e acessibilidade. Respeitando as limitações estruturais e os cômodos compactos originais, a ampliação (que eleva a área construída de 107,70 m² para 179,20 m²) integra a área social, melhora o acesso com rampa e patamar e amplia o banheiro no térreo, enquanto o novo pavimento superior sobre a garagem e a área reconstruída cria um refúgio de lazer e convívio com maior privacidade.",
    capa: {
      src: "assets/img/projetos/residencial-f-filva-01.webp",
      alt: "Fachada reformada noturna",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/residencial-f-filva-02.webp",
        alt: "Fachada reformada diurno",
        largura: 1200,
        altura: 900,
        legenda: "Fachada principal | Vista diurna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-03.webp",
        alt: "Fachada reformada noturna vista aproximada",
        largura: 900,
        altura: 1125,
        legenda: "Vista aproximada da fachada | Vista noturna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-04.webp",
        alt: "Fachada reformada diurna vista aproximada",
        largura: 900,
        altura: 1125,
        legenda: "Vista aproximada da fachada | Vista diurna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-06.webp",
        alt: "Fachada reformada diurna vista aproximada",
        largura: 900,
        altura: 1125,
        legenda: "Vista aproximada da fachada | Vista diurna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-08.webp",
        alt: "Vista noturna da fachada reformada",
        largura: 900,
        altura: 1125,
        legenda: "Fachada principal | Vista noturna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-07.webp",
        alt: "Fachada reformada diurna vista aproximada inferior",
        largura: 900,
        altura: 1125,
        legenda: "Vista inferior aproximada da fachada | Vista diurna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-09.webp",
        alt: "Fachada reformada noturna vista aproximada inferior",
        largura: 900,
        altura: 1125,
        legenda: "Vista inferior aproximada da fachada | Vista noturna"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-05.webp",
        alt: "Terraço descoberto com área de socialização",
        largura: 900,
        altura: 1125,
        legenda: "Área de socialização no terraço"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-10.webp",
        alt: "Terraço descoberto com área de socialização",
        largura: 900,
        altura: 1125,
        legenda: "Área de socialização no terraço"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-planta-baixa-01.webp",
        alt: "Planta baixa pavimento térreo",
        largura: 900,
        altura: 1125,
        legenda: "Planta baixa | Pavimento térreo"
      },
      {
        src: "assets/img/projetos/residencial-f-filva-planta-baixa-02.webp",
        alt: "Planta baixa primeiro pavimento",
        largura: 900,
        altura: 1125,
        legenda: "Planta baixa | Primeiro pavimento"
      }
    ]
  },
  {
    id: "bar-e-petiscaria-na-brasa",
    nome: "Bar e Pestiscaria 'Na Brasa'",
    demonstracao: false,
    destaque: false,
    uso: "Comercial",
    servicos: ["Interiores"],
    cidade: "São Tiago, MG",
    area: "155m²",
    ano: "2024",
    resumo: "Bar com estética industrial, integração com o futebol, gastronomia e entretenimento para diferentes públicos.",
    descricao: "O projeto Na Brasa transforma um galpão ao lado do campo de society em um bar vibrante e democrático onde o futebol pulsa dentro e fora das quatro linhas. Com estética industrial equilibrada por toques de cor para abraçar diferentes públicos e apresentar o padrão da marca, o espaço conecta mesas voltadas para o campo, grupos maiores, jogos, música ao vivo e telas de transmissão a uma cozinha ativa e fluxos de trabalho pensados para o ritmo e o conforto da equipe.",
    capa: {
      src: "assets/img/projetos/bar-e-petiscaria-na-brasa-01.webp",
      alt: "Espaço reservado demonstrativo: fachada do Sobrado e Ateliê de uso comercial",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-01.webp",
        alt: "Espaço reservado demonstrativo: fachada com acesso comercial no térreo",
        largura: 1200,
        altura: 900,
        legenda: "Fachada de uso misto (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-02.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-03.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-04.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-05.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-06.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-07.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-08.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-09.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-10.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-11.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/bar-e-petiscaria-na-brasa-12.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
    ]
  },
  {
    id: "quartinho-infantil-m",
    nome: "Quarto Infantil: Quartinho M.",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Interiores"],
    cidade: "São Tiago, MG",
    area: "9,98m²",
    ano: "2024",
    resumo: "Quarto infantil afetivo e adaptável, com inspiração montessoriana, pensado para estimular autonomia e acompanhar o crescimento.",
    descricao: "Idealizado ainda antes da chegada do bebê, esse cantinho dentro de um apartamento foi pensado para ser o mundinho dele - um espaço afetivo e seguro para acompanhar toda a infância. Em vez de móveis que logo ficam para trás, o projeto aposta em mobiliário adaptativo e na lógica Montessoriana para incentivar a autonomia e as descobertas dia após dia, reunindo cantinhos de descanso, estudo, guarda-roupa e brincadeira ao alcance dos olhos e das mãos, em uma base clara que traz leveza e não perde a essência de relaxamento que um quarto precisa.",
    capa: {
      src: "assets/img/projetos/quartinho-infantil-m-01.webp",
      alt: "Espaço reservado demonstrativo: proposta de layout para sala de estar",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/quartinho-infantil-m-01.webp",
        alt: "Espaço reservado demonstrativo: nova disposição de sofás e poltronas",
        largura: 1200,
        altura: 900,
        legenda: "Estudo de disposição de móveis (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-02.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-03.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-04.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-05.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-06.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-07.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-08.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-09.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/quartinho-infantil-m-10.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "residencial-familia-alexandre",
    nome: "Obra Nova Residencial | 2 Pavimentos: Família Alexandre",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Obra nova"],
    cidade: "São Tiago, MG",
    area: "145,19m²",
    ano: "2024",
    resumo: "Residência de dois pavimentos que integra trabalho, lazer e acolhimento, respeitando a rotina e a personalidade da família.",
    descricao: "A casa da Carol, nail designer, do Miguel e da Lua nasceu da vontade de unir o ritmo vibrante do trabalho com o descanso que renova, em um terreno estreito com 145,06 m² de área construída em dois pavimentos. Guiada pela filosofia de que cuidar de unhas também é terapêutico, a arquitetura equilibra o movimento do estúdio (conectado à casa sem perder privacidade) com cantos pensados para desacelerar, como a área externa de lazer com ofurô ao ar livre, a sala de TV como ponto de encontro entre mãe e filho e a suíte voltada para o pôr do sol, tudo adaptado com sensibilidade às escolhas e a rotina da família.",
    capa: {
      src: "assets/img/projetos/residencial-familia-alexandre-01.webp",
      alt: "Espaço reservado demonstrativo: proposta de layout para sala de estar",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/residencial-familia-alexandre-01.webp",
        alt: "Espaço reservado demonstrativo: nova disposição de sofás e poltronas",
        largura: 1200,
        altura: 900,
        legenda: "Estudo de disposição de móveis (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-02.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-03.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-04.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-05.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-06.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-planta-baixa-01.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/residencial-familia-alexandre-planta-baixa-02.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "paradinha-do-acai",
    nome: "Paradinha do Açai",
    demonstracao: false,
    destaque: false,
    uso: "Comercial",
    servicos: ["Interiores", "Reforma"],
    cidade: "São Tiago, MG",
    area: "32,51m²",
    ano: "2024",
    resumo: "Loja de açaí com identidade visual refrescante, cores vibrantes e soluções funcionais para integrar atendimento e delivery.",
    descricao: "A Paradinha do Açaí fugiu do óbvio ao deixar de lado o roxo tradicional para transformar os freezers existentes (que não podiam ser modificados) no ponto de partida da identidade visual. Os tons quentes de amarelo e laranja dos equipamentos foram equilibrados com uma paleta glacial e refrescante: a base neutra e branca, as ondas azuis nas paredes, a iluminação suave em tons de lilás e o forro salpicado de manchinhas coloridas que remetem a granulado ou confeitos. Na prática, o projeto também resolveu o conflito entre o atendimento no self-service e o delivery ao concentrar o fluxo em um corredor linear compartilhado, além de camuflar os acessos ao lavabo e à nova cozinha de apoio com portas mimetizadas.",
    capa: {
      src: "assets/img/projetos/paradinha-do-acai-01.webp",
      alt: "Espaço reservado demonstrativo: proposta de layout para sala de estar",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/paradinha-do-acai-01.webp",
        alt: "Espaço reservado demonstrativo: nova disposição de sofás e poltronas",
        largura: 1200,
        altura: 900,
        legenda: "Estudo de disposição de móveis (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-02.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-03.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-04.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-05.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-06.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-07.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-09.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/paradinha-do-acai-10.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "festaria-home-decor",
    nome: "Festaria Home Decor",
    demonstracao: false,
    destaque: false,
    uso: "Comercial",
    servicos: ["Interiores"],
    cidade: "São Tiago, MG",
    area: "97,67m²",
    ano: "2024",
    resumo: "Loja de decoração com estética clássica e sofisticada, valorizando os produtos por meio de uma exposição estratégica e funcional.",
    descricao: "Esta é uma loja de itens de decoração que precisava dar um salto de espaço e de posicionamento para traduzir a qualidade e solidez de seus produtos em uma linguagem mais clássica e sofisticada. Aproveitar os móveis que a loja já possuía e até mesmo os lustres de destaque foi uma escolha inteligente que gerou economia e abriu margem para investir em detalhes de iluminação e nas adequações técnicas da reforma. Pensado para valorizar cada peça, o projeto multiplicou as superfícies de parede para ampliar o espaço expositivo e estruturou o balcão como eixo central, garantindo visão ampla de toda a loja.",
    capa: {
      src: "assets/img/projetos/festaria-home-decor-01.webp",
      alt: "Espaço reservado demonstrativo: proposta de layout para sala de estar",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/festaria-home-decor-01.webp",
        alt: "Espaço reservado demonstrativo: nova disposição de sofás e poltronas",
        largura: 1200,
        altura: 900,
        legenda: "Estudo de disposição de móveis (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-02.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-03.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-04.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-05.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-06.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-07.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-08.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-09.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-10.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/festaria-home-decor-11.webp",
        alt: "Espaço reservado demonstrativo: paleta de cores e acabamentos sugeridos",
        largura: 1200,
        altura: 900,
        legenda: "Orientação de cores e acabamentos (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "grafica-sao-tiago",
    nome: "Gráfica São Tiago",
    demonstracao: false,
    destaque: false,
    uso: "Comercial",
    servicos: ["Interiores"],
    cidade: "São Tiago, MG",
    area: "12,15m²",
    ano: "2024",
    resumo: "Gráfica e loja de souvenires com identidade mineira, marcenaria sob medida e soluções funcionais para otimizar o espaço.",
    descricao: "Um pequeno espaço que abriga a Gráfica do Alexandre no centro da cidade e carrega a identidade de uma tradição mineira do interior. O espaço foi organizado para o atendimento, o trabalho e a exposição de produtos e foi a marcenaria sob medida que resolveu questões práticas da rotina gráfica, como a bancada com caixas de tomada embutidas para esconder fios, a mesa de trabalho com apoio para a CPU e prateleiras e expositores que aproveitam bem as paredes e a circulação. De impressões à venda de souvenires: esta é a Loja do Alexandre.",
    capa: {
      src: "assets/img/projetos/grafica-sao-tiago-01.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/grafica-sao-tiago-01.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-02.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-03.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-04.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-05.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-06.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/grafica-sao-tiago-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "sitio-sagrada-familia",
    nome: "Sítio Sagrada Família",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Obra nova"],
    cidade: "São Tiago, MG",
    area: "290,00m²",
    ano: "2025",
    resumo: "Área de lazer integrada à natureza, com piscina, sauna, redário e mirante, pensada para o convívio familiar e o descanso.",
    descricao: "Como uma extensão da casa já habitada, a área de lazer será, não apenas de uso esporádico, mas o verdadeiro coração da rotina: um espaço vivo para o dia a dia dos pais e para os encontros dos dois irmãos, suas famílias e visitantes. O projeto integra a edificação principal às áreas externas de piscina adulto e infantil, redário, sauna, banheiros com ducha e parquinho. Apesar da vista exuberante, a edificação precisou ser implantada de forma a barrar o vento da piscina. Por isso não podíamos deixar de lado um acesso aos fundos para servir como contemplação do horizonte - um mirante.",
    capa: {
      src: "assets/img/projetos/sitio-sagrada-familia-02.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/sitio-sagrada-familia-02.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-03.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-04.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-05.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-06.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-08.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-09.webp",
        alt: "Espaço reservado demonstrativo: marcenaria sob medida para organização",
        largura: 1200,
        altura: 900,
        legenda: "Armazenamento planejado (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-10.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-11.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-12.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-13.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-14.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-15.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-16.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-17.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-18.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sagrada-familia-19.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Planta baixa."
      }
    ]
  },
  {
    id: "sitio-sao-francisco-de-assis",
    nome: "Sítio São Francisco de Assis",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Obra nova"],
    cidade: "São Tiago, MG",
    area: "290,95m²",
    ano: "2025",
    resumo: "Casa de campo com integração à paisagem, privacidade e ambientes amplos para descanso e convivência familiar.",
    descricao: "O Sítio São Francisco de Assis foi pensado como refúgio de privacidade, respiro da vida na cidade e praticidade para uma família de rotina corrida. Por isso, a implantação delimita com clareza a setorização entre a área íntima e a área social que é voltada para a vista da represa e reunindo sala privada, cozinha com churrasqueira, jantar e jogos, além de acessos amplos e conexão com a varanda, o que permite percursos fluidos. Além disso, houve um equilíbrio entre soluções práticas de uso e manutenção, sem perder a essência do campo e o sonho de se ter o paisagismo como parte da beleza externa e funcionando como estratégia de privacidade.",
    capa: {
      src: "assets/img/projetos/sitio-sao-francisco-de-assis-01.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-01.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-02.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-03.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-04.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-05.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-06.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-08.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-09.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-10.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-11.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-12.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-13.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-14.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-15.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-16.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-17.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-18.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-19.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/sitio-sao-francisco-de-assis-20.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "casa-m-a",
    nome: "Casa M.A.",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Obra nova"],
    cidade: "São Tiago, MG",
    area: "305m²",
    ano: "2026",
    resumo: "Residência contemporânea que une imponência, privacidade e integração com a natureza, valorizando a topografia e o horizonte.",
    descricao: "Em um terreno de 379,90 m², a casa parte da ideia de 'monumentalidade que liberta o horizonte', fazendo coexistir presença imponente e privacidade ao aproveitar o desnível do terreno. O conceito busca fusão orgânica com a natureza, simplicidade essencial sem excessos e um ritmo de refúgio que convida a desacelerar e absorver a luz, a calma e a experiência sensorial do entorno.",
    capa: {
      src: "assets/img/projetos/casa-m-a-01.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/casa-m-a-01.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-02.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-03.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-04.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-05.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-06.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-08.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-09.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-10.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-11.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-12.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-13.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-14.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-15.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-16.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/casa-m-a-17.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "apartamento-401",
    nome: "Apartamento 401",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Reforma", "Interiores"],
    cidade: "Belo Horizonte, MG",
    area: "40,55m²",
    ano: "2026",
    resumo: "Apartamento contemporâneo e acolhedor, que integra ambientes e combina cores, arte e memórias afetivas.",
    descricao: "O apartamento celebra a autenticidade de um lar onde a alegria se traduz em cores, memórias e expressões artísticas. Em vez de uniformizar estilos, o projeto promove a convivência intencional entre o novo e o antigo: móveis herdados e obras de arte autorais mantêm sua identidade e dialogam com a nova arquitetura. A integração entre cozinha, jantar, estar e TV amplia o convívio, enquanto uma base neutra em Off White e madeira serve de palco para o protagonismo das cores da parede, do azul dos móveis, do ladrilho hidráulico e da iluminação aconchegante feita em uma sanca de MDF, resultando em uma atmosfera vibrante e acolhedora.",
    capa: {
      src: "assets/img/projetos/apartamento-401-01.webp",
      alt: "Espaço reservado demonstrativo: sala integrada do Apartamento Luz Natural",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/apartamento-401-01.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-02.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-03.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-04.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-05.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-06.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-07.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-08.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-09.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-10.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-11.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-12.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-13.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-14.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-15.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-16.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-17.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-18.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-19.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-20.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-21.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-22.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/apartamento-401-23.webp",
        alt: "Espaço reservado demonstrativo: integração entre sala de estar e jantar",
        largura: 1200,
        altura: 900,
        legenda: "Integração de ambientes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "familia-assis-e-mata",
    nome: "Família Assis e Mata",
    demonstracao: false,
    destaque: true,
    uso: "Residencial",
    servicos: ["Interiores"],
    cidade: "São Tiago, MG",
    area: "109,30m²",
    ano: "2024",
    resumo: "Reforma residencial que prioriza funcionalidade, iluminação natural e integração dos ambientes para fortalecer o convívio familiar.",
    descricao: "As variações de propostas de reforma buscaram percepções distintas: funcionalidade, menor intervenção ou maior integração entre cozinha e lazer. Entretanto, em todas as opções estudadas, priorizamos maior luminosidade natural, conexão entre cozinha e lavanderia e respeito ao volume principal da casa, mantendo a visibilidade de árvore externa que já faz parte da vista diária e ampliando o uso do quarto do casal. No final, a proposta escolhida uniu maior funcionalidade, ao aproveitar a área da copa; não foi a proposta mais econômica, mas, certamente, será a que representa maior união entre os momentos em família.",
    capa: {
      src: "assets/img/projetos/familia-assia-e-mata-02.webp",
      alt: "Espaço reservado demonstrativo: fachada do Sobrado e Ateliê de uso misto",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/familia-assia-e-mata-01.webp",
        alt: "Espaço reservado demonstrativo: fachada com acesso comercial no térreo",
        largura: 1200,
        altura: 900,
        legenda: "Fachada de uso misto (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-02.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-03.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-04.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-05.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-06.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-07.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-08.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-09.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-10.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-11.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-12.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-13.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-14.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-15.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-16.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-17.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-18.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-19.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-20.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-21.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-22.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-23.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-24.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-25.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-26.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-27.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-28.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-29.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-assia-e-mata-30.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "familia-lara",
    nome: "Família Lara",
    demonstracao: false,
    destaque: true,
    uso: "Residencial",
    servicos: ["Reforma", "Interiores"],
    cidade: "São Tiago, MG",
    area: "109,30m²",
    ano: "2024",
    resumo: "Reforma residencial que valoriza a integração dos ambientes, a iluminação natural e os momentos de convivência familiar.",
    descricao: "As variações de propostas de reforma buscaram percepções distintas: funcionalidade, menor intervenção ou maior integração entre cozinha e lazer. Entretanto, em todas as opções estudadas, priorizamos maior luminosidade natural, conexão entre cozinha e lavanderia e respeito ao volume principal da casa, mantendo a visibilidade de árvore externa que já faz parte da vista diária e ampliando o uso do quarto do casal. No final, a proposta escolhida uniu maior funcionalidade, ao aproveitar a área da copa; não foi a proposta mais econômica, mas, certamente, será a que representa maior união entre os momentos em família.",
    capa: {
      src: "assets/img/projetos/familia-lara-01.webp",
      alt: "Espaço reservado demonstrativo: fachada do Sobrado e Ateliê de uso misto",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/familia-lara-01.webp",
        alt: "Espaço reservado demonstrativo: fachada com acesso comercial no térreo",
        largura: 1200,
        altura: 900,
        legenda: "Fachada de uso misto (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-02.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-03.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-04.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-05.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-06.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-07.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-08.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-09.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-10.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-11.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-12.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-13.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-14.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-planta-baixa-01.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-planta-baixa-02.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-planta-baixa-03.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-planta-baixa-04.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-lara-planta-baixa-05.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      }
    ]
  },
  {
    id: "familia-cerqueira-e-lara",
    nome: "Família Cerqueira e Lara",
    demonstracao: false,
    destaque: false,
    uso: "Residencial",
    servicos: ["Reforma"],
    cidade: "São Tiago, MG",
    area: "83,55m²",
    ano: "2024",
    resumo: "Reforma residencial que amplia a segurança, o lazer e a integração com a natureza, otimizando os espaços para a família.",
    descricao: "Em um terreno de 232,00 m², o projeto desta família resolve os desafios de um imóvel  construído recentemente, mas que faltavam coberturas de proteção e tinha a necessidade de criar uma área para o lazer da família sem comprometer a iluminação da casa.  A proposta reorganiza o dia a dia ao transferir o local da garagem com tamanho confortável para 2 carros e  o escritório com lavabo para a antiga garagem, liberando o quarto da casa. A família procurava também dar maior segurança para a filha e os gatinhos além de estruturar áreas de lazer e convivência ao ar livre com contato com a natureza e a vista para a cidade.",
    capa: {
      src: "assets/img/projetos/familia-cerqueira-e-lara-01.webp",
      alt: "Espaço reservado demonstrativo: fachada do Sobrado e Ateliê de uso misto",
      largura: 1200,
      altura: 900
    },
    fotos: [
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-01.webp",
        alt: "Espaço reservado demonstrativo: fachada com acesso comercial no térreo",
        largura: 1200,
        altura: 900,
        legenda: "Fachada de uso misto (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-02.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-03.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-04.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-05.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-06.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-07.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-08.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-09.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      },
      {
        src: "assets/img/projetos/familia-cerqueira-e-lara-10.webp",
        alt: "Espaço reservado demonstrativo: circulação independente entre ateliê e moradia",
        largura: 1200,
        altura: 900,
        legenda: "Acessos independentes (imagem demonstrativa)."
      }
    ]
  },
];
