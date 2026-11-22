# Zaire Arquitetura — Site Institucional e Portfólio

Site estático em HTML semântico, CSS e JavaScript puro (sem PHP, banco de dados, frameworks, npm ou etapa de build), preparado para funcionar tanto na URL de teste do **GitHub Pages** (inclusive em subpasta `/nome-do-repositorio/`) quanto no domínio próprio **`zairearquitetura.com.br`** com DNS administrado pela **Cloudflare**.

---

## Estrutura de pastas

```text
zaire-arquitetura/
├── index.html                    # Página inicial
├── projetos.html                 # Portfólio com filtros combináveis (Uso × Serviço)
├── projeto.html                  # Página individual de projeto (?id=slug)
├── contato.html                  # Formulário (Formspree) + acesso direto ao WhatsApp
├── privacidade.html              # Política de privacidade transparente (sem cookies)
├── README.md                     # Este guia de uso e publicação
└── assets/
    ├── css/
    │   └── styles.css            # Estilos, paleta Zaire e tipografia Poppins local
    ├── fonts/
    │   └── README-FONTES.txt     # Onde colocar os arquivos .woff2 e a licença OFL.txt
    ├── img/
    │   ├── marca/                # Logo, pattern e foto principal (hero)
    │   ├── equipe/               # Foto de Gabriela e Lavinya juntas
    │   └── projetos/             # Fotografias dos projetos (contém SVGs demonstrativos)
    └── js/
        ├── dados.js              # Arquivo único de configuração e cadastro de projetos
        ├── main.js               # Menu móvel, logo/pattern, WhatsApp/Instagram e destaques
        ├── projetos.js           # Filtros combinados e estado vazio
        ├── projeto.js            # Leitura de ?id= e galeria vertical
        └── contato.js            # Validação, financiamento condicional e envio Formspree
```

---

## 1. Como visualizar o site localmente

Como o site não usa etapa de build, basta abrir um pequeno servidor local na pasta do projeto (recomendado para testar links e scripts exatamente como no GitHub Pages):

**Com Python 3 (macOS, Linux ou Windows):**
```bash
cd zaire-arquitetura
python3 -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.

**Alternativa no VS Code:** instale a extensão *Live Server*, clique com o botão direito em `index.html` e escolha **Open with Live Server**.

---

## 2. Onde inserir logo, pattern, fotos e fontes

### Logo, pattern e foto principal (`assets/img/marca/`)
1. Adicione seus arquivos na pasta `assets/img/marca/`:
   - `logo-zaire.svg` (ou `.png`) — versão escura para o cabeçalho.
   - `logo-zaire-clara.svg` (ou `.png`) — versão clara para a primeira tela (sobre a foto) e destaques escuros.
   - `pattern-zaire.svg` (ou `.png`) — opcional, aplicado com baixa opacidade na faixa de abrangência.
   - `hero-arquitetura.webp` — fotografia principal de arquitetura (sugestão: `1920 × 1200 px`, até ~250 KB).
2. Abra `assets/js/dados.js` e preencha os caminhos dentro de `ZAIRE_CONFIG.marca`.
   - Enquanto `logoPrincipal` e `logoClara` ficarem vazios (`""`), o site exibe **“Zaire Arquitetura”** em texto, sem ícone de imagem quebrada.

### Foto das arquitetas (`assets/img/equipe/`)
1. Salve a foto real de Gabriela e Lavinya juntas como `assets/img/equipe/gabriela-e-Lavinya.webp` (sugestão: proporção `4:5`, por exemplo `900 × 1125 px`).
2. Em `assets/js/dados.js`, atualize `fotoEquipe` e `fotoEquipeAlt`.

### Fontes (Poppins local em `assets/fonts/`)
O site não carrega Google Fonts de CDN externo para preservar privacidade e desempenho. Para ativar a fonte **Poppins** localmente:
1. Baixe os arquivos `.woff2` (pesos **400 Regular**, **500 Medium** e **600 SemiBold**) de uma fonte confiável como o repositório oficial do [Google Fonts (Poppins)](https://github.com/google/fonts/tree/main/ofl/poppins) ou o [Fontsource Poppins](https://fontsource.org/fonts/poppins).
2. Salve na pasta `assets/fonts/` exatamente com estes nomes:
   - `poppins-regular.woff2` (peso 400)
   - `poppins-medium.woff2` (peso 500)
   - `poppins-semibold.woff2` (peso 600)
3. Inclua o arquivo de licença **`OFL.txt`** (SIL Open Font License 1.1) na mesma pasta `assets/fonts/OFL.txt` para manter a atribuição exigida pela licença da fonte.
4. Enquanto os arquivos `.woff2` não estiverem presentes, o CSS usa automaticamente fontes legíveis do sistema como fallback.

---

## 3. Como cadastrar projetos, fotos e destaques

Todos os projetos ficam no array `window.ZAIRE_PROJETOS` em **`assets/js/dados.js`**.

### Preparando imagens em WebP e texto alternativo
- Converta as fotos para **WebP** (ex.: via Squoosh, Photopea ou ferramenta de exportação do seu editor) com qualidade entre 78% e 84%.
- Largura recomendada: `1200 px` a `1600 px` para fotos horizontais e `900 px` a `1200 px` para verticais.
- Escolha para a **capa** uma foto horizontal (proporção `4:3` funciona melhor na grade) que mostre bem o ambiente principal.
- Informe `largura` e `altura` reais de cada imagem para evitar saltos de layout durante o carregamento.
- Escreva um **`alt`** objetivo descrevendo o que aparece na foto (ex.: `"Sala de estar integrada à varanda com piso de madeira clara e portas de vidro"`), útil para leitores de tela e buscas.

### Exemplo pronto para copiar e colar em `assets/js/dados.js`
```js
{
  id: "casa-jardim-sao-tiago", // único, sem acentos nem espaços (vira ?id=casa-jardim-sao-tiago)
  nome: "Casa Jardim",
  demonstracao: false,         // deixe false nos projetos reais
  destaque: true,              // true para aparecer na página inicial (até 3 projetos)
  etiqueta: "Recente",          // use etiquetas personalizadas por projeto
  uso: "Residencial",          // "Residencial" | "Comercial" | "Outro"
  servicos: ["Obra nova", "Interiores"], // 1 ou mais: "Obra nova", "Reforma", "Interiores", "Consultoria"
  cidade: "São Tiago, MG",     // opcional (deixe "" para ocultar)
  area: "180 m²",              // opcional (deixe "" para ocultar)
  ano: "2026",                 // opcional (deixe "" para ocultar)
  resumo: "Residência térrea com foco em iluminação natural e área social integrada.",
  descricao: "Os clientes buscavam uma casa prática para o dia a dia, com cozinha conectada à varanda e fácil manutenção. O projeto reorganizou a implantação para aproveitar o sol da manhã nos quartos.",
  capa: {
    src: "assets/img/projetos/casa-jardim-01.webp",
    alt: "Fachada térrea com varanda coberta e jardim frontal",
    largura: 1200,
    altura: 900
  },
  fotos: [
    {
      src: "assets/img/projetos/casa-jardim-01.webp",
      alt: "Fachada térrea com varanda coberta e jardim frontal",
      largura: 1200,
      altura: 900,
      legenda: "Fachada principal."
    },
    {
      src: "assets/img/projetos/casa-jardim-02.webp",
      alt: "Sala de estar e cozinha integradas com bancada clara",
      largura: 900,
      altura: 1200,
      legenda: "Área social integrada."
    }
  ]
}
```

### Como remover os projetos demonstrativos antes de publicar
1. Abra `assets/js/dados.js` e apague os objetos que têm `demonstracao: true`.
2. Apague os arquivos `assets/img/projetos/demo-*.svg`.

---

## 4. Como alterar textos, nomes, WhatsApp, Instagram e Formspree

- **Nomes das arquitetas, WhatsApp e Instagram:** edite `ZAIRE_CONFIG` no topo de `assets/js/dados.js`.
  - Para exibir o Instagram no rodapé, preencha `instagramUrl` (ex.: `"https://www.instagram.com/zairearquitetura/"`) e `instagramArroba` (ex.: `"@zairearquitetura"`).
  - Se alterar o telefone, atualize também os links de fallback no HTML (`index.html`, `projetos.html`, `projeto.html`, `contato.html`, `privacidade.html`) e a constante `WHATSAPP_FALLBACK` em `assets/js/contato.js` para manter tudo sincronizado mesmo sem JavaScript.
- **Textos institucionais:** edite diretamente os arquivos `index.html`, `contato.html` e `privacidade.html`.

### Configurando o formulário com o Formspree
1. Crie uma conta gratuita em [Formspree](https://formspree.io/) e clique em **+ New Form**.
2. Defina o **e-mail de destino** onde Gabriela e Lavinya devem receber os pedidos (verifique o e-mail de confirmação enviado pelo Formspree).
3. Na aba **Integration** do formulário criado, copie o endereço público do endpoint — conforme a documentação oficial [Building an HTML Form (Formspree)](https://help.formspree.io/articles/building-your-form/building-an-html-form) — no formato:
   `https://formspree.io/f/seu_id_real`
4. Abra `contato.html` e substitua `https://formspree.io/f/SEU_ID_DO_FORMULARIO` no atributo `action` do `<form id="contact-form">`. Esse é o **único lugar** onde o endereço precisa ser colado; o arquivo `assets/js/contato.js` lê esse atributo automaticamente e envia via `fetch` com `Accept: application/json` ([Formspree AJAX Docs](https://help.formspree.io/pt-br/articles/building-your-form/submit-forms-with-javascript-ajax)).
5. **Notificações opcionais (WhatsApp/Telegram):** se desejar receber alertas em outros canais, configure as integrações/webhooks diretamente no painel do Formspree — **nunca** coloque senhas, chaves privadas ou tokens no repositório do GitHub.

### Teste de ponta a ponta do formulário (obrigatório após publicar)
1. Acesse a página `contato.html` publicada.
2. Preencha um pedido fictício (testando nome, telefone com DDD e alguns campos opcionais, incluindo "Obra nova" ou "Reforma" para ver a pergunta de financiamento).
3. Clique em **Enviar meu pedido** e verifique se o botão muda para **Enviando…** e depois exibe: *“Recebemos seu pedido! Uma das arquitetas vai entrar em contato pelo telefone informado.”*
4. Confirme no e-mail (e no canal de notificação escolhido) se **todos os campos preenchidos** chegaram corretamente.

---

## 5. Publicação no GitHub Pages e conexão com Cloudflare

### Etapa A — Publicar primeiro na URL de teste do GitHub Pages
1. Crie um repositório no GitHub (por exemplo, `zaire-site`) na conta `<SEU-USUARIO>`.
2. Envie todos os arquivos desta pasta para a branch `main`.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`, e clique em **Save**.
5. Aguarde 1 a 2 minutos e teste o site em:
   `https://<SEU-USUARIO>.github.io/<SEU-REPOSITORIO>/`

### Etapa B — Conectar `zairearquitetura.com.br` com DNS na Cloudflare e HTTPS
Consulte sempre a documentação oficial do GitHub: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) e [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

1. **Na Cloudflare (DNS → Records de `zairearquitetura.com.br`):**
   - Adicione os **4 registros `A`** para o domínio raiz (`@` / `zairearquitetura.com.br`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Opcional (IPv6): adicione os **4 registros `AAAA`** para `@`:
     - `2606:50c0:8000::153`
     - `2606:50c0:8001::153`
     - `2606:50c0:8002::153`
     - `2606:50c0:8003::153`
   - Adicione **1 registro `CNAME`** para o subdomínio `www`:
     - Nome: `www` → Destino: `<SEU-USUARIO>.github.io`
   - **Importante sobre o Proxy da Cloudflare:** deixe todos esses registros como **DNS only (nuvem cinza)** enquanto o GitHub Pages valida o DNS e emite o certificado HTTPS. O proxy laranja ativo durante a configuração impede a validação automática do certificado pelo GitHub Pages.
2. **No GitHub (Settings → Pages):**
   - Em **Custom domain**, digite `zairearquitetura.com.br` e clique em **Save** (o GitHub criará o arquivo `CNAME` na raiz do repositório).
   - Aguarde a verificação de DNS ficar verde e marque **Enforce HTTPS**.
   - Se desejar ativar o proxy da Cloudflare depois que o HTTPS do GitHub estiver funcionando, configure o modo SSL/TLS da Cloudflare para **Full (strict)** e teste o acesso e os redirecionamentos `http → https` e `www → apex`.

---

## 6. Privacidade e checklist antes de divulgar o domínio

### Sobre cookies e futuros recursos
Esta versão não usa cookies, analytics, pixels ou ferramentas opcionais; por isso **não exibe banner de consentimento** nem interruptores sem função. Caso você adicione analytics, pixel de anúncios ou embeds no futuro, será necessário implementar um controle real de consentimento que bloqueie o carregamento dessas ferramentas antes da escolha do visitante e permita recusar ou alterar preferências a qualquer momento.

### Checklist final antes de divulgar `zairearquitetura.com.br`
- [ ] Confirmar a grafia final dos nomes das arquitetas (**Gabriela** e **Lavinya**) e dados institucionais.
- [ ] Substituir os arquivos de espaço reservado por logo oficial, foto principal (`hero-arquitetura.webp`) e foto real das arquitetas (`gabriela-e-Lavinya.webp`).
- [ ] Adicionar os arquivos `.woff2` da fonte Poppins e a licença `OFL.txt` em `assets/fonts/`.
- [ ] Remover todos os projetos demonstrativos (`demonstracao: true` e arquivos `demo-*.svg`) e cadastrar apenas projetos reais com **autorização de uso de imagem** dos clientes.
- [ ] Configurar o endpoint real do **Formspree** em `contato.html` e realizar o teste de ponta a ponta.
- [ ] Configurar `instagramUrl` em `assets/js/dados.js` (se desejar exibir o perfil).
- [ ] Revisar `privacidade.html` com as responsáveis do escritório para confirmar se o texto reflete as práticas reais de atendimento e retenção de mensagens (este texto é informativo e não constitui garantia jurídica).
- [ ] Testar no celular real (menu, filtros, abertura de projeto por link direto, formulário e WhatsApp) antes de divulgar no Instagram.
