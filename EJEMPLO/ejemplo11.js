//TIPOS TYPE ASSERTION
var algunvalor = "esto es un string";
var longitudDelString = algunvalor.length;
console.log(longitudDelString);
//otra manera de hacer lo mismo
var algunvalor2 = "esto es un string";
var longitudDelString2 = algunvalor2.length;
console.log(longitudDelString2);
//TIPOS FUNCIONS
//ANOTACIONES PARA LOS PARÁMETROS DE UNA FUNCIÓN
function saludar3(nombre) {
    console.log("hola " + nombre);
}
saludar3("Nubia");
//TIPOS DE VALOR DE RETORNO DE LA FUNCIÓN
function elevarcuadrado(base) {
    return base * base;
}
var numerobase = 10;
var numeroalcuadrado = elevarcuadrado(numerobase);
console.log(numeroalcuadrado);
//FUNCIONES ANÓNIMAS
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimircoordenada(punto) {
    console.log("La coordenada x es: " + punto.x);
    console.log("La coordenada y es: " + punto.y);
}
imprimircoordenada({ x: 10, y: 25 });
