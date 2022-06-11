import { allData, getSearchResults, lowerName} from "./helpers.js"
import viewPokemon from "./viewPokemon.js"

const cardBlock = document.querySelector('.card-block')
const btnNext = document.querySelector('.next')


//GET THE DATA OF THE POKEMON
//`https://pokeapi.co/api/v2/pokemon/${namePokemon}`


const btnSearch = document.querySelector('.env')


////SEARCHING FOR THE POKEMON
const searchPoke = async function searchPoke() {
    try {
        const name = lowerName()
        allData(name)

    } catch (err) {
        console.error(err);
    }
}

btnSearch.addEventListener('click', function(e){
    e.preventDefault();

    cardBlock.innerHTML = ''

    searchPoke()
})