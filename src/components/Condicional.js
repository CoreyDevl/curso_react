import {useState} from "react"

function Condicional(){

const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()
function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
 
}
function limparEmail(e){
     
    setUserEmail('')
 
}
   return (
       <div>
           <form>
           <h2>cadastre seu email</h2>
           <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Digite seu e-mail" /> <br />
                       <button type="submit" onClick={enviarEmail}>enviar e-mail</button>
           {userEmail && (
               <div>
                <p>O email do usuário é {userEmail}</p><button onClick={limparEmail}>Limpar Email</button>
               </div>
               )}
           </form>

       </div>
   )
}

export default Condicional
  