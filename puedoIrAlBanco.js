function puedoIrAlBanco (diaDeLaSemana , horaActual) {
    return (horaActual>=10 && horaActual<=15) && (diaDeLaSemana != 'Sábado' && diaDeLaSemana != 'Domingo' )};
    console.log(puedoIrAlBanco('Lunes',16));
