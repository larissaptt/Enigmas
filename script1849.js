const botao = document.getElementById("verificar");
const input = document.getElementById("answer1405");
const msg = document.getElementById("mensagem");

const respostaCorreta = "enigma do rego";

let i = 0;

botao.addEventListener("click", () => {
    let valor = input.value.toLowerCase().trim();

    if (valor === respostaCorreta) {
        msg.textContent = `Acertou! Indo para a próxima...`;
        i = 0;

        setTimeout(() => {
            window.location.href = "0806.html";
        }, 1500);
    } else {
        i++;

        if (i >= 30) {
            msg.textContent = `DESISTO! JÁ É A TRIGÉSSIMA VEZ! A resposta é 'Enigma do rego' (tentativa ${i})`;
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
const mensagem = ". -. .. --. -- .-   -.. ---   .-. . --. ---";

let tempoBase = 200;

function piscarMorse(codigo) {
    let tempo = 0;

    codigo.split("").forEach((simbolo) => {
        if (simbolo === ".") {
            setTimeout(() => ligar(), tempo);
            tempo += tempoBase;

            setTimeout(() => desligar(), tempo);
            tempo += tempoBase;
        }
        else if (simbolo === "-") {
            setTimeout(() => ligar(), tempo);
            tempo += tempoBase * 3;

            setTimeout(() => desligar(), tempo);
            tempo += tempoBase;
        }
        else if (simbolo === " ") {
            tempo += tempoBase * 3;
        }
    });
}

const codigoDiv = document.querySelector(".codigo");

function ligar() {
    codigoDiv.style.backgroundColor = "white";
}

function desligar() {
    codigoDiv.style.backgroundColor = "black";
}

piscarMorse(mensagem);