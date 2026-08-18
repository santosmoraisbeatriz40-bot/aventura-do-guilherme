// ===== NÍVEL 4: BATALHA DO AMOR (sem jogo, direto pra memória) =====

function iniciarNivel4() {
    // Nada pra preparar aqui — o nível é só o botão de continuar.
}

document.getElementById('btn-continuar-nivel-4').addEventListener('click', () => {
    concluirNivel(4);
    mostrarMemoria(4);
});