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


## Links institucionais e redes sociais

- O nome da UNIFEI na barra superior aponta para https://unifei.edu.br/.
- O cartão da linha MSU aponta para https://www.instagram.com/msu_unifei/.
- Os cartões FDT, Ee e IAsoc já contêm espaços visuais para os respectivos Instagrams. Quando os perfis oficiais forem definidos, substitua o elemento `research-social-link is-pending` por um link `<a>` com a URL correspondente.
- O logotipo institucional completo utilizado no rodapé está em `assets/images/logo-ties-unifei-grupo.svg`.


## Páginas institucionais adicionais (novembro de 2026)

Na pasta de cada idioma foram criadas páginas próprias para: `equipe.html`, `estudantes.html`, `labties.html` e `publicacoes.html`. A página inicial direciona para essas áreas por meio dos quadros da seção “Áreas do TIES”.

As fotografias fornecidas para o LabTIES foram otimizadas e armazenadas em `assets/images/equipamentos/` e `assets/images/prototipos/`. Para futuras atualizações, substitua ou acrescente imagens nessas pastas e ajuste os caminhos nos arquivos `labties.html`.

Os perfis usam links Lattes identificados em páginas institucionais ou documentos públicos. Quando não foi encontrado link cadastrado, o cartão informa essa situação em vez de criar um endereço. Os dados dos pesquisadores e estudantes seguem o espelho do CNPq consultado em 09/11/2026; recomenda-se revisão antes de novas publicações.


Observações de verificação de perfis (10/11/2026): o perfil SIGAA de Nelson Manzanares Filho indica expressamente “Currículo Lattes: link não informado”; por isso, o cartão oferece o perfil individual do SIGAA. Para Iván Dario Gómez Araújo, páginas oficiais da UNILA exibem dois identificadores Lattes distintos; foi utilizado provisoriamente o identificado na página do curso de Engenharia Civil, devendo ser confirmado pelo pesquisador.
