// ===== FASE FINAL: GALERIA + POEMA + ANIVERSÁRIO + EFEITOS =====


// ===== POEMA / DECLARAÇÃO FINAL =====

const poemaFinal =
    `Guilherme,

se você chegou até aqui, significa que conseguiu completar cada pedacinho dessa pequena aventura. ❤️

Mas, na verdade, quem ganhou o maior presente fui eu por ter você na minha vida.

Entre risadas, momentos simples, conversas, carinho e todas as memórias que estamos construindo, você se tornou alguém muito especial para mim. E talvez eu nunca consiga colocar em palavras tudo o que sinto, mas quero que você saiba que sou muito feliz por ter te conhecido.

Essa aventura foi só uma pequena forma de transformar em jogo um pouquinho do carinho que sinto por você. Cada fase, cada detalhe e cada coração foram feitos pensando em nós. ❤️

Espero que esse novo ano da sua vida traga muitos sonhos realizados, novas conquistas, momentos inesquecíveis e muitos motivos para sorrir.

E espero também estar ao seu lado para viver muitos desses momentos com você.

Que essa seja apenas uma das muitas aventuras que ainda vamos viver juntos.

Feliz vida, meu amor. ❤️✨`;


// ===== MENSAGEM DE ANIVERSÁRIO =====

const mensagemAniversarioFinal =
    `Feliz aniversário, Guilherme! ❤️ Espero que seu novo ciclo seja cheio de coisas boas, conquistas e momentos felizes. Sou muito grata por ter te conhecido e por tudo que estamos construindo juntos, de um jeito tão leve e especial. Você é uma pessoa incrível e merece tudo de melhor nessa vida. Que eu possa estar presente para comemorar muitas outras datas ao seu lado. 🥹❤️`;


// ===== ELEMENTOS DA TELA FINAL =====

const camadaEfeitos =
    document.getElementById('camada-efeitos');


// Emojis usados nos efeitos que sobem a tela

const emojisFlutuantes = [
    '❤️',
    '⭐',
    '✨',
    '💌',
    '🌙'
];


// Emojis de criaturas/efeitos

const emojisCriaturas = [
    '⚡',
    '🔥',
    '💧',
    '🐉',
    '🍃'
];


// Cores utilizadas nos confetes

const coresConfete = [
    '#ff6b9d',
    '#ffd93d',
    '#ffffff',
    '#f4f1de'
];


// ===== INICIA A TELA FINAL =====

function iniciarTelaFinal() {

    // Monta a galeria de fotos
    montarGaleria();


    // Coloca o poema na tela
    document.getElementById('poema-final').textContent =
        poemaFinal;


    // Coloca a mensagem de aniversário na tela
    document.getElementById('mensagem-aniversario').textContent =
        mensagemAniversarioFinal;


    // =========================================
    // CARREGA OS POKÉMON
    // =========================================

    carregarPokemonsFinal();


    // Começa a festa
    dispararExplosaoDeFesta();


    // Mantém emojis subindo pela tela
    setInterval(
        criarParticulaFlutuante,
        900
    );

}


// ===== GALERIA DE FOTOS =====

function montarGaleria() {

    const galeria =
        document.getElementById('galeria-final');


    galeria.innerHTML = '';


    Object.values(memorias).forEach(
        dadosMemoria => {

            const foto =
                document.createElement('img');


            foto.src =
                dadosMemoria.foto;


            foto.className =
                'foto-galeria';


            foto.alt =
                'Memória do casal';


            galeria.appendChild(
                foto
            );

        }
    );

}


// ===== PARTÍCULAS FLUTUANTES =====

function criarParticulaFlutuante() {

    const todosEmojis = [
        ...emojisFlutuantes,
        ...emojisCriaturas
    ];


    const emojiEscolhido =
        todosEmojis[
            Math.floor(
                Math.random() * todosEmojis.length
            )
        ];


    const particula =
        document.createElement('span');


    particula.className =
        'particula-flutuante';


    particula.textContent =
        emojiEscolhido;


    particula.style.left =
        `${Math.random() * 95}vw`;


    particula.style.animationDuration =
        `${4 + Math.random() * 3}s`;


    camadaEfeitos.appendChild(
        particula
    );


    setTimeout(
        () => particula.remove(),
        7000
    );

}


// ===== CONFETE =====

function criarConfete() {

    const confete =
        document.createElement('div');


    confete.className =
        'confete';


    confete.style.left =
        `${Math.random() * 100}vw`;


    confete.style.top =
        '-10px';


    confete.style.backgroundColor =
        coresConfete[
            Math.floor(
                Math.random() * coresConfete.length
            )
        ];


    confete.style.animationDuration =
        `${2 + Math.random() * 2}s`;


    camadaEfeitos.appendChild(
        confete
    );


    setTimeout(
        () => confete.remove(),
        4000
    );

}


// ===== EXPLOSÃO DE FESTA =====

function dispararExplosaoDeFesta() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(
            criarConfete,
            i * 80
        );

    }


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(
            criarParticulaFlutuante,
            i * 150
        );

    }

}


// ===== BOTÃO "MAIS MAGIA" =====

document
    .getElementById('btn-mais-confete')
    .addEventListener(
        'click',
        dispararExplosaoDeFesta
    );