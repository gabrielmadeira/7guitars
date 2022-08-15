import React, { useState } from 'react';
import '../App.css';

function Variacoes(obj) {
  let [quantity, setQuantity] = useState(0);
  let postArray = obj.postList;

  async function updateQuantity(event) {
    event.preventDefault();
    console.log('POST ARRAY: ', postArray); // remover
    console.log('quantity: ', quantity); // remover
    console.log('value: ', event.target); // remover
  }

  if (postArray && obj) {
    const posts = postArray.map((x) => (
      <div key={x.id} className="Center admin campoInsercao ">
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
          <button onClick={() => obj.deletePost(x.id)} className="variacoesButtons">
            Deletar
          </button>
        </div>
      </div>
    ));

    return posts;
  }
}
export default Variacoes;
