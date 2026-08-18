// ===== SISTEMA DE MEMÓRIAS =====

const memorias = {
    1: {
        foto: 'img/foto-01.jpg',
        declaracao: 'Guilherme, só queria te lembrar o quanto você é especial para mim. ❤️ Sou muito feliz por ter você na minha vida e por poder compartilhar tantos momentos ao seu lado. Você significa muito mais para mim do que eu consigo colocar em palavras. Te amo, meu amor. 🥹❤️'
    },
    2: {
        foto: 'img/foto-02.jpg',
        declaracao: 'Eu amo nossos passeios, nossas aventuras e até os momentos mais simples que vivemos juntos. ❤️ Mas acho que uma das coisas que mais amo em nós é a liberdade de sermos completamente idiotas um com o outro, rirmos de coisas sem sentido e criarmos nossas próprias piadas. 😂 Com você, eu posso ser exatamente quem eu sou, sem medo de parecer boba. E talvez seja isso que torne tudo tão especial: poder rir, brincar, passear e simplesmente aproveitar a vida ao seu lado. 🥹❤️'
    },
    3: {
        foto: 'img/foto-03.jpg',
        declaracao: 'Eu admiro muito a pessoa que você é. Amo a sua inteligência, a sua calma e principalmente a forma como você leva suas responsabilidades a sério. Eu vejo o quanto você se esforça, o quanto você tenta fazer o seu melhor e o quanto você corre atrás das suas coisas, e sinceramente... você é incrível. 🙄❤️ (Sim, eu sei, eu sou ótima me declarando KKKKK.) Mas falando sério, tenho muito orgulho de você e da pessoa que você está se tornando. Eu amo poder te admirar não só como meu namorado, mas também como a pessoa incrível que você é. ❤️'
    },
    4: {
        foto: 'img/foto-04.jpg',
        declaracao: 'COMPRA LOGO MEU LEGO. 😭❤️ Eu dei meu CÚ pra fazer essa porra funcionar. Mas sou incrível, né? 😌Te amo, nerdola. 🤓❤️'
    },
    5: {
        foto: 'img/foto-05.jpg',
        declaracao: 'Amo-te tanto, meu amor, não cante O humano coração com mais verdade Amo-te como amigo e como amante Numa sempre diversa realidade Amo-te afim, de um calmo amor prestante E te amo além, presente na saudade Amo-te, enfim, com grande liberdade Dentro da eternidade e a cada instante'
    }
};

let nivelDaMemoriaAtual = null;

function mostrarMemoria(numeroNivel) {
    const dadosMemoria = memorias[numeroNivel];
    nivelDaMemoriaAtual = numeroNivel;

    document.getElementById('foto-memoria').src = dadosMemoria.foto;
    document.getElementById('declaracao-memoria').textContent = dadosMemoria.declaracao;

    mostrarTela('tela-memoria');
}

document.getElementById('btn-continuar-memoria').addEventListener('click', () => {
    if (nivelDaMemoriaAtual === 5) {
        mostrarTela('tela-final');
        iniciarTelaFinal();
    } else {
        mostrarTela('tela-mapa');
    }
});