  // ===== DADOS =====
  // ===== BANCO DE DADOS (LOCAL) =====
  // Cada array abaixo funciona como uma tabela de banco de dados para a aplicação.
const historyData = [
  {year:1930,champion:'🇺🇾 Uruguai',host:'Uruguai',vice:'Argentina',note:'1ª Copa da história'},
  {year:1934,champion:'🇮🇹 Itália',host:'Itália',vice:'Tchecoslováquia',note:'Mussolini pressiona árbitros'},
  {year:1938,champion:'🇮🇹 Itália',host:'França',vice:'Hungria',note:'Último antes da guerra'},
  {year:1950,champion:'🇺🇾 Uruguai',host:'Brasil',vice:'Brasil',note:'Maracanazo — 200mil'},
  {year:1954,champion:'🇩🇪 Alemanha',host:'Suíça',vice:'Hungria',note:'Milagre de Berna'},
  {year:1958,champion:'🇧🇷 Brasil',host:'Suécia',vice:'Suécia',note:'Pelé com 17 anos'},
  {year:1962,champion:'🇧🇷 Brasil',host:'Chile',vice:'Tchecoslováquia',note:'Garrincha brilha'},
  {year:1966,champion:'in Inglaterra',host:'Inglaterra',vice:'Alemanha',note:'Único título da Inglaterra'},
  {year:1970,champion:'🇧🇷 Brasil',host:'México',vice:'Itália',note:'A Copa do Mundo Perfeita'},
  {year:1974,champion:'🇩🇪 Alemanha',host:'Alemanha',vice:'Holanda',note:'Laranja Mecânica de Cruyff'},
  {year:1978,champion:'🇦🇷 Argentina',host:'Argentina',vice:'Holanda',note:'Argentina em casa'},
  {year:1982,champion:'🇮🇹 Itália',host:'Espanha',vice:'Alemanha',note:'Paolo Rossi ressurge'},
  {year:1986,champion:'🇦🇷 Argentina',host:'México',vice:'Alemanha',note:'Maradona — Gol do Século'},
  {year:1990,champion:'🇩🇪 Alemanha',host:'Itália',vice:'Argentina',note:'Copa mais defensiva'},
  {year:1994,champion:'🇧🇷 Brasil',host:'EUA',vice:'Itália',note:'Tetra! Romário & Bebeto'},
  {year:1998,champion:'🇫🇷 França',host:'França',vice:'Brasil',note:'Zidane brilha em casa'},
  {year:2002,champion:'🇧🇷 Brasil',host:'Coreia/Japão',vice:'Alemanha',note:'Ronaldo ressurge — Penta!'},
  {year:2006,champion:'🇮🇹 Itália',host:'Alemanha',vice:'França',note:'Zidane — Cabeçada final'},
  {year:2010,champion:'🇪🇸 Espanha',host:'África do Sul',vice:'Holanda',note:'Tiki-taka de Iniesta'},
  {year:2014,champion:'🇩🇪 Alemanha',host:'Brasil',vice:'Argentina',note:'7×1 — Mineirazo'},
  {year:2018,champion:'🇫🇷 França',host:'Rússia',vice:'Croácia',note:'Mbappé detona'},
  {year:2022,champion:'🇦🇷 Argentina',host:'Catar',vice:'França',note:'Messi conquista o troféu'},
];

const teamsData = [
  {flag:'BR',name:'Brasil',titles:5,vice:2,cups:22,years:'1958, 1962, 1970, 1994, 2002',desc:'O jogo bonito, habilidade e ginga'},
  {flag:'DE',name:'Alemanha',titles:4,vice:4,cups:20,years:'1954, 1974, 1990, 2014',desc:'Eficiência, organização e garra'},
  {flag:'IT',name:'Itália',titles:4,vice:2,cups:18,years:'1934, 1938, 1982, 2006',desc:'Defesa sólida e contra-ataque'},
  {flag:'AR',name:'Argentina',titles:3,vice:3,cups:18,years:'1978, 1986, 2022',desc:'Talento individual e garra'},
  {flag:'FR',name:'França',titles:2,vice:2,cups:16,years:'1998, 2018',desc:'Geração Mbappé, atletismo e técnica'},
  {flag:'UY',name:'Uruguai',titles:2,vice:0,cups:14,years:'1930, 1950',desc:'Garra charrúa, combatividade'},
  {flag:'GB-ENG',name:'Inglaterra',titles:1,vice:0,cups:16,years:'1966',desc:'Futebol físico e direto'},
  {flag:'ES',name:'Espanha',titles:1,vice:0,cups:16,years:'2010',desc:'Tiki-taka, posse de bola'},
];

// Fotos reais dos estádios, anexadas na pasta /img
const stadiumsData = [
  {
    name:'MetLife Stadium',city:'Nova York / NJ',cap:'82.500',country:'🇺🇸',note:'Final da Copa 2026',
    img:'img/MetlifeStadium.jpeg'
  },
  {
    name:'AT&T Stadium',city:'Dallas',cap:'80.000',country:'🇺🇸',note:'Teto retrátil',
    img:'img/ATeTStadium.jpeg'
  },
  {
    name:'Estádio Azteca',city:'Cidade do México',cap:'87.000',country:'🇲🇽',note:'Histórico — 1970 e 1986',
    img:'img/EstadioAzteca.jpeg'
  },
  {
    name:'SoFi Stadium',city:'Los Angeles',cap:'70.240',country:'🇺🇸',note:'Semifinal',
    img:'img/SofiStadium.jpeg'
  },
  {
    name:'Mercedes-Benz Stadium',city:'Atlanta',cap:'71.000',country:'🇺🇸',note:'Teto retrátil exclusivo',
    img:'img/MercedesBenzStadium.jpeg'
  },
  {
    name:'Hard Rock Stadium',city:'Miami',cap:'65.000',country:'🇺🇸',note:'Calor tropical',
    img:'img/HardRockStadium.jpeg'
  },
  {
    name:'Arrowhead Stadium',city:'Kansas City',cap:'76.416',country:'🇺🇸',note:'Torcida barulhenta',
    img:'img/ArrowheadStadium.jpeg'
  },
  {
    name:'BMO Field',city:'Toronto',cap:'45.000',country:'🇨🇦',note:'1º jogo no Canadá',
    img:'img/BMOField.jpeg'
  },
  {
    name:'BC Place',city:'Vancouver',cap:'54.500',country:'🇨🇦',note:'Teto retrátil',
    img:'img/BCPlace.jpeg'
  },
  {
    name:'Estadio BBVA',city:'Monterrey',cap:'53.500',country:'🇲🇽',note:'Moderno',
    img:'img/EstadioBBVA.jpeg'
  },
  {
    name:"Levi's Stadium",city:'San Jose',cap:'68.500',country:'🇺🇸',note:'Sede de grandes eventos',
    img:'img/LevisStadium.jpeg'
  },
  {
    name:'NRG Stadium',city:'Houston',cap:'72.000',country:'🇺🇸',note:'Um dos maiores dos EUA',
    img:'img/NRGStadium.jpeg'
  },
  {
    name:'Lincoln Financial Field',city:'Filadélfia',cap:'68.500',country:'🇺🇸',note:'Casa dos Eagles',
    img:'img/LincolnFinancialField.jpeg'
  },
  {
    name:'Lumen Field',city:'Seattle',cap:'68.700',country:'🇺🇸',note:'Torcida barulhenta do noroeste',
    img:'img/LumenField.jpeg'
  },
  {
    name:'Gillette Stadium',city:'Boston',cap:'65.000',country:'🇺🇸',note:'Icônico do Nordeste americano',
    img:'img/GillettStadium.jpeg'
  },
  {
    name:'Estádio Akron',city:'Guadalajara',cap:'46.200',country:'🇲🇽',note:'Sede de jogos no México',
    img:'img/EstadioAkron.jpeg'
  },
];

