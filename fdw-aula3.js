/*
    Fundamentos de Desenvolvimento web - Aula 03

*/

const arrayAmigos = [
    "Morrirce",
    "Julian",
    "Morty"
];

cont = arrayVar = ["SI", 8.5, true, [1,5,6]]

console.log(arrayAmigos);
console.log("Tipo:", typeof arrayAmigos);
console.log("Tipo do elemento 0: ", typeof arrayAmigos[0]);
console.log("Tipo do elemento 1 ", typeof arrayVar[0]);

// add itens no inicio do array
arrayAmigos.unshift("Melman", "Marty")
// exclui o primeiro elem da esquerda para a direita
arrayAmigos.shift();

// add itens no final do array
arrayAmigos.push("Gloria", "MotoMoto");
// exclui o ultimo elem 
arrayAmigos.pop()

//de onde começar, qual retirar, qual adicionar
arrayAmigos.splice(0,0,"Capitão");

//arrayAmigos[5] = "Alex";
console.log("Comprimento do arrayAmigos:", arrayAmigos.length);

let primeiroElemento = arrayAmigos[1];

console.log(arrayAmigos);


console.table(arrayAmigos)



for (let i=0; i<=arrayAmigos.length; i++){
    console.log([i]);
};

arrayAmigos.forEach(element => {  console.log(element)  });