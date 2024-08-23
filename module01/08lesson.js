// exerc lista 1 estruturas de controles condicionais
// exerc 1

 const prompt = require('prompt-sync')()

// const num1 = Number(prompt('Digite um número: '))

// if(num1 > 0) {
//     console.log('O número informado é positivo! ')
// } else if (num1 < 0) {
//     console.log('O número informado é negativo!')
// } else {
//     console.log('O número é zero.')
// }

// exerc 2 leia um ano bissexto

// const year = Number(prompt('informe um ano'))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto`)
// } else {
//     console.log(`${year} não é um ano bissexto`)
// }

// exerc 3 Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a
// média e use uma estrutura if/else para determinar o conceito (A, B, C,
// D, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let grade1 = Number(prompt('informe a primeira nota: '))      
// let grade2 = Number(prompt('informe a segunda nota: '))      
// let grade3 = Number(prompt('informe a terceira nota: '))      

// const avg = (grade1 + grade2 + grade3)/3

// if(avg >= 90){
//     console.log(`A média das é ${avg.toFixed(2)}`)
//     concept = 'A'
// }
// else if(avg >= 70){
//     console.log(`A média das é ${avg.toFixed(2)}`)
//     concept = 'B'
// } else {
//     console.log('Reprovado.')
// }
// console.log ('O conceito do aluno é: ' + concept)


// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// let age = Number(prompt('informe a sua idade: '))

// let ageRange 

// if(age >= 0 && age <=12){
// ageRange = 'criança'
// } else if(age >= 13 && age <+17){
//     ageRange = 'Adolescente'
// } 
//  else if(age >= 18 && age <+65){
//     ageRange = 'Adulto'
// } else {
//     ageRange = 'Idoso'
// }

// switch(ageRange) {
//     case 'Criança' :
// console.log('Você é um(a) criança')
// break
//     case 'Adolescente' :
// console.log('Você é um(a) Adolescente')
// break
//     case 'Adulto' :
// console.log('Você é um(a) Adulto')
// break
// default:
//     console.log('Idoso')
// }

//exerc 10 Encontre o maior divisor comum (MDC) de dois números
//Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

// let num1 = Number(prompt('Informe valor 1: '))
// let num2 = Number(prompt('Informe valor 2: '))

// let a = num1 
// let b = num2 

// do {
//     let temp = b 
//     b = a % b
//     a = temp
// } while(b !== 0)

//     const MDC = a 

//     console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)

// exerc primos  Escreva um algoritimo para imprimir os 50 primeiros numeros primos maior que 100.
// obs: numero primo é aquele divisivel somente por 1 e ele mesmo.

// arrays = objeto 

 let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['Joao'] = '10'

let motos = Array('CBR', 'Ninja', 10)

let livros = ['Senhor dos anéis', 'O hobbit', 'Harry Potter', 'Sherlock']

// livros.push('Sherlock HOlmes')
// livros.unshift('1984')
livros.pop(1)
//livros.shift()
livros.splice(0,2)
console.log(livros)

// if pop before splice, will alterate the order in let livros, popping O hobbit, transforming harry to 1.