// Fotos reais dos jogadores, anexadas na pasta /img
const playersData = [
  {
    name:'Pelé',country:'🇧🇷 Brasil',era:'1958 — 1970',rarity:'lenda',overall:99,pos:'ATA',
    initials:'PE',
    img:'img/Pele.png',
    stats:{vel:95,fin:99,pas:92,dri:98,def:40,fis:88},
    goals:12,cups:3,
    quote:'Único jogador a vencer 3 Copas do Mundo. Estreou com 17 anos em 1958.',
    achievements:['3x Campeão Mundial','Artilheiro histórico','Rei do Futebol']
  },
  {
    name:'Maradona',country:'🇦🇷 Argentina',era:'1982 — 1994',rarity:'lenda',overall:98,pos:'MEI',
    initials:'MA',
    img:'img/Maradona.png',
    stats:{vel:92,fin:95,pas:96,dri:99,def:45,fis:82},
    goals:8,cups:1,
    quote:'Gol do Século e Mão de Deus em 1986. Liderou Argentina ao título sozinho.',
    achievements:['Campeão 1986','Gol do Século','Bola de Ouro 1986']
  },
  {
    name:'Ronaldo Fenômeno',country:'🇧🇷 Brasil',era:'1994 — 2006',rarity:'lenda',overall:97,pos:'ATA',
    initials:'RF',
    img:'img/RonaldoFenomeno.png',
    stats:{vel:98,fin:99,pas:82,dri:96,def:35,fis:94},
    goals:15,cups:2,
    quote:'Artilheiro histórico com 15 gols. Voltou de lesões para ser campeão em 2002.',
    achievements:['2x Campeão Mundial','15 gols — recorde','2x Bola de Ouro FIFA']
  },
  {
    name:'Lionel Messi',country:'🇦🇷 Argentina',era:'2006 — 2022',rarity:'lenda',overall:98,pos:'ATA',
    initials:'LM',
    img:'img/Messi.png',
    stats:{vel:91,fin:97,pas:98,dri:99,def:38,fis:78},
    goals:13,cups:1,
    quote:'Campeão em 2022 após pênaltis épicos contra a França. 5 Copas disputadas.',
    achievements:['Campeão 2022','GOAT','8x Bola de Ouro']
  },
  {
    name:'Kylian Mbappé',country:'🇫🇷 França',era:'2018 — Presente',rarity:'ouro',overall:95,pos:'ATA',
    initials:'KM',
    img:'img/Mbappe.png',
    stats:{vel:99,fin:94,pas:82,dri:92,def:36,fis:85},
    goals:12,cups:1,
    quote:'Hat-trick na Final de 2022. O mais rápido do mundo, favorito para 2026.',
    achievements:['Campeão 2018','Hat-trick Final 2022','O mais rápido']
  },
  {
    name:'Vinicius Jr.',country:'🇧🇷 Brasil',era:'2022 — Presente',rarity:'ouro',overall:92,pos:'ATA',
    initials:'VJ',
    img:'img/ViniciusJr.png',
    stats:{vel:97,fin:88,pas:80,dri:95,def:32,fis:82},
    goals:3,cups:0,
    quote:'Bola de Ouro 2024. Esperança do Brasil para conquistar o hexacampeonato.',
    achievements:['Bola de Ouro 2024','Champions 2024','Esperança do Hexa']
  },
  {
    name:'Lamine Yamal',country:'🇪🇸 Espanha',era:'2024 — Presente',rarity:'prata',overall:89,pos:'PD',
    initials:'LY',
    img:'img/LamineYamal.png',
    stats:{vel:92,fin:82,pas:88,dri:94,def:30,fis:70},
    goals:1,cups:0,
    quote:'Campeão da Euro 2024 com 17 anos. Recorde do jogador mais jovem da história.',
    achievements:['Campeão Euro 2024','Revelação 2024','Prodígio da Espanha']
  },
  {
    name:'Jude Bellingham',country:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',era:'2022 — Presente',rarity:'ouro',overall:91,pos:'MEI',
    initials:'JB',
    img:'img/JudeBelligham.png',
    stats:{vel:85,fin:86,pas:88,dri:87,def:78,fis:90},
    goals:4,cups:0,
    quote:'Versátil e completo. Liderança na Euro 2024. Candidato a melhor do mundo em 2026.',
    achievements:['Liga dos Campeões 2024','Ballon d\'Or candidato','Melhor da Premier League']
  },
  {
    name:'Neymar Jr.',country:'🇧🇷 Brasil',era:'2010 — 2022',rarity:'lenda',overall:96,pos:'ATA',
    initials:'NE',
    img:'img/NeymarJr.png',
    stats:{vel:94,fin:91,pas:93,dri:99,def:38,fis:80},
    goals:8,cups:0,
    quote:'Artista do drible e criatividade. Liderou o Brasil em 3 Copas. Talento único.',
    achievements:['3x Copa América','Champions 2015','Melhor do Brasil na era']
  },
  {
    name:'Cristiano Ronaldo',country:'🇵🇹 Portugal',era:'2006 — 2022',rarity:'lenda',overall:97,pos:'ATA',
    initials:'CR',
    img:'img/CristianoRonaldo.png',
    stats:{vel:89,fin:98,pas:84,dri:92,def:35,fis:95},
    goals:8,cups:0,
    quote:'Cinco Copas disputadas. Liderou Portugal à semifinal de 2006. Dedicação lendária.',
    achievements:['Euro 2016','Nations League 2019','5x Bola de Ouro']
  },
];

// ===== VÍDEOS — IDs corretos do YouTube =====
// Dados para a seção de vídeos. 
// O ytId é usado para carregar a miniatura automaticamente da API do Google.
const videosData = [
  {
    ytId:'RnAHSO57W_w',
    title:'Gol do Século — Maradona vs Inglaterra',
    year:1986,cat:'goal',
    desc:'O maior gol da história da Copa do Mundo. Maradona dribla 5 jogadores ingleses.',
    url:'https://youtu.be/RnAHSO57W_w'
  },
  {
    ytId:'NY0DsnYaO2g',
    title:'Alemanha 7×1 Brasil — Semifinal 2014',
    year:2014,cat:'moment',
    desc:'O maior vexame da história do futebol brasileiro. Sete gols sofridos em casa.',
    url:'https://youtu.be/NY0DsnYaO2g'
  },
  {
    ytId:'MCWJNOfJoSM',
    title:'Final 2022 — Argentina × França (Pênaltis)',
    year:2022,cat:'final',
    desc:'A maior final da história. Messi ergue a taça após dramáticos pênaltis.',
    url:'https://youtu.be/MCWJNOfJoSM'
  },
  {
    ytId:'L5iQ7WghEuM',
    title:'Pelé — Primeiro Gol na Copa 1958',
    year:1958,cat:'goal',
    desc:'Com 17 anos, Pelé marca na semifinal contra o País de Gales e entra para a história.',
    url:'https://youtu.be/L5iQ7WghEuM'
  },
  {
    ytId:'Pu1WanatiAM',
    title:'Maracanazo — Uruguai 2×1 Brasil (1950)',
    year:1950,cat:'moment',
    desc:'O maior choque da história. Uruguai vence o Brasil no Maracanã com 200.000 torcedores.',
    url:'https://youtu.be/Pu1WanatiAM'
  },
  {
    ytId:'Gkr7FopP65g',
    title:'Gol do Neymar contra a Croacia',
    year:2022,cat:'goal',
    desc:'Neymar marca um golaço contra a Croácia na Copa do Mundo de 2022 — um dos momentos mais decisivos da seleção brasileira no torneio.',
    url:'https://youtu.be/Gkr7FopP65g'
  },
];

