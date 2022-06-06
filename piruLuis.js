//noanda
//functiondoble (numero) {return numero*2};
//function triple (numero) {return numero*3};
//function aplicarCallback ( numero, operacion ) {operacion(numero)};
//console.log(aplicarCallback(3,'doble'));

//sumarXt.js


//argumentos

function sumarXt() {
    let suma = 0;
  
    for(let i = 0; i < arguments.length; i++) {
      suma += arguments[i];
    }
  
    return suma;
  }
  
  module.exports = sumarXt;
  console.log(sumarXt(100, 10, 6));