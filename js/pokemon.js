// =========================================
// POKÉMON DA TELA FINAL
// =========================================

function carregarPokemonsFinal() {

    const container = document.getElementById('pokemon-decoracao');

    if (!container) {
        console.log('Container dos Pokémon não encontrado!');
        return;
    }

    container.innerHTML = `
        
        <img 
            src="img/pokemon-esquerda.png"
            class="pokemon-esquerda"
            alt="Pokémon esquerdo"
        >

        <img 
            src="img/pokemon-direita.png"
            class="pokemon-direita"
            alt="Pokémon direito"
        >

    `;

    console.log('Pokémon carregados!');
}