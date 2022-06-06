function reporteDePasajeros(estaciones)
{let 
    pasajeros = [200];
 let total = 200;
 let retorno = [];
  for (let i=1 ; i <= estaciones ; i++) 
    {if (i != 5) {total=total+20;}
  else {total=total+40;}
     pasajeros.push(total);
}
for (let i1=0;i1<pasajeros.length;i1++)
{
    retorno.push('En la estación ' + i1 +' hay '+pasajeros[i1]+' pasajeros arriba del tren');
}
return retorno;
}
//return retorno;
//return(retorno);}
console.log(reporteDePasajeros(5));