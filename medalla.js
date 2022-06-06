function medallaSegunPuesto (puesto)
{ let tipo;
if (puesto == 1){tipo="Oro";}
else if (puesto == 2)
{tipo="Plata";}
else if (puesto == 3)
{tipo="Bronce";}
else {tipo="Seguí participando";}
return tipo;}
console.log(medallaSegunPuesto(5));