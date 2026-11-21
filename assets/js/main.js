/**
 * Comportamentos compartilhados entre todas as páginas:
 * - Menu móvel acessível (aria-expanded, Escape, clique fora)
 * - Aplicação de logo/pattern/fotos institucionais a partir de ZAIRE_CONFIG
 * - Links de WhatsApp (com acentos codificados em UTF-8) e Instagram (somente se configurado)
 * - Nomes das arquitetas e projetos em destaque na página inicial
 */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var config = window.ZAIRE_CONFIG || {};

  // 1. Menu móvel acessível
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-site-nav]");

  if (menuBtn && nav) {
    function setMenuOpen(open) {
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
      nav.classList.toggle("is-open", open);
    }

    menuBtn.addEventListener("click", function () {
      var isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuBtn.focus();
      }
    });
  }

  // 2. Utilitário para gerar URL do WhatsApp preservando acentos corretamente
  function gerarUrlWhatsApp(incluirMensagem) {
    var numero = (config.whatsapp && config.whatsapp.numero) || "5532998498788";
    var base = "https://wa.me/" + numero;
    if (!incluirMensagem) {
      return base;
    }
    var msg = (config.whatsapp && config.whatsapp.mensagemPadrao) || "";
    return msg ? base + "?text=" + encodeURIComponent(msg) : base;
  }

  window.ZAIRE_UTILS = {
    gerarUrlWhatsApp: gerarUrlWhatsApp
  };

  // Atualiza links de WhatsApp marcados com data-whatsapp-link
  document.querySelectorAll("[data-whatsapp-link]").forEach(function (el) {
    var modo = el.getAttribute("data-whatsapp-link");
    el.setAttribute("href", gerarUrlWhatsApp(modo !== "direto"));
  });

  // Atualiza exibição do telefone quando houver data-whatsapp-numero
  if (config.whatsapp && config.whatsapp.numeroExibicao) {
    document.querySelectorAll("[data-whatsapp-numero]").forEach(function (el) {
      el.textContent = config.whatsapp.numeroExibicao;
    });
  }

  // 3. Instagram: exibir apenas quando configurado
  var instaUrl = (config.instagramUrl || "").trim();
  if (instaUrl) {
    document.querySelectorAll("[data-instagram-item]").forEach(function (item) {
      item.hidden = false;
      var link = item.querySelector("a") || item;
      if (link.tagName === "A") {
        link.setAttribute("href", instaUrl);
        if (config.instagramArroba) {
          var label = link.querySelector("[data-instagram-label]") || link;
          label.textContent = config.instagramArroba;
        }
      }
    });
  }

  // 4. Nomes das arquitetas fáceis de editar
  if (config.arquitetas) {
    var dupla = config.arquitetas.primeira + " e " + config.arquitetas.segunda;
    document.querySelectorAll("[data-arquitetas]").forEach(function (el) {
      el.textContent = dupla;
    });
  }

  // 5. Logo opcional (com fallback para texto "Zaire Arquitetura" se ausente ou erro)
  var marca = config.marca || {};

  function aplicarLogo(selector, src, className) {
    if (!src) return;
    document.querySelectorAll(selector).forEach(function (container) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = config.nomeMarca || "Zaire Arquitetura";
      img.className = className;
      img.addEventListener("load", function () {
        container.textContent = "";
        container.appendChild(img);
      });
      img.addEventListener("error", function () {
        // Mantém o texto padrão sem ícone quebrado
      });
    });
  }

  aplicarLogo("[data-brand-logo]", marca.logoPrincipal, "brand-logo-img");
  aplicarLogo("[data-hero-logo]", marca.logoClara, "hero-logo-img");

  // Foto principal e foto da equipe a partir da configuração
  var heroImg = document.querySelector("[data-hero-img]");
  if (heroImg && marca.fotoHero) {
    heroImg.src = marca.fotoHero;
    if (marca.fotoHeroAlt) heroImg.alt = marca.fotoHeroAlt;
  }

  var equipeImg = document.querySelector("[data-equipe-img]");
  if (equipeImg && marca.fotoEquipe) {
    equipeImg.src = marca.fotoEquipe;
    if (marca.fotoEquipeAlt) equipeImg.alt = marca.fotoEquipeAlt;
  }

  // Pattern sutil opcional na faixa de abrangência (sem prejudicar leitura)
  if (marca.pattern) {
    document.querySelectorAll("[data-pattern-band]").forEach(function (el) {
      el.style.backgroundImage =
        "linear-gradient(rgba(250, 248, 244, 0.84), rgba(250, 248, 244, 0.84)), url('" + marca.pattern + "')";
      el.classList.add("has-pattern");
    });
  }

  // 6. Projetos em destaque na página inicial (até 3)
  var featuredGrid = document.querySelector("[data-featured-projects]");
  if (featuredGrid && Array.isArray(window.ZAIRE_PROJETOS)) {
    var destaques = window.ZAIRE_PROJETOS.filter(function (p) {
      return p.destaque === true;
    }).slice(0, 3);

    featuredGrid.textContent = "";

    destaques.forEach(function (projeto) {
      var card = document.createElement("a");
      card.className = "project-card";
      card.href = "projeto.html?id=" + encodeURIComponent(projeto.id);

      var media = document.createElement("div");
      media.className = "project-card-media";

      var img = document.createElement("img");
      img.src = projeto.capa.src;
      img.alt = projeto.capa.alt || projeto.nome;
      img.width = projeto.capa.largura || 1200;
      img.height = projeto.capa.altura || 900;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);

      var textoEtiqueta = (projeto.etiqueta || "").trim() || (projeto.demonstracao ? "Demonstração" : "");
      if (textoEtiqueta) {
        var badge = document.createElement("span");
        badge.className = "demo-badge";
        badge.textContent = textoEtiqueta;
        media.appendChild(badge);
      }

      var body = document.createElement("div");
      body.className = "project-card-body";

      var title = document.createElement("h3");
      title.className = "project-card-title";
      title.textContent = projeto.nome;

      var meta = document.createElement("p");
      meta.className = "project-card-meta";
      meta.textContent = projeto.uso + " · " + projeto.servicos.join(", ");

      body.appendChild(title);
      body.appendChild(meta);
      card.appendChild(media);
      card.appendChild(body);
      featuredGrid.appendChild(card);
    });
  }
})();
