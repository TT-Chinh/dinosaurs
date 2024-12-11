import DATA_DINOSAURS from "./dino.json";

/**
 * @description Create Dino class
 * @constructor
 * @param {object} dino - object dino's details
 */
class Dinosaur {
    constructor(dino){
        const { species, weight, height, diet, where, when, fact } = dino;
        this.species = species;
        this.image = '/images/'+ species.toLowerCase() + '.png';
        this.weight = Number(weight);
        this.height = Number(height);
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

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
        const { feet, inches } = human;
        const humanHeight = feet * 12 + inches;
        if (humanHeight > this.height) {
            return human.species + " is taller than " + this.species;
        } else if (humanHeight == this.height) {
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
}

    // Create Human Object
class Human {

}

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
