function productoria (array1)
{//let elem = array1.length;
    let producto = 1;
    //let numero = 0;
    for (let numero=0; numero < array1.length; numero++)
    {producto=producto*array1[numero]}
    return(producto);
}
console.log(productoria([1,4,7]));