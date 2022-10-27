

function insertIntoHeap(arr, val) {

    //Comprueba si el array está vacío y que nunca se ha colocado nada en el índice 0.   
    if (arr.length == 0) { arr.push(undefined); }

    //Empuja el valor nuevo en el array.
    arr.push(val)

    // Debes ser capaz de determinar el índice dónde se colocó el valor.
    let i = arr.length - 1;
    let valor = 0;

    // Repite los pasos 3 y 4 hasta que el valor insertado sea mayor que su padre o esté en la parte superior del montículo (que es el índice 1)
    while (i > 0 && arr[i - 1] > arr[i]) {

        valor = arr[i];

        if (arr[i - 1] > arr[i]) { 
            arr[i] = arr[i - 1];
            arr[i - 1] = valor;
        }
        else{
            break; //esto es para acelerar un poco el proceso
        }
        i--;
    }

    return arr;
}


//pruebas unitarias para agregar valores distintos al arreglo y que se posicionen correctamente
let arrMonticulo = [];
let mitexto ="";
mitexto = mitexto + '<p> insertamos: ' + 15 + ' -->[' +   insertIntoHeap(arrMonticulo, 15) + ']<p>';
mitexto = mitexto + '<p> insertamos: ' + 12 + ' -->[' +   insertIntoHeap(arrMonticulo, 12) + ']<p>';
mitexto = mitexto + '<p> insertamos: ' + 99 + ' -->[' +   insertIntoHeap(arrMonticulo, 99) + ']<p>';
mitexto = mitexto + '<p> insertamos: ' + 3 + ' -->[' +   insertIntoHeap(arrMonticulo, 3) + ']<p>';

//podriamos hacer lo mismo para agregar aleatoriamente valores numericos y que los
//numeros se posicionen segun la regla de monticulo minimo

for (var i = 1; i <20; i++) {
    valor = Math.floor(Math.random() * 300);
    mitexto = mitexto + '<p> insertamos: ' + valor + ' -->[' +   insertIntoHeap(arrMonticulo, valor) + ']<p>';
}

let mydata= document.querySelector('.data');
mydata.innerHTML =  mitexto;

