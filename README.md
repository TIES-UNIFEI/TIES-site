# TIES · UNIFEI — site institucional

## Estrutura
- `pt/index.html`, `en/index.html`, `es/index.html`: conteúdo de cada idioma.
- `assets/css/style.css`: identidade visual compartilhada pelas três versões.
- `assets/js/main.js`: menu responsivo e carrossel central de destaques.
- `assets/images/`: logotipos institucionais.
- `CNAME`: domínio institucional configurado no GitHub Pages.

## Atualizar os destaques centrais
No arquivo de cada idioma, localize a seção `spotlight-section`. Cada item é um bloco `article` com o atributo `data-spotlight-slide`. Para acrescentar um destaque, duplique um `article`, ajuste título, texto, link e composição visual. Atualize também os botões `data-spotlight-to` da seção `spotlight-dots` para manter a mesma quantidade de indicadores. O carrossel alterna automaticamente a cada 8 segundos e pausa quando recebe foco ou quando o cursor está sobre ele.

## Atualizar as imagens das linhas de pesquisa
Os quadros MSU, FDT, Ee e IAsoc usam grafismos temporários em CSS, não logotipos oficiais. Quando os arquivos oficiais estiverem disponíveis, coloque-os em `assets/images/` e substitua o conteúdo de cada `div.research-art` por uma imagem, por exemplo: `<img src="../assets/images/logo-msu.svg" alt="MSU — Metamaterials and Structures">`.

## Atualizar conteúdo
Edite apenas o bloco da seção desejada nos arquivos HTML. Mantenha os `id` das seções (por exemplo `projects`, `team`, `partners`, `infrastructure`, `production`, `contact`/`contacto`) para preservar os links de navegação.

## Publicação
O site usa GitHub Pages, branch `main`, pasta `/ (root)`. Depois de enviar as alterações e fazer commit na branch `main`, o GitHub Pages publica a atualização automaticamente.
