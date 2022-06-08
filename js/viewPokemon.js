class pokeCard {
    constructor() {
        this.parent = document.querySelector('.card-block')
    }

    renderCard(data) {
        const html =
            `
        <ul class="cards">
            <li><img src="${data.sprites.front_default}" alt="${data.name} image"></li>
            <li>Name: ${data.name}</li>
            <li>Pokédex number: ${data.id}</li>
            <li>Weight: ${data.weight} kg </li>
            <li>Type: ${data.types[0].type.name}</li>
        </ul>
        `
        this.parent.style.display = 'flex'

        console.log(data);

        return this.parent.insertAdjacentHTML('afterbegin', html)
    }
}

export default new pokeCard()