/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/

// // Objeto com as notas dos alunos
const professor = {
    name: 'Biruleibe Aibe',
    subject: 'Memes',
    grades: { 
        student1: 6.5,
        student2: 2.0,
        student3: 6.0,
        student4: 6.5,
        student5: 4.5
    }
}

// // Variáveis para armazenar a soma das notas e o número de alunos

let sumGrades = 0
let numberOfStudents = 0

// // Calcula a média das notas

for(let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}

// // Verifica se a média está acima da média de aprovação

let average = sumGrades / numberOfStudents

console.log(`A nota média da turma é: ${average.toFixed(2)}`);
console.log( average >= 6
     ? `${professor.name} está acima da média.`
    : `${professor.name} está abaixo da média.`
)

/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

const livraria = [
    {titulo: "O Hobbit", autor: "J.R.R.", ano: 1925},
    {titulo: "Harry Potter", autor: "J.K.", ano: 1999},
    {titulo: "Narnia", autor: "C.S.", ano: 2010},
]

for(let livro of livraria){
    if(livro.ano < 2000)
    console.log(`O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.ano}.`)
}

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
{title: "Star Wars", genre: "Fantasy"},
{title: "Interstelar", genre: "Sci-fi"},
{title: "Top Gun", genre: "Action"},
{title: "O Poderoso Chefao", genre: "Mafia"},
{title: "The Avengers", genre: "Heroes"},
{title: "Deadpool", genre: "Heroes"},
{title: "Jaura", genre: "Comedia"},

]


let genreCount = {};

movies.forEach(movie => {
    if(genreCount[movie.genre]) {
        genreCount[movie.genre]++;
    } else {
        genreCount[movie.genre] = 1;
    }
});

for(let genre in genreCount) {
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`);
}
