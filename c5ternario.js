const found1 = false;
const found2 = true;
let edad = 28;
let message  = found1 ? 'FOUND' :'not found'; // normal
let message7  = found1 && edad > 18? 'FOUND' :'not found'; // normal
console.log(message7);
let message8  = found1 && edad >= 18? 'FOUND 18' :'not found'; // normal
console.log(message8);
let message1  = found1 ? 'FOUND' : found2 ? 'falsef2':' '; // complicado leer 
// en el siguiente si found 1 es true de loasigna a message3 de lo contrario le asigna el 2do valor( 2 pipes)
let message3 = found1 || 'FOUND PIPE';  
console.log(message);
console.log(message1);
console.log(message3);