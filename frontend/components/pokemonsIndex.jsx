var React = require('react');
var pokemonStore = require('../stores/PokemonStore.js');
var pokemonApiUtil = require('../util/apiUtil.js');
var PokemonIndexItem = require('./PokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({

  getInitialState: function(){
    return {pokemons: pokemonStore.all()};
  },

  _onChange: function(){
    this.setState({pokemons: pokemonStore.all()});
  },

  componentDidMount: function(){
    pokemonStore.addListener(this._onChange);
    pokemonApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function(){
    pokemonStore.remove(this._onChange);
  },

  render: function() {


    var pokemons = this.state.pokemons.map(function (pokemon) {
      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>;
    });

    return(
      <div className="index">
        <ul>
        {pokemons}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
