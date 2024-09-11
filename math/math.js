//Cuadrado
console.group('Cuadrado')
const ladoCuadrado =5;
const perimetroCuadrado = ladoCuadrado*4; 
const areaCuadrado = ladoCuadrado**2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado**2
    }
}
console.groupEnd('Cuadrado')
//triangulo
console.group('Triangulo')
const baseTriangulo = 5;
const ladoTriangulo1= 6;
const ladoTriangulo2 = 6;
const alturaTriangulo=5.5;

const perimetroTriangulo = baseTriangulo+ladoTriangulo1+ladoTriangulo2;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log({
    baseTriangulo,
    ladoTriangulo1,
    ladoTriangulo2,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

function calcularTriangulo (lado1, lado2, base, altura){
    return{
        perimetro: lado1+lado2+base,
        area: (base*altura)/2
    };
};

// Triangulo isoceles

function calcularAlturaTriangulo(lados,base){
    if(lados == base){
        console.warn('No es un Triangulo isoceles!')
    }else{
        return Math.sqrt(lados**2 - (base/2)**2);
    }
}
console.groupEnd('Triangulo')

//Circulo

console.group('Circulo')

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = 3.1415;

const circunferencia = diametroCirculo* PI;
const areaCirculo = radioCirculo**2 * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    areaCirculo,
    circunferencia
});

function calcularCirculo(radio){
    return{
        circunferencia: (radio*2)*Math.PI,
        area: Math.PI*(radio**2)
    };
}


console.groupEnd('Circulo')

//Playground activity

function solution(lado1, lado2, lado3) {
    // Tu código aquí 👈
    let lados = [lado1, lado2, lado3];
    unicos = new Set(lados);
  
    if (lados.length == unicos.size) {
      // Si es escaleno, calculamos primero su area
      let s = (lado1 + lado2 + lado3) / 2;
      let area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
  
      // Ahora usamos que A = bh/2, por lo que h = 2A/b
      let altura_a = Math.floor(2 * area / lado1);
  
      // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
      return altura_a;
    } else {
      return false;
    }
}