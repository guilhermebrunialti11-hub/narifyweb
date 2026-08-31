# NarifyWeb — site institucional (v2)

Site estático (HTML, CSS e JavaScript puro), pronto para publicar. Nenhuma
dependência externa além das fontes do Google Fonts — **nenhuma imagem
externa é usada em nenhum lugar do projeto**, então não há risco de foto
quebrada ou 404 de imagem.

## Estrutura

```
index.html              → página principal da NarifyWeb
style.css                → estilos da página principal
script.js                 → menu mobile, modal de projetos, botão WhatsApp
projects/
  barbearia.html         → demonstração "Barbearia Villa"
  restaurante.html        → demonstração "Casa 27"
  imobiliaria.html         → demonstração "Nova Casa Imóveis"
  fotografo.html            → demonstração "Lucas Almeida — Fotógrafo"
  petshop.html               → demonstração "Patinhas Pet Shop"
  tatuador.html                → demonstração "Reno Ink"
```

Cada projeto demonstrativo é uma página completa e independente, com sua
própria identidade visual, aberta em uma janela simulando um navegador
(modal) dentro do site principal — exatamente como o link do card aponta
para `projects/<arquivo>.html`.

## Por que não há 404 nem imagem quebrada

- Os 6 arquivos de demonstração estão dentro da pasta `projects/`, no
  mesmo nível referenciado pelo `data-src` de cada card em `index.html`.
  Suba a pasta `projects/` inteira para o GitHub — se ela não for
  enviada, os links voltam a dar 404.
- Nenhum arquivo do projeto usa `<img>` com URL externa. Todo elemento
  visual (fotos, texturas, molduras) é feito com CSS (gradientes, formas)
  ou SVG inline, então não depende de nenhum serviço externo no ar.

## Publicar na Vercel

1. Crie um repositório no GitHub com todos os arquivos desta pasta,
   inclusive a pasta `projects/`.
2. Em vercel.com → **Add New Project** → selecione o repositório.
3. Framework preset: **Other** (site estático). Não é necessário build
   command.
4. Output directory: raiz do projeto (padrão).
5. Deploy.

Também é possível arrastar a pasta direto em vercel.com/new sem usar Git.

## Contato configurado

- WhatsApp: +55 45 9114-2749 (wa.me/554591142749)
- Instagram: @narifyweb (instagram.com/narifyweb)

## Próximos passos sugeridos

- Substituir os 6 projetos demonstrativos por projetos reais conforme a
  carteira de clientes crescer (a estrutura em `projects/` já está pronta
  para isso — basta adicionar um novo `.html` e um novo item na lista
  `.port-list` do `index.html`).
- Se desejar usar fotos reais dos clientes no futuro, adicione os
  arquivos de imagem localmente ao projeto (ex: `assets/img/`) em vez de
  usar bancos de imagem externos — assim eles nunca dependem de um
  serviço de terceiros no ar.
