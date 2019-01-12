var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

require('style!css!foundation-sites/dist/foundation.min.css');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
)