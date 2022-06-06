function trasladar (array1, array2) {
    let elemento = array1.pop();
    array2.push( elemento );
}
let unArray = [1, 2, 3];
let otroArray = [4, 5];
trasladar(unArray, otroArray);
// console.log(unArray) //debería ser [1, 2]
// console.log(otroArray) //debería ser [4, 5, 3
