
//GET THE DATA OF THE POKEMON
//`https://pokeapi.co/api/v2/pokemon/${namePokemon}`


const searchBar = document.querySelector('.searchBar')
const btnSearch = document.querySelector('.env')



////GETTING THE DATA FROM DE WEB API
const PokemonData = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()

    return data
}


////TRANSFORMING THE NAME AT THE SEARCH BAR
export const lowerName = () => {
    const name = searchBar.value
    
    if(!name) return;

    return name.toLowerCase().trim()
}


////SEARCHING FOR THE POKEMON
const searchPoke = async function searchPoke() {
    try {
        const name = lowerName()

        const pokeData = await PokemonData(name)
        
        console.log(pokeData);
        const img = `<img src = ${pokeData.sprites.front_default}>`

        return document.querySelector('.card-block').insertAdjacentHTML('afterend', img)

    } catch (err) {
        console.error(err);
    }
}



btnSearch.addEventListener('click', function(e){
    e.preventDefault();
    searchPoke()
})