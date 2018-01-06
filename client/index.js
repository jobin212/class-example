// import React from 'react'
//cannot rely on user to use ES6 code, so we use webpack to convert to ES5

const React = require('react');
const ReactDOM = require('react-dom');

function App() {

    return React.createElement(
        "h1",
        null,
        "  Hello world "
      );
}

ReactDOM.render(App(), document.getElementById('root'));