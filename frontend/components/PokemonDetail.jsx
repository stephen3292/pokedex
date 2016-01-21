var React = require('react');
var pokemonStore = require('../stores/PokemonStore.js');
var apiUtil = require('../util/apiUtil.js');

var PokemonDetail = React.createClass({
  getStateFromStore: function() {
    return pokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  getInitialState: function() {
    return (
      {pokemon: this.getStateFromStore()}
    );
  },

  _onChange: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentDidMount: function() {
    pokemonStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    var id = parseInt(newProps.params.pokemonId);
    var pokemon = apiUtil.fetchOnePokemon(id);
    this.setState({pokemon: pokemon});
  },

  render: function() {
    if (this.state.pokemon) {
      return(
        <div>
          <div className="pokemon-detail-pane">
          <div className="detail">
          {this.state.pokemon.attack}<br/>
          {this.state.pokemon.defense}<br/>
          {this.state.pokemon.moves}<br/>
          <img src={this.state.pokemon.image_url}/>
          </div>
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }


  }

});

module.exports = PokemonDetail;
