// ===== SISTEMA DE PROGRESSO =====

// Estrutura padrão do progresso
const progressoPadrao = {
    nivelAtual: 1,
    niveisConcluidos: []
};


// Lê o progresso salvo no navegador
function carregarProgresso() {

    const salvo = localStorage.getItem('progressoAventura');

    return salvo
        ? JSON.parse(salvo)
        : { ...progressoPadrao };

}


// Salva o progresso atual no navegador
function salvarProgresso(progresso) {

    localStorage.setItem(
        'progressoAventura',
        JSON.stringify(progresso)
    );

}


// Marca um nível como concluído e libera o próximo
function concluirNivel(numeroNivel) {

    progresso = carregarProgresso();

    if (!progresso.niveisConcluidos.includes(numeroNivel)) {

        progresso.niveisConcluidos.push(numeroNivel);

    }

    progresso.nivelAtual = numeroNivel + 1;

    salvarProgresso(progresso);

    atualizarMapa();

}


// Guarda o progresso atual assim que a página carrega
let progresso = carregarProgresso();


// ===== CONTROLE DE TELAS COM FADE =====

const telas = document.querySelectorAll('.tela');


function mostrarTela(idTela, aoMostrar) {

    // Remove o fade das telas atuais
    telas.forEach(tela => {
        tela.classList.remove('visivel');
    });


    // Aguarda a animação de saída
    setTimeout(() => {

        // Esconde todas as telas
        telas.forEach(tela => {
            tela.classList.remove('ativa');
        });


        // Pega a nova tela
        const novaTela =
            document.getElementById(idTela);


        // Ativa a nova tela
        novaTela.classList.add('ativa');


        // Aguarda o navegador atualizar o display
        requestAnimationFrame(() => {

            novaTela.classList.add('visivel');

        });


        // Executa a ação somente depois
        // que a nova tela foi ativada
        if (aoMostrar) {

            aoMostrar();

        }

    }, 300);

}


// ===== TELA INICIAL → INTRODUÇÃO =====

const botaoComecar =
    document.getElementById('btn-comecar');


botaoComecar.addEventListener('click', () => {

    mostrarTela(
        'tela-introducao',
        iniciarDialogoIntroducao
    );

});


// ===== DIÁLOGO DA INTRODUÇÃO =====

const falasIntroducao = [

    "Olá, Guilherme...",
    "Existe uma pequena aventura esperando por você.",
    "Mas dessa vez...",
    "Ela foi feita especialmente para você. ❤️"

];


let indiceFala = 0;


function iniciarDialogoIntroducao() {

    indiceFala = 0;

    mostrarFala();

}


function mostrarFala() {

    const textoDialogo =
        document.getElementById('texto-dialogo');

    textoDialogo.textContent =
        falasIntroducao[indiceFala];

}


const botaoContinuar =
    document.getElementById('btn-continuar');


botaoContinuar.addEventListener('click', () => {

    indiceFala++;


    if (indiceFala < falasIntroducao.length) {

        mostrarFala();

    } else {

        mostrarTela('tela-mapa');

    }

});


// ===== NAVEGAÇÃO E ESTADO DO MAPA =====

const nosMapa =
    document.querySelectorAll('.no-mapa');


// Redesenha o mapa com base no progresso salvo
function atualizarMapa() {

    nosMapa.forEach(no => {

        const nivel =
            no.dataset.nivel;


        const numeroNivel =
            nivel === 'final'
                ? 6
                : parseInt(nivel);


        const estaDesbloqueado =
            numeroNivel <= progresso.nivelAtual;


        if (estaDesbloqueado) {

            no.classList.remove('bloqueado');

            no.classList.add('desbloqueado');

            no.disabled = false;


            no.querySelector('.icone-no').textContent =
                no.classList.contains('concluido')
                    ? '✅'
                    : '❤️';


            // ===== NÍVEL RECÉM-DESBLOQUEADO =====

            if (
                numeroNivel === progresso.nivelAtual &&
                !progresso.niveisConcluidos.includes(numeroNivel)
            ) {

                no.classList.add('recem-desbloqueado');


                setTimeout(() => {

                    no.classList.remove(
                        'recem-desbloqueado'
                    );

                }, 2400);

            }

        }


        // ===== NÍVEL CONCLUÍDO =====

        if (
            progresso.niveisConcluidos
                .includes(numeroNivel)
        ) {

            no.classList.add('concluido');

            no.querySelector('.icone-no').textContent =
                '✅';

        }

    });

}


// ===== CLIQUE NOS NÍVEIS DO MAPA =====

nosMapa.forEach(no => {

    no.addEventListener('click', () => {

        const nivel =
            no.dataset.nivel;


        // ===== NÍVEL 1 =====

        if (nivel === '1') {

            mostrarTela(
                'tela-nivel-1',
                iniciarNivel1
            );

        }


        // ===== NÍVEL 2 =====

        else if (nivel === '2') {

            mostrarTela(
                'tela-nivel-2',
                iniciarNivel2
            );

        }


        // ===== NÍVEL 3 =====

        else if (nivel === '3') {

            mostrarTela(
                'tela-nivel-3',
                iniciarNivel3
            );

        }


        // ===== NÍVEL 4 =====

        else if (nivel === '4') {

            mostrarTela(
                'tela-nivel-4',
                iniciarNivel4
            );

        }


        // ===== NÍVEL 5 =====

        else if (nivel === '5') {

            mostrarTela(
                'tela-nivel-5',
                iniciarNivel5
            );

        }


        // ===== FINAL =====

        else if (nivel === 'final') {

            mostrarTela(
                'tela-final',
                iniciarFinal
            );

        }

    });

});


// ===== INICIA O MAPA =====

atualizarMapa();


// ===== CORREÇÃO DA TELA INICIAL =====

// A primeira tela já nasce "ativa" no HTML.
// Adicionamos "visivel" assim que a página carrega.

requestAnimationFrame(() => {

    const telaInicial =
        document.querySelector('.tela.ativa');


    if (telaInicial) {

        telaInicial.classList.add('visivel');

    }

});