//copiamos o usuario e sobescrevemos as propriedades nome e idade com novos valores

const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'sao paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'Joao',
    idade: 28
}
console.log(novoUsuario)

//copiando arrays
const listaDeNomes = ["Mika", "Paula", "Vitor"]
const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes)