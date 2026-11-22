/**
 * Lógica da página projetos.html:
 * - Dois grupos independentes e combináveis: Uso e Serviço
 * - Destaque de filtros ativos via aria-pressed
 * - Limpeza rápida e estado vazio amigável
 */
(function () {
  "use strict";

  var projetos = Array.isArray(window.ZAIRE_PROJETOS) ? window.ZAIRE_PROJETOS : [];
  var grid = document.getElementById("projects-grid");
  var countEl = document.getElementById("projects-count");
  var emptyState = document.getElementById("projects-empty");
  var clearBtnTop = document.getElementById("clear-filters-top");
  var clearBtnEmpty = document.getElementById("clear-filters-empty");

  if (!grid) return;

  var filtroUso = "Todos";
  var filtroServico = "Todos";

  var botoesUso = document.querySelectorAll("[data-filter-uso]");
  var botoesServico = document.querySelectorAll("[data-filter-servico]");

  function atualizarBotoes() {
    botoesUso.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter-uso") === filtroUso));
    });
    botoesServico.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter-servico") === filtroServico));
    });
    if (clearBtnTop) {
      clearBtnTop.hidden = filtroUso === "Todos" && filtroServico === "Todos";
    }
  }

  function renderizar() {
    var filtrados = projetos.filter(function (p) {
      var combinaUso = filtroUso === "Todos" || p.uso === filtroUso;
      var combinaServico = filtroServico === "Todos" || (Array.isArray(p.servicos) && p.servicos.indexOf(filtroServico) !== -1);
      return combinaUso && combinaServico;
    });

    grid.textContent = "";

    if (countEl) {
      var total = filtrados.length;
      countEl.textContent = total === 1
        ? "Mostrando 1 projeto"
        : "Mostrando " + total + " projetos";
    }

    if (filtrados.length === 0) {
      grid.hidden = true;
      if (emptyState) emptyState.hidden = false;
      return;
    }

    grid.hidden = false;
    if (emptyState) emptyState.hidden = true;

    filtrados.forEach(function (projeto) {
      var card = document.createElement("a");
      card.className = "project-card";
      card.href = "projeto?id=" + encodeURIComponent(projeto.id);

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

      var title = document.createElement("h2");
      title.className = "project-card-title";
      title.textContent = projeto.nome;

      var meta = document.createElement("p");
      meta.className = "project-card-meta";
      meta.textContent = projeto.uso + " · " + projeto.servicos.join(", ");

      body.appendChild(title);
      body.appendChild(meta);
      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function limparFiltros() {
    filtroUso = "Todos";
    filtroServico = "Todos";
    atualizarBotoes();
    renderizar();
  }

  botoesUso.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filtroUso = btn.getAttribute("data-filter-uso");
      atualizarBotoes();
      renderizar();
    });
  });

  botoesServico.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filtroServico = btn.getAttribute("data-filter-servico");
      atualizarBotoes();
      renderizar();
    });
  });

  if (clearBtnTop) clearBtnTop.addEventListener("click", limparFiltros);
  if (clearBtnEmpty) clearBtnEmpty.addEventListener("click", limparFiltros);

  atualizarBotoes();
  renderizar();
})();
