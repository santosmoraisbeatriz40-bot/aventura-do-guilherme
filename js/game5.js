// ===== NÍVEL 5: CAÇA AO TESOURO =====

// PLACEHOLDER: pode trocar os símbolos, misturar corações/estrelas/pistas
const tesourosEscondidos = ['❤️', '⭐', '✨', '💌', '🌙', '🔑'];

let tesourosEncontrados = 0;

const areaJogo5 = document.getElementById('area-jogo-5');
const contadorTesouros = document.getElementById('contador-tesouros');
const totalTesouros = document.getElementById('total-tesouros');
const mensagemVitoria5 = document.getElementById('vitoria-nivel-5');

function iniciarNivel5() {
    tesourosEncontrados = 0;
    contadorTesouros.textContent = '0';
    totalTesouros.textContent = tesourosEscondidos.length;
    mensagemVitoria5.classList.add('escondido');
    areaJogo5.classList.remove('escondido');
    areaJogo5.innerHTML = '';

    tesourosEscondidos.forEach((simbolo, indice) => {
        criarTesouro(simbolo, indice);
    });
}

function criarTesouro(simbolo, indice) {
    const tesouro = document.createElement('button');
    tesouro.className = 'tesouro-escondido';
    tesouro.textContent = simbolo;
    tesouro.dataset.indice = indice;

    const maxX = areaJogo5.clientWidth - 40;
    const maxY = areaJogo5.clientHeight - 40;
    tesouro.style.left = `${Math.random() * maxX}px`;
    tesouro.style.top = `${Math.random() * maxY}px`;

    tesouro.addEventListener('click', () => encontrarTesouro(tesouro));

    areaJogo5.appendChild(tesouro);
}

function encontrarTesouro(elementoTesouro) {
    if (elementoTesouro.classList.contains('encontrado')) return;

    elementoTesouro.classList.add('encontrado');
    tesourosEncontrados++;
    contadorTesouros.textContent = tesourosEncontrados;

    if (tesourosEncontrados === tesourosEscondidos.length) {
        setTimeout(venceuNivel5, 600);
    }
}

function venceuNivel5() {
    areaJogo5.classList.add('escondido');
    mensagemVitoria5.classList.remove('escondido');
    concluirNivel(5);
}

document.getElementById('btn-continuar-nivel-5').addEventListener('click', () => {
    areaJogo5.classList.remove('escondido');
    mostrarMemoria(5);
});