/* =========================================================
   FGV Aluno — lógica do aplicativo
   ========================================================= */
(() => {
  'use strict';

  const D = window.DADOS;
  const A = D.aluno;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- ícones ---------- */
  const P = {
    home: '<path d="M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-6h-5.6v6H5A1.5 1.5 0 0 1 3.5 19z"/>',
    notas: '<path d="M6.5 3.5h8l4 4v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z"/><path d="M14.5 3.5v4h4M8.5 12.5h7M8.5 16.5h4.5"/>',
    cartao: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.3" cy="10.8" r="2.1"/><path d="M5.3 16.2c.6-1.5 1.7-2.3 3-2.3s2.4.8 3 2.3M14 10h4.5M14 13.5h3"/>',
    calendario: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01"/>',
    sino: '<path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
    relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    local: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
    seta: '<path d="m9.5 6 6 6-6 6"/>',
    baixo: '<path d="m6 9.5 6 6 6-6"/>',
    virar: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3L4 15"/><path d="M4 20v-5h5"/>',
    olho: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    olhoOff: '<path d="M10.6 5.6A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.6 3.4M6.4 6.9C3.9 8.6 2.5 12 2.5 12S6 18.5 12 18.5c1.8 0 3.3-.5 4.6-1.3M9.9 9.9a3 3 0 0 0 4.2 4.2M3.5 3.5l17 17"/>',
    user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5"/>',
    cadeado: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8h.01"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    escudo: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m8.8 12 2.3 2.3 4.4-4.6"/>',
    sair: '<path d="M14.5 4.5h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3"/><path d="M10 16.5 5.5 12 10 7.5M5.5 12H15"/>',
    megafone: '<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>',
    livro: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
    grafico: '<path d="M4 20h16M7 16v-4M12 16V8M17 16v-6"/>',
    presenca: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.2 2.4 2.4 4.8-5"/>',
    capelo: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5V16c1.6 1.4 3.4 2 5.5 2s3.9-.6 5.5-2v-4.5M21.5 9.5v5"/>'
  };
  const ico = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

  const ILUSTRA_VAZIO = '<svg viewBox="0 0 120 90" aria-hidden="true"><rect x="22" y="16" width="76" height="62" rx="10" fill="#E2F0FA"/><rect x="22" y="16" width="76" height="18" rx="9" fill="#138CCC" opacity=".85"/><rect x="22" y="26" width="76" height="8" fill="#138CCC" opacity=".85"/><path d="M42 10v14M78 10v14" stroke="#003A79" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="56" r="13" fill="#fff"/><path d="m54 56 4.5 4.5 8-9" stroke="#12804E" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- utilidades ---------- */
  const DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const DIAS_LONGO = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const DIAS_C = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  const pad = n => String(n).padStart(2, '0');
  const nota = n => (n == null ? '—' : n.toFixed(1).replace('.', ','));
  const media = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  const minutos = hhmm => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
  const agoraMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
  const duracao = m => (m >= 60 ? `${Math.floor(m / 60)}h ${pad(m % 60)}min` : `${m} min`);
  const horaCurta = s => { const [h, m] = s.split(':').map(Number); return m ? `${h}h${pad(m)}` : `${h}h`; };
  const dataCurta = iso => { const [, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1].slice(0, 3)}`; };
  const dataLonga = iso => { const [y, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${y}`; };
  const espera = ms => new Promise(r => setTimeout(r, ms));
  const vibrar = () => {
    if (!navigator.vibrate || (navigator.userActivation && !navigator.userActivation.hasBeenActive)) return;
    try { navigator.vibrate(8); } catch (e) { /* sem vibração */ }
  };
  const corDe = nome => (D.grade.find(g => g.disciplina === nome) || {}).cor || '#003A79';

  /* ---------- números do boletim ---------- */
  const finalDe = d => { const ns = [d.av1, d.av2, d.trabalho]; return ns.every(n => n != null) ? Math.round(media(ns) * 10) / 10 : null; };
  const parcialDe = d => { const ns = [d.av1, d.av2, d.trabalho].filter(n => n != null); return ns.length ? Math.round(media(ns) * 10) / 10 : null; };
  const moduloAtual = D.modulos.find(m => !m.concluido);
  const concluidas = D.modulos.filter(m => m.concluido).flatMap(m => m.disciplinas);
  const emCurso = moduloAtual.disciplinas;
  const todas = [...emCurso, ...concluidas];
  const CR = media(concluidas.map(finalDe)).toFixed(2).replace('.', ',');
  const FREQ = Math.round(media(todas.map(d => d.frequencia)));
  const CH_FEITA = concluidas.reduce((s, d) => s + d.ch, 0);
  const PROGRESSO = Math.round(CH_FEITA / D.curso.cargaTotal * 100);

  /* ---------- próxima aula ---------- */
  function proximaAula() {
    const hoje = new Date().getDay();
    const agora = agoraMin();
    for (let off = 0; off < 8; off++) {
      const dia = (hoje + off) % 7;
      const aulas = D.grade.filter(g => g.dia === dia).sort((a, b) => minutos(a.inicio) - minutos(b.inicio));
      for (const a of aulas) {
        if (off === 0 && minutos(a.fim) <= agora) continue;
        return { ...a, off, andamento: off === 0 && minutos(a.inicio) <= agora };
      }
    }
    return null;
  }
  const quando = p => (p.andamento ? 'Em andamento' : p.off === 0 ? 'Hoje' : p.off === 1 ? 'Amanhã' : DIAS[p.dia]);
  function contagem(p) {
    const agora = agoraMin();
    if (p.andamento) return `Termina em ${duracao(minutos(p.fim) - agora)}`;
    if (p.off === 0) return `Começa em ${duracao(minutos(p.inicio) - agora)}`;
    if (p.off === 1) return `Amanhã, às ${horaCurta(p.inicio)}`;
    return `${DIAS_LONGO[p.dia]}, às ${horaCurta(p.inicio)}`;
  }
  const pctAula = a => Math.min(100, Math.max(0, (agoraMin() - minutos(a.inicio)) / (minutos(a.fim) - minutos(a.inicio)) * 100));

  /* ---------- padrão de segurança (guilloché) ---------- */
  const cacheG = {};
  function guilloche(cor, op, cx = 0.72, cy = 0.6) {
    const chave = cor + op + cx + cy;
    if (cacheG[chave]) return cacheG[chave];
    const w = 360, h = 420, X = w * cx, Y = h * cy;
    let d = '';
    for (let j = 0; j < 11; j++) {
      const fase = j * Math.PI / 16;
      const R = 112 + j * 4;
      for (let i = 0; i <= 200; i++) {
        const t = i / 200 * Math.PI * 2;
        const r = R + 24 * Math.sin(9 * t + fase) + 9 * Math.sin(4 * t - fase);
        d += (i ? 'L' : 'M') + (X + r * Math.cos(t)).toFixed(1) + ' ' + (Y + r * Math.sin(t)).toFixed(1);
      }
    }
    for (let k = 0; k < 8; k++) {
      const y0 = h * 0.06 + k * 11;
      for (let x = 0; x <= w; x += 6) d += (x ? 'L' : 'M') + x + ' ' + (y0 + 5 * Math.sin(x / 21 + k * 0.7)).toFixed(1);
    }
    return (cacheG[chave] = `<svg class="guilloche" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="${d}" fill="none" stroke="${cor}" stroke-opacity="${op}" stroke-width=".6"/></svg>`);
  }

  /* ---------- estado ---------- */
  let logado = false;
  let viewAtual = null;
  let abaNotas = 'curso';
  let diaSel = null;
  let notifLidas = false;
  const visitadas = new Set();

  const metaTema = $('meta[name="theme-color"]');
  const setTema = c => metaTema && metaTema.setAttribute('content', c);

  function mostrarTela(nome) {
    $('#tela-login').hidden = nome !== 'login';
    $('#tela-carregando').hidden = nome !== 'carregando';
    $('#tela-validar').hidden = nome !== 'validar';
    $('#shell').hidden = nome !== 'shell';
  }

  /* =========================================================
     INÍCIO
     ========================================================= */
  const cardProxima = p => !p ? '' : `
    <button class="card proxima skel rip" data-ir="horarios" data-dia="${p.dia}" style="--cor:${p.cor}">
      <span class="prox-topo">
        <span class="rotulo">Próxima aula</span>
        <span class="chip ${p.andamento ? 'chip-verde chip-vivo' : p.off === 0 ? 'chip-azul' : ''}">${quando(p)}</span>
      </span>
      <strong class="prox-tit">${p.disciplina}</strong>
      <span class="prox-meta">
        <span>${ico('relogio')}${p.inicio} – ${p.fim}</span>
        <span>${ico('local')}${p.sala} · ${p.andar}</span>
      </span>
      ${p.andamento ? `<span class="prox-barra"><span style="width:${pctAula(p)}%"></span></span>` : ''}
      <span class="prox-rodape"><span>${contagem(p)}</span>${ico('seta')}</span>
    </button>`;

  function renderInicio() {
    const h = new Date().getHours();
    const saudacao = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
    const [destaque, ...resto] = D.noticias;
    $('#v-inicio').innerHTML = `
      <div class="pagina">
        <header class="home-topo">
          ${guilloche('#ffffff', 0.07, 0.85, 0.35)}
          <div class="home-barra">
            <img src="assets/img/logo-branco.png" alt="FGV" class="home-logo">
            <button class="icone-btn rip" data-acao="notificacoes" aria-label="Notificações">${ico('sino')}${notifLidas ? '' : '<span class="badge-ponto"></span>'}</button>
          </div>
          <button class="saudacao rip" data-acao="perfil">
            <span class="avatar"><img src="${A.foto}" alt=""></span>
            <span><small>${saudacao},</small><strong>${A.primeiroNome}</strong></span>
          </button>
          <span class="curso-chip">${A.escola} · ${A.cursoCurto}</span>
        </header>

        ${cardProxima(proximaAula())}

        <button class="atalho-cart skel rip" data-ir="carteirinha">
          <span class="mini-cart"><img src="${A.foto}" alt=""><i style="top:16px;width:24px"></i><i style="top:23px;width:18px"></i><i style="top:30px;width:22px"></i><span class="mini-brilho"></span></span>
          <span class="atalho-txt"><strong>Carteirinha digital</strong><small>Válida até ${A.validade} · ${A.escola}</small></span>
          ${ico('seta')}
        </button>

        <div class="stats">
          <button class="stat skel rip" data-ir="notas"><span class="stat-ico">${ico('grafico')}</span><strong>${CR}</strong><small>Média geral</small></button>
          <button class="stat skel rip" data-ir="notas"><span class="stat-ico">${ico('presenca')}</span><strong>${FREQ}%</strong><small>Frequência</small></button>
          <button class="stat skel rip" data-ir="notas"><span class="stat-ico">${ico('capelo')}</span><strong>${PROGRESSO}%</strong><small>Do curso concluído</small></button>
        </div>

        <section class="secao">
          <h2 class="secao-tit">Notícias da FGV</h2>
          <button class="noticia-dest skel rip" data-noticia="${destaque.id}">
            <span class="arte arte-${destaque.tema}">${ico(destaque.icone)}</span>
            <span class="nd-corpo">
              <span class="tag">${destaque.tag}</span>
              <strong>${destaque.titulo}</strong>
              <small>${destaque.resumo}</small>
              <time>${dataCurta(destaque.data)}</time>
            </span>
          </button>
          <div class="lista-noticias skel">
            ${resto.map(n => `
              <button class="noticia rip" data-noticia="${n.id}">
                <span class="arte arte-${n.tema}">${ico(n.icone)}</span>
                <span class="n-corpo"><span class="tag">${n.tag}</span><strong>${n.titulo}</strong><time>${dataCurta(n.data)}</time></span>
              </button>`).join('')}
          </div>
        </section>
      </div>`;
  }

  function atualizarProxima() {
    const card = $('#v-inicio .proxima');
    if (!card) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = cardProxima(proximaAula());
    if (tmp.firstElementChild) card.replaceWith(tmp.firstElementChild);
  }

  /* =========================================================
     NOTAS
     ========================================================= */
  const aval = (rotulo, v, dest) => `<div class="aval ${dest ? 'dest' : ''}"><small>${rotulo}</small><b>${nota(v)}</b></div>`;

  function discHTML(d, concluida) {
    const valor = concluida ? finalDe(d) : parcialDe(d);
    const aprovado = valor >= 7 && d.frequencia >= 75;
    const status = concluida ? (aprovado ? ['Aprovado', 'chip-verde'] : ['Reprovado', 'chip-verm']) : ['Em curso', 'chip-azul'];
    return `
      <div class="disc skel" style="--cor:${d.cor || corDe(d.nome)}">
        <button class="disc-cab rip" data-disc>
          <span class="disc-info"><strong>${d.nome}</strong><small>${d.professor}</small></span>
          <span class="disc-nota"><b class="${valor == null ? 'vazia' : ''}">${nota(valor)}</b><small>${concluida ? 'Final' : 'Parcial'}</small></span>
          <span class="disc-chev">${ico('baixo')}</span>
        </button>
        <div class="disc-corpo"><div class="disc-int"><div class="disc-pad">
          <div class="avals">
            ${aval('AV1', d.av1)}${aval('AV2', d.av2)}${aval('Trabalho', d.trabalho)}${aval(concluida ? 'Média' : 'Parcial', valor, true)}
          </div>
          <div class="freq">
            <div class="prog-txt"><span>Frequência</span><span>${d.frequencia}%</span></div>
            <div class="barra"><span style="width:${d.frequencia}%"></span></div>
          </div>
          <div class="disc-pe"><span class="chip ${status[1]}">${status[0]}</span><span>Carga horária: ${d.ch} h</span></div>
        </div></div></div>
      </div>`;
  }

  function renderListaNotas() {
    const mod = abaNotas === 'curso' ? moduloAtual : D.modulos.find(m => m.concluido);
    $$('#v-notas .seg button').forEach(b => b.classList.toggle('ativo', b.dataset.abaNotas === abaNotas));
    $('#v-notas .modulo-tit').textContent = `${mod.nome} · ${mod.periodo}`;
    $('#v-notas .discs').innerHTML = mod.disciplinas.map(d => discHTML(d, mod.concluido)).join('');
  }

  function renderNotas() {
    $('#v-notas').innerHTML = `
      <div class="pagina">
        <header class="topo"><h1>Notas</h1><p>Boletim acadêmico · ${A.turma}</p></header>
        <div class="resumo skel">
          <div class="resumo-linha">
            <div><small>Média geral</small><strong>${CR}</strong></div>
            <div><small>Frequência</small><strong>${FREQ}%</strong></div>
            <div><small>Concluídas</small><strong>${concluidas.length}/${todas.length}</strong></div>
          </div>
          <div class="resumo-prog">
            <div class="prog-txt"><span>Carga horária cumprida</span><span>${CH_FEITA} de ${D.curso.cargaTotal} h</span></div>
            <div class="barra"><span style="width:${PROGRESSO}%"></span></div>
          </div>
        </div>
        <div class="seg" role="tablist">
          <button data-aba-notas="curso">Em curso · ${emCurso.length}</button>
          <button data-aba-notas="concluidas">Concluídas · ${concluidas.length}</button>
        </div>
        <p class="modulo-tit"></p>
        <div class="discs"></div>
        <p class="rodape-nota">${ico('info')}<span>Aprovação com média igual ou superior a 7,0 e frequência mínima de 75%. Média = (AV1 + AV2 + Trabalho) ÷ 3.</span></p>
      </div>`;
    renderListaNotas();
  }

  /* =========================================================
     CARTEIRINHA
     ========================================================= */
  const campo = (rot, valor, cls = '') => `<div class="campo"><span class="rot">${rot}</span><strong class="${cls}">${valor}</strong></div>`;
  const topoCartao = () => `
    <div class="cart-topo">
      <img src="assets/img/logo-branco.png" alt="FGV">
      <div class="cart-tit">CARTEIRA DE IDENTIFICAÇÃO<br>ESTUDANTIL</div>
      <span class="topo-brilho"></span>
    </div>`;
  const rodapeVivo = () => `<div class="cart-vivo"><span class="pulso"></span><b>Documento válido</b><span class="relogio" data-relogio>${relogioTxt()}</span></div>`;

  function relogioTxt() {
    const d = new Date();
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} · ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function renderCarteirinha() {
    const faixa = 'FUNDAÇÃO GETULIO VARGAS • DOCUMENTO DIGITAL • '.repeat(8);
    const micro = 'FUNDAÇÃO GETULIO VARGAS • ESCOLA BRASILEIRA DE ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS • PROTÓTIPO ACADÊMICO SEM VALIDADE LEGAL • '.repeat(2);
    $('#v-carteirinha').innerHTML = `
      <div class="pagina">
        <header class="topo"><h1>Carteirinha</h1><p>Carteira de identificação estudantil</p></header>
        <div class="cart-area idle" id="cart-area">
          <div class="cart-entrada">
            <div class="cart-3d" id="cart-3d">
              <div class="cart-inner" data-acao="virar">

                <div class="cart-face frente">
                  ${topoCartao()}
                  <div class="cart-corpo">
                    ${guilloche('#0B4F98', 0.16)}
                    <div class="cart-linha">
                      <div class="cart-foto"><img src="${A.foto}" alt="Foto de ${A.nome}"><span class="foto-holo"></span></div>
                      <div class="cart-campos">
                        ${campo('Nome', A.nome.toUpperCase())}
                        ${campo('Matrícula', A.matricula, 'mono')}
                        ${campo('Validade', A.validade, 'mono')}
                      </div>
                    </div>
                    <div class="cart-bloco">
                      ${campo('Curso', A.curso)}
                      <div class="grid2">${campo('Nível', A.nivel)}${campo('Escola', A.escola)}</div>
                      <div class="grid2">${campo('Modalidade', A.modalidade)}${campo('Ingresso', A.ingresso, 'mono')}</div>
                    </div>
                    <div class="cart-base">
                      <span class="selo" aria-hidden="true"></span>
                      <span class="fantasma"><img src="${A.foto}" alt=""></span>
                    </div>
                  </div>
                  <div class="faixa-viva"><span>${faixa}</span></div>
                  ${rodapeVivo()}
                </div>

                <div class="cart-face verso">
                  ${topoCartao()}
                  <div class="cart-corpo verso-corpo">
                    ${guilloche('#0B4F98', 0.12, 0.3, 0.75)}
                    <div class="qr-box" id="qr-box"></div>
                    <p class="qr-dica">Aponte a câmera do celular para<br>validar a autenticidade</p>
                    <div class="codigo"><small>Código de verificação</small><b class="mono">${A.codigo}</b></div>
                    <div class="grid2 verso-grid">${campo('Emissão', A.emissao, 'mono')}${campo('Situação', A.situacao)}</div>
                    ${campo('Unidade', A.unidade)}
                  </div>
                  <div class="micro">${micro}</div>
                  ${rodapeVivo()}
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="cart-acoes">
          <button class="btn-sec rip" data-acao="virar">${ico('virar')}<span id="txt-virar">Ver verso</span></button>
        </div>
        <p class="cart-nota">${ico('escudo')}<span>Documento pessoal e intransferível. Toque no cartão ou incline o celular para conferir os elementos de segurança.</span></p>
      </div>`;
    preencherQR();
  }

  function preencherQR() {
    const box = $('#qr-box');
    if (!box) return;
    if (!window.qrcode) { box.innerHTML = '<div class="qr-off">QR Code indisponível</div>'; return; }
    const url = location.href.split('#')[0] + '#validar';
    const q = window.qrcode(0, 'M');
    q.addData(url);
    q.make();
    const n = q.getModuleCount();
    let d = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
    box.innerHTML = `<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" role="img" aria-label="QR Code de validação"><path d="${d}" fill="#0E1A2B"/></svg>`;
  }

  function virarCartao() {
    const area = $('#cart-area');
    if (!area) return;
    const virado = area.classList.toggle('virado');
    const t = $('#txt-virar');
    if (t) t.textContent = virado ? 'Ver frente' : 'Ver verso';
    vibrar();
  }

  /* inclinação do celular → holograma e leve paralaxe */
  const tilt = { x: 50, y: 50, raf: 0 };
  function aplicarTilt(x, y) {
    tilt.x = x; tilt.y = y;
    if (tilt.raf) return;
    tilt.raf = requestAnimationFrame(() => {
      tilt.raf = 0;
      const a = $('#cart-area');
      if (!a) return;
      a.style.setProperty('--hx', tilt.x.toFixed(1));
      a.style.setProperty('--hy', tilt.y.toFixed(1));
      a.style.setProperty('--ry', ((tilt.x - 50) / 50 * 6).toFixed(2));
      a.style.setProperty('--rx', (-(tilt.y - 50) / 50 * 6).toFixed(2));
    });
  }
  window.addEventListener('deviceorientation', e => {
    if (viewAtual !== 'carteirinha' || e.gamma == null) return;
    const a = $('#cart-area');
    if (!a) return;
    a.classList.remove('idle');
    const g = Math.max(-30, Math.min(30, e.gamma));
    const b = Math.max(-30, Math.min(30, (e.beta == null ? 45 : e.beta) - 45));
    aplicarTilt(50 + g / 30 * 50, 50 + b / 30 * 50);
  });
  document.addEventListener('pointermove', e => {
    if (viewAtual !== 'carteirinha' || e.pointerType !== 'mouse') return;
    const a = $('#cart-area'), c = $('#cart-3d');
    if (!a || !c) return;
    const r = c.getBoundingClientRect();
    const dentro = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!dentro) {
      if (!a.classList.contains('idle')) { a.classList.add('idle'); aplicarTilt(50, 50); }
      return;
    }
    a.classList.remove('idle');
    aplicarTilt((e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100);
  });

  /* mantém a tela acesa enquanto a carteirinha está aberta */
  let travaTela = null;
  async function manterTelaAcesa(ligar) {
    try {
      if (ligar && !travaTela && 'wakeLock' in navigator) {
        travaTela = await navigator.wakeLock.request('screen');
        travaTela.addEventListener('release', () => { travaTela = null; });
      } else if (!ligar && travaTela) {
        await travaTela.release();
        travaTela = null;
      }
    } catch (e) { travaTela = null; }
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && viewAtual === 'carteirinha' && logado) manterTelaAcesa(true);
  });

  /* =========================================================
     HORÁRIOS
     ========================================================= */
  function semanaAtual() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dow = hoje.getDay();
    const seg = new Date(hoje);
    seg.setDate(hoje.getDate() - ((dow + 6) % 7) + (dow === 0 ? 7 : 0));
    return Array.from({ length: 6 }, (_, i) => { const d = new Date(seg); d.setDate(seg.getDate() + i); return d; });
  }

  function aulaHTML(a) {
    const ehHoje = a.dia === new Date().getDay();
    const agora = agoraMin();
    let chips = '<span class="chip">Presencial</span>';
    let barra = '';
    if (ehHoje) {
      if (agora < minutos(a.inicio)) chips = `<span class="chip chip-azul">Hoje · começa em ${duracao(minutos(a.inicio) - agora)}</span>` + chips;
      else if (agora < minutos(a.fim)) { chips = '<span class="chip chip-verde chip-vivo">Em andamento</span>' + chips; barra = `<span class="prox-barra"><span style="width:${pctAula(a)}%"></span></span>`; }
      else chips = '<span class="chip">Encerrada</span>' + chips;
    }
    return `
      <div class="aula skel" style="--cor:${a.cor}">
        <div class="aula-hora"><b>${a.inicio}</b><small>${a.fim}</small></div>
        <span class="aula-barra"></span>
        <div class="aula-info">
          <strong>${a.disciplina}</strong>
          <span class="linha">${ico('user')}${a.professor}</span>
          <span class="linha">${ico('local')}${a.sala} · ${a.andar}</span>
          <div class="chips">${chips}</div>
          ${barra}
        </div>
      </div>`;
  }

  function renderAulas() {
    const aulas = D.grade.filter(g => g.dia === diaSel);
    const dias = semanaAtual();
    const data = dias.find(d => d.getDay() === diaSel);
    $('#v-horarios .dia-tit').textContent = `${DIAS_LONGO[diaSel]}${data ? `, ${data.getDate()} de ${MESES[data.getMonth()]}` : ''}`;
    $('#aulas').innerHTML = aulas.length
      ? aulas.map(aulaHTML).join('')
      : `<div class="vazio">${ILUSTRA_VAZIO}<strong>Nenhuma aula neste dia</strong><small>Aproveite para revisar o conteúdo da semana.</small></div>`;
    $$('#v-horarios .dia').forEach(b => b.classList.toggle('sel', +b.dataset.dia === diaSel));
  }

  function renderHorarios() {
    const hoje = new Date().getDay();
    if (diaSel == null) diaSel = hoje === 0 ? 1 : hoje;
    $('#v-horarios').innerHTML = `
      <div class="pagina">
        <header class="topo"><h1>Horários</h1><p>${moduloAtual.nome} · ${moduloAtual.periodo} · ${A.unidade.split(' · ')[0]}</p></header>
        <div class="semana">
          ${semanaAtual().map(d => {
            const dw = d.getDay();
            const tem = D.grade.some(g => g.dia === dw);
            return `<button class="dia skel rip ${dw === hoje ? 'hoje' : ''}" data-dia="${dw}"><small>${DIAS_C[dw]}</small><b>${d.getDate()}</b><i class="${tem ? '' : 'sem'}"></i></button>`;
          }).join('')}
        </div>
        <p class="dia-tit"></p>
        <div class="aulas" id="aulas"></div>
        <section class="secao">
          <h2 class="secao-tit">Disciplinas do módulo</h2>
          <div class="card lista-disc skel">
            ${D.grade.map(g => `<div class="ld-item" style="--cor:${g.cor}"><span class="ld-cor"></span><span class="ld-txt"><strong>${g.disciplina}</strong><small>${DIAS[g.dia]} · ${g.inicio}–${g.fim} · ${g.sala}</small></span></div>`).join('')}
          </div>
        </section>
      </div>`;
    renderAulas();
  }

  /* =========================================================
     VALIDAÇÃO (página aberta pelo QR Code)
     ========================================================= */
  function renderValidacao() {
    const d = new Date();
    $('#tela-validar').innerHTML = `
      <header class="val-topo"><img src="assets/img/logo-cor.png" alt="FGV"><span>Validação de documentos</span></header>
      <div class="val-corpo">
        <div class="val-ok">${ico('check')}</div>
        <h1>Documento válido</h1>
        <p class="val-sub">Carteira de identificação estudantil emitida pela Fundação Getulio Vargas</p>
        <div class="card val-card">
          <div class="val-aluno">
            <span class="val-foto"><img src="${A.foto}" alt=""></span>
            <div><strong>${A.nome}</strong><small>Matrícula ${A.matricula}</small></div>
          </div>
          <dl class="val-dados">
            <div><dt>Curso</dt><dd>${A.curso}</dd></div>
            <div><dt>Escola</dt><dd>${A.escola}</dd></div>
            <div><dt>Situação</dt><dd><span class="chip chip-verde">${A.situacao}</span></dd></div>
            <div><dt>Validade</dt><dd>${A.validade}</dd></div>
            <div><dt>Código</dt><dd class="mono">${A.codigo}</dd></div>
          </dl>
        </div>
        <p class="val-hora">Consulta realizada em ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} às ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}</p>
      </div>
      <footer class="val-rodape">Fundação Getulio Vargas · Sistema de Validação de Documentos</footer>`;
  }

  /* =========================================================
     PAINEL INFERIOR
     ========================================================= */
  let sheetAberto = false;
  const sheet = $('#sheet');
  const painel = $('.sheet-painel');

  function notificacoesHTML() {
    const p = proximaAula();
    const itens = [
      { i: 'notas', t: 'Nota de AV1 disponível', x: 'Compras Públicas: sua nota já foi lançada no boletim.', q: 'há 2 horas', alvo: 'data-ir="notas"' },
      p && { i: 'calendario', t: 'Lembrete de aula', x: `${p.disciplina} · ${quando(p)}, ${p.inicio} · ${p.sala}`, q: 'hoje', alvo: `data-ir="horarios" data-dia="${p.dia}"` },
      { i: 'megafone', t: 'Rematrícula aberta', x: 'Confirme sua permanência para 2027.1 até 30/11.', q: 'ontem', alvo: 'data-noticia="rematricula"' },
      { i: 'cartao', t: 'Carteirinha digital emitida', x: 'Seu documento já está disponível no app.', q: '1 de out', alvo: 'data-ir="carteirinha"' }
    ].filter(Boolean);
    return `<h2 class="sheet-tit">Notificações</h2>` + itens.map(n => `
      <button class="notif rip" ${n.alvo}>
        <span class="notif-ico">${ico(n.i)}</span>
        <span class="notif-txt"><strong>${n.t}</strong><span>${n.x}</span><time>${n.q}</time></span>
      </button>`).join('');
  }

  const perfilHTML = () => `
    <div class="perfil-cab">
      <span class="avatar grande"><img src="${A.foto}" alt=""></span>
      <strong>${A.nome}</strong>
      <small>Matrícula ${A.matricula}</small>
      <small>${A.curso} · ${A.escola}</small>
    </div>
    <button class="opc rip" data-ir="carteirinha">${ico('cartao')}<span>Minha carteirinha</span>${ico('seta')}</button>
    <button class="opc rip" data-ir="notas">${ico('notas')}<span>Boletim e frequência</span>${ico('seta')}</button>
    <button class="opc rip" data-ir="horarios">${ico('calendario')}<span>Grade de horários</span>${ico('seta')}</button>
    <button class="opc opc-sair rip" data-acao="sair">${ico('sair')}<span>Sair da conta</span></button>`;

  function noticiaHTML(id) {
    const n = D.noticias.find(x => x.id === id);
    if (!n) return '';
    return `
      <article class="det">
        <div class="arte arte-${n.tema} det-arte">${ico(n.icone)}</div>
        <span class="tag">${n.tag}</span>
        <h2>${n.titulo}</h2>
        <time>${dataLonga(n.data)}</time>
        ${n.corpo.map(p => `<p>${p}</p>`).join('')}
        ${n.acao ? `<button class="btn-pri rip" data-ir="${n.acao.ir}">${n.acao.texto}</button>` : ''}
      </article>`;
  }

  function abrirSheet(html) {
    $('.sheet-conteudo').innerHTML = html;
    painel.scrollTop = 0;
    sheet.classList.add('aberto');
    sheet.setAttribute('aria-hidden', 'false');
    sheetAberto = true;
    garantirEntrada();
  }
  function fecharSheet(semHistorico) {
    if (!sheetAberto) return;
    sheet.classList.remove('aberto');
    sheet.setAttribute('aria-hidden', 'true');
    sheetAberto = false;
    if (!semHistorico && viewAtual === 'inicio') soltarEntrada();
  }

  // arrastar para baixo para fechar
  let arrasteY = null, arrasteD = 0;
  $('.sheet-alca').addEventListener('pointerdown', e => {
    arrasteY = e.clientY; arrasteD = 0;
    painel.classList.add('arrastando');
    e.currentTarget.setPointerCapture(e.pointerId);
  });
  $('.sheet-alca').addEventListener('pointermove', e => {
    if (arrasteY == null) return;
    arrasteD = Math.max(0, e.clientY - arrasteY);
    painel.style.setProperty('--arrasto', arrasteD + 'px');
  });
  const fimArraste = () => {
    if (arrasteY == null) return;
    arrasteY = null;
    painel.classList.remove('arrastando');
    painel.style.removeProperty('--arrasto');
    if (arrasteD > 80) fecharSheet();
  };
  $('.sheet-alca').addEventListener('pointerup', fimArraste);
  $('.sheet-alca').addEventListener('pointercancel', fimArraste);

  /* ---------- aviso rápido ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  /* =========================================================
     NAVEGAÇÃO (com botão "voltar" do Android)
     ========================================================= */
  let temEntrada = false, ignorarPop = false;
  function garantirEntrada() {
    if (!temEntrada) { history.pushState({ app: 1 }, ''); temEntrada = true; }
  }
  function soltarEntrada() {
    if (temEntrada) { temEntrada = false; ignorarPop = true; history.back(); }
  }
  window.addEventListener('popstate', () => {
    if (ignorarPop) { ignorarPop = false; return; }
    temEntrada = false;
    if (!logado) return;
    if (sheetAberto) {
      fecharSheet(true);
      if (viewAtual !== 'inicio') garantirEntrada();
      return;
    }
    if (viewAtual !== 'inicio') mostrar('inicio');
  });

  const RENDER = { inicio: renderInicio, notas: renderNotas, carteirinha: renderCarteirinha, horarios: renderHorarios };

  function mostrar(v) {
    const primeira = !visitadas.has(v);
    viewAtual = v;
    $$('.view').forEach(el => el.classList.toggle('ativa', el.dataset.view === v));
    $$('.nav-item').forEach(el => el.classList.toggle('ativo', el.dataset.ir === v));
    setTema(v === 'inicio' ? '#003A79' : '#F2F4F8');
    const el = $('#v-' + v);
    if (primeira || v === 'inicio') RENDER[v]();
    else if (v === 'horarios') renderAulas();
    if (primeira) {
      visitadas.add(v);
      if (v !== 'carteirinha') {
        el.classList.add('carregando');
        setTimeout(() => el.classList.remove('carregando'), 450 + Math.random() * 250);
      }
    }
    manterTelaAcesa(v === 'carteirinha');
  }

  function navegar(v) {
    if (v === viewAtual) {
      $('#v-' + v).scrollTo({ top: 0, behavior: 'smooth' });
      if (v === 'horarios') renderAulas();
      return;
    }
    mostrar(v);
    if (v === 'inicio') soltarEntrada(); else garantirEntrada();
  }

  function irPara(v) {
    if (sheetAberto) fecharSheet(true);
    navegar(v);
  }

  /* ---------- entrar / sair ---------- */
  async function entrar() {
    const btn = $('#btn-entrar');
    if (btn.dataset.ocupado) return;
    btn.dataset.ocupado = '1';
    btn.innerHTML = '<span class="spinner"></span>';
    vibrar();
    await espera(700);
    mostrarTela('carregando');
    await espera(1300);
    logado = true;
    document.body.classList.add('logado');
    mostrarTela('shell');
    mostrar('inicio');
    btn.textContent = 'Entrar';
    delete btn.dataset.ocupado;
  }

  function sair() {
    fecharSheet(true);
    soltarEntrada();
    logado = false;
    viewAtual = null;
    visitadas.clear();
    $$('.view').forEach(el => { el.classList.remove('ativa'); el.innerHTML = ''; });
    manterTelaAcesa(false);
    document.body.classList.remove('logado');
    mostrarTela('login');
    setTema('#003A79');
  }

  /* =========================================================
     EVENTOS
     ========================================================= */
  // efeito de onda nos toques
  document.addEventListener('pointerdown', e => {
    const el = e.target.closest('.rip');
    if (!el) return;
    const alvo = el.querySelector(':scope > .rip-alvo') || el;
    const r = alvo.getBoundingClientRect();
    const s = Math.max(r.width, r.height) * 2.2;
    const onda = document.createElement('span');
    onda.className = 'onda';
    onda.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    alvo.appendChild(onda);
    setTimeout(() => onda.remove(), 650);
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-ir],[data-acao],[data-noticia],[data-aba-notas],[data-disc],[data-dia],[data-fechar]');
    if (!t) return;

    if (t.dataset.ir) {
      if (t.dataset.dia) diaSel = +t.dataset.dia;
      if (t.classList.contains('nav-item')) vibrar();
      irPara(t.dataset.ir);
      return;
    }
    if (t.hasAttribute('data-fechar')) { fecharSheet(); return; }
    if (t.dataset.noticia) { abrirSheet(noticiaHTML(t.dataset.noticia)); return; }
    if (t.dataset.abaNotas) { abaNotas = t.dataset.abaNotas; renderListaNotas(); return; }
    if (t.hasAttribute('data-disc')) { t.closest('.disc').classList.toggle('aberta'); return; }
    if (t.dataset.dia) { diaSel = +t.dataset.dia; renderAulas(); vibrar(); return; }

    switch (t.dataset.acao) {
      case 'virar': virarCartao(); break;
      case 'perfil': abrirSheet(perfilHTML()); break;
      case 'sair': sair(); break;
      case 'notificacoes': {
        abrirSheet(notificacoesHTML());
        notifLidas = true;
        const b = $('#v-inicio .badge-ponto');
        if (b) b.remove();
        break;
      }
    }
  });

  // nada de menu de "salvar imagem" ao segurar o dedo
  document.addEventListener('contextmenu', e => e.preventDefault());

  $('#form-login').addEventListener('submit', e => { e.preventDefault(); entrar(); });
  $('#btn-olho').addEventListener('click', () => {
    const s = $('#in-senha');
    const mostrarSenha = s.type === 'password';
    s.type = mostrarSenha ? 'text' : 'password';
    $('#btn-olho').innerHTML = ico(mostrarSenha ? 'olhoOff' : 'olho');
  });
  $('#btn-esqueci').addEventListener('click', () => toast('Para redefinir sua senha, procure a Secretaria Acadêmica.'));

  // relógio da carteirinha e contagem da próxima aula
  setInterval(() => {
    if (!logado || viewAtual !== 'carteirinha') return;
    const txt = relogioTxt();
    $$('[data-relogio]').forEach(el => { el.textContent = txt; });
  }, 1000);
  setInterval(() => { if (logado && viewAtual === 'inicio') atualizarProxima(); }, 30000);

  /* ---------- início ---------- */
  $$('[data-ico]').forEach(el => { el.innerHTML = ico(el.dataset.ico); });
  $('.login-fundo').innerHTML = guilloche('#ffffff', 0.07, 0.5, 0.3);
  $('#in-matricula').value = A.matricula;

  if (location.hash === '#validar') {
    renderValidacao();
    mostrarTela('validar');
    setTema('#FFFFFF');
  } else {
    mostrarTela('login');
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