const recordsData = [
  {icon:'⚽',value:'16 Gols',name:'Maior Artilheiro',desc:'Miroslav Klose (Alemanha) — 4 Copas disputadas'},
  {icon:'🏆',value:'10×1',name:'Maior Vitória',desc:'Hungria × El Salvador — Copa de 1982'},
  {icon:'⭐',value:'17 Anos',name:'Mais Jovem a Marcar',desc:'Pelé (Brasil) — Copa 1958, gol histórico'},
  {icon:'👥',value:'199.854',name:'Maior Público',desc:'Brasil × Uruguai — Maracanã 1950'},
  {icon:'📊',value:'2.271',name:'Total de Gols',desc:'856 jogos até 2022 — média de 2,65 gols/jogo'},
  {icon:'🎯',value:'50',name:'Hat-tricks',desc:'Mbappé foi o último — Final 2022 vs Argentina'},
];

// ===== CURIOSIDADES =====
// Curiosidades com suporte a HTML (tags <strong>) para destacar textos importantes.
const curiosidadesData = [
  {icon:'⚽',title:'A Mão de Deus',text:'Em 1986, Maradona marcou com a mão contra a Inglaterra e depois fingiu que foi com a cabeça. O árbitro aceitou e o gol valeu. A Argentina venceu 2×1 e se classificou. Maradona chamou de <strong>"um pouco a mão de Deus e um pouco a cabeça de Maradona"</strong>.',tag:'Argentina 1986'},
  {icon:'🏆',title:'Brasil: Único 5x Campeão',text:'<strong>Brasil é o único país com 5 títulos mundiais</strong>, conquistados em 1958, 1962, 1970, 1994 e 2002. A seleção também é a única a ter participado de todas as edições da Copa do Mundo — 22 edições sem falhar uma sequer.',tag:'Recorde histórico'},
  {icon:'😢',title:'O Maracanazo que Parou o Brasil',text:'Em 1950, o Brasil precisava só de um empate contra o Uruguai na última rodada com <strong>200.000 torcedores no Maracanã</strong>. Perdeu 2×1. O silêncio após o gol do Uruguai foi descrito como o som mais triste já ouvido num estádio. O goleiro Barbosa carregou a culpa pelo resto da vida.',tag:'Brasil 1950'},
  {icon:'🎯',title:'Pelé — O Menino Campeão',text:'Pelé tinha <strong>17 anos, 249 dias</strong> quando marcou na semifinal de 1958. É o jogador mais jovem a marcar em Copas do Mundo. Na mesma Copa, venceu o título e chorou no ombro do lateral Djalma Santos. A imagem virou símbolo do futebol.',tag:'Suécia 1958'},
  {icon:'🇩🇪',title:'O Dia que o Brasil Ficou Sem Palavras',text:'Em 2014, a Alemanha marcou <strong>5 gols em 18 minutos</strong> contra o Brasil na semifinal. O placar final foi 7×1. O estádio Mineirão, com 60.000 torcedores brasileiros, ficou em silêncio. Foi o maior resultado contra o Brasil em Copas e um dos maiores da história.',tag:'Brasil 2014',destaque:true},
  {icon:'🤝',title:'A Copa que Parou uma Guerra',text:'Em 1967, um acordo não oficial foi feito para que Nigéria e Biafra — em guerra civil — <strong>entrassem em cessar-fogo por 48 horas</strong> para assistir Pelé jogar uma amistosa. O futebol literalmente parou uma guerra.',tag:'Curiosidade'},
  {icon:'🧤',title:'O Goleiro que Nunca Perdoou',text:'Moacyr Barbosa, goleiro do Brasil em 1950, foi culpado pela derrota para o Uruguai pelo resto da vida. Ele disse: <strong>"No Brasil, a pena máxima é 30 anos. Eu paguei pelo resto da vida por um crime que não cometi."</strong> Faleceu em 2000, ainda marcado pelo Maracanazo.',tag:'Tragédia'},
  {icon:'🌍',title:'Copa 2026 — A Maior de Todos os Tempos',text:'A Copa de 2026 será a <strong>primeira com 48 seleções</strong> (antes eram 32), gerando 104 jogos em vez de 64. Será disputada em 3 países simultaneamente: EUA, Canadá e México. A final será no MetLife Stadium em Nova York, com capacidade para 82.500 pessoas.',tag:'Copa 2026'},
  {icon:'🧠',title:'Ronaldo e a Convulsão Misteriosa',text:'Na véspera da final de 1998, Ronaldo sofreu uma convulsão e seu nome foi retirado da escalação. Horas depois, ele foi incluído de volta. O Brasil perdeu para a França por 3×0. Nunca se soube oficialmente o que causou a convulsão — um dos maiores mistérios do futebol.',tag:'França 1998'},
  {icon:'🏅',title:'Klose — O Rei dos Gols',text:'Miroslav Klose marcou <strong>16 gols em 4 Copas do Mundo</strong> (1998–2014), o recorde absoluto. Ultrapassou Ronaldo com um gol contra o Brasil na semifinal de 2014 — aquela mesma semifinal do 7×1. Ironia ou destino? O futebol tem um senso de humor próprio.',tag:'Recordes'},
  {icon:'⚡',title:'Mbappé — O Mais Rápido',text:'Kylian Mbappé atingiu <strong>38 km/h durante a Copa de 2018</strong>, tornando-se o jogador mais rápido já registrado em uma Copa do Mundo. Na final de 2022, marcou hat-trick em 97 minutos — mas a Argentina venceu nos pênaltis. Ele tem 27 anos e 2026 pode ser a sua Copa.',tag:'França'},
];

