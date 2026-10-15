# FGV Aluno — e-Carteirinha

Protótipo acadêmico (disciplina de design de aplicativos) de um app do aluno da FGV:
login, início com notícias, notas, carteirinha digital com QR Code de validação e grade de horários.
Todos os dados são fictícios e o projeto não tem vínculo oficial com a Fundação Getulio Vargas.

## Como funciona

- HTML, CSS e JavaScript puros, sem build — publicado direto pelo GitHub Pages.
- Instalável no Android pelo Chrome (menu ⋮ → **Instalar app** / **Adicionar à tela inicial**): abre em tela cheia, com ícone próprio.
- Funciona offline depois do primeiro acesso (service worker).
- O QR Code do verso da carteirinha abre `#validar`, a página de validação do documento.

## Estrutura

```
index.html              telas do app
css/style.css           visual
js/dados.js             todo o conteúdo fictício (aluno, notas, grade, notícias)
js/app.js               navegação e interações
manifest.webmanifest    nome, ícone e modo tela cheia
sw.js                   cache para uso offline
assets/                 logo, foto e ícones
```

Para trocar nome, matrícula, notas ou horários, edite apenas `js/dados.js`.
