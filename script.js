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
console.log('insertamos: ' + 18 + ' -->' +  insertIntoHeap(arrMonticulo, 18));
console.log('insertamos: ' + 2 + ' -->' +  insertIntoHeap(arrMonticulo, 2));
console.log('insertamos: ' + 21 + ' -->' +  insertIntoHeap(arrMonticulo, 21));
console.log('insertamos: ' + 4 + ' -->' +  insertIntoHeap(arrMonticulo, 4));
console.log('insertamos: ' + 7 + ' -->' +  insertIntoHeap(arrMonticulo, 7));
console.log('insertamos: ' + 10 + ' -->' +  insertIntoHeap(arrMonticulo, 10));

//podriamos hacer lo mismo para agregar aleatoriamente valores numericos y que los
//numeros se posicionen segun la regla de monticulo minimo
for (var i = 1; i <20; i++) {
    valor = Math.floor(Math.random() * 300);
    console.log('insertamos: ' + valor + ' -->' +   insertIntoHeap(arrMonticulo, valor));
}