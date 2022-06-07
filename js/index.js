console.log(`https://pokeapi.co/api/v2/pokemon/charmander`);

const searchBar = document.querySelector('.searchBar')
const btnSearch = document.querySelector('.env')

const searchPoke = async function searchPoke() {
    try {
        await P.getPokemonSpecieByName("golduck")
        const frenchName = golduckSpecies.names.filter(pokeAPIName => pokeAPIName.language.name === 'fr')[0].name
        console.log(frenchName)
    } catch (err) {
        console.error(err);
    }
}

searchPoke()