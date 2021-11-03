import Button from "./Eventos/Button"

function Event () {
    function meuEvento(){
        console.log("ativando primeiro evento")
    }
    function segundoEvento(){
        console.log('ativando o segundo evento')
    }
    return (
         <div>
             <p>clique para eventos</p>
             <Button event={meuEvento} text="Primeiro evento" />
             <Button event={segundoEvento} text="Segundo evento" /> 
         </div>
    )
}

export default Event
