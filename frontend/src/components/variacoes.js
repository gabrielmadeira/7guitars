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
      <div key={x.id} className="Center admin ">
        <div className="flex">
          <div className="flex variacoes">
            <div className="varianteContainer">
              <div className="flex aligncenter">
                <h3> Nome:</h3>
                <p> {x.text} </p>
              </div>
              <div className="flex aligncenter">
                <h3> Preço: </h3>
                <p> {x.price} </p>
              </div>
              <div className="flex aligncenter">
                <h3> Descricao: </h3>
                <p> {x.description} </p>
              </div>
              <div className="flex aligncenter">
                <h3> Quantidade: </h3>
                <p> {x.quantity} </p>
              </div>
              <form className="Center" onSubmit={updateQuantity}>
                <label>
                  <input
                    type="text"
                    name="quantidade"
                    placeholder="alterar quantidade"
                    className="login"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </label>
                <label>
                  <input type="submit" value="salvar" />
                </label>
              </form>
            </div>
            <button onClick={() => obj.deletePost(x.id)} className="deleteButton">
              X
            </button>
          </div>
        </div>
      </div>
    ));

    return posts;
  }
}
export default Variacoes;
