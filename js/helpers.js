import pokeCard from "./viewPokemon.js"

const searchBar = document.querySelector('.searchBar')



///GETTING DATA FROM API
export const PokemonData = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()

    ////IF IMAGE OF THE POKEMON DONT EXIST
    if(!data.sprites.front_default) return;

    ////RENDERING POKEMON CARD
    pokeCard.renderCard(data)
}

////TRANSFORMING THE NAME AT THE SEARCH BAR
export const lowerName = () => {
    const name = searchBar.value
    
    if(!name) return;

    return name.toLowerCase().trim()
}

export const allData = async (name) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await res.json()


    data.results.map(poke => {  
        
        if(poke.name.includes(name)) PokemonData(poke.name);
    });

}