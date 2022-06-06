function sumatoriaBajoImporte (array1) 
{
     let suma = 0;
for (let i=0; i < array1.length; i++)
{if (array1[i] > 0 && array1[i] <= 1000)
    
{
    suma=suma+array1[i]
}
} 
return suma;
}
console.log(sumatoriaBajoImporte([20,-15,1001,800]));