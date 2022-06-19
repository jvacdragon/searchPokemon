import { allData, lowerName, pagination } from "./helpers.js";
import { getSearchResults, hiddenButtons } from "./Pagination/pagination.js";

const cardBlock = document.querySelector(".card-block");

//GET THE DATA OF THE POKEMON
//`https://pokeapi.co/api/v2/pokemon/${namePokemon}`

const btnSearch = document.querySelector(".env");

////SEARCHING FOR THE POKEMON
const searchPoke = async function searchPoke() {
  try {
    const name = lowerName();
    allData(name);
  } catch (err) {
    console.error(err);
  }
};

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();

  cardBlock.innerHTML = "";

  searchPoke();

  hiddenButtons();
});

document.querySelector(".btn-next").addEventListener("click", function () {
  if (pagination.page === pagination.totalPages) return;

  cardBlock.innerHTML = "";
  pagination.page++;
  getSearchResults();
});

document.querySelector(".btn-back").addEventListener("click", function (e) {
  if (pagination.page === 1) return;

  cardBlock.innerHTML = "";
  pagination.page--;
  getSearchResults();
});
