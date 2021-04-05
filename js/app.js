const pokeDex = [ 
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
]

// Need to use .this & methods

//Player vs autoplayer (computer?)
// Player chooses card, computer chooses card, both random
// Use Prompts

// Keeps score, logs it

// Cards, run through pokedex
// Deck Class & Functions
// Create graveyard deck, cpu deck, player deck, cpu hand deck, player hand deck
// Shuffled
// Need a factory to make decks
// Pulled from (added to?)


// PLayer: able to view personal deck, and play card (prompt/interpolation)
// Play(card[1]);


// Computer: randomly plays 1 of 3 cards/ or game PULLS there card
// holds 3 cards at a time
// After each play, and scoring, if deck.length < 1, & rounds < 3, play another hand.



//Game
// round is over after 3 plays.
// global round variable to add to 
// random draw on cpu hand
//factor in players choice
// global round variable to add to
// counter for score printing
// 

// Steps, create decks, shuffle them
// create players
// draw 3 each
// create counter 


// ## The "UI"

// The user should see the following in the console:

// - the scoreboard after each round
// - the cards in the player's hand
// - the cards in the computer's hand
// - the cards that are in play
// - the winner of each round (or if there was a tie)
// - the winner of the game when the game is over 
// - the final score when the game is over


/**
 * Card Object
 */
class Card {
  /**
   * Make a card object
   * @param {string} name 
   * @param {number} damage 
   */
    constructor(name, damage){
        // Attributes of card
        this.name = name;
        this.damage = damage;
    }

    attack(){
        console.log(`${this.name} attacked for ${this.damage}`);
    }
}

// --------------------------------------------------------------------

class Deck {
  constructor(){
    this.cards = [];
    this.graveyard = []; 
  }

  generateCards(data){
    for(const pokemon of data){
      // This is looping through all the pokemon, making class cards with the key-value pairs from the pokemon in the array

      const pokemonCard = new Card(pokemon.name, pokemon.damage);

      // Putting cards into a deck
      this.cards.push(pokemonCard);
    }
    this.shuffle();
  }  
    draw(){
      // returns card on top (first in array)
        return this.cards.shift();
    }

    discard(card){
      this.graveyard.push(card);
    }

  /**
   *  @author  Mike Bostock  https://bost.ocks.org/mike/shuffle/
   */
    shuffle() {
      let length = this.cards.length;
      let element;
      let index;
      
      while (length) {
        index = Math.floor(Math.random() * length--);
        element = this.cards[length];
        this.cards[length] = this.cards[index];
        this.cards[index] = element;
  }
}
}

// ---------------------------------------------------------------------------


// Creates a player deck, runs generateCards function with pokedex array to populate it
// Generate cards auto shuffles deck
const playerDeck = new Deck();
playerDeck.generateCards(pokeDex);

const cpuDeck = new Deck();