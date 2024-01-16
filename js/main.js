elPokemonsResult = document.querySelector(".pokemons-result");
elPokemonTemplate = document.querySelector(".pokemon-template").content;
elNewPokemonFragment = new DocumentFragment();



function renderPokemonFilms(pokemons){

    elPokemonsResult.innerHTML = null

    for(let i = 0; i < pokemons.length; i++){

        let clonePokemonTemplate = elPokemonTemplate.cloneNode(true)

        console.log(pokemons);
        clonePokemonTemplate.querySelector(".pokemon-img").src = pokemons[i].img;
        clonePokemonTemplate.querySelector(".pokemon-title").textContent = pokemons[i].name;
        clonePokemonTemplate.querySelector(".pokemon-swap-time").textContent = pokemons[i].spawn_time;
        clonePokemonTemplate.querySelector(".pokemon-swapns").textContent = `${pokemons[i].avg_spawns}k`
        ;
        

        elNewPokemonFragment.appendChild(clonePokemonTemplate)
    }

    elPokemonsResult.appendChild(elNewPokemonFragment)
}
renderPokemonFilms(pokemons)