import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Variacoes(obj) {
  const [quantity, setQuantity] = useState(0);
  const postArray = obj.postList;

  async function updateQuantity(postId) {
    postArray.filter((post) => {
      if (post.id === postId) {
        console.log('POST: ', post);
        post.quantity = quantity;
        // obj.

        // const response = await fetch('http://localhost:3000/updateQuant', {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body:{

        //   }
        // });
      }
    });
<<<<<<< HEAD
    // const data = await response.json();
    // console.log(data);
  }

  async function deletePost(postId, name) {
    const response = await fetch('http://localhost:3000/deletePart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log(data);
=======
>>>>>>> 599d4e3c25df04221253d1eda9d934287e149e31
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
<<<<<<< HEAD
                <b> Quantidade: </b>
                {x.quantity}{' '}
              </p>
=======
                <b> Quantidade: </b> {x.quantity}{' '}
              </p>
            </div>
            <div className="flex aligncenter">
              <input
                type="text"
                name="quantidade"
                placeholder="alterar quantidade"
                className="input"
                onChange={(e) => setQuantity(e.target.value)}
              />
>>>>>>> 599d4e3c25df04221253d1eda9d934287e149e31
            </div>
            <input
              type="text"
              name="quantidade"
              placeholder="alterar quantidade"
              className="input"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="flex aligncenter"></div>
          </div>
          <button
            onClick={() => {
              setQuantity(0); // TODO: gambiarra MUDAR
              return updateQuantity(x.id);
            }}
            className="variacoesButtons"
          >
            Salvar
          </button>
          <button
            onClick={() => obj.deletePost(x.id, x.text)}
            className="variacoesButtons"
          >
            Deletar
          </button>
        </div>
      </div>
    ));

    return posts;
  }
}
export default Variacoes;
