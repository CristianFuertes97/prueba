function agregarCaracter(caracter){ 
    let txt = document.getElementById('area');
    txt.value += caracter;
    return txt;
}

function agregarSimbolo(caracter){ 
    let txt = document.getElementById('area');
    txt.value += caracter;
    return txt;
}


function limpiar() {
    let area = document.getElementById('area').value = '';
    return area;
}

function calcular() {
    let valor = document.getElementById('area').value;
    console.log(valor);
    let simbolos = ['+','-','*','/'];
    for (let i = 0; i < simbolos.length; i++){
        if (valor.includes(simbolos[i])){
            let lista = valor.split(simbolos[i]);
            lista = lista.map(numero => + numero);
            console.log(lista);

            if (simbolos[i] == '+'){
                let sumar = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
                document.getElementById('resultado').innerHTML = sumar;
            }
            else if (simbolos[i] == '-'){
                let resta = lista.reduce((acumulador, valorActual) => acumulador - valorActual);
                document.getElementById('resultado').innerHTML = resta;
            }
            else if (simbolos[i] == '*'){
                let multiplicacion = lista.reduce((acumulador, valorActual) => acumulador * valorActual);
                document.getElementById('resultado').innerHTML = multiplicacion;
            }
            try {
                if (simbolos[i] == '/'){
                    let division = lista.reduce((acumulador, valorActual) => acumulador / valorActual);
                    document.getElementById('resultado').innerHTML = division;
                }
            } catch (error) {
                document.getElementById('respuesta').innerHTML = 'Error no se puede dividir entre cero!!';
            }
           
        }
    }
}