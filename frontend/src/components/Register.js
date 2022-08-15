import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="loginContainer">
      <h1> Register </h1>
      <form className="Center" onSubmit={registerUser}>
        <label className="Center">
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
