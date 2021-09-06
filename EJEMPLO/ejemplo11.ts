//TIPOS TYPE ASSERTION
let algunvalor: unknown = "esto es un string";
let longitudDelString: number = (algunvalor as string).length;
console.log(longitudDelString);
//otra manera de hacer lo mismo
let algunvalor2: unknown = "esto es un string";
let longitudDelString2: number = (<string>algunvalor2).length;
console.log(longitudDelString2);
//TIPOS FUNCIONS
//ANOTACIONES PARA LOS PARÁMETROS DE UNA FUNCIÓN
function saludar3(nombre: string){
    console.log(`hola ${nombre}`);
}
saludar3("Nubia");
//TIPOS DE VALOR DE RETORNO DE LA FUNCIÓN
function elevarcuadrado(base: number): number {
    return base * base;
}
let numerobase = 10;
let numeroalcuadrado = elevarcuadrado(numerobase);
console.log(numeroalcuadrado);
//FUNCIONES ANÓNIMAS
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});
//TIPOS ALIASES
type Punto = {
    x: number;
    y: number;
}

function imprimircoordenada(punto: Punto){
    console.log(`La coordenada x es: ${punto.x}`);
    console.log(`La coordenada y es: ${punto.y}`);
}
imprimircoordenada({ x: 10, y: 25 });
