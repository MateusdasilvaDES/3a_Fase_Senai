
import { useState } from 'react';
import './Demont.css'

function Demont() {
  const [estado, setEstado] = useState(0)

  function incrementarEstado(){

    setEstado(estado + 1)
  }

  function diminuirEstado(){

    setEstado(estado - 1)
  }

  let cornometro = 0;
  
  function incrementaCornometro(){

    cornometro++
    console.log(cornometro);
    
  }
  function alertarUsuario(){

    alert('Estou funcionando!!')
    
  }


  return (
    <div className='container-demo'>
      <h2>Demo um</h2>
      <button onClick={alertarUsuario}>Clica em mim</button>
      <button onClick={() => {alert("Executei uma arrow function")}}>Exemplo de arrow Function</button>

      <div>
        Cornometro: {cornometro}
        <button onClick={incrementaCornometro}>+</button>
      </div>
      <div>
        Estado: {estado}
        <button onClick={incrementarEstado}>+</button>
        <button onClick={diminuirEstado}>-</button>
      </div>
    </div>
  )
}

export default Demont
