/* =========================================================
   FGV Aluno — dados fictícios do aplicativo
   Todo o conteúdo exibido no app vem deste arquivo.
   ========================================================= */
window.DADOS = {
  aluno: {
    nome: 'Tiago Jorge Salviatto',
    primeiroNome: 'Tiago',
    matricula: '350040',
    foto: 'assets/img/foto.jpg',
    curso: 'Pós-Graduação em Administração Pública',
    cursoCurto: 'Administração Pública',
    nivel: 'Especialização',
    modalidade: 'Lato Sensu',
    ingresso: '03/2026',
    turno: 'Noturno',
    escola: 'FGV EBAPE',
    unidade: 'Praia de Botafogo, 190 · Rio de Janeiro/RJ',
    turma: 'Turma 2026.1 · Noturno',
    emissao: '03/2026',
    validade: '01/2028',
    situacao: 'Matrícula ativa',
    codigo: 'FGV-7K3Q-92XD'
  },

  curso: {
    cargaTotal: 432
  },

  // Notas: média final = (AV1 + AV2 + Trabalho) / 3
  modulos: [
    {
      nome: 'Módulo 2',
      periodo: 'ago – dez 2026',
      concluido: false,
      disciplinas: [
        { nome: 'Direito Constitucional', professor: 'Prof. Dr. Ricardo Menezes', ch: 36, av1: 8.5, av2: null, trabalho: null, frequencia: 100 },
        { nome: 'Sociologia Moderna', professor: 'Profª. Dra. Helena Duarte', ch: 36, av1: 9.0, av2: null, trabalho: null, frequencia: 92 },
        { nome: 'Compras Públicas', professor: 'Prof. Me. André Valadares', ch: 36, av1: 7.5, av2: null, trabalho: null, frequencia: 100 },
        { nome: 'Finanças Governamentais', professor: 'Profª. Dra. Beatriz Nogueira', ch: 36, av1: null, av2: null, trabalho: null, frequencia: 89 }
      ]
    },
    {
      nome: 'Módulo 1',
      periodo: 'mar – jul 2026',
      concluido: true,
      disciplinas: [
        { nome: 'Teoria da Administração Pública', professor: 'Prof. Dr. Marcelo Teixeira', ch: 36, av1: 8.5, av2: 9.0, trabalho: 8.6, frequencia: 97, cor: '#3E5BA9' },
        { nome: 'Políticas Públicas', professor: 'Profª. Dra. Luciana Prado', ch: 36, av1: 9.0, av2: 9.5, trabalho: 9.1, frequencia: 100, cor: '#0E7C86' },
        { nome: 'Gestão de Pessoas no Setor Público', professor: 'Prof. Dr. Fernando Couto', ch: 36, av1: 7.5, av2: 8.5, trabalho: 8.0, frequencia: 94, cor: '#7A4FB5' },
        { nome: 'Metodologia de Pesquisa', professor: 'Profª. Dra. Renata Lima', ch: 36, av1: 9.5, av2: 9.5, trabalho: 9.5, frequencia: 100, cor: '#B4572E' }
      ]
    }
  ],

  // dia: 0 = domingo ... 6 = sábado
  grade: [
    { dia: 2, inicio: '19:00', fim: '22:00', disciplina: 'Direito Constitucional', professor: 'Prof. Dr. Ricardo Menezes', sala: 'Sala 1102', andar: '11º andar', cor: '#003A79' },
    { dia: 4, inicio: '19:00', fim: '22:00', disciplina: 'Sociologia Moderna', professor: 'Profª. Dra. Helena Duarte', sala: 'Sala 1102', andar: '11º andar', cor: '#138CCC' },
    { dia: 5, inicio: '19:00', fim: '22:00', disciplina: 'Compras Públicas', professor: 'Prof. Me. André Valadares', sala: 'Sala 1205', andar: '12º andar', cor: '#0F8A7E' },
    { dia: 6, inicio: '09:00', fim: '13:00', disciplina: 'Finanças Governamentais', professor: 'Profª. Dra. Beatriz Nogueira', sala: 'Sala 1205', andar: '12º andar', cor: '#C26A00' }
  ],

  noticias: [
    {
      id: 'licitacoes',
      tag: 'Eventos',
      titulo: 'Seminário debate a Nova Lei de Licitações na prática',
      resumo: 'Encontro reúne gestores públicos e pesquisadores no dia 28 de outubro, às 18h30.',
      data: '2026-10-13',
      tema: 'teal',
      icone: 'megafone',
      corpo: [
        'A FGV EBAPE promove, em 28 de outubro, às 18h30, um seminário sobre os desafios de implementação da Lei nº 14.133/2021 em estados e municípios.',
        'O evento é aberto aos alunos de pós-graduação e conta como atividade complementar. As vagas são limitadas e as inscrições devem ser feitas pelo portal de eventos.'
      ]
    },
    {
      id: 'rematricula',
      tag: 'Secretaria',
      titulo: 'Rematrícula para 2027.1 vai até 30 de novembro',
      resumo: 'Confirme sua permanência no curso pelo app ou pelo portal acadêmico.',
      data: '2026-10-08',
      tema: 'azul',
      icone: 'calendario',
      corpo: [
        'O período de rematrícula para o semestre 2027.1 está aberto e segue até 30 de novembro.',
        'Alunos com pendências financeiras ou documentais devem procurar a Secretaria Acadêmica antes do prazo. Após a confirmação, a grade do próximo módulo fica disponível na aba Horários.'
      ]
    },
    {
      id: 'biblioteca',
      tag: 'Biblioteca',
      titulo: 'Biblioteca amplia horário no período de avaliações',
      resumo: 'Atendimento estendido até as 22h entre 19 de outubro e 13 de dezembro.',
      data: '2026-10-06',
      tema: 'roxo',
      icone: 'livro',
      corpo: [
        'A Biblioteca Mario Henrique Simonsen funcionará em horário estendido, de segunda a sexta-feira, até as 22h, durante o período de avaliações.',
        'As salas de estudo em grupo podem ser reservadas com até 48 horas de antecedência no balcão de atendimento.'
      ]
    },
    {
      id: 'carteirinha',
      tag: 'Novidade',
      titulo: 'Sua carteirinha de estudante agora é digital',
      resumo: 'Documento com QR Code de validação disponível no app.',
      data: '2026-10-01',
      tema: 'ambar',
      icone: 'cartao',
      corpo: [
        'A carteira de identificação estudantil passou a ser emitida em formato digital, na aba Carteirinha deste aplicativo.',
        'O QR Code no verso do documento permite que qualquer pessoa confirme a autenticidade da carteirinha em tempo real.'
      ],
      acao: { texto: 'Abrir minha carteirinha', ir: 'carteirinha' }
    }
  ]
};
