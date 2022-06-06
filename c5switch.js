
function tengoClases(dia) {
	switch (dia) {
    	//Escribe tu código aquí
		case 'lunes':
		console.log("tenés clases");
		break;
		case 'miercoles':
		console.log("tenés clases");
		break;
		case 'viernes':
		console.log("tenés clases");
		break;
		default:
		console.log("no tenés clases")		;
			}
}
console.log(tengoClases('jueves'));

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado ?bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );