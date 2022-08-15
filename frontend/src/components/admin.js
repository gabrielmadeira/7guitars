import React from "react";
import Variacoes from "./variacoes";

import { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pecaNome: "corda",
      id: 0,
      value: "",
      price: "",
      description: "",
      quantity: "",
      postArray: [],
      sorted: false,
      newPostArray: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.pushTodo = this.pushTodo.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      "http://localhost:3000/getPartsOfType?section=" + this.state.pecaNome
    );
    const data = await response.json();
    this.setState({ postArray: data.Variacoes });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.pushTodo();
    }
  }

  pushTodo() {
    if (this.state.value) {
      const post = {
        id: this.state.id,
        text: this.state.value,
        price: this.state.price,
        description: this.state.description,
        done: false,
      };

      this.state.postArray.unshift(post);
      this.setState({
        list: this.state.list,
        value: "",
        price: "",
        description: "",
        id: this.state.id + 1,
      });
    }
  }

  deletePost(postId) {
    this.setState({
      postArray: this.state.postArray.filter((post) => post.id !== postId),
    });
  }

  render() {
    return (
      <div className="main">
        <h1> Corda </h1>
        <div className="Center">
          <input
            onKeyPress={this.handleKeyPress}
            value={this.state.value}
            onChange={this.handleChange}
            className="input"
            type="text"
            id="input"
            placeholder="Insira variação "
            autocomplete="off"
          ></input>

          <input
            onKeyPress={this.handleKeyPress}
            value={this.state.price}
            onChange={this.handlePriceChange}
            className="input"
            type="text"
            id="input"
            placeholder="Insira o preço "
            autocomplete="off"
          ></input>
          <input
            onKeyPress={this.handleKeyPress}
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            className="input"
            type="text"
            id="input"
            placeholder="Insira a descrição "
            autocomplete="off"
          ></input>

          <button className="button addButton" onClick={this.pushTodo}>
            Adicionar
          </button>
        </div>

        <div className="todoContainer">
          <Variacoes
            changeDone={this.changeDone}
            deletePost={this.deletePost}
            postList={this.state.postArray}
          />
        </div>

        {this.state.newPostArray.Variacoes}
        {/*
         */}
      </div>
    );
  }
}

export default Admin;
