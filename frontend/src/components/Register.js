import { React, useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin] = useState(false);

  async function registerUser(event) {
    event.preventDefault();
    // const response = await fetch('http://127.0.0.1:3000/register', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    const response = await fetch('https://sevenguitars.herokuapp.com/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        cpf,
        email,
        password,
        admin,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data) {
      alert('Registro bem sucedido');
    } else {
      alert('Falha no Registro');
    }
  }
  return (
    <div className="loginContainer">
      <h1> Register </h1>
      <form className="Center" onSubmit={registerUser}>
        <label className="Center">
          Nome:
          <input
            type="text"
            value={name}
            name="name"
            className="login"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome Completo"
          />
          Documento de Identificação (CPF):
          <input
            type="text"
            value={cpf}
            name="cpf"
            className="login"
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />
          Email:
          <input
            type="text"
            value={email}
            name="email"
            className="login"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          Senha:
          <input
            type="text"
            value={password}
            name="senha"
            className="login"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </label>
        <label>
          <input type="submit" value="Enviar" />
        </label>
      </form>
    </div>
  );
}

export default Register;
