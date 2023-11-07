import '../css/Login.css'
 
function CadastroComponente() {
    return (

            <main className="login-conteudo">
        
              <h1 className='login-cadastro-link'>Cadastro do Produto:</h1>
        
              <form className="form">

               <div className="div-EmailSenha">
                 <label for="id_produto" className='login-cadastro-link'>ID Produto</label>
                  <input type="text" name="id_produto" id="id_produto" placeholder="ID"/>
               </div>

                <div className="div-EmailSenha">
                  <label value="text" className='login-cadastro-link'>Descrição: </label>
                  <input type="text" name="text" id="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label value="text" className='login-cadastro-link'>Marca: </label>
                  <input type="text" name="text" id="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label for="marca" className='login-cadastro-link'>Data da Fabricação:</label>
                  <input type="date" name="data-fabricacao" id="data-fabricacao"/>
               </div>

                <div className="div-EmailSenha">
                  <label for="marca" className='login-cadastro-link'>Quantidade em Estoque: </label>
                  <input type="number" name="quantidade-estoque" id="quantidade-estoque" placeholder="..."/>
                </div>
        
                <button type="submit">Cadastrar</button>
              </form>
        
           
          </main>
  )
}

export default CadastroComponente;