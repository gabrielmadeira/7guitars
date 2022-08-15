function Register() {
  return (
    <div className="loginContainer">
        <h1 > Cadastrar </h1>
				<form className= "Center">
					<label   >
              <input type="text" name="email" placeholder="seuemail@exemplo.com" className="login" />
              <input type="password" name="senha" className="login" placeholder="suasenha"/>
					</label>
					<label>
						<input type="submit" value="Enviar" />
					</label>
				</form>
    </div>
  );
}

export default Register;