// ===== QUIZ =====
// Estrutura do Quiz: q (pergunta), opts (opções), ans (índice da resposta correta).
const quizData = [
  {
    q:'Quem é o maior artilheiro da história das Copas do Mundo?',
    opts:['Pelé','Ronaldo Fenômeno','Miroslav Klose','Gerd Müller'],
    ans:2,cat:'📊 Recordes',
    feedback:'<strong>Miroslav Klose</strong> marcou 16 gols em 4 Copas (2002–2014), superando Ronaldo (15) e Pelé (12). Seu último gol veio no 7×1 contra o Brasil.'
  },
  {
    q:'Em qual Copa do Mundo o Brasil foi eliminado por 7×1?',
    opts:['Copa 2010 na África do Sul','Copa 2018 na Rússia','Copa 2014 no Brasil','Copa 2006 na Alemanha'],
    ans:2,cat:'📅 História',
    feedback:'O histórico <strong>7×1 da Alemanha sobre o Brasil</strong> aconteceu na semifinal da Copa de 2014, que o Brasil sediou. O jogo ficou conhecido como "Mineirazo".'
  },
  {
    q:'Quantos títulos mundiais o Brasil possui?',
    opts:['4','5','6','3'],
    ans:1,cat:'🏆 Títulos',
    feedback:'<strong>Brasil tem 5 títulos</strong>: 1958 (Suécia), 1962 (Chile), 1970 (México), 1994 (EUA) e 2002 (Coreia/Japão). É o único pentacampeão mundial.'
  },
  {
    q:'Qual foi o "Gol do Século" da Copa de 1986?',
    opts:['Gol de bicicleta de Zico','Gol de Pelé contra a Itália','Gol de Maradona contra a Inglaterra','Gol de Ronaldo contra a Alemanha'],
    ans:2,cat:'⚽ Gols',
    feedback:'O gol de <strong>Maradona contra a Inglaterra</strong> em 1986 foi eleito o "Gol do Século" em votação da FIFA. Ele driblou 5 jogadores em 11 segundos percorrendo 60 metros.'
  },
  {
    q:'Qual país foi campeão da Copa do Mundo 2022 no Catar?',
    opts:['França','Croácia','Brasil','Argentina'],
    ans:3,cat:'📅 Recente',
    feedback:'<strong>Argentina</strong> venceu a França nos pênaltis na Copa de 2022. Messi finalmente conquistou o único título que lhe faltava, em uma das maiores finais da história.'
  },
  {
    q:'Qual é a única seleção a ter participado de todas as Copas do Mundo?',
    opts:['Alemanha','Brasil','Itália','Argentina'],
    ans:1,cat:'🌍 Curiosidades',
    feedback:'<strong>Brasil</strong> é a única seleção a ter disputado todas as 22 edições da Copa do Mundo, de 1930 até 2022. Nenhum outro país tem esse feito.'
  },
  {
    q:'Com quantos anos Pelé ganhou sua primeira Copa do Mundo?',
    opts:['16 anos','17 anos','18 anos','15 anos'],
    ans:1,cat:'⭐ Lendas',
    feedback:'<strong>Pelé tinha 17 anos e 249 dias</strong> quando o Brasil venceu a Copa de 1958 na Suécia. Ele também se tornou o jogador mais jovem a marcar em uma Copa.'
  },
  {
    q:'Quem marcou hat-trick na Final da Copa do Mundo 2022?',
    opts:['Lionel Messi','Lautaro Martínez','Kylian Mbappé','Antoine Griezmann'],
    ans:2,cat:'⚽ Finais',
    feedback:'<strong>Kylian Mbappé</strong> marcou três gols na final contra a Argentina. Foi o segundo hat-trick em finais de Copa — o primeiro foi de Geoff Hurst em 1966.'
  },
  {
    q:'Em que cidade será disputada a Final da Copa do Mundo 2026?',
    opts:['Los Angeles','Dallas','Chicago','Nova York / Nova Jersey'],
    ans:3,cat:'🌎 Copa 2026',
    feedback:'A Final da Copa de 2026 será disputada no <strong>MetLife Stadium em Nova Jersey</strong> (área metropolitana de Nova York), com capacidade para 82.500 espectadores, em 19 de julho de 2026.'
  },
  {
    q:'Qual seleção venceu a Copa do Mundo de 1950 causando o "Maracanazo"?',
    opts:['Argentina','Paraguai','Uruguai','Chile'],
    ans:2,cat:'📅 História',
    feedback:'<strong>Uruguai</strong> venceu o Brasil por 2×1 no Maracanã com 200.000 torcedores brasileiros presentes. Foi o maior choque da história do futebol — o Brasil precisava apenas de um empate para ser campeão.'
  },
];
// ===== PROGRAMAÇÃO COMPLETA COPA 2026 — TODOS OS JOGOS (FASE DE GRUPOS) =====
// Horários em BRT (Brasília, UTC-3). Fonte: FIFA / programação oficial Copa 2026.
// Grupos A–L (12 grupos × 4 seleções), cada grupo joga 6 partidas (rodada 1, 2 e 3).

