//console.log('  Soy un ser  humano  '.trim());
///console.log('Soy un ser  humano'.trim());
//console.log('Soy un ser  humano'.slice(-7,-4))

function menciona (texto,palabra)
{if (texto.indexOf(palabra) != -1)
{console.log('verdad');
    return(true);
}
else
{console.log('falso');
    return(false);
    }};
let reto = (menciona('estoy yendo','yendo'));
console.log(reto);