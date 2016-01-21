var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var pokemonApiUtil = require('./util/apiUtil.js');
var PokemonStore = require('./stores/PokemonStore.js');
var PokemonsIndex = require('./components/pokemonsIndex');
var PokemonDetail = require('./components/PokemonDetail');

var App = React.createClass({

  render: function() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

var router = ( // defines the entire structure of our app
    <Router>
      <Route path="/" component={App}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}/>
      </Route>
    </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
