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
function calcularMediana(lista){
    const listaEsPar = esPar(lista);
    if (listaEsPar){
        let listaPar = [lista[(lista.length/2)-1],lista[(lista.length/2)]];
        return calcularPromedioReduce(listaPar);

    }else{
        return lista[(Math.floor(lista.length/2))];
    }
};