import Event from "./Event"

import { useState} from "react"
function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log(`User ${name} se cadastrou com a senha ${password}`)
        
    }

    const [name, setName] = useState() 
    const [password, setPassword] = useState() 
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" 
            onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha:">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha"  
            onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div><input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form