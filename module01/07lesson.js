const prompt = require('prompt-sync')()
// exerc tabuada

// let multiplier = Number(prompt('Informe o numero que voce quer a tabuada: '))

// for(let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} = ${multiplier*counter}`)
// }



// calcular a soma dos números de 1 a 100
// lógica 1+2= 3+3= 6 

// let sum = 0
// for(j = 1; i <= 100; i++){
//     sum += i
// }
// console.log(sum)



// imprimam os valores de 1 até 10 em ordem decrescente

// for(let i = 10; i >= 1; i--){
//     console.log(i)

// }

// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// }

// solicitar números ao usuário até que ele insira um valor negativo
// usar do e while

let number
do {
     number = Number(prompt('digite numero:'))

}while(number >= 0 )