var paises = ['Argentina', 'Cuba', 'Perú'];
paises.forEach(function(pais){
console.log(pais);
});
console.log(paises[paises.length-1]);
mesa  = paises.join();
console.log(mesa);
mesa  = paises.join(' ');
console.log(mesa);
console.log(typeof(mesa));