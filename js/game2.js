// ===== NÍVEL 2: QUIZ "VOCÊ ME CONHECE?" =====

const perguntas = [
    {
        pergunta: "Qual é o meu super-herói favorito? 🦇",
        alternativas: [
            "🅰️ Batman 🦇",
            "🅱️ Homem-Aranha 🕷️",
            "🅲️ Superman 🦸"
        ],
        resposta: 0
    },
    {
        pergunta: "Entre essas opções, qual eu escolheria? 🥤",
        alternativas: [
            "🅰️ Chocolate 🍫",
            "🅱️ Açaí 🥤",
            "🅲️ Sorvete 🍦"
        ],
        resposta: 1
    },
    {
        pergunta: "Se eu pudesse escolher uma coisa para fazer agora, o que eu escolheria? 😴",
        alternativas: [
            "🅰️ Cuidar do meu cabelo 💇‍♀️",
            "🅱️ Sair para passear 🛍️",
            "🅲️ Dormir 😴"
        ],
        resposta: 2
    }
];

let perguntaAtual = 0;

const perguntaContador = document.getElementById('pergunta-contador');
const perguntaNivel2 = document.getElementById('pergunta-nivel-2');
const opcoesQuiz = document.querySelector('.opcoes-quiz');

const resultadoNivel2 = document.getElementById('resultado-nivel-2');
const mensagemResultadoNivel2 = document.getElementById('mensagem-resultado-nivel-2');


// ===== INICIAR NÍVEL 2 =====

function iniciarNivel2() {

    perguntaAtual = 0;

    resultadoNivel2.classList.add('escondido');

    opcoesQuiz.parentElement.classList.remove('escondido');

    mostrarPergunta();
}


// ===== MOSTRAR PERGUNTA =====

function mostrarPergunta() {

    const dados = perguntas[perguntaAtual];

    perguntaContador.textContent =
        `Pergunta ${perguntaAtual + 1} / ${perguntas.length}`;

    perguntaNivel2.textContent = dados.pergunta;

    opcoesQuiz.innerHTML = '';

    dados.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement('button');

        botao.className = 'opcao-quiz';

        botao.textContent = alternativa;

        botao.addEventListener('click', () => {
            escolherAlternativa(indice);
        });

        opcoesQuiz.appendChild(botao);
    });
}


// ===== ESCOLHER ALTERNATIVA =====

function escolherAlternativa(indiceEscolhido) {

    const dados = perguntas[perguntaAtual];

    const botoes = document.querySelectorAll('.opcao-quiz');

    // Mostra qual é a resposta correta
    botoes[dados.resposta].classList.add('alternativa-correta');

    // Se a resposta escolhida estiver errada,
    // mostra também a resposta errada
    if (indiceEscolhido !== dados.resposta) {
        botoes[indiceEscolhido].classList.add('alternativa-errada');
    }

    // Impede clicar novamente
    botoes.forEach(botao => {
        botao.disabled = true;
    });

    // Espera um pouco antes de passar para a próxima pergunta
    setTimeout(avancarPergunta, 1200);
}


// ===== AVANÇAR PERGUNTA =====

function avancarPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        venceuNivel2();
    }
}


// ===== VITÓRIA DO NÍVEL 2 =====

function venceuNivel2() {

    opcoesQuiz.parentElement.classList.add('escondido');

    resultadoNivel2.classList.remove('escondido');

    mensagemResultadoNivel2.textContent =
        '✨ VOCÊ ME CONHECE MUITO BEM! ❤️';

    concluirNivel(2);
}


// ===== CONTINUAR PARA A MEMÓRIA =====

document
    .getElementById('btn-continuar-nivel-2')
    .addEventListener('click', () => {

        opcoesQuiz.parentElement.classList.remove('escondido');

        mostrarMemoria(2);
    });