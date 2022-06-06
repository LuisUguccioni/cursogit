function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
    return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
 }
console.log(pagoConTarjeta(true, 6,320));
console.log(pagoConTarjeta(true, 8,80));
console.log(pagoConTarjeta(true, 2,215));
console.log(pagoConTarjeta(true, 1,32));