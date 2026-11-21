/**
 * Lógica da página projeto.html:
 * - Lê ?id=slug da URL (funciona em domínio próprio e em subpasta do GitHub Pages)
 * - Oculta campos sem informação (cidade, área, ano)
 * - Mostra mensagem clara e link para o portfólio se o ID for inválido
 */
(function () {
  "use strict";

  var projetos = Array.isArray(window.ZAIRE_PROJETOS) ? window.ZAIRE_PROJETOS : [];
  var container = document.getElementById("project-content");
  var notFound = document.getElementById("project-not-found");

  if (!container || !notFound) return;

  var params = new URLSearchParams(window.location.search);
  var id = (params.get("id") || "").trim();

  var projeto = projetos.find(function (p) {
    return p.id === id;
  });

  if (!projeto) {
    container.hidden = true;
    notFound.hidden = false;
    document.title = "Projeto não encontrado · Zaire Arquitetura";
    return;
  }

  document.title = projeto.nome + " · Zaire Arquitetura";

  var demoBadge = document.getElementById("project-demo-badge");
  var textoEtiqueta = (projeto.etiqueta || "").trim() || (projeto.demonstracao ? "Demonstração" : "");
  if (demoBadge) {
    demoBadge.textContent = textoEtiqueta;
    demoBadge.hidden = !textoEtiqueta;
  }

  var titleEl = document.getElementById("project-title");
  if (titleEl) titleEl.textContent = projeto.nome;

  var summaryEl = document.getElementById("project-summary");
  if (summaryEl) {
    summaryEl.textContent = projeto.resumo || "";
    summaryEl.hidden = !projeto.resumo;
  }

  var descEl = document.getElementById("project-description");
  if (descEl) {
    descEl.textContent = projeto.descricao || "";
    descEl.hidden = !projeto.descricao;
  }

  // Ficha técnica: exibe apenas campos preenchidos
  var specsList = document.getElementById("project-specs");
  if (specsList) {
    specsList.textContent = "";
    var campos = [
      { rotulo: "Uso", valor: projeto.uso },
      { rotulo: "Serviços", valor: Array.isArray(projeto.servicos) ? projeto.servicos.join(", ") : "" },
      { rotulo: "Local", valor: projeto.cidade },
      { rotulo: "Área", valor: projeto.area },
      { rotulo: "Ano", valor: projeto.ano }
    ];

    campos.forEach(function (campo) {
      if (!campo.valor || !String(campo.valor).trim()) return;
      var wrap = document.createElement("div");
      wrap.className = "spec-item";

      var dt = document.createElement("dt");
      dt.textContent = campo.rotulo;

      var dd = document.createElement("dd");
      dd.textContent = campo.valor;

      wrap.appendChild(dt);
      wrap.appendChild(dd);
      specsList.appendChild(wrap);
    });
  }

  // Galeria vertical (proporções naturais, rolagem normal da página)
  var gallery = document.getElementById("project-gallery");
  if (gallery) {
    gallery.textContent = "";
    var fotos = Array.isArray(projeto.fotos) && projeto.fotos.length > 0
      ? projeto.fotos
      : [projeto.capa];

    fotos.forEach(function (foto, index) {
      var figure = document.createElement("figure");
      figure.className = "project-figure";

      var img = document.createElement("img");
      img.src = foto.src;
      img.alt = foto.alt || projeto.nome + " — foto " + (index + 1);
      if (foto.largura) img.width = foto.largura;
      if (foto.altura) img.height = foto.altura;
      if (index === 0) {
        img.setAttribute("fetchpriority", "high");
      } else {
        img.loading = "lazy";
      }
      img.decoding = "async";
      figure.appendChild(img);

      if (foto.legenda) {
        var caption = document.createElement("figcaption");
        caption.textContent = foto.legenda;
        figure.appendChild(caption);
      }

      gallery.appendChild(figure);
    });
  }
})();
