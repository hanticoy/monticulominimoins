

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
        else {
            break; //esto es para acelerar un poco el proceso
        }
        i--;
    }

    return arr;
}

console.log('METODO RECORRIDO COMPLETO, MAS COSTOSO EN TIEMPO PERO PARA DEJAR SIEMPRE ORDENADO');
//pruebas unitarias para agregar valores distintos al arreglo y que se posicionen correctamente
let arrMonticulo = [];

console.log('insertamos: ' + 15 + ' -->[' + insertIntoHeap(arrMonticulo, 15) + ']');
console.log('insertamos: ' + 30 + ' -->[' + insertIntoHeap(arrMonticulo, 30) + ']');
console.log('insertamos: ' + 3 + ' -->[' + insertIntoHeap(arrMonticulo, 3) + ']');

//podriamos hacer lo mismo para agregar aleatoriamente valores numericos y que los
//numeros se posicionen segun la regla de monticulo minimo

for (var i = 1; i < 5; i++) {
    valor = Math.floor(Math.random() * 300);
    console.log('insertamos: ' + valor + ' -->[' + insertIntoHeap(arrMonticulo, valor) + ']');
}


console.log('');

console.log('METODO REFINADO: PARA DEJAR EL VALOR INGRESADO EL LA POSICIÓN MINIMA POSIBLE');
function MinHeap() {
    this.Arreglo = [];
    this.insert = function (val) {
       
        // console.log('entro:' + val)
        if (this.Arreglo.length == 0) { 
            this.Arreglo.push(undefined); 
            this.Arreglo.push(val);

            // console.log('entro:' + val + ' lo agrego:' + this.Arreglo);
            return;
        }
        
        this.Arreglo.push(val)
        // console.log('entro:' + val + ' lo agrego:' + this.Arreglo);

        let indice = this.Arreglo.length - 1;
        let indicepadre = Math.trunc(indice/2);

        // console.log('evalua:' + (this.Arreglo[indicepadre] > this.Arreglo[indice]));

        while (this.Arreglo[indicepadre] > this.Arreglo[indice]) {
            this.Arreglo[indice] = this.Arreglo[indicepadre]; 
            this.Arreglo[indicepadre] = val;
            indice = indicepadre;
            indicepadre = Math.trunc(indice/2);
        }

        // console.log('salio:' + this.Arreglo);
    }
}

let myMinHeap = new MinHeap();
myMinHeap.Arreglo = [];

for (var i = 1; i < 10; i++) {
    valor = Math.floor(Math.random() * i);
    myMinHeap.insert(valor);
}
console.log(myMinHeap.Arreglo);