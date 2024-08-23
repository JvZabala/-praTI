// ARRAY, objeto, linear, valores tipados

// 1. soma dos elementos de um array

// setando as tipagens, console.log(arr.length) para verificar (4, tamanho do array denominado por length) numero de itens do array.
// valores do array para ambos os exercicios
let sum = 0 
let arr = [10, 20, 30, 40] // array

console.log(arr.length)

// for explicado: (variavel que faz a contagem i = 0, enquanto i for maior que o tamanho do meu array ou seja 0=10, 1=20 2=30 3=40,
// i++ executa o bloco arr e incrementa um a cada ciclo)

for(let i = 0; i < arr.length; i++){
sum += (arr[i]) // soma os elementos do array
}

console.log(sum)

//  exerc 2 encontre o MAIOR NUMERO de um array 

let max = arr[0]

for(let j = 0; j < arr.length; j++){
    if(arr[j] > max){
        max = arr[j] // atualiza o maior numero
    }
}
console.log(max)

// exerc 3 reverter array // reverter diferente de decrescente

let reversed = []

for(let k = arr.length - 1; k >= 0; k--){          // Decrementar -1, k--
    reversed.push(arr[k])
}

console.log(reversed)

// exerc 4 crie um novo array contendo apenas os numeros pares
// não NECESSARIAMENTE nas posições pares haverão numeros pares
// [] denomina o array 
let evens = []

for(let m = 0; m < arr.length; m++){
    if(arr[m] % 2 === 0){ // verifica se é par, ou seja se o resto sobra 0
        evens.push(arr[m]) // adiciona ao elemento, se for par
    }
}

console.log(evens)

// exerc 5 contar ocorrências de um valor, quantas vezes um valor de repetiu em um array

let vet = [10, 10, 7, 5, 10]
let value = 10
let count = 0

for (let i = 0; i < vet.length; i++) {
    if (vet[i] === value) {
      count++;
    }
  }
  

console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)

// arrays/vetores multidimencionais
// array matriz com 3 arrays dentro 

let matriz = [
    [1, 2, 3], // 0 array
    [4, 5, 6], // 1 
    [7, 8, 9]  // 2
];
  
//   console.table(matriz);
  
// console.log(matriz[0][2])    // linha, coluna; = correspondendo o numero 3


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`);
    }
  }
  
// soma entre matrizes 

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];

  let resultado = []

  if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
    throw new Error("Os arrays devem ter o mesmo tamanho.");
}

for (let i = 0; i < arr1.length; i++) {
    let somaLinha = [];
    for (let j = 0; j < arr1[i].length; j++) {
      somaLinha.push(arr1[i][j] + arr2[i][j]);
    }
    resultado.push(somaLinha);
  }
  
  console.table(resultado);
  