console.log(salarios);

// Analisis Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
};

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    return medianaSalarios;
};

// Proyeccion Juanita

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento= [];
    for (let i=1; i < trabajos.length ; i ++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i -1].salario;
        const crecimiento = salarioActual - salarioPasado;
        porcentajesCrecimiento.push(crecimiento/ salarioPasado);
    }
    //console.log(porcentajesCrecimiento);
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    const nuevoSalario = trabajos[trabajos.length - 1].salario + trabajos[trabajos.length - 1].salario* medianaPorcentajesCrecimiento;
    return nuevoSalario;
}

// Analisis por empresas
const empresas = {};
for (persona of salarios){
    for(trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
};
console.log(empresas)

// analisis por empresa

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

// Proyeccion de una empresa
function proyeccionPorEmpresa(nombre){
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => { return medianaEmpresaYear(nombre, year)});
        let porcentajesCrecimiento= [];
        for (let i=1; i < listaMedianaYears.length ; i ++){
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i -1];
            const crecimiento = salarioActual - salarioPasado;
            porcentajesCrecimiento.push(crecimiento/ salarioPasado);
        }
    //console.log(porcentajesCrecimiento);
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        const nuevoSalario = listaMedianaYears[listaMedianaYears.length - 1] + listaMedianaYears[listaMedianaYears.length - 1]* medianaPorcentajesCrecimiento;
        return nuevoSalario;
    }
}

//Top 10% de salarios
function medianaGeneral(){
    const listaMediana = salarios.map(persona => medianaPorPersona(persona.name));
    const mediana = PlatziMath.calcularMediana(listaMediana);
    return mediana;

}

function medianaTop10() {
    const listaMediana = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMediana);
    const cantidad = medianasOrdenadas.length / 10;
    const limite = medianasOrdenadas.length - cantidad;
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    return PlatziMath.calcularMediana(top10);
}