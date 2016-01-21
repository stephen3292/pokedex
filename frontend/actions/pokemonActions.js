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

};

module.exports = pokemonActions;
