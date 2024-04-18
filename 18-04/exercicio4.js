const pessoa = {
    nome: "isabela"
    }
    function novoObjeto(objeto){
    const novaPessoa = {
        ...objeto,
        nome2: 'Joao',
        idade: 19,
        comidas : ['sushi', 'strogonoff', 'açai']
    }
console.log(`O nome da pessoa é ${novaPessoapessoa.nome}, suas comidas favoritas são ${novaPessoa.comidas[2]} seu melhor amigo se chama ${novaPessoa.nome2[0]} e tem  ${novaPessoa.idade[1]} anos`)
}
novoObjeto(pessoa)

