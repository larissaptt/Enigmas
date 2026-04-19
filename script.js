 const checkbox = document.getElementById("aceitar");
  const botao = document.getElementById("botao_iniciar");

  checkbox.addEventListener("change", function() {
    botao.disabled = !checkbox.checked;
  });