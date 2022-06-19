import pokeCard from "../viewPokemon.js";
import { pagination } from "../helpers.js";
const nextBack = document.querySelectorAll(".change");
const back = document.querySelector(".back");

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

    nextBack.forEach((btn) => (btn.style.display = "block"));

    document.querySelector("footer").classList.remove("separete");

    return pokeCard.renderCard(cards);
  });
};

export const hiddenButtons = () => {
  console.log(+pagination.page);

  +pagination.page === +1
    ? back.classList.add("hidden")
    : back.classList.remove("hidden");
};
