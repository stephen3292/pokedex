var AppDispatcher = require('../dispatcher/dispatch');
var PokemonActions = require('../actions/PokemonActions');


var pokemonApiUtil = {
  fetchAllPokemons: function(){
    $.ajax({
      type: "get",
      url: "api/pokemon",
      dataType: "json",
      success: function(data) {
        PokemonActions.receiveAllPokemons(data);
      }
    });
  },

  fetchOnePokemon: function (id) {
    $.ajax({
      type: "get",
      url: "api/pokemon/" + id,
      dataType: "json",
      success: function(data) {
        console.log(data);
      }
    });
  }

};

module.exports = pokemonApiUtil;
