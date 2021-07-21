import React from 'react';

import './App.css';
import Carrinho from './Componentes/Carrinho'
import Filtro from './Componentes/Filtro';
import Home from './Componentes/Home';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Carrinho />
        <Home />
        <Filtro />
        
      </div>
    );
  }
}

export default App;
