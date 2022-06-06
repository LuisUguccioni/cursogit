// esto lo subieron a slck de ej clase 5

const { listar } = require("./funcionesArchivo");
const funcTareas = require("./funcionesArchivo")
const tareas =funcTareas.listar();
//console.log(tareas);
const accion = process.argv[2]
switch (accion) {
    case "listar":
        const tareas =funcTareas.listar();
        console.log("Listado de tareas")
        console.log("-----------------")
        for (let index = 0; index < tareas.length; index++) {
            console.log(`${index+1} . ${tareas[index].titulo} - ${tareas[index].estado}`);
        }
        console.log(tareas)
        break;
        case undefined:
            console.log("Atencion - Tienes que pasar una accion");
            break;
    default:
        console.log("No entiendo que quieres hacer")
        break;
}