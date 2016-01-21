var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var PokemonConstants = require('../constants/PokemonConstants');

var _pokemons = {};

var pokemonStore = new Store(AppDispatcher);

pokemonStore.resetPokemons = function(pokemons){
  for (var i = 0; i < pokemons.length; i++) {
    _pokemons[pokemons[i].id] = pokemons[i];
  }

};

pokemonStore.all = function(){
  var result = [];
  for (var i in _pokemons) {
    result.push(_pokemons[i]);
  }
  return result;
};

pokemonStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
    pokemonStore.resetPokemons(payload.pokemons);
  }
  pokemonStore.__emitChange();
};



// RecipeStore.__onDispatch = function (payload) {
//   switch (payload.actionType) {
//     case RecipeConstants.ADD_RECIPE:
//       _recipes.push(payload.recipe);
//       break;
//     case RecipeConstants.RECEIVE_RECIPES:
//       _recipes = payload.recipes;
//       break;
//   }
//   RecipeStore.__emitChange();
// };


module.exports = pokemonStore;
