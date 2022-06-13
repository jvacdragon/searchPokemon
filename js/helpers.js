import pokeCard from "./viewPokemon.js"

const searchBar = document.querySelector('.searchBar')


export const pagination = {
    results: [],
    resultsPerPage: 8,
    page: 1,
}


///GETTING DATA FROM API
const PokemonData = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()

    ////IF IMAGE OF THE POKEMON DONT EXIST
    if (!data.sprites.front_default) return;

    return data

    //pokeCard.renderCard(data)
}

////TRANSFORMING THE NAME AT THE SEARCH BAR
export const lowerName = () => {
    const name = searchBar.value

    if (!name) return;

    return name.toLowerCase().trim()
}

////PAGE PAGINATION
export const getSearchResults = async function (page = pagination.page, results = pagination.results) {

    const start = (page - 1) * pagination.resultsPerPage;
    const end = page * pagination.resultsPerPage;
    
    /////GETTING THE RIGHT THE DATA TO DSISPLAY
    const cards = await Promise.all(results.slice(start,end))

    //DISPLAY THEN CARDS
    cards.map(cards => pokeCard.renderCard(cards))
};


export const allData = async (name) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await res.json()
    const results = []

    await data.results.map(async (poke) =>{

        if (poke.name.includes(name)){
            results.push(PokemonData(poke.name))
        };
    });

    pagination.results = results

    getSearchResults()

    //GETTING THE TOTAL OF PAGES
    maxPages()
}

export const maxPages = () => {
    const totalPage = pagination.results.length / pagination.resultsPerPage

    pagination.totalPages = Math.ceil(totalPage)
}