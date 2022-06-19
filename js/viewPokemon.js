class pokeCard {
  constructor() {
    this.parent = document.querySelector(".card-block");

    ////COLORS FOR THE CARDS BACKGROUND
    this.colours = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    };
  }

  renderCard(data) {
    const html = `
        <ul class="cards" id="${data.id}">
            <li><img src="${data.sprites.front_default}" alt="${data.name} image"></li>
            <li>Name: ${data.name}</li>
            <li>Pokédex number: ${data.id}</li>
            <li>Weight: ${data.weight} kg </li>
            <li>Type: ${data.types[0].type.name}</li>
        </ul>
        `;

    this.parent.style.display = "flex";
    this.parent.insertAdjacentHTML("beforeend", html);

    this.changeBackground("normal");
    document.getElementById(`${data.id}`).style.backgroundColor =
      this.changeBackground(data.types[0].type.name);
  }

  changeBackground(type) {
    const coloursArr = Object.entries(this.colours);

    const cor = coloursArr.find((color) => color[0] === type);

    return cor[1];
  }
}

export default new pokeCard();
