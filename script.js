const checkbox = document.getElementById("aceitar");
const botao = document.getElementById("botao_iniciar");

  checkbox.addEventListener("change", () => {
    botao.disabled = !checkbox.checked;
});
document.getElementById("botao_iniciar").addEventListener("click", () => {
    window.location.href = "fases/2003.html";
});
