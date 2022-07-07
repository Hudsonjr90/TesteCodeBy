import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">        
      </header>
      <div className="content">
        <p>
          Escolha uma das situações do carrinho de compras
        </p>
        <Link to="/shoppingcartunder10">
          <button className='btn' >Abaixo de R$ 10,00</button>
        </Link>
        <Link to="/shoppingcartover10">
          <button className='btn' >Acima de R$ 10,00</button>
        </Link>        
      </div>
    </div>
  );
}

export default Home;
