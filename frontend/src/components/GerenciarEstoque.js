import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Variacoes from './variacoes';
axios.defaults.withCredentials = true;
function GerenciarEstoque() {
  let [pecaNome, setPecaNome] = useState('corda'); // TODO: change later
  let [id, setId] = useState(0);
  let [value, setValue] = useState('');
  let [price, setPrice] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState(0);
  let [sorted, setSorted] = useState(false);
  let [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios(
      //   'http://localhost:3000/getPartsOfType?section=' + pecaNome
      // );
      const response = await axios(
        'https://sevenguitars.herokuapp.com/getPartsOfType?section=' + pecaNome
      );
      const data = response.data;
      setPostArray(data.Variacoes);
    };
    fetchData();
  }, []);

  async function deletePost(postId, name) {
    setPostArray(postArray.filter((post) => post.id !== postId));
    const obj = { name: name, section: 'corda' };
    // const response = await fetch('http://127.0.0.1:3000/deletePart', {
    //   method: 'DELETE',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },

    //   body: JSON.stringify(obj),
    // });
    const response = await fetch('https://sevenguitars.herokuapp.com/deletePart', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log(data);
  }

  async function addPart(event) {
    if (value) {
      const post = {
        id: id,
        text: value,
        price: price,
        description: description,
        quantity: quantity,
      };

      postArray.unshift(post);

      setValue('');
      setPrice('');
      setDescription('');
      setId(id + 1);
      //todo fix this conversion
      const obj = {
        name: post.text,
        quantity: post.quantity,
        section: 'corda',
        price: post.price,
        description: post.description,
      };
      // const response = await fetch('http://127.0.0.1:3000/registerPart', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(obj),
      // });
      const response = await fetch('https://sevenguitars.herokuapp.com/deletePart', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      console.log(data);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addPart();
    }
  }

  return (
    <div className="main Center">
      <h1> {pecaNome} </h1>
      <div className="flex">
        <div className="flex Center">
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
        </div>
        <button className="button variacoesButtons" onClick={addPart}>
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
    </div>
  );
}

export default GerenciarEstoque;
