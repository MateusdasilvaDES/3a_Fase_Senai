// function Boas_vindas(props) {
function Boas_vindas({nome, mensagem}) {

  return (
    <div className="container-boasvindas">
      olá, {nome}
      {mensagem}
      {/* <button onClick={() => console.log(props)}>log</button> */}
    </div>
  )
}

export default Boas_vindas
