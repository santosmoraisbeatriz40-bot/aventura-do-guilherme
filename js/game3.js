// ===== NÍVEL 3: JOGO DA MEMÓRIA =====

// PLACEHOLDER: depois você pode trocar esses emojis por fotos de casal
const simbolosMemoria = ['❤️', '⭐', '🌙', '✨', '🎮', '💌'];

let cartasViradas = [];
let paresEncontrados = 0;
let tentativas = 0;
let travarCliques = false;

const tabuleiro = document.getElementById('tabuleiro-memoria');
const contadorTentativas = document.getElementById('contador-tentativas');
const mensagemVitoria3 = document.getElementById('vitoria-nivel-3');

// Embaralha um array (algoritmo Fisher-Yates)
function embaralhar(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniciarNivel3() {
    cartasViradas = [];
    paresEncontrados = 0;
    tentativas = 0;
    travarCliques = false;
    contadorTentativas.textContent = '0';
    mensagemVitoria3.classList.add('escondido');
    tabuleiro.classList.remove('escondido');

    // Duplica os símbolos (par de cada) e embaralha
    const simbolosDuplicados = embaralhar([...simbolosMemoria, ...simbolosMemoria]);

    tabuleiro.innerHTML = '';
    simbolosDuplicados.forEach((simbolo, indice) => {
        const carta = document.createElement('button');
        carta.className = 'carta-memoria';
        carta.dataset.simbolo = simbolo;
        carta.dataset.indice = indice;
        carta.textContent = '❓';
        carta.addEventListener('click', () => virarCarta(carta));
        tabuleiro.appendChild(carta);
    });
}

function virarCarta(carta) {
    if (travarCliques) return;
    if (carta.classList.contains('virada') || carta.classList.contains('encontrada')) return;

    carta.textContent = carta.dataset.simbolo;
    carta.classList.add('virada');
    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
        tentativas++;
        contadorTentativas.textContent = tentativas;
        travarCliques = true;
        setTimeout(verificarPar, 700);
    }
}

function verificarPar() {
    const [carta1, carta2] = cartasViradas;

    if (carta1.dataset.simbolo === carta2.dataset.simbolo) {
        carta1.classList.add('encontrada');
        carta2.classList.add('encontrada');
        paresEncontrados++;

        if (paresEncontrados === simbolosMemoria.length) {
            venceuNivel3();
        }
    } else {
        carta1.textContent = '❓';
        carta2.textContent = '❓';
        carta1.classList.remove('virada');
        carta2.classList.remove('virada');
    }

    cartasViradas = [];
    travarCliques = false;
}

function venceuNivel3() {
    tabuleiro.classList.add('escondido');
    mensagemVitoria3.classList.remove('escondido');
    concluirNivel(3);
}

document.getElementById('btn-continuar-nivel-3').addEventListener('click', () => {
    tabuleiro.classList.remove('escondido');
    mostrarMemoria(3);
});