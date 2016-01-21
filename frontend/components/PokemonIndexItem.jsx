var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({

  mixins: [History],


  handleClick: function (e) {
    this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return(
      <li onClick={this.handleClick}>
        {this.props.pokemon.name}<br/>
        {this.props.pokemon.poke_type}<br/>
      </li>
    );
  }
});


module.exports = PokemonIndexItem;
