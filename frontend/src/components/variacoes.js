import React, { useState } from 'react';
import '../App.css';

function Variacoes(a) {
  let [quantity, setQuantity] = useState(0);

  async function updateQuantity(event) {
    event.preventDefault();
    console.log('quantity: ', quantity); // remover
    console.log('value: ', event.target); // remover
  }
  let x = a.post
  console.log(a)

  return ( <div key={x.id} className="Center admin campoInsercao ">
        <div className="variacoes">
          <div className="varianteContainer">
            <div className="flex">
              <p>
                {' '}
                <b> Nome: </b>
                {x.text}{' '}
              </p>
            </div>
            <div className="flex aligncenter">
              <p>
                {' '}
                <b> Preço: </b>
                {' ' + x.price}{' '}
              </p>
            </div>
            <div className="flex aligncenter">
              <p>
                {' '}
                <b> Descrição: </b>
                {x.description}{' '}
              </p>
            </div>
            <div className="flex aligncenter">
              <p>
                {' '}
                <b> Quantidade: </b>{' '}
              </p>
              <input
                type="text"
                name="quantidade"
                placeholder="alterar quantidade"
                className="input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value="Salvar" className="variacoesButtons" />
          <button onClick={() => a.deletePost(x.id,x.text)} className="variacoesButtons">
            Deletar
          </button>
        </div>
      </div>

);
  
}
export default Variacoes;