const scheduleData = [

  // ── GRUPO A ──
  {date:'11 Jun',time:'16:00',group:'Grupo A',phase:'a',teams:'México 🇲🇽 × África do Sul 🇿🇦',venue:'Estádio Azteca, Cidade do México',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'11 Jun',time:'23:00',group:'Grupo A',phase:'a',teams:'Coreia do Sul 🇰🇷 × Tchéquia 🇨🇿',venue:'Estádio Akron, Guadalajara',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'18 Jun',time:'13:00',group:'Grupo A',phase:'a',teams:'Tchéquia 🇨🇿 × África do Sul 🇿🇦',venue:'Mercedes-Benz Stadium, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'18 Jun',time:'22:00',group:'Grupo A',phase:'a',teams:'México 🇲🇽 × Coreia do Sul 🇰🇷',venue:'Estádio Akron, Guadalajara',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'22:00',group:'Grupo A',phase:'a',teams:'África do Sul 🇿🇦 × Coreia do Sul 🇰🇷',venue:'Estádio BBVA, Monterrey',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'22:00',group:'Grupo A',phase:'a',teams:'Tchéquia 🇨🇿 × México 🇲🇽',venue:'Estádio Azteca, Cidade do México',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO B ──
  {date:'12 Jun',time:'16:00',group:'Grupo B',phase:'b',teams:'Canadá 🇨🇦 × Bósnia e Herzegovina 🇧🇦',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'13 Jun',time:'16:00',group:'Grupo B',phase:'b',teams:'Catar 🇶🇦 × Suíça 🇨🇭',venue:"Levi's Stadium, San Jose",isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'18 Jun',time:'16:00',group:'Grupo B',phase:'b',teams:'Suíça 🇨🇭 × Bósnia e Herzegovina 🇧🇦',venue:'SoFi Stadium, Los Angeles',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'18 Jun',time:'19:00',group:'Grupo B',phase:'b',teams:'Canadá 🇨🇦 × Catar 🇶🇦',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'16:00',group:'Grupo B',phase:'b',teams:'Suíça 🇨🇭 × Canadá 🇨🇦',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'16:00',group:'Grupo B',phase:'b',teams:'Bósnia e Herzegovina 🇧🇦 × Catar 🇶🇦',venue:'Lumen Field, Seattle',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO C ──
  {date:'13 Jun',time:'19:00',group:'Grupo C',phase:'c',teams:'Brasil 🇧🇷 × Marrocos 🇲🇦',venue:'MetLife Stadium, Nova York',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'13 Jun',time:'22:00',group:'Grupo C',phase:'c',teams:'Haiti 🇭🇹 × Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',venue:'Gillette Stadium, Boston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'19 Jun',time:'19:00',group:'Grupo C',phase:'c',teams:'Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿 × Marrocos 🇲🇦',venue:'Gillette Stadium, Boston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'19 Jun',time:'21:30',group:'Grupo C',phase:'c',teams:'Brasil 🇧🇷 × Haiti 🇭🇹',venue:'Lincoln Financial Field, Filadélfia',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'19:00',group:'Grupo C',phase:'c',teams:'Marrocos 🇲🇦 × Haiti 🇭🇹',venue:'Mercedes-Benz Stadium, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'24 Jun',time:'19:00',group:'Grupo C',phase:'c',teams:'Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿 × Brasil 🇧🇷',venue:'Hard Rock Stadium, Miami',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO D ──
  {date:'12 Jun',time:'22:00',group:'Grupo D',phase:'d',teams:'EUA 🇺🇸 × Paraguai 🇵🇾',venue:'SoFi Stadium, Los Angeles',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'14 Jun',time:'01:00',group:'Grupo D',phase:'d',teams:'Austrália 🇦🇺 × Turquia 🇹🇷',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'19 Jun',time:'16:00',group:'Grupo D',phase:'d',teams:'EUA 🇺🇸 × Austrália 🇦🇺',venue:'Lumen Field, Seattle',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'20 Jun',time:'01:00',group:'Grupo D',phase:'d',teams:'Turquia 🇹🇷 × Paraguai 🇵🇾',venue:"Levi's Stadium, San Jose",isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'23:00',group:'Grupo D',phase:'d',teams:'Turquia 🇹🇷 × EUA 🇺🇸',venue:'SoFi Stadium, Los Angeles',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'23:00',group:'Grupo D',phase:'d',teams:'Paraguai 🇵🇾 × Austrália 🇦🇺',venue:"Levi's Stadium, San Jose",isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO E ──
  {date:'14 Jun',time:'14:00',group:'Grupo E',phase:'e',teams:'Alemanha 🇩🇪 × Curaçao 🇨🇼',venue:'NRG Stadium, Houston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'14 Jun',time:'20:00',group:'Grupo E',phase:'e',teams:'Costa do Marfim 🇨🇮 × Equador 🇪🇨',venue:'Lincoln Financial Field, Filadélfia',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'20 Jun',time:'17:00',group:'Grupo E',phase:'e',teams:'Alemanha 🇩🇪 × Costa do Marfim 🇨🇮',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'20 Jun',time:'21:00',group:'Grupo E',phase:'e',teams:'Equador 🇪🇨 × Curaçao 🇨🇼',venue:'Arrowhead Stadium, Kansas City',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'17:00',group:'Grupo E',phase:'e',teams:'Equador 🇪🇨 × Alemanha 🇩🇪',venue:'MetLife Stadium, Nova York',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'17:00',group:'Grupo E',phase:'e',teams:'Curaçao 🇨🇼 × Costa do Marfim 🇨🇮',venue:'Lincoln Financial Field, Filadélfia',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO F ──
  {date:'14 Jun',time:'17:00',group:'Grupo F',phase:'f',teams:'Holanda 🇳🇱 × Japão 🇯🇵',venue:'AT&T Stadium, Dallas',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'14 Jun',time:'23:00',group:'Grupo F',phase:'f',teams:'Suécia 🇸🇪 × Tunísia 🇹🇳',venue:'Estádio BBVA, Monterrey',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'20 Jun',time:'14:00',group:'Grupo F',phase:'f',teams:'Holanda 🇳🇱 × Suécia 🇸🇪',venue:'NRG Stadium, Houston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'21 Jun',time:'01:00',group:'Grupo F',phase:'f',teams:'Tunísia 🇹🇳 × Japão 🇯🇵',venue:'Estádio BBVA, Monterrey',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'20:00',group:'Grupo F',phase:'f',teams:'Tunísia 🇹🇳 × Holanda 🇳🇱',venue:'Arrowhead Stadium, Kansas City',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'25 Jun',time:'20:00',group:'Grupo F',phase:'f',teams:'Japão 🇯🇵 × Suécia 🇸🇪',venue:'AT&T Stadium, Dallas',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO G ──
  {date:'15 Jun',time:'16:00',group:'Grupo G',phase:'g',teams:'Bélgica 🇧🇪 × Egito 🇪🇬',venue:'Lumen Field, Seattle',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'15 Jun',time:'22:00',group:'Grupo G',phase:'g',teams:'Irã 🇮🇷 × Nova Zelândia 🇳🇿',venue:'SoFi Stadium, Los Angeles',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'21 Jun',time:'16:00',group:'Grupo G',phase:'g',teams:'Bélgica 🇧🇪 × Irã 🇮🇷',venue:'SoFi Stadium, Los Angeles',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'21 Jun',time:'22:00',group:'Grupo G',phase:'g',teams:'Nova Zelândia 🇳🇿 × Egito 🇪🇬',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'00:00',group:'Grupo G',phase:'g',teams:'Egito 🇪🇬 × Irã 🇮🇷',venue:'Lumen Field, Seattle',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'00:00',group:'Grupo G',phase:'g',teams:'Nova Zelândia 🇳🇿 × Bélgica 🇧🇪',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO H ──
  {date:'15 Jun',time:'13:00',group:'Grupo H',phase:'h',teams:'Espanha 🇪🇸 × Cabo Verde 🇨🇻',venue:'Mercedes-Benz Stadium, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'15 Jun',time:'19:00',group:'Grupo H',phase:'h',teams:'Arábia Saudita 🇸🇦 × Uruguai 🇺🇾',venue:'Hard Rock Stadium, Miami',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'21 Jun',time:'13:00',group:'Grupo H',phase:'h',teams:'Espanha 🇪🇸 × Arábia Saudita 🇸🇦',venue:'Mercedes-Benz Stadium, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'21 Jun',time:'19:00',group:'Grupo H',phase:'h',teams:'Uruguai 🇺🇾 × Cabo Verde 🇨🇻',venue:'Hard Rock Stadium, Miami',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'26 Jun',time:'21:00',group:'Grupo H',phase:'h',teams:'Cabo Verde 🇨🇻 × Arábia Saudita 🇸🇦',venue:'NRG Stadium, Houston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'26 Jun',time:'21:00',group:'Grupo H',phase:'h',teams:'Uruguai 🇺🇾 × Espanha 🇪🇸',venue:'Estádio Akron, Guadalajara',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO I ──
  {date:'16 Jun',time:'16:00',group:'Grupo I',phase:'i',teams:'França 🇫🇷 × Senegal 🇸🇳',venue:'MetLife Stadium, Nova York',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'16 Jun',time:'19:00',group:'Grupo I',phase:'i',teams:'Iraque 🇮🇶 × Noruega 🇳🇴',venue:'Gillette Stadium, Boston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'22 Jun',time:'18:00',group:'Grupo I',phase:'i',teams:'França 🇫🇷 × Iraque 🇮🇶',venue:'Lincoln Financial Field, Filadélfia',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'22 Jun',time:'21:00',group:'Grupo I',phase:'i',teams:'Noruega 🇳🇴 × Senegal 🇸🇳',venue:'MetLife Stadium, Nova York',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'26 Jun',time:'16:00',group:'Grupo I',phase:'i',teams:'Senegal 🇸🇳 × Iraque 🇮🇶',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'26 Jun',time:'16:00',group:'Grupo I',phase:'i',teams:'Noruega 🇳🇴 × França 🇫🇷',venue:'Gillette Stadium, Boston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO J ──
  {date:'16 Jun',time:'22:00',group:'Grupo J',phase:'j',teams:'Argentina 🇦🇷 × Argélia 🇩🇿',venue:'Arrowhead Stadium, Kansas City',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'17 Jun',time:'01:00',group:'Grupo J',phase:'j',teams:'Áustria 🇦🇹 × Jordânia 🇯🇴',venue:"Levi's Stadium, San Jose",isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'22 Jun',time:'14:00',group:'Grupo J',phase:'j',teams:'Argentina 🇦🇷 × Áustria 🇦🇹',venue:'AT&T Stadium, Dallas',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'00:00',group:'Grupo J',phase:'j',teams:'Jordânia 🇯🇴 × Argélia 🇩🇿',venue:"Levi's Stadium, San Jose",isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'23:00',group:'Grupo J',phase:'j',teams:'Jordânia 🇯🇴 × Argentina 🇦🇷',venue:'AT&T Stadium, Dallas',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'23:00',group:'Grupo J',phase:'j',teams:'Argélia 🇩🇿 × Áustria 🇦🇹',venue:'Arrowhead Stadium, Kansas City',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO K ──
  {date:'17 Jun',time:'14:00',group:'Grupo K',phase:'k',teams:'Portugal 🇵🇹 × RD Congo 🇨🇩',venue:'NRG Stadium, Houston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'17 Jun',time:'23:00',group:'Grupo K',phase:'k',teams:'Uzbequistão 🇺🇿 × Colômbia 🇨🇴',venue:'Estádio Azteca, Cidade do México',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'14:00',group:'Grupo K',phase:'k',teams:'Portugal 🇵🇹 × Uzbequistão 🇺🇿',venue:'NRG Stadium, Houston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'23:00',group:'Grupo K',phase:'k',teams:'Colômbia 🇨🇴 × RD Congo 🇨🇩',venue:'Estádio Akron, Guadalajara',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'20:30',group:'Grupo K',phase:'k',teams:'RD Congo 🇨🇩 × Uzbequistão 🇺🇿',venue:'Mercedes-Benz Stadium, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'20:30',group:'Grupo K',phase:'k',teams:'Colômbia 🇨🇴 × Portugal 🇵🇹',venue:'Hard Rock Stadium, Miami',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO L ──
  {date:'17 Jun',time:'17:00',group:'Grupo L',phase:'l',teams:'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 × Croácia 🇭🇷',venue:'AT&T Stadium, Dallas',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'17 Jun',time:'20:00',group:'Grupo L',phase:'l',teams:'Gana 🇬🇭 × Panamá 🇵🇦',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'17:00',group:'Grupo L',phase:'l',teams:'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 × Gana 🇬🇭',venue:'Gillette Stadium, Boston',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'20:00',group:'Grupo L',phase:'l',teams:'Panamá 🇵🇦 × Croácia 🇭🇷',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'18:00',group:'Grupo L',phase:'l',teams:'Croácia 🇭🇷 × Gana 🇬🇭',venue:'Lincoln Financial Field, Filadélfia',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'27 Jun',time:'18:00',group:'Grupo L',phase:'l',teams:'Panamá 🇵🇦 × Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿',venue:'MetLife Stadium, Nova York',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'23 Jun',time:'16:00',group:'Grupo H',phase:'h',teams:'Chile 🇨🇱 × Argélia 🇩🇿',venue:'Arrowhead, Kansas City',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── GRUPO I ──
  {date:'16 Jun',time:'13:00',group:'Grupo I',phase:'i',teams:'Coreia do Sul 🇰🇷 × Irã 🇮🇷',venue:'Azteca, Cidade do México',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'16 Jun',time:'16:00',group:'Grupo I',phase:'i',teams:'Nigéria 🇳🇬 × Noruega 🇳🇴',venue:'Hard Rock, Miami',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'20 Jun',time:'13:00',group:'Grupo I',phase:'i',teams:'Coreia do Sul 🇰🇷 × Nigéria 🇳🇬',venue:'Mercedes-Benz, Atlanta',isFinal:false,
   links:[{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},

  // ── MATA-MATA (Oitavas, Quartas, Semi, 3º lugar, Final) ──
  {date:'04 Jul',time:'17:00',group:'Oitavas',phase:'knockout',teams:'1º A × 2º B',venue:'MetLife, Nova York',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'04 Jul',time:'21:00',group:'Oitavas',phase:'knockout',teams:'1º C × 2º D',venue:'AT&T, Dallas',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'05 Jul',time:'17:00',group:'Oitavas',phase:'knockout',teams:'1º E × 2º F',venue:'SoFi, Los Angeles',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'05 Jul',time:'21:00',group:'Oitavas',phase:'knockout',teams:'1º G × 2º H',venue:'Hard Rock, Miami',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'06 Jul',time:'17:00',group:'Oitavas',phase:'knockout',teams:'1º I × 2º J',venue:'Mercedes-Benz, Atlanta',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'06 Jul',time:'21:00',group:'Oitavas',phase:'knockout',teams:'1º K × 2º L',venue:'BC Place, Vancouver',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'07 Jul',time:'17:00',group:'Oitavas',phase:'knockout',teams:'Melhor 3º × TBD',venue:'Arrowhead, Kansas City',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'07 Jul',time:'21:00',group:'Oitavas',phase:'knockout',teams:'Melhor 3º × TBD',venue:'BMO Field, Toronto',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'11 Jul',time:'17:00',group:'Quartas',phase:'knockout',teams:'QF1 — TBD × TBD',venue:'AT&T, Dallas',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'11 Jul',time:'21:00',group:'Quartas',phase:'knockout',teams:'QF2 — TBD × TBD',venue:'MetLife, Nova York',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'12 Jul',time:'17:00',group:'Quartas',phase:'knockout',teams:'QF3 — TBD × TBD',venue:'SoFi, Los Angeles',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'12 Jul',time:'21:00',group:'Quartas',phase:'knockout',teams:'QF4 — TBD × TBD',venue:'Azteca, Cidade do México',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'15 Jul',time:'21:00',group:'Semifinal',phase:'knockout',teams:'SF1 — TBD × TBD',venue:'AT&T, Dallas',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'16 Jul',time:'21:00',group:'Semifinal',phase:'knockout',teams:'SF2 — TBD × TBD',venue:'MetLife, Nova York',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'19 Jul',time:'13:00',group:'3º Lugar',phase:'knockout',teams:'3º Lugar — TBD × TBD',venue:'Hard Rock, Miami',isFinal:false,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
  {date:'19 Jul',time:'17:00',group:'FINAL 🏆',phase:'final',teams:'FINAL — TBD × TBD',venue:'MetLife, Nova York',isFinal:true,
   links:[{name:'Globo',url:'https://globoplay.globo.com'},{name:'SporTV',url:'https://sportv.globo.com'},{name:'ESPN',url:'https://espn.com.br'},{name:'FIFA+',url:'https://www.fifa.com/fifaplus'}]},
];

// ===== RENDERIZAÇÃO =====
// ===== FUNÇÕES DE RENDERIZAÇÃO =====
// Estas funções transformam os arrays de dados acima em código HTML real 
// usando Template Literals (a crase ` `).
function renderTimeline() {
  const container = document.getElementById('timeline-items');
  if(!container) return;
  container.innerHTML = historyData.map((h,i) => `
    <div class="timeline-item reveal" style="transition-delay:${i*0.04}s">
      ${i%2===0 ? `
        <div class="tl-card">
          <div class="tl-year">${h.year}</div>
          <div class="tl-host">Sede: ${h.host}</div>
          <div class="tl-champion">${h.champion}</div>
          <div class="tl-vice">Vice: ${h.vice}</div>
          <span class="tl-badge">${h.note||''}</span>
        </div>
        <div class="tl-center"><div class="tl-dot"></div></div>
        <div></div>
      ` : `
        <div></div>
        <div class="tl-center"><div class="tl-dot"></div></div>
        <div class="tl-card">
          <div class="tl-year">${h.year}</div>
          <div class="tl-host">Sede: ${h.host}</div>
          <div class="tl-champion">${h.champion}</div>
          <div class="tl-vice">Vice: ${h.vice}</div>
          <span class="tl-badge">${h.note||''}</span>
        </div>
      `}
    </div>
  `).join('');
}

// Gera os cards das seleções com bandeiras externas (flagcdn.com)
function renderTeams() {
  const grid = document.getElementById('teams-grid');
  grid.innerHTML = teamsData.map(t => `
    <div class="team-card reveal">
      <img class="team-flag-img" 
           src="https://flagcdn.com/w80/${t.flag.toLowerCase()}.png" 
           onerror="this.style.display='none'"
           alt="${t.name}" />
      <div class="team-name">${t.name}</div>
      <span class="team-titles">${t.titles}</span>
      <div class="team-titles-lbl">Títulos Mundiais</div>
      <div class="team-cups-row">
        ${t.years.split(', ').map(y=>`<span class="year-chip">${y}</span>`).join('')}
      </div>
      <div style="font-size:0.72rem;color:rgba(255,255,255,0.4);margin-top:8px;">${t.desc}</div>
    </div>
  `).join('');
}

// Renderiza os estádios e trata erros de imagem caso a URL falhe
function renderStadiums() {
  const grid = document.getElementById('stadiums-grid');
  grid.innerHTML = stadiumsData.map(s => `
    <div class="stadium-card reveal">
      <div class="stadium-photo-wrap">
        <img class="stadium-photo" 
             src="${s.img}" 
             alt="${s.name}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="stadium-photo-fallback" style="display:none;">🏟️</div>
      </div>
      <div>
        <div class="stadium-name">${s.name}</div>
        <div class="stadium-detail">${s.city} ${s.country}</div>
        <div class="stadium-detail">${s.note}</div>
        <div class="stadium-cap">👥 ${s.cap}</div>
      </div>
    </div>
  `).join('');
}

// Define cores dinâmicas baseadas na pontuação (Over) do jogador
function getStatColor(val) {
  if(val>=90) return '#FFD700';
  if(val>=75) return '#4CAF50';
  if(val>=55) return '#2196F3';
  return '#f44336';
}

// Filtra e exibe os jogadores na tela
let currentFilter = 'all';
function renderPlayers(filter='all') {
  currentFilter = filter;
  const grid = document.getElementById('players-grid');
  const filtered = filter==='all' ? playersData : playersData.filter(p=>p.rarity===filter);
  grid.innerHTML = filtered.map((p,i) => `
    <div class="efootball-card card-${p.rarity}" onclick="openPlayerModal(${playersData.indexOf(p)})">
      <div class="card-inner">
        <div class="card-shine"></div>
        <div class="card-badge-rarity">${p.rarity.toUpperCase()}</div>
        <div class="card-overall">${p.overall}</div>
        <div class="card-pos-badge">${p.pos}</div>
        ${p.img
          ? `<img class="card-player-img" src="${p.img}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <div class="card-player-avatar" ${p.img ? 'style="display:none"' : ''}>${p.initials}</div>
        <div class="card-info">
          <div class="card-name">${p.name}</div>
          <div class="card-country">${p.country}</div>
          <div class="card-stats">
            <div class="card-stat"><span class="stat-val">${p.stats.vel}</span><span class="stat-key">VEL</span></div>
            <div class="card-stat"><span class="stat-val">${p.stats.fin}</span><span class="stat-key">FIN</span></div>
            <div class="card-stat"><span class="stat-val">${p.stats.dri}</span><span class="stat-key">DRI</span></div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterPlayers(f, btn) {
  document.querySelectorAll('.videos-filter .filter-btn').forEach(b=>{
    if(b.closest('#lendas')) b.classList.remove('active');
  });
  btn.classList.add('active');
  renderPlayers(f);
}

// Preenche os dados do Modal ao clicar em um jogador
function openPlayerModal(idx) {
  const p = playersData[idx];
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-country').textContent = p.country;
  document.getElementById('modal-era').textContent = p.era;
  document.getElementById('modal-quote').textContent = '"' + p.quote + '"';

  const imgEl = document.getElementById('modal-img');
  const phEl = document.getElementById('modal-avatar-placeholder');
  if(p.img) {
    imgEl.src = p.img;
    imgEl.style.display = 'block';
    phEl.style.display = 'none';
    imgEl.onerror = function() {
      imgEl.style.display = 'none';
      phEl.style.display = 'flex';
      phEl.textContent = p.initials;
    };
  } else {
    imgEl.style.display = 'none';
    phEl.style.display = 'flex';
    phEl.textContent = p.initials;
  }

  const statLabels = {vel:'Velocidade',fin:'Finalização',pas:'Passe',dri:'Drible',def:'Defesa',fis:'Físico'};
  document.getElementById('modal-stats').innerHTML = Object.entries(p.stats).map(([k,v])=>`
    <div class="stat-bar-row">
      <div class="stat-bar-label">${statLabels[k]||k}</div>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${v}%;background:${getStatColor(v)}"></div></div>
      <div class="stat-bar-num">${v}</div>
    </div>
  `).join('');

  document.getElementById('modal-achievements').innerHTML =
    p.achievements.map(a=>`<span class="achievement-pill">${a}</span>`).join('') +
    `<span class="achievement-pill">⚽ ${p.goals} gols</span>` +
    `<span class="achievement-pill">🏆 ${p.cups} título(s)</span>`;

  document.getElementById('player-modal').classList.add('active');
}

function closePlayerModal() {
  document.getElementById('player-modal').classList.remove('active');
}

// ===== VÍDEOS =====
// Funções similares para Vídeos, Agenda, Recordes e Curiosidades...
let videoFilter = 'all';
function renderVideos(filter='all') {
  videoFilter = filter;
  const grid = document.getElementById('videos-grid');
  const filtered = filter==='all' ? videosData : videosData.filter(v=>v.cat===filter);
  const catLabels = {goal:'⚽ GOL LENDÁRIO',final:'🏆 FINAL ÉPICA',moment:'⭐ MOMENTO HISTÓRICO'};
  const catClasses = {goal:'tag-goal',final:'tag-final',moment:'tag-moment'};
  grid.innerHTML = filtered.map(v=>`
    <div class="video-card" data-cat="${v.cat}">
      <div class="video-thumb" onclick="window.open('${v.url}','_blank')">
        <img 
          src="https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg" 
          alt="${v.title}" 
          onerror="this.src='https://img.youtube.com/vi/${v.ytId}/mqdefault.jpg'"
        >
        <div class="video-play-btn">▶</div>
        <div class="video-year-tag">${v.year}</div>
        <div class="video-type-tag ${catClasses[v.cat]}">${catLabels[v.cat]}</div>
      </div>
      <div class="video-info">
        <div class="video-title">${v.title}</div>
        <div class="video-desc">${v.desc}</div>
        <div class="video-actions">
          <a href="${v.url}" target="_blank" class="video-link-btn">▶ Assistir</a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterVideos(f, btn) {
  document.querySelectorAll('#videos .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderVideos(f);
}

// ===== PROGRAMAÇÃO COM FILTRO POR GRUPO =====
let scheduleFilter = 'all';

function renderScheduleFilters() {
  const section = document.getElementById('programacao');
  if(!section) return;

  // Insere os botões de filtro antes do schedule-container
  const existing = document.getElementById('schedule-filter-bar');
  if(existing) existing.remove();

  const groups = ['Todos','A','B','C','D','E','F','G','H','I','J','K','L','Mata-mata'];
  const bar = document.createElement('div');
  bar.id = 'schedule-filter-bar';
  bar.className = 'videos-filter schedule-filter-bar';
  bar.style.marginBottom = '1.5rem';

  bar.innerHTML = groups.map((g,i) => {
    const val = i === 0 ? 'all' : (i === groups.length - 1 ? 'knockout' : g.toLowerCase());
    return `<button class="filter-btn ${val === 'all' ? 'active' : ''}" onclick="filterSchedule('${val}', this)">${g}</button>`;
  }).join('');

  const container = document.getElementById('schedule-container');
  container.parentNode.insertBefore(bar, container);
}

function filterSchedule(f, btn) {
  scheduleFilter = f;
  document.querySelectorAll('#schedule-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSchedule(f);
}

function renderSchedule(filter = 'all') {
  const container = document.getElementById('schedule-container');
  let data;
  if(filter === 'all') {
    data = scheduleData;
  } else if(filter === 'knockout') {
    data = scheduleData.filter(m => m.phase === 'knockout' || m.phase === 'final');
  } else {
    data = scheduleData.filter(m => m.phase === filter);
  }

  container.innerHTML = data.map((m,i)=>`
    <div class="match-card reveal ${m.isFinal ? 'final' : ''}">
      <div class="match-date">
        <div class="date">${m.date}</div>
        <div class="time">${m.time} BRT</div>
        <div class="match-badge">${m.group}</div>
      </div>
      <div class="match-main">
        <div class="match-teams">${m.teams}</div>
        <div class="match-venue">🏟️ ${m.venue}</div>
      </div>
      <div class="match-links">
        ${m.links.map(l=>`<a href="${l.url}" target="_blank" class="watch-btn">${l.name}</a>`).join('')}
      </div>
    </div>
  `).join('');

  // Re-observa os elementos novos para o scroll reveal
  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 50);
}

function renderRecords() {
  const grid = document.getElementById('records-grid');
  grid.innerHTML = recordsData.map(r=>`
    <div class="record-card reveal">
      <span class="record-icon">${r.icon}</span>
      <div class="record-value">${r.value}</div>
      <div class="record-name">${r.name}</div>
      <div class="record-desc">${r.desc}</div>
    </div>
  `).join('');
}

// ===== CURIOSIDADES =====
function renderCuriosidades() {
  const grid = document.getElementById('curiosidades-grid');
  if(!grid) return;
  grid.innerHTML = curiosidadesData.map((c, i) => `
    <div class="curiosidade-card reveal${c.destaque?' destaque':''}">
      <div class="curio-number">${String(i+1).padStart(2,'0')}</div>
      <span class="curio-icon">${c.icon}</span>
      <div class="curio-title">${c.title}</div>
      <div class="curio-text">${c.text}</div>
      <span class="curio-tag">${c.tag}</span>
    </div>
  `).join('');
}

// ===== QUIZ =====
// ===== LÓGICA DO QUIZ (MÁQUINA DE ESTADO) =====
// Controla o progresso, pontuação e cronômetro.
let quizState = { current:0, score:0, answered:false, timer:null, timeLeft:20, shuffled:[] };

// Embaralha as perguntas para que o quiz nunca seja igual
function shuffleQuiz() {
  const q = [...quizData];
  for(let i=q.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[q[i],q[j]]=[q[j],q[i]];}
  return q.slice(0,10);
}

function startQuiz() {
  quizState.shuffled = shuffleQuiz();
  quizState.current = 0;
  quizState.score = 0;
  quizState.answered = false;
  document.getElementById('quiz-start-screen').style.display = 'none';
  document.getElementById('quiz-result-screen').classList.remove('show');
  document.getElementById('quiz-game-screen').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  const q = quizState.shuffled[quizState.current];
  const total = quizState.shuffled.length;
  quizState.answered = false;
  document.getElementById('quiz-q-num').textContent = `Pergunta ${quizState.current+1} de ${total}`;
  document.getElementById('quiz-score-badge').textContent = `${quizState.score} pts`;
  document.getElementById('quiz-progress').style.width = `${(quizState.current/total)*100}%`;
  document.getElementById('quiz-category-label').innerHTML = `<span class="quiz-category-badge" style="background:var(--ouro)">${q.cat}</span>`;
  document.getElementById('quiz-question').textContent = q.q;
  const letters = ['A','B','C','D'];
  document.getElementById('quiz-options').innerHTML = q.opts.map((opt,i)=>`
    <button class="quiz-option" onclick="selectAnswer(${i})">
      <span class="opt-letter">${letters[i]}</span>
      ${opt}
    </button>
  `).join('');
  document.getElementById('quiz-feedback').classList.remove('show');
  document.getElementById('quiz-next-btn').classList.remove('show');
  startTimer();
}

// Cronômetro de 20 segundos para cada pergunta
function startTimer() {
  clearInterval(quizState.timer);
  quizState.timeLeft = 20;
  updateTimerDisplay();
  quizState.timer = setInterval(()=>{
    quizState.timeLeft--;
    updateTimerDisplay();
    if(quizState.timeLeft <= 0) {
      clearInterval(quizState.timer);
      if(!quizState.answered) timeOut();
    }
  },1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('quiz-timer');
  el.textContent = `⏱️ ${quizState.timeLeft}`;
  el.className = 'quiz-timer' + (quizState.timeLeft<=5?' urgent':'');
}

function timeOut() {
  quizState.answered = true;
  const q = quizState.shuffled[quizState.current];
  document.querySelectorAll('.quiz-option').forEach((btn,i)=>{
    btn.classList.add('answered');
    if(i===q.ans) btn.classList.add('correct');
  });
  showFeedback(false, q);
}

function selectAnswer(idx) {
  if(quizState.answered) return;
  quizState.answered = true;
  clearInterval(quizState.timer);
  const q = quizState.shuffled[quizState.current];
  const correct = idx === q.ans;
  if(correct) quizState.score += 10;
  document.querySelectorAll('.quiz-option').forEach((btn,i)=>{
    btn.classList.add('answered');
    if(i===q.ans) btn.classList.add('correct');
    else if(i===idx && !correct) btn.classList.add('wrong');
  });
  showFeedback(correct, q);
}

function showFeedback(correct, q) {
  const fb = document.getElementById('quiz-feedback');
  fb.innerHTML = (correct ? '✅ <strong>Correto!</strong> ' : '❌ <strong>Errado!</strong> ') + q.feedback;
  fb.classList.add('show');
  document.getElementById('quiz-next-btn').classList.add('show');
  document.getElementById('quiz-score-badge').textContent = `${quizState.score} pts`;
}

function nextQuestion() {
  quizState.current++;
  if(quizState.current >= quizState.shuffled.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

// Calcula a performance final e dá um título ao usuário
function showResult() {
  document.getElementById('quiz-game-screen').style.display = 'none';
  const rs = document.getElementById('quiz-result-screen');
  rs.classList.add('show');
  const pct = quizState.score / 100;
  let stars='', trophy='', label='', msg='';
  if(pct>=0.9){stars='⭐⭐⭐⭐⭐';trophy='🏆';label='CAMPEÃO MUNDIAL!';msg='Impressionante! Você é um verdadeiro expert em Copa do Mundo. A seleção técnica te contrataria!';}
  else if(pct>=0.7){stars='⭐⭐⭐⭐';trophy='🥇';label='GRANDE CRAQUE!';msg='Excelente resultado! Você conhece muito bem a história da Copa. Quase perfeito!';}
  else if(pct>=0.5){stars='⭐⭐⭐';trophy='🥈';label='BOA PARTIDA!';msg='Bom desempenho! Com um pouco mais de estudo da seção de história você chega na elite!';}
  else if(pct>=0.3){stars='⭐⭐';trophy='🥉';label='EM DESENVOLVIMENTO';msg='Há espaço para crescer! Explore a linha do tempo e as curiosidades para aprender mais.';}
  else{stars='⭐';trophy='😅';label='COMEÇANDO DO ZERO';msg='Não desanime! Leia as curiosidades e a história do portal e tente novamente!';}
  document.getElementById('quiz-stars').textContent = stars;
  document.getElementById('quiz-result-score').textContent = quizState.score;
  document.getElementById('quiz-result-label').textContent = label;
  document.getElementById('quiz-result-trophy').textContent = trophy;
  document.getElementById('quiz-result-msg').textContent = msg;
  document.getElementById('quiz-progress').style.width = '100%';
}

function restartQuiz() {
  document.getElementById('quiz-result-screen').classList.remove('show');
  document.getElementById('quiz-game-screen').style.display = 'none';
  document.getElementById('quiz-start-screen').style.display = 'block';
}


// ===== COUNTDOWN =====
// ===== CRONÔMETRO REGRESSIVO (COUNTDOWN) =====
// Calcula a diferença entre a data atual e a abertura da copa
function updateCountdown() {
  const target = new Date('2026-06-11T17:00:00-05:00');
  const now = new Date();
  const diff = target - now;
  if(diff<=0) {
    document.getElementById('cd-days').textContent='00';
    document.getElementById('cd-hours').textContent='00';
    document.getElementById('cd-mins').textContent='00';
    document.getElementById('cd-secs').textContent='00';
    return;
  }
  const days = Math.floor(diff/86400000);
  const hours = Math.floor((diff%86400000)/3600000);
  const mins = Math.floor((diff%3600000)/60000);
  const secs = Math.floor((diff%60000)/1000);
  document.getElementById('cd-days').textContent = String(days).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== SCROLL REVEAL =====
// ===== EFEITO DE SURGIMENTO AO ROLAR (SCROLL REVEAL) =====
// Usa a API IntersectionObserver para detectar quando um elemento entra na tela
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.1});

function observeAll() {
  // Aplica o observador em todos os elementos que possuem a classe .reveal
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

// ===== INIT =====
renderTimeline();
renderTeams();
renderStadiums();
renderPlayers();
renderVideos();
renderScheduleFilters();
renderSchedule();
renderRecords();
renderCuriosidades();
setTimeout(observeAll, 100);

// Re-observe após renders dinâmicos
const reObserver = setInterval(()=>{
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
},1000);
setTimeout(()=>clearInterval(reObserver), 8000);

