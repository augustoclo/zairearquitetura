/**
 * Lógica da página contato.html:
 * - Somente nome completo e telefone com DDD são obrigatórios
 * - Pergunta condicional "Você pensa em financiar a obra?" para Obra nova ou Reforma
 * - Envio via fetch para o endpoint configurado em form[action] (Formspree), pedindo JSON
 * - Não salva respostas em cookies, localStorage, sessionStorage nem URL
 * - Não abre WhatsApp/Telegram/e-mail no envio do formulário
 * - Em caso de erro ou endpoint não configurado, preserva os dados e oferece link do WhatsApp
 */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var nomeInput = document.getElementById("nome");
  var telefoneInput = document.getElementById("telefone");
  var nomeErro = document.getElementById("nome-erro");
  var telefoneErro = document.getElementById("telefone-erro");
  var servicoSelect = document.getElementById("servico");
  var financiamentoBlock = document.getElementById("financiamento-field");
  var submitBtn = document.getElementById("submit-btn");
  var statusBox = document.getElementById("form-status");

  var WHATSAPP_FALLBACK = "https://wa.me/5532998498788";
  var enviando = false;

  // Exibe pergunta de financiamento quando o serviço for Obra nova ou Reforma
  function atualizarFinanciamento() {
    if (!servicoSelect || !financiamentoBlock) return;
    var val = servicoSelect.value;
    var mostrar = val === "Obra nova" || val === "Reforma";
    financiamentoBlock.hidden = !mostrar;

    if (!mostrar) {
      financiamentoBlock.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.checked = false;
      });
    }
  }

  if (servicoSelect) {
    servicoSelect.addEventListener("change", atualizarFinanciamento);
    atualizarFinanciamento();
  }

  function limparErro(input, erroEl) {
    input.removeAttribute("aria-invalid");
    erroEl.textContent = "";
    erroEl.hidden = true;
  }

  function mostrarErro(input, erroEl, mensagem) {
    input.setAttribute("aria-invalid", "true");
    erroEl.textContent = mensagem;
    erroEl.hidden = false;
  }

  function validarCampos() {
    var primeiroInvalido = null;

    var nome = nomeInput.value.trim();
    if (nome.length < 2) {
      mostrarErro(nomeInput, nomeErro, "Por favor, informe seu nome completo.");
      primeiroInvalido = nomeInput;
    } else {
      limparErro(nomeInput, nomeErro);
    }

    var telBruto = telefoneInput.value.trim();
    var telDigitos = telBruto.replace(/\D/g, "");
    if (!telBruto) {
      mostrarErro(telefoneInput, telefoneErro, "Por favor, informe um telefone com DDD para retorno.");
      if (!primeiroInvalido) primeiroInvalido = telefoneInput;
    } else if (telDigitos.length < 10 || telDigitos.length > 13) {
      mostrarErro(telefoneInput, telefoneErro, "Informe o DDD e o número de telefone (por exemplo, (32) 99849-8788).");
      if (!primeiroInvalido) primeiroInvalido = telefoneInput;
    } else {
      limparErro(telefoneInput, telefoneErro);
    }

    if (primeiroInvalido) {
      primeiroInvalido.focus();
      return false;
    }
    return true;
  }

  nomeInput.addEventListener("input", function () {
    if (nomeInput.value.trim().length >= 2) limparErro(nomeInput, nomeErro);
  });

  function formatarTelefone(valor) {
    var d = valor.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d ? "(" + d : "";
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }

  telefoneInput.addEventListener("input", function () {
    telefoneInput.value = formatarTelefone(telefoneInput.value);
    var d = telefoneInput.value.replace(/\D/g, "");
    if (d.length >= 10 && d.length <= 11) limparErro(telefoneInput, telefoneErro);
  });

  function exibirStatusSucesso() {
    statusBox.className = "form-status form-status--success";
    statusBox.textContent = "";
    var p = document.createElement("p");
    p.textContent = "Recebemos seu pedido! Uma das arquitetas vai entrar em contato pelo telefone informado.";
    statusBox.appendChild(p);
    statusBox.hidden = false;
    statusBox.focus();
  }

  function exibirStatusErro(mensagem) {
    statusBox.className = "form-status form-status--error";
    statusBox.textContent = "";

    var p1 = document.createElement("p");
    p1.textContent = mensagem;

    var p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Suas respostas foram mantidas acima para você tentar novamente ou, se preferir: "));

    var link = document.createElement("a");
    link.href = WHATSAPP_FALLBACK;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Prefiro conversar pelo WhatsApp";
    p2.appendChild(link);
    p2.appendChild(document.createTextNode("."));

    statusBox.appendChild(p1);
    statusBox.appendChild(p2);
    statusBox.hidden = false;
    statusBox.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (enviando) return;

    statusBox.hidden = true;

    if (!validarCampos()) {
      return;
    }

    var endpoint = (form.getAttribute("action") || "").trim();

    // Não simular envio quando o ID do Formspree ainda não foi configurado
    if (!endpoint || endpoint.indexOf("SEU_ID_DO_FORMULARIO") !== -1) {
      exibirStatusErro("O envio do formulário ainda não foi ativado neste endereço. Configure o link do Formspree no arquivo contato.html antes de publicar.");
      return;
    }

    enviando = true;
    var textoOriginal = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";

    var formData = new FormData(form);

    fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          atualizarFinanciamento();
          exibirStatusSucesso();
          return;
        }
        return response.json().catch(function () { return {}; }).then(function () {
          exibirStatusErro("Não foi possível enviar seu pedido agora. Você pode tentar novamente em instantes.");
        });
      })
      .catch(function () {
        exibirStatusErro("Não foi possível conectar para enviar seu pedido. Verifique sua conexão e tente novamente.");
      })
      .finally(function () {
        enviando = false;
        submitBtn.disabled = false;
        submitBtn.textContent = textoOriginal;
      });
  });
})();
