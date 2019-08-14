class Endereco{
    rua:String;
    cep:String;
    numero:String;
    bairro:String;
    cidade:String;
    estado:String;
    salvar(){
        localStorage.setItem((Math.random() * 100).toString(), JSON.stringify(this))
    }
    listar(){
        const lista = []
        const tamanhoDobanco = localStorage.length

        for(let i = 0; i < tamanhoDobanco; i++){
            const IdEndereco = localStorage.key(i)
            const Endereco = localStorage.getItem(IdEndereco)
            lista.push(JSON.parse(Endereco));
        }
    return lista;
    }
}

export default Endereco

