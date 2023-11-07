import '../css/Login.css'
 
function LoginComponente() {
    return (

            <main className="login-conteudo">
        
              <h1 className='login-cadastro-link' >Login</h1>
        
              <form className="form">
                <div className="div-EmailSenha">
                  <label value="email" className='login-cadastro-link'>Email:</label>
                  <input type="email" name="email" id="email"/>
                </div>
        
                <div className="div-EmailSenha">
                  <label value="pwd" className='login-cadastro-link'>Senha:</label>
                  <input type="password" id="pwd" name="pwd"/>
                </div>
        
                <button type="submit">Entrar</button>
              </form>
        
            <div className="cadastrar">
              <p className='login-cadastro-link'>Ainda não possui uma conta?</p>
              <a href="/">Cadastre-se</a>
            </div>
          </main>
  )
}

export default LoginComponente;