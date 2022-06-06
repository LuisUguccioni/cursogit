// funcion constructora de objetos
function Auto(marca, modelo){
    this.marca = marca; // la parametro que recibe
    this.modelo = modelo;
    };
    console.log(Auto()); 
    let miAuto = new Auto('Ford', 'Falcon');
console.log(miAuto);
// otra
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas){
        this.energia=this.energia - horas*5;
this.experiencia=this.experiencia+horas*2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
