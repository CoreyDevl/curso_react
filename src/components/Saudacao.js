import SeuNome from "./SeuNome"

function Saudacao({nome}){
function gerarSaudacao(algumNome){
    return `olá, ${algumNome}, suave?`
}
    return <>
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
}

export default Saudacao