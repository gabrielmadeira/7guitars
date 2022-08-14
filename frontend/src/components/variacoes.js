import React from "react";
import "../App.css";

function Variacoes(obj) {
  let postArray = obj.postList;
  if (postArray && obj) {
    const posts = postArray.map((x) => (
      <div key={x.id} className="Center admin ">
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
          </div>
          <button
            onClick={() => obj.deletePost(x.id)}
            className="deleteButton"
          >
            X
          </button>
        </div>
      </div>
    ));

    return posts;
  }
}
export default Variacoes;
