// let thingList = Array()

// thingList = ['hardware'] = Array()
// thingList = ['fruits'] = Array()
// thingList = ['People'] = Array('Aristoteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'

// console.table(thingsList)

let fruitslist = Array()

 fruitslist[0] = 'Maça'
 fruitslist[1] = 'Banana'
 fruitslist[2] = 'Melancia'
 fruitslist[3] = 'Uva'
 fruitslist[4] = 'Morango'


// gemini 
//  let fruitsList = []; // Corrigido o nome da variável para seguir convenções

// fruitsList[0] = 'Maçã'; // Corrigido a ortografia de "Maça"
// fruitsList[1] = 'Banana';
// fruitsList[2] = 'Melancia';
// fruitsList[3] = 'Morango';
// fruitsList[4] = 'Morango';

// console.log(fruitsList.indexOf("Morango"));

// let index = fruitsList.indexOf('Morango'); // Corrigido o espaço após "let index"

// if (index === -1) {
//   console.log('Elemento não existe');
// } else {
//   console.log('O elemento existe e está na posição: ' + index); // Corrigido a sintaxe da interpolação de strings
// }

 
//  console.log(fruitslist.sort())

//  let numberlist = []

//  numberlist[0] = 10
//  numberlist[1] = 12
//  numberlist[2] = 0
//  numberlist[3] = 16
//  numberlist[4] = 7
//  numberlist[5] = 9

//  // sort 
//   console.log(numberlist.sort((a,b) => a - b))

function calculateLandArea(num1, num2) {
    let area = num1 * num2
    return area
}
//  calcula a area, largura altura

let width = 10
let height = 200

teste = calculateLandArea(width, height)

console.log(teste) // crase `` necessaria

// exerc 3

let alfabeto = ['A', 'D', 'C', 'B', 'F'];

function ordena(arrayASerOrdenado) {
  return arrayASerOrdenado.sort();
}

console.log(ordena(alfabeto));


