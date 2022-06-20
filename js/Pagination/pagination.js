import pokeCard from "../viewPokemon.js";
import { pagination } from "../helpers.js";
const nextBack = document.querySelectorAll(".change");
const back = document.querySelector(".back");
const next = document.querySelector('.next')

////PAGE PAGINATION
export const getSearchResults = async function (
  page = pagination.page,
  results = pagination.results
) {
  const start = (page - 1) * pagination.resultsPerPage;
  const end = page * pagination.resultsPerPage;

  /////GETTING THE RIGHT THE DATA TO DSISPLAY
  const cards = await Promise.all(results.slice(start, end));

  //DISPLAY THEN CARDS
  cards.map((cards) => {
    if (cards === undefined) return;

    nextBack.forEach((btn) => (btn.classList.remove("hidden")));

    document.querySelector("footer").classList.remove("separete");

    return pokeCard.renderCard(cards);
  });
};

export const hiddenButtons = () => {
  console.log(pagination);
  if(pagination.totalPages === +1) return nextBack.forEach((btn) => (btn.classList.add("hidden")));

  if(pagination.page === pagination.totalPages) {
    console.log(pagination);
    return next.classList.add('hidden')}; 

  if(pagination.page === +1) return back.classList.add('hidden');
};
