function puedeSubirse (alturaPersona, vieneConCompania, tieneAfeccionCardiaca)
{return (alturaPersona>=1.5 || (alturaPersona>=1.2 &&vieneConCompania)) && !tieneAfeccionCardiaca}
console.log(puedeSubirse(1.8, true, false));
console.log(puedeSubirse(1.1, true, false));
console.log(puedeSubirse(1.25, false, false));

