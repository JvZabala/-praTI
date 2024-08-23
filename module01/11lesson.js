// functions 

// let teste = function(){
//     console.log('Hello World!')
// }

// teste()

function showFunction(successCallback, errorCallback) {
    if (false) {
      // Este bloco nunca será executado, pois a condição é sempre falsa
    } else {
      successCallback("Requisição bem sucedida");
    }
    errorCallback("Erro na requisição"); // Esta linha sempre será executada
  }
  
  let successCallback = function(message) {
    console.log(message);
  };
  
  let errorCallback = function(message) {
  console.error(message)  // O corpo desta função está vazio
  };
  
  showFunction(successCallback, errorCallback)

  // 45 min

