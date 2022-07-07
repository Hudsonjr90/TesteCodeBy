import React from 'react';
import './styles.css';
import apiDataUnder10 from '../../api/abaixo-10-reais.json';

export default function Shoppingcartover10() {    
    let apiData = apiDataUnder10;
    
    function checkShipping() {
      if((apiData.value/100) > 10) {
        return (
          <label className='checkshipping'>Parabéns, sua compra tem frete grátis !</label>
        )
      }
    }
      
    return (
      <div className='container'>
        <div className='header'>
          <strong>Meu carrinho</strong>
          <hr size="2" width="100%" color='#c4c4c4'></hr>    
        </div>
          <ul className='itemslist'>            
            {apiData.items.map(item => (
              <li key={item.id}>
                <div className='showitem'>
                  <img src={item.imageUrl} alt={item.name} />
                    <div className='description'>
                      <h1>{item.name}</h1>
                      <h2>
                        {(item.listPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}
                      </h2>
                      <h1>
                        {(item.sellingPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}
                      </h1>
                    </div>
                </div>
              </li>
            ))}
          </ul>
          <hr size="2" width="100%" color='#c4c4c4'></hr>          
            <div className='totalcart'>
              <p className='total'>Total</p>
              <p className='value'>
                {(apiData.value/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")}
              </p>           
            </div> 
            <div className='checklabel'>
              {checkShipping()}
            </div>            
          <hr size="2" width="100%" color='#c4c4c4'></hr> 
          <button className='final'>Finalizar compra</button> 
      </div>
    )
}
