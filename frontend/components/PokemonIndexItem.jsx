var React = require('react');

var PokemonIndexItem = React.createClass({
  render: function() {
    return(
      <li>
        {this.props.pokemon.name}<br/>
        {this.props.pokemon.poke_type}
      </li>
    );
  }
});


module.exports = PokemonIndexItem;
