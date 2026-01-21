import { ContentMemory } from './types';

// DATA ARCHITECTURE: Separation of content from logic
export const CONTEUDO_MEMORIA: ContentMemory = {
  learningPath: [
    {
      stepNumber: 1,
      title: "O Estranhamento",
      description: "A primeira etapa do historiador é não aceitar o óbvio. Por que existem tantas avenidas com nomes de militares e poucas com nomes de artistas ou professores em Boa Vista?",
      reflectiveQuestion: "O que a ausência de nomes indígenas ou femininos nas placas de rua diz sobre quem detém o poder na cidade?",
      actionLabel: "Explorar o Mapa",
      targetSectionId: "memory-map"
    },
    {
      stepNumber: 2,
      title: "O Confronto",
      description: "Ao clicar em um local no mapa, compare a 'História Oficial' com a 'Análise Crítica'. Perceba o que foi dito e, principalmente, o que foi silenciado.",
      reflectiveQuestion: "A placa de bronze conta a história de quem construiu a obra ou de quem mandou construir?",
      actionLabel: "Investigar um Monumento",
      targetSectionId: "memory-map"
    },
    {
      stepNumber: 3,
      title: "A Contextualização",
      description: "Os monumentos não surgiram do nada. Entenda como os eventos locais (criação do Território) se conectam com a política nacional (Golpe de 64).",
      reflectiveQuestion: "Roraima seria um Estado hoje se não fosse o interesse militar na fronteira? A que custo humano isso ocorreu?",
      actionLabel: "Ver Linha do Tempo",
      targetSectionId: "timeline"
    },
    {
      stepNumber: 4,
      title: "A Ação",
      description: "A memória é viva. Após investigar, deixe sua contribuição, foto ou relato no nosso mural colaborativo. Você também é um agente da história.",
      reflectiveQuestion: "Como você gostaria que a sua rua ou o seu bairro fossem lembrados daqui a 50 anos?",
      actionLabel: "Contribuir no Mural",
      targetSectionId: "padlet"
    }
  ],
  locations: [
    // --- BAIRROS ---
    {
      id: 'bairro-31-marco',
      title: 'Bairro 31 de Março',
      category: 'Bairro',
      imageUrl: 'https://images.unsplash.com/photo-1590059908862-21a445cb40b3?q=80&w=800&auto=format&fit=crop', // Imagem ilustrativa urbana
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bairro+31+de+Marco+Boa+Vista+RR',
      officialVersion: 'Bairro residencial planejado, cujo nome remete à data oficial do movimento civil-militar de 1964, celebrado pelos apoiadores do regime como uma "Revolução" que visava restaurar a ordem no país.',
      criticalAnalysis: 'A nomenclatura celebra explicitamente o Golpe de Estado de 1964, que depôs um presidente eleito e instaurou 21 anos de ditadura. Manter o nome "31 de Março" em um bairro residencial naturaliza a ruptura democrática no cotidiano dos moradores, transformando uma data de luto pela democracia em simples endereço postal.',
      reflectiveQuestion: 'Como viver em um lugar que homenageia o início de uma ditadura afeta a percepção dos moradores sobre a democracia?'
    },
    {
      id: 'bairro-13-setembro',
      title: 'Bairro 13 de Setembro',
      category: 'Bairro',
      imageUrl: 'https://images.unsplash.com/photo-1449824913929-2b3a3e3db8fa?q=80&w=800&auto=format&fit=crop', // Imagem ilustrativa
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bairro+13+de+Setembro+Boa+Vista+RR',
      officialVersion: 'Homenagem à data de criação do Território Federal do Rio Branco (13 de setembro de 1943), pelo decreto do presidente Getúlio Vargas, marco da autonomia administrativa da região em relação ao Amazonas.',
      criticalAnalysis: 'Embora marque a criação do Território, a data remete ao Estado Novo, outro período ditatorial (Vargas). A celebração foca na decisão administrativa federal ("de cima para baixo") e invisibiliza as dinâmicas sociais e a presença indígena que já existiam no território muito antes da "canetada" presidencial.',
      reflectiveQuestion: 'A história de Roraima começou com um decreto federal ou já existia antes das datas oficiais?'
    },

    // --- EDIFÍCIOS PÚBLICOS ---
    {
      id: 'palacio-helio-campos',
      title: 'Palácio Senador Hélio Campos',
      category: 'Edifício Público',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pal%C3%A1cio_Senador_H%C3%A9lio_Campos_-_Boa_Vista_-_Roraima.jpg/800px-Pal%C3%A1cio_Senador_H%C3%A9lio_Campos_-_Boa_Vista_-_Roraima.jpg',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Palacio+Senador+Helio+Campos+Boa+Vista+RR',
      officialVersion: 'Sede do governo, nomeada em homenagem a Hélio Campos, governador nomeado na Ditadura e eleito senador.',
      criticalAnalysis: 'Antigo "Palácio 31 de Março". A mudança de nome não apaga a origem ligada à estrutura administrativa imposta, onde governadores biônicos implementavam políticas sem consulta popular.',
      reflectiveQuestion: 'Por que a mudança de nome de um edifício nem sempre significa uma ruptura com as práticas do passado?'
    },
    {
      id: 'ginasio-helio-campos',
      title: 'Ginásio de Esportes Hélio da Costa Campos',
      category: 'Edifício Público',
      imageUrl: 'https://images.unsplash.com/photo-1517177527633-4f90111624b5?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ginasio+Poliesportivo+Totozao+Boa+Vista+RR',
      officialVersion: 'Maior complexo esportivo do estado, construído para promover o desporto e o lazer da juventude, batizado em homenagem ao governador Hélio Campos.',
      criticalAnalysis: 'A construção de grandes arenas esportivas (obras faraônicas) durante regimes autoritários serve frequentemente como propaganda de "desenvolvimento" e distração social ("pão e circo"). O nome reitera o personalismo político local, onde a infraestrutura pública serve de palanque para a perpetuação de nomes ligados à ditadura.',
      reflectiveQuestion: 'Obras grandiosas servem à população ou à imagem dos governantes que as constroem?'
    },
    {
      id: 'hgr-hospital-base',
      title: 'HGR (Antigo Hospital de Base)',
      category: 'Edifício Público',
      imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b9af922?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hospital+Geral+de+Roraima+Boa+Vista+RR',
      officialVersion: 'Principal unidade de saúde do estado, criada para atender à crescente demanda populacional decorrente dos fluxos migratórios incentivados pelo governo federal.',
      criticalAnalysis: 'A estrutura foi pensada para dar suporte biológico à ocupação demográfica (colonos e garimpeiros) trazida pelos projetos militares. Enquanto se erguia um "Hospital de Base" na capital, desmantelava-se a saúde indígena no interior, criando um sistema desigual onde a saúde era ferramenta de soberania nacional, não direito universal.',
      reflectiveQuestion: 'A saúde pública foi planejada para todos ou apenas para sustentar a força de trabalho que ocuparia a Amazônia?'
    },
    {
      id: 'aeroporto-atlas-cantanhede',
      title: 'Aeroporto Int. Atlas Cantanhede',
      category: 'Edifício Público',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Aeroporto+Internacional+de+Boa+Vista+Atlas+Brasil+Cantanhede',
      officialVersion: 'Homenagem a Atlas Brasil Cantanhede, pioneiro da aviação, mas também figura pública central. Foi deputado federal pela ARENA e ocupou cargos estratégicos, sendo defensor da integração da Amazônia.',
      criticalAnalysis: 'Atlas Cantanhede personifica a união entre o "desbravamento" e a política da Ditadura. Como deputado da ARENA (partido de sustentação do regime), ele articulou os interesses locais com os generais de Brasília. O aeroporto não homenageia apenas um piloto, mas um agente político que legitimou a ocupação agressiva do território sob a doutrina de Segurança Nacional.',
      reflectiveQuestion: 'O nome do aeroporto celebra a perícia do piloto ou a lealdade política do deputado ao regime militar?'
    },

    // --- PRAÇAS ---
    {
      id: 'praca-capitao-clovis',
      title: 'Praça Capitão Clóvis',
      category: 'Praça',
      imageUrl: 'https://images.unsplash.com/photo-1558693175-d576a5e12822?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Praca+Capitao+Clovis+Boa+Vista+RR',
      officialVersion: 'Espaço de lazer nomeado em homenagem ao Capitão Clóvis Novaes da Costa, comandante da Guarda Territorial, reconhecido por seu papel na manutenção da ordem e segurança pública nos primeiros anos do Território.',
      criticalAnalysis: 'Ao nomear uma praça — local de convivência civil e lúdica — com o nome de um chefe de polícia militar, o Estado naturaliza a presença da força armada na memória afetiva da cidade. Isso sugere que a "ordem" militar é pré-requisito para o lazer, ocultando o histórico de repressão da Guarda Territorial contra populações marginalizadas.',
      reflectiveQuestion: 'Por que nossos espaços de lazer frequentemente homenageiam figuras ligadas à polícia ou ao exército, e raramente artistas ou educadores?'
    },

    // --- ESCOLAS ---
    {
      id: 'escola-mario-david-andreazza',
      title: 'Escola Est. Mário David Andreazza',
      category: 'Escola',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Escola+Estadual+Mario+David+Andreazza+Boa+Vista+RR',
      officialVersion: 'Instituição nomeada em homenagem ao Ministro do Interior e dos Transportes, responsável por grandes obras de infraestrutura na Amazônia, como a Transamazônica, visando integrar a região ao restante do país.',
      criticalAnalysis: 'Mário Andreazza foi o executor do lema "Integrar para não Entregar". Seu nome em uma escola normaliza um projeto de colonização predatório que resultou em desmatamento massivo e no genocídio silencioso de povos indígenas através de doenças e invasões, sob a justificativa do progresso.',
      reflectiveQuestion: 'O que aprendemos sobre história quando estudamos em uma escola que leva o nome de um ministro responsável por crises humanitárias?'
    },
    {
      id: 'escola-major-alcides',
      title: 'Escola Est. Major Alcides',
      category: 'Escola',
      imageUrl: 'https://images.unsplash.com/photo-1544531696-fa3693fb54d6?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Escola+Estadual+Major+Alcides+Rodrigues+dos+Santos+Boa+Vista+RR',
      officialVersion: 'Homenagem ao Major Alcides Rodrigues dos Santos, comandante da Guarda Territorial e figura proeminente na segurança pública durante a fase territorial de Roraima.',
      criticalAnalysis: 'A presença de patentes militares (Major) em nomes de escolas reforça a pedagogia da obediência e a naturalização da força policial dentro do ambiente educacional. Simboliza a "militarização da vida", onde a ordem castrense é apresentada como modelo superior à organização civil.',
      reflectiveQuestion: 'A escola deve ser um espaço de disciplina militar ou de desenvolvimento do pensamento crítico e liberdade?'
    },
    {
      id: 'escola-darcy-ribeiro',
      title: 'Escola Mun. Darcy Ribeiro',
      category: 'Escola',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Escola+Municipal+Darcy+Ribeiro+Boa+Vista+RR',
      officialVersion: 'Tributo ao antropólogo, educador e político brasileiro, conhecido por sua defesa intransigente dos povos indígenas e pela criação da Universidade de Brasília (UnB) e dos CIEPs.',
      criticalAnalysis: 'Nomear uma escola de Darcy Ribeiro (exilado pela ditadura) em um estado marcado por nomes militares é um ato de "disputa de memória". Representa a valorização da educação pública e da cultura indígena, contrapondo-se diametralmente à lógica tecnocrata e integracionista dos militares.',
      reflectiveQuestion: 'Por que existem tão poucas escolas com nomes de educadores em comparação com nomes de militares em Roraima?'
    },
    {
      id: 'escola-tancredo-neves',
      title: 'Escola Est. Tancredo Neves',
      category: 'Escola',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Escola+Estadual+Presidente+Tancredo+Neves+Boa+Vista+RR',
      officialVersion: 'Homenagem ao primeiro presidente civil eleito após 21 anos de regime militar, símbolo da redemocratização, da "Nova República" e da esperança de um novo tempo político.',
      criticalAnalysis: 'Tancredo representa a "transição pelo alto", uma conciliação entre a elite política e os militares que garantiu a anistia aos torturadores. Embora seja um nome civil, a escola marca um período onde a democracia foi restaurada sem julgar os crimes do passado, mantendo intactas estruturas de poder.',
      reflectiveQuestion: 'A democracia é plena quando a transição ignora a punição dos crimes cometidos pelo Estado?'
    },
    {
      id: 'escola-senador-helio-campos',
      title: 'Escola Est. Senador Hélio Campos',
      category: 'Escola',
      imageUrl: 'https://images.unsplash.com/photo-1596496050844-461af543e129?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Escola+Estadual+Senador+Helio+Campos+Boa+Vista+RR',
      officialVersion: 'Instituição que leva o nome de Hélio Campos, governador do Território e posteriormente Senador da República, reconhecido como um grande líder político local.',
      criticalAnalysis: 'Hélio Campos foi um governador "biônico" (não eleito, nomeado pela ditadura). Sua posterior eleição como senador demonstra a continuidade das elites do regime militar na democracia. A escola celebra a figura do "pai do povo" que governou sem voto popular durante anos.',
      reflectiveQuestion: 'Como a memória de governantes não eleitos influencia nossa compreensão sobre representatividade política?'
    },

    // --- LOGRADOUROS ---
    {
      id: 'av-costa-e-silva',
      title: 'Av. Presidente Costa e Silva',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Presidente+Costa+e+Silva+Boa+Vista+RR',
      officialVersion: 'Importante via que homenageia Artur da Costa e Silva, segundo presidente do regime militar, responsável por políticas de integração da Amazônia e desenvolvimento econômico.',
      criticalAnalysis: 'Costa e Silva foi o signatário do AI-5 (1968), o ato mais repressivo da ditadura que fechou o Congresso e institucionalizou a tortura. Homenageá-lo em uma avenida central é validar a memória de um governante que suspendeu garantias constitucionais básicas dos cidadãos brasileiros.',
      reflectiveQuestion: 'É ético manter o nome de quem institucionalizou a tortura como referência de localização em nossa cidade?'
    },
    {
      id: 'av-getulio-vargas',
      title: 'Av. Getúlio Vargas',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Getulio+Vargas+Boa+Vista+RR',
      officialVersion: 'Homenagem ao presidente que, pelo Decreto-Lei nº 5.812 de 1943, criou o Território Federal do Rio Branco, desmembrando-o do Amazonas para garantir a integridade nacional.',
      criticalAnalysis: 'A criação do Território durante o Estado Novo foi uma estratégia geopolítica onde Vargas entregou propositalmente a administração dessas novas unidades às Forças Armadas. Roraima nasceu politicamente sob tutela militar, tratada como "zona de segurança" e não como ente civil, estabelecendo um precedente de controle autoritário que facilitaria a adesão ao golpe de 1964 posteriormente.',
      reflectiveQuestion: 'A criação de Roraima visava o bem-estar da população local ou o controle militar das fronteiras pelo governo central?'
    },
    {
      id: 'av-brigadeiro-eduardo-gomes',
      title: 'Av. Brigadeiro Eduardo Gomes',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1542259682-1c97a76579cd?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Brigadeiro+Eduardo+Gomes+Boa+Vista+RR',
      officialVersion: 'Via nomeada em honra ao Patrono da Força Aérea Brasileira, pioneiro do Correio Aéreo Nacional, fundamental para a comunicação e abastecimento de Roraima.',
      criticalAnalysis: 'Eduardo Gomes foi uma figura chave da UDN e apoiador do golpe de 64. A homenagem reflete a militarização do espaço aéreo e terrestre de Roraima, onde a logística militar é frequentemente confundida com o desenvolvimento civil, reforçando a tutela das Forças Armadas sobre a região.',
      reflectiveQuestion: 'Por que a infraestrutura na Amazônia é tão frequentemente associada a nomes militares e não a engenheiros ou civis?'
    },
    {
      id: 'av-ene-garcez',
      title: 'Av. Ene Garcez',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1626266394334-a90104e76c0e?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Ene+Garcez+Boa+Vista+RR',
      officialVersion: 'Homenagem ao Capitão Ene Garcez, primeiro governador do Território Federal do Rio Branco, responsável pela organização administrativa inicial e pelo traçado urbano.',
      criticalAnalysis: 'A escolha do Capitão Ene Garcez por Vargas materializa a política de entregar a gestão dos Territórios aos militares. O traçado em leque de Boa Vista, embora moderno, facilitava a vigilância e o controle, refletindo a lógica de uma "cidade-quartel" administrada por oficiais e não por civis eleitos.',
      reflectiveQuestion: 'O planejamento urbano de Boa Vista foi pensado para as pessoas ou para o controle do território?'
    },
    {
      id: 'av-capitao-julio-bezerra',
      title: 'Av. Capitão Júlio Bezerra',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Capitao+Julio+Bezerra+Boa+Vista+RR',
      officialVersion: 'Importante artéria comercial que leva o nome de um militar e político influente na fase territorial, reconhecido pelos serviços prestados à ordem pública.',
      criticalAnalysis: 'O uso de patentes militares (Capitão, Major, Coronel) nos nomes de ruas normaliza a hierarquia castrense na vida civil. Júlio Bezerra, atuando em períodos de exceção, representa a fusão entre poder militar e poder político local que marcou a história de Roraima.',
      reflectiveQuestion: 'Como a presença constante de patentes militares nos nomes de ruas afeta a nossa imaginação sobre quem detém o poder?'
    },
    {
      id: 'av-terencio-lima',
      title: 'Av. Terêncio Lima',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1444723121867-2291d335c6aa?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Terencio+Lima+Boa+Vista+RR',
      officialVersion: 'Homenagem ao agrimensor e político que atuou na demarcação de terras e na estruturação fundiária do estado durante o período de expansão.',
      criticalAnalysis: 'A figura do agrimensor no contexto da ditadura e da expansão para o Oeste está ligada à política de "terras devolutas" que muitas vezes desconsiderou territórios indígenas ancestrais. A "organização" fundiária celebrada muitas vezes significou o esbulho de populações nativas.',
      reflectiveQuestion: 'Organizar a terra significa apenas desenhar lotes ou respeitar quem já vive nela?'
    },
    {
      id: 'av-ottomar-souza-pinto',
      title: 'Av. Ottomar de Souza Pinto',
      category: 'Logradouro',
      imageUrl: 'https://images.unsplash.com/photo-1517732306149-e8f129dc0482?q=80&w=800&auto=format&fit=crop',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Ottomar+de+Souza+Pinto+Boa+Vista+RR',
      officialVersion: 'Homenagem ao Brigadeiro Ottomar, governador que conduziu Roraima à condição de Estado, responsável por grandes obras de infraestrutura e pela vinda da energia de Guri.',
      criticalAnalysis: 'Ottomar foi um governador "biônico" (nomeado pela ditadura) antes de ser eleito. Sua figura representa a transição tutelada: a democracia chegou, mas as lideranças formadas dentro do regime militar continuaram no poder, mantendo práticas populistas e centralizadoras.',
      reflectiveQuestion: 'A transição para a democracia é completa quando as mesmas lideranças do regime militar continuam governando?'
    },

    // --- OUTROS (Mantendo alguns essenciais) ---
    {
      id: 'monumento-garimpeiro',
      title: 'Monumento ao Garimpeiro',
      category: 'Monumento',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Monumento_ao_Garimpeiro_-_Centro_C%C3%ADvico.jpg/800px-Monumento_ao_Garimpeiro_-_Centro_C%C3%ADvico.jpg',
      officialVersion: 'Homenagem aos pioneiros que desbravaram o território em busca de minérios, impulsionando a economia e o crescimento demográfico de Roraima.',
      criticalAnalysis: 'Esta estátua materializa a ideologia do "vazio demográfico" e do progresso a qualquer custo. O garimpo, incentivado pelo regime militar, resultou em graves crises humanitárias para o povo Yanomami e contaminação ambiental.',
      reflectiveQuestion: 'É possível homenagear uma figura histórica sem ignorar os impactos negativos que sua atividade causou?'
    }
  ],
  timeline: [
    {
      year: '1943',
      title: 'Criação do Território',
      description: 'Getúlio Vargas cria o Território Federal do Rio Branco e entrega a administração a militares como estratégia de segurança nacional.',
      type: 'local'
    },
    {
      year: '1964',
      title: 'Golpe Civil-Militar',
      description: 'Início do regime militar. Intensifica-se a nomeação de governadores militares em Roraima.',
      type: 'national'
    },
    {
      year: '1968',
      title: 'AI-5 e Endurecimento',
      description: 'Decreto do AI-5. Aumento do controle sobre fronteiras e terras indígenas.',
      type: 'national'
    },
    {
      year: '1970s',
      title: 'Colonização e Perimetral',
      description: 'Obras da Perimetral Norte e incentivo ao garimpo. Impacto devastador nos povos Yanomami.',
      type: 'local'
    },
    {
      year: '1988',
      title: 'Roraima vira Estado',
      description: 'Constituição de 88 eleva o território a Estado. Ottomar de Souza Pinto (nomeado) torna-se governador eleito posteriormente.',
      type: 'local'
    }
  ]
};