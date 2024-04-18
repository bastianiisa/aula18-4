// 1. nome: "Auto da Compadecida", 2 , canal: "Globo", horario: "14h"
//2. nome: "Juca", 
	/*idade: 3, 
	raca: "SRD" 
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
//spread
/*3.
a) false, undefined
b)porque "altura" é inexistente no código*/

const pessoa = {
    nome: "isabela",
    apelidos: ["isa", "bela", "bastiani"]
}
    function objeto(){
    
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}
objeto(pessoa)
const novoObjeto = {
    ...pessoa,
    apelidos2: ["belinha", "basti", "isabola"]
}
console.log(novoObjeto)

//2. 
const pessoa2 = {
    nome: "joao vitor",
    idade: 19,
	profissao: "desenvolvedor"
}
const pessoa3 = {
    nome: "isabela",
    idade: 19,
	profissao: "estudante"
}
function objeto2()
