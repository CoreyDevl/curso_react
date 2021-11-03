function SeuNome({setNome}){
    return(
        <div>
            <p>Digite um nome qualquer:</p>
            <input onChange={(e) => setNome (e.target.value)} type="text" name="nome" id="nome" placeholder="Digite o nome" />
        </div>
    )
}

export default SeuNome