# Site Mateus Mendes

Site institucional de nutrição, biblioteca de ebooks e consultorias mensal, trimestral e semestral, mantido pela Agência Bigger.

## Arquivos

- `index.html`: textos, seções e estrutura.
- `style.css`: estilos originais e estrutura responsiva.
- `refresh.css`: direção visual dark atual, com preto, grafite, dourado suave e fotos reais.
- `script.js`: filtros de ebooks.
- `assets/`: fotos reais do Mateus.

Abra `index.html` para visualizar. Não exige instalação de dependências ou compilação. A tipografia usa Google Fonts e exige internet para carregar essas fontes; existem fontes alternativas.

## Publicação na Vercel

O site não possui dependências de execução. A ferramenta Vercel é uma dependência de desenvolvimento, instalada e fixada em `package-lock.json`.

1. Instale Node.js LTS e execute `npm ci` na pasta do projeto.
2. Execute `npm run build`. Os arquivos públicos serão copiados para `dist/`.
3. Na Vercel, importe `AgenciaBiggerDF/site-mateus-mendes`, use a raiz do repositório e o preset **Other**. O arquivo `vercel.json` define instalação, build e saída.

Para publicar pelo terminal, execute `npm run deploy` (prévia) ou `npm run deploy:production` (produção), autenticando-se na conta correta da Vercel quando solicitado. Na publicação pela integração com GitHub, a Vercel instala somente dependências de produção; o build usa apenas recursos nativos do Node.js.

A preparação do projeto não conecta automaticamente uma conta Vercel nem altera o DNS. Configurar `omateusmendes.com.br` exige revisar a hospedagem existente e preservar o workshop e o email.

## Troca das fotos

- `assets/mateus-fisico.jpg`: abertura atual.
- `assets/mateus.jpeg`: apresentação com alimentos.
- `assets/mateus-lifestyle.jpeg`: seção sobre rotina.

Substitua os arquivos por fotos autorizadas, ajuste o enquadramento e confira celular e computador. Se mudar o nome, atualize também `index.html`.

## Hospedagem

Destino autorizado: https://omateusmendes.com.br/ na Hostinger.
Preservar o workshop em https://lp.omateusmendes.com.br/.

A transferência para a Hostinger ainda não foi realizada. O domínio principal já possui um site WordPress; faça backup e confira a pasta e a configuração antes de substituir a página. Este projeto é estático, não é um tema WordPress nem um projeto do construtor visual Hostinger.

Prévia publicada: https://mateus-mendes-nutricao.agenciabigger.chatgpt.site/ (acesso privado).

## Estado comercial

Atualização de 06/10/2026: consultorias de 1 mês (R$ 449), 3 meses (R$ 1.181) e 6 meses (R$ 1.998), com valores totais e entregáveis informados por Mateus. Botões abrem o WhatsApp da Bia do Mateus, +55 61 8289-0410, com mensagens específicas que acionam os fluxos do UnniChat.

Hipertrofia Máxima é gratuito e entregue pelo UnniChat. Emagrecimento será gratuito, ainda em preparação. Dormir Bem e Mercado Saudável serão pagos; preços e links de checkout ainda pendentes. Nenhum PDF pago foi incluído neste repositório público.

Checkout da Hubla em preparação; a página encaminha interessados para atendimento e não processa pagamentos.

## Histórico e direitos

O histórico preserva duas versões do site criado neste trabalho: apresentação original e atualização visual com fotos do físico e estilo de vida. Ele não inclui o histórico de outros sites do domínio.

Repositório público autorizado pela Agência Bigger. Não foi concedida licença de reutilização pública. Não inclua senhas, tokens ou dados de clientes nos commits.
