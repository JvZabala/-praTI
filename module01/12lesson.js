// objetos, declarado com chaves

let serie = {
   nome: "The House of Dragon", 
   genero: "Ação, Fantasia, Medieval", 
   temporadas: 4,
   status: "Em andamento", 
   classificao: 18,
   nrEpisodios: {
    temp1: 10,
    temp2: 12,
    temp3: 8,
    temp4: 20,
   },

   mostrarCaracteristicas: function() {
   return `O nome da serie é: + ${this.nome} + e sua classificação é para maiores de + ${this.classificao}`    
   }
}

console.log(serie.mostrarCaracteristicas())

// exerc obj livro

let livro = {

   titulo: "O nome do Vento", 
   autor: "Jurema",
   genero: "Ação, Magia, Fantasia, Medieval", 
   capitulos: 40,
   paginas: 500,
   status: "Em andamento", 
   classificao: 16,

   mostrarCaracteristicas: function() {
    return (this.titulo + " foi escrito por " + this.autor);
  }
}

console.log(livro.mostrarCaracteristicas())

//

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate street",
    idade: 16
}

atleta.nacionalidade = 'Brasil'
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}

atleta.celebrarVitoria = function () { return "GANHEI!" }

console.log(atleta)
console.log(atleta.celebrarVitoria())

// 



function Computador(processador, gpu, ram, armazenamento) {
    this.processador = processador;
    this.gpu = gpu;
    this.ram = ram;
    this.armazenamento = armazenamento;
  
    this.ligar = function() {
      console.log(`${this.processador} está funcionando!`);
    };
  
    this.mostrarEspecificacoes = function() {
      return {
        processador: this.processador,
        gpu: this.gpu,
        ram: this.ram,
        armazenamento: this.armazenamento
      };
    };
  }
  
  let pc = new Computador("i9", "RTX4090", "16GB", "500GB SSD");
  console.log(pc.mostrarEspecificacoes());
  
// FOR IN , FOR OUT



for (let key in jogo1) {
    console.log(`${key}: ${jogo1[key]}`);
  }
  