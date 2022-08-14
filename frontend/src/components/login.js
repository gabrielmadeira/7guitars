function Login() {
  return (
    <div className="loginContainer">
        <h1 > Login </h1>
				<form className= "Center">
					<label className="Center">
						Email:
						<input type="text" name="email" className = "login" />
						Senha:
						<input type="text" name="senha" className= "login"   />
					</label>
					<label>
						<input type="submit" value="Henrique" />
					</label>
				</form>
    </div>
  );
}

export default Login;
