var AppDispatcher = require('../dispatcher/dispatch.js');
var PokemonConstants = require('../constants/PokemonConstants.js');
var PokemonStore = require('../stores/PokemonStore.js');

var pokemonActions = {

  receiveAllPokemons: function(pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons,
    });
  },

  receiveSinglePokemon: function(pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon,
    });
  }

};

module.exports = pokemonActions;
