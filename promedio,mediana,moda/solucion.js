function calcularPromedio(lista){
let sumaLista = 0;

for (let i = 0; i< lista.length ; i++){
    sumaLista += lista[i];
}
return sumaLista / lista.length ;

}

// Calcular con el metodo reduce
function calcularPromedioReduce(lista){
    function sumarTodosElementos (valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    };
    const listaSuma = lista.reduce(sumarTodosElementos);
    return listaSuma/lista.length;

}

//Calcular la mediana
function esPar(lista){
    return lista.length % 2 === 0;
};

// Ordenar con sort
function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado -nuevoValor;
    }
    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista
};

function calcularMediana(lista){
    lista = ordenarLista(lista);
    const listaEsPar = esPar(lista);
    if (listaEsPar){
        let listaPar = [lista[(lista.length/2)-1],lista[(lista.length/2)]];
        return calcularPromedioReduce(listaPar);

    }else{
        return lista[(Math.floor(lista.length/2))];
    }
};

function ordenarListaBidimensional(listaDesordenada){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[1] -nuevoValor[1];
    }
    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista
}

// Calcular la moda
function calcularModa(lista){
    const listaCount= {};

    for (let i = 0 ; i < lista.length ; i ++){
        const elemento = lista[i];
        if(listaCount[elemento]){
        listaCount[elemento] += 1;
        } else {
            listaCount[elemento]=1;
        };
    };
    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray);
    const listaMax = listaOrdenada[listaOrdenada.length - 1];
    console.log('La moda es:' + listaMax[0]);
    const moda = listaMax[0];
    return moda;
}
