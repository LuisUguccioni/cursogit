let fs = require('fs');
//const { moveMessagePortToContext } = require('worker_threads');
console.log(1);
	let datos = fs.readFileSync(__dirname + '/pruebanode.txt','utf-8');
    console.log(datos);
//
let moment = require('moment');
console.log(moment().format('MM DD YYYY')); // fecha del dia
console.log(moment().format('MMM DD YY')); 