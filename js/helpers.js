import { getSearchResults } from "./Pagination/pagination.js";

const searchBar = document.querySelector(".searchBar");

export const pagination = {
  results: [],
  resultsPerPage: 8,
  page: 1,
};

///GETTING DATA FROM API
const PokemonData = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  ////IF IMAGE OF THE POKEMON DONT EXIST
  if (!data.sprites.front_default) return;

  return data;
};

////TRANSFORMING THE NAME AT THE SEARCH BAR
export const lowerName = () => {
  const name = searchBar.value;

  if (!name) return;

  return name.toLowerCase().trim();
};

export const allData = async (name) => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const data = await res.json();
  const results = [];
  pagination.page = 1;

  await data.results.map(async (poke) => {
    if (poke.name.includes(name)) {
      results.push(PokemonData(poke.name));
    }
  });

  pagination.results = results;

  getSearchResults();

  //GETTING THE TOTAL OF PAGES
  maxPages();
};

export const maxPages = () => {
  const totalPage = pagination.results.length / pagination.resultsPerPage;

  pagination.totalPages = Math.ceil(totalPage);
};
