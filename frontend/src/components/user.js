function Login() {
  return (
    <div className="loginContainer">
      <h1> User </h1>
      {selectFromVariants(exemplo.Variacoes)}
    </div>
  );
}

export default Login;

function selectFromVariants(variacoes) {
  return variacoes.map((x) => (
    <div>
      <div className="flex aligncenter">
        <h3> Nome:</h3>
        <p> {x.nome} </p>
      </div>
      <div className="flex aligncenter">
        <h3> Preço: </h3>
        <p> {x.preco} </p>
      </div>
      <div className="flex aligncenter">
        <h3> Descricao: </h3>
        <p> {x.descricao} </p>
      </div>
      <input type="radio" value={x.nome} name="gender"/> 
    </div>
  ));
}

const exemplo = {
  Nome: "Corda",
  Variacoes: [
    {
      nome: "nylon",
      preco: "12",
      descricao: "plastico",
    },
    {
      nome: "aco",
      preco: "22",
      descricao: "ferro",
    },
  ],
};
