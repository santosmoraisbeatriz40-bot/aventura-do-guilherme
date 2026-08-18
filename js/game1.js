// ===== NÍVEL 1: COLETAR CORAÇÕES =====

const METAS_CORACOES = 10;
let coracoesColetados = 0;

const areaJogo1 = document.getElementById('area-jogo-1');
const contadorCoracoes = document.getElementById('contador-coracoes');
const mensagemVitoria1 = document.getElementById('vitoria-nivel-1');

// Cria um coração em posição aleatória dentro da área de jogo
function criarCoracao() {
    const coracao = document.createElement('button');

    coracao.className = 'coracao-clicavel';
    coracao.textContent = '❤️';

    const maxX = areaJogo1.clientWidth - 40;
    const maxY = areaJogo1.clientHeight - 40;

    coracao.style.left = `${Math.random() * maxX}px`;
    coracao.style.top = `${Math.random() * maxY}px`;

    coracao.addEventListener('click', () => {
        coletarCoracao(coracao);
    });

    areaJogo1.appendChild(coracao);
}

function coletarCoracao(elementoCoracao) {
    elementoCoracao.remove();

    coracoesColetados++;

    contadorCoracoes.textContent = coracoesColetados;

    if (coracoesColetados < METAS_CORACOES) {
        criarCoracao();
    } else {
        venceuNivel1();
    }
}

function venceuNivel1() {
    mensagemVitoria1.classList.remove('escondido');

    concluirNivel(1);
}

function iniciarNivel1() {
    coracoesColetados = 0;

    contadorCoracoes.textContent = '0';

    areaJogo1.innerHTML = '';

    mensagemVitoria1.classList.add('escondido');

    criarCoracao();
}

// Botão para mostrar a memória do Nível 1
document
    .getElementById('btn-continuar-nivel-1')
    .addEventListener('click', () => {
        mostrarMemoria(1);
    });