let tempo = parseInt(localStorage.getItem("tempo")) || 0;
const cronometro = document.getElementById("cronometro");

window.timer = setInterval(() => {
    tempo++;

    localStorage.setItem("tempo", tempo);

    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;

    document.getElementById("cronometro").textContent =
        `Tempo: ${String(horas).padStart(2, '0')}:` +
        `${String(minutos).padStart(2, '0')}:` +
        `${String(segundos).padStart(2, '0')}`;
}, 1000);