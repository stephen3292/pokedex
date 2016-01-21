var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = React.createClass({
  render: function() {
    return <div>It Works</div>;
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App/>, document.getElementById('root'));
});
