function puedeJubilarse (edad, genero, aniosAporte)
{ function estaEnEdad(edad, genero) {
    return (genero == 'F' && edad >= 60) || (genero == 'M' && edad >= 65 ) }
  function tieneSuficientesAportes(aniosAporte) {
      return aniosAporte>=30;
  }

    //return aniosAporte>=30 && ((genero=='F' && edad >=60) || (genero =='M' && edad >=65));
    return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}
console.log(puedeJubilarse(65, 'M',30));
console.log(puedeJubilarse(60, 'M',30));
console.log(puedeJubilarse(65, 'F',30));
console.log(puedeJubilarse(65, 'M',29));
console.log(puedeJubilarse(64, 'M',30));
console.log(puedeJubilarse(20, 'F',30));

