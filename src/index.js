import React from 'react';
import ReactDOM from 'react-dom';
import MiniCiudad from './MiniCiudad.jsx';
const title = 'React with Webpack and Babel';

ReactDOM.render(
    <MiniCiudad/>,
    document.getElementById('app')
);

module.hot.accept();
