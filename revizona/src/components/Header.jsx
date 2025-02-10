import { useState } from 'react'
import Boas_vindas from './Boas_vindas'
import './header.css'

function Header() {
  
 const [usuario,setUsuario] = useState('')
 const [mensagem, setMensagem] = useState(":)")
 

 function fazerLogin(){

  var nome = prompt("Digite seu nome de usuario:")
  setUsuario(nome)
 }
  return (
    <div className="container-header">

       <h2>loGO</h2>
       <h2>Link1</h2>
       <h2>Link2</h2>
       <h2>Link3</h2>
       {/* {usuario &&  <Boas_vindas nome={usuario} mensagem={mensagem} />} */}
       {usuario ? <Boas_vindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>Login</button> }
    </div>
  )
}

export default Header
