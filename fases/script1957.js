const botao = document.getElementById("verificar");
const input = document.getElementById("answer2012");
const msg = document.getElementById("mensagem");

const respostaCorreta = "a lua está maravilhosa hoje!";

let i = 0;

botao.addEventListener("click", () => {
    let valor = input.value.toLowerCase().trim();

    if (valor === respostaCorreta) {
        msg.textContent = `PARABÉNS! Mas por hoje é só... olhe seu tempo no canto...`;
        i = 0;
        clearInterval(window.timer);

    } else {
        i++;

        if (i >= 30) {
            msg.textContent = `DESISTO! JÁ É A TRIGÉSSIMA VEZ! A resposta é 'a lua está maravilhosa hoje!' (tentativa ${i})`;
        }
        else if (i >= 20) {
            msg.textContent = `Sooooooccccoooooorrrrrrooooooo!!!!!! (tentativa ${i})`;
        }
        else if (i >= 15) {
            msg.textContent = `looooooongas tentativas! Já estamos na tentativa ${i}`;
        }
        else if (i >= 10) {
            msg.textContent = `Já to cansando... (tentativa ${i})`;
        }
        else if (i >= 9) {
            msg.textContent = `Caramba! ta complicado, viu? (tentativa ${i})`;
        }
        else if (i >= 8) {
            msg.textContent = `Será que você não está errando o tipo de cifra? (tentativa ${i})`;
        }
        else if (i >= 5) {
            msg.textContent = `Qual é? Vamo decifrar isso! (tentativa ${i})`;
        }
        else if (i >= 3) {
            msg.textContent = `Vamos, pensa mais! (tentativa ${i})`;
        }
        else {
            msg.textContent = `Errou, tenta de novo. (tentativa ${i})`;
        }
    }
});