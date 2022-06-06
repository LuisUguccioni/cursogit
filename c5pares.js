function noParesDeContarImparesHasta(numero){
    let cantidad =0;
    for(vuelta=0; vuelta <=numero; vuelta++) {vuelta%2==0?cantidad++:''}
    return cantidad;// Escribe aqui tu código
}
console.log(noParesDeContarImparesHasta(2));