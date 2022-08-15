import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Variacoes from './variacoes';

function GerenciarEstoque() {
  let [pecaNome, setPecaNome] = useState('corda'); // TODO: change later
  let [id, setId] = useState(0);
  let [value, setValue] = useState('');
  let [price, setPrice] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState(0);
  let [sorted, setSorted] = useState(false);
  let [postArray, setPostArray] = useState([]);
  let [newPostArray, setNewPostArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'http://localhost:3000/getPartsOfType?section=' + pecaNome
      );
      const data = response.data;
      setPostArray(data.Variacoes);
    };
    fetchData();
  }, []);

  function deletePost(postId) {
    setPostArray(postArray.filter((post) => post.id !== postId));
  }

  async function pushTodo(event) {
    if (value) {
      const post = {
        id: id,
        text: value,
        price: price,
        description: description,
        quantity: quantity,
        done: false,
      };

      postArray.unshift(post);

      setValue('');
      setPrice('');
      setDescription('');
      setId(id + 1);

      const response = await fetch('http://localhost:3000/registerPart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postArray,
        }),
      });
      const data = await response.json();
      console.log(data);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      pushTodo();
    }
  }

  return (
    <div className="main">
      <h1> {pecaNome} </h1>
      <div className="Center">
        <input
          onKeyPress={handleKeyPress}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
          type="text"
          id="input"
          placeholder="Insira variação "
          autoComplete="off"
        ></input>

        <input
          onKeyPress={handleKeyPress}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
          type="text"
          id="input"
          placeholder="Insira o preço "
          autoComplete="off"
        ></input>
        <input
          onKeyPress={handleKeyPress}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          type="text"
          id="input"
          placeholder="Insira a descrição "
          autoComplete="off"
        ></input>

        <button className="button addButton" onClick={pushTodo}>
          Adicionar
        </button>
      </div>

      <div className="todoContainer">
        <Variacoes
          deletePost={deletePost}
          setQuantity={setQuantity}
          postList={postArray}
          setPostArray={setPostArray}
        />
      </div>

      {newPostArray.Variacoes}
    </div>
  );
}

export default GerenciarEstoque;
