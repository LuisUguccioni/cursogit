function asientosDisponibles (libres,asiento)
{  let donde = 0;
    donde = libres.indexOf(asiento);

    if (donde != -1) 
    { return "Felicitaciones, el asiento número "+asiento+" está disponible";}
    else
    {return "Lo sentimos, el asiento número "+asiento+" está ocupado, pero aún quedan "+libres.length+" asientos disponibles"
}
}
console.log(asientosDisponibles ([10,15,16,22],18));