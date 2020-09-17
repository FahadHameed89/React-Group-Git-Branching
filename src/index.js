import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloTech from './component/HelloTech';
import HelloTechpeople from './components/HelloTechpeople'
ReactDOM.render(
  <React.StrictMode>
    <HelloTech />
    <HelloTechpeople />
  </React.StrictMode>,
  document.getElementById('root')
);
