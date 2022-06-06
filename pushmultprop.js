let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ];
  estudiantes.push({
    "nombre": "Juan",
    "promedio": 5,
    "curso": "iOS"},{
  "nombre": "Miguel",
  "promedio": 2,
  "curso": "Android"
  });
  console.log(estudiantes);
  //
  let estudiantes1= [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ];
let  alumnoDeBaja = {nombre: null, promedio: 0, curso: null};
alumnoDeBaja=estudiantes1.shift();
console.log(estudiantes1);