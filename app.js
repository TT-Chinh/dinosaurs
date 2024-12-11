
/**
 * @description Create Dino class
 * @constructor
 * @param {object} dino - object dino's details
 */
class Dinosaur {
    constructor(dino){
        const { species, weight, height, diet, where, when, fact } = dino;
        this.species = species;
        this.image = species.toLowerCase() + '.png';
        this.weight = Number(weight);
        this.height = Number(height);
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Compare Methods
    /**
     * @description compare dino's weight with human's weight
     * @param {object} human - object human's detail
     * @returns fact
     */
    compareWeight(human) {
        if (human.weight > this.weight) {
            return human.species + " is heavier than " + this.species;
        } else if (human.weight == this.weight) {
            return human.species + " weighs as much as " + this.species;
        } else {
            return human.species + " is lighter than " + this.species;
        }
    } 
    
    /**
     * @description compare dino's height with human's height
     * @param {object} human - object human's details
     * @returns fact
     */
    compareHeight(human) {
        if (human.height > this.height) {
            return human.species + " is taller than " + this.species;
        } else if (human.height == this.height) {
            return human.species + " is as high as " + this.species;
        } else {
            return human.species + " is lower than " + this.species;
        }
    } 

    /**
     * @description compare dino's diet with human's diet
     * @param {object} human - object human's details 
     * @returns fact
     */
    compareDiet(human) {
        if (human.diet === this.diet) {
            return `Both ${human.species} and ${this.species} abstain from ${human.diet}`;
        } else {
            return `${human.species} abstains from ${human.diet} but ${this.species} abstains from ${this.species}`;
        }
    } 

    /**
     * @description get random fact of dino
     * @param {object} human - object human's details 
     * @returns fact
     */
    getFact(human){
        if(this.species === 'Pigeon'){
            return this.fact;
        }
        const random_number = Math.floor(Math.random() * 3) + 1;
        switch (random_number) {
            case 1:
                return this.compareHeight(human);
            case 2:
                return this.compareWeight(human);
            default:
                return this.compareDiet(human);
        } 
    }
}

// Fetch dinos from json
const getAllDinos = async () => {
    const _json = await fetch("./dino.json");
    const data = await _json.json();
    return data.Dinos.map(dino => new Dinosaur(dino));
}

// Create Human Object
class Human {
    constructor(human){
        const { name, height, weight, diet } = human;
        this.species = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.image = 'human.png'
    }
}

// Use IIFE to get human data from form
function getDataHumanForm(){
    const [name, feet, inches, weight] = document.querySelectorAll("input");
    const diet = document.querySelector("select");

    return new Human({
        name: name.value,
        height: Number(feet.value) * 12 + Number(inches.value),
        weight: Number(weight.value),
        diet: diet.value,
    });
}

// Generate Tiles for each Dino in Array
function generateGrid(list_dinos, human){
    
    const grid = document.querySelector("#grid");
    const tileData = [...list_dinos.slice(0, 4), human, ...list_dinos.slice(4)];
    const tiles = tileData
        .map((tile) => {
            return `<div class="grid-item">
                        <h3>${tile.species || tile.name}</h3>
                        <img src="/images/${tile.image}">
                        <p>${tile instanceof Human ? "" : tile.getFact(human)}</p>
                    </div>`;
        })
        .join("");

    // Add tiles to DOM
    grid.innerHTML = tiles;
}

// Remove form from screen
function hideForm() {
    const form = document.querySelector('#dino-compare');
    form.style.display = "none";
}

// On button click, prepare and display infographic
(function () {
    const compareBtn = document.querySelector("#btn");
    compareBtn.addEventListener("click", function () {
        const human = getDataHumanForm();
        getAllDinos()
        .then(dinos => {
            hideForm();
            generateGrid(dinos, human);
        });
    });
})();