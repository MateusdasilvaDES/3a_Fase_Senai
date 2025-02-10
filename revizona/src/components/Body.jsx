import Avisos from './Avisos'
import './Body.css'
import Demo2 from './Demo2'
import Demont from './Demont'

function Body() {
  return (
    <div className='container-body'>
      <h1>Empresa de logos</h1>
      <Demont />
      <Avisos/>
      <Demo2/>
    </div>
  )
}

export default Body
