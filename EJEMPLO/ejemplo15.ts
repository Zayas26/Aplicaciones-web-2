//Instalar TypeScript
//npm i -g typescript

//Compilar un archivo de typeScript
function saludar(nombre) {
    return "Hola, " + nombre;
}
//console.log(saludar("Pelle"));



//VARIABLES

//Boolean
let esVerdadero = true;
console.log(esVerdadero);



//Number
let entero: number = 6;
let decimal: number = 6.5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Entero: " + entero + "\nDecimal: " + decimal + "\nHex: " + hex + "\nBinario: " + binary + "\nOctal: " + octal)



//String
let marca: string = "toyota";
let modelo: string = "tacoma";
console.log("Modelo: " + modelo + "\nMarca: " + marca);
// Template Strings
let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;
console.log("Impresion: " + impresion);



//Arrays
let listaDeNumeros: number[] = [1, 2, 3];
console.log(listaDeNumeros["En la posicion 3 esta: " + 2]);



//Tuplas
let futbolista: [string, number];
futbolista = ['Ronaldhino', 20]
console.log(`El nombre es ${futbolista[0]} y su edad es ${futbolista[1]}`);



//Enums
enum marcasDeAutos {
    Toyota = 100,
    Chevrolet = 0,
    Ford = 0
}
let tacoma: marcasDeAutos = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);



//Any
let variablesSinTipo: any = `Hola pepe`;
console.log(variablesSinTipo);
variablesSinTipo = 96;
console.log(variablesSinTipo);



//Unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;
console.log(valorDesconocido)



//Void
function saludar2(): void {
    console.log("Hola Mundo... Buenon't");
}
saludar2();



//Null y Undefined
let variablesSinDefinir: undefined = undefined;
let variableNula: null = null;
console.log(variableNula);



//Never
//Esta función no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}
//Esta funcion no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}
//Esta función no finaliza ya que posee un loop infinito
function LoopInfinito(): never {
    while (true) { }
}

//Objects
declare function crear(o: object): void;

//Union
function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
    if (typeof id === "string") {
        console.log(`El ID es: ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El ID es: ${(id as number).toFixed(2)}`);
    }
}
imprimirId("Este_es_mi_ID");
imprimirId(100.99999);
imprimirId(1);
imprimirId("abc");

//Assertion
let algunValor: unknown = "Esto es un string";
let longitudDelString: number = (algunValor as string).length;

//Se puede llevar a cabo con <tipo> antes de la var 
let algunValor2: unknown = "Este es un string";
let longitudDelString2: number = (<string>algunValor).length;

//Functions
function saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
}
saludar3("Nubia");

// Retorno de la función
function elevarAlCuadrado(base: number): number {
    return base * base;
}
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//Funciones Anónimas
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach((s) => {
    console.log(s.toUpperCase());
})

//Aliases
type Punto = {
    x: number;
    y: number;
}
function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada X es : ${punto.x}`);
    console.log(`La coordenada Y es : ${punto.y}`);
}
imprimirCoordenada({ x: 10, y: 25 });

//Interfaces
function imprimirEtiqueta(etiqueta: { label: string }) {
    console.log(etiqueta.label);
}
let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);

/* Podemos reescribir el ejemplo anterior definiendo 
una interface que describe los requerimientos anteriores*/
interface Etiqueta {
    label: string;
}
function imprimirEtiqueta1(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
};
let miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta 1" };
imprimirEtiqueta1(miEtiqueta1);

//Propiedades de las interfaces
interface Cuadrado {
    color?: string;
    ancho: number;
}
function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });

//Interfaces vs types
interface Transporte {
    nombre: string;
}
type Figura = {
    nombre: string;
}
//Extender
interface Auto4 extends Transporte {
    ruedas: number;
}
type Cuadrado2 = Figura & {
    lados: 4;
}

//Literales
function imprimir(estadoCivil: `soltero` | `casado`) {
    console.log(estadoCivil);
}
imprimir(`soltero`);
//Funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn("Hola Mundo")
}
function imprimirEnConsola(s: string) {
    console.log(s);
}
saludar(imprimirEnConsola);

//PARAMETROS

//OVERLOAD
function longitud(a: any[]): number;
function longitud(x: string): Number;
function longitud(x: any): number{
    return x.length;
}
console.log(longitud("Hola Mundo")); 
console.log(longitud([1, 2, 3, 4, 5]));

//THIS
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function() {
        this.admin = true;
    },
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

//PARAMETROS REST
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

//PARAMETROS DESTRUCTING
function sumar(num) {
    return num.a + num.b + num.c;
}
const numeros = { a: 1, b: 2, c: 3};
console.log(sumar(numeros));

function sumar2(a, b, c){ 
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3}));

function sumar3({ a, b, c }: { a:number; b: number; c: number }): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));

//TIPOS OBJETO
function saludar5(persona: { nombre: string; edad: number }){
    return `Hola ${persona.nombre}`;
}
console.log(saludar5({ nombre: "Luis", edad: 22}));
interface Persona {
    nombre: string;
    edad: number;
}
function saludar6(persona: Persona) {
    return `Hola ${persona.nombre}`;
}
console.log(saludar6({ nombre: "Elena", edad: 25}));

//MODIFICADORES DE PROPIEDADES
//PROPIEDADES OPCIONALES
interface Computadora2{
    os: "Windows" | "Linux" | "Mac";
    monitor?: "crt" | "led";
    memoria: number;
    procesador: "intel" | "amd";
}
function imprimir1(computador: Computadora2) {
   //console.log(`Sistema operativo ${Computadora2.os}`);
   //console.log(`Sistema operativo ${Computadora2.memoria}`);
   //console.log(`Sistema operativo ${Computadora2.procesador}`);
}
imprimir1({
    os: "Windows",
    memoria: 8,
    procesador: "intel",
})

//Readonly properties
interface Perro{
    readonly raza: string;
}
const miCachorro: Perro = { raza: "Shitzu" };
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);
//solo acepta propiedades
//PROBLEMA
interface Persona1 {
    edad: number;
}
interface EdadNoEscribible {
    readonly edad: number;
}
const Luis: Persona1 = { edad: 20 };
const Pedro: EdadNoEscribible = Luis;
Luis.edad++;
//Pedro.edad++;
console.log(`La edad de Luis es: ${Luis.edad}`);
console.log(`La edad de Pedro es: ${Pedro.edad}`);

//EXTENDER TIPOS
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string; 
    pais: string;
    codigoPostal: string;
}
interface DireccionDeApartamento {
    nombre: string;
    calle: string;
    numero: number;
    unidad: string;
    ciudad: string; 
    pais: string;
    codigoPostal: string;
}
//Mejor hacer extend del anterior
interface DireccionDeUnDepartamento extends Direccion {
    unidad: string;
}
//
interface Computadora1 {
    memoria: string;
    procesador: string; 
    hdd: string;
}
interface sistemaoperativo{
    so: string;
    version: string;
}
interface Portatil extends Computadora1, sistemaoperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}
interface Servidor extends Computadora1, sistemaoperativo {
    conexion: string;
}
//const macbookPro: Portatil = {
//}
const macbookPro: Portatil = {
    memoria: "166",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "2.0",
    bateria: "",
    monitor: "",
    teclado: ""
}
 
//// GENERICOS ////////////////////
interface Caja {
    contenido: any;
}
// 
interface caja1 {
    contenido: unknown;
}
let x: caja1 = {
    contenido: "hola mundo",
};
//Mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log((x.contenido as string).toLocaleLowerCase);
//Podemos enfocar cada tipo para cada caso
interface CajaNumber {
    contenido: number;
}
interface CajaString {
    contenido: string; 
}
interface CajaBoolean {
    contenido: boolean; 
}
function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaString, nuevoContenido: number): void;
function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
function setContenido(caja: { contenido: any }, nuevoContenido: any) {
    caja.contenido = nuevoContenido; 
}
interface Caja2<T> {
    contenido: T;
}
let cajaDeString: Caja2<string> = { contenido: "hola mundo"};
let cajaDeNumero: Caja2<number> = { contenido: 100 };
let cajaDeFecha: Caja2<Date> = { contenido: new Date() };

//// Array Type ////////////////////
const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
};
const misTareas1: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas1);
// Readonly array type
//const miLista2 : ReadonlyArray<string> = ("a", 'b', "c");
//miLista.push("d"); //<--- Esta linea da error
//No existe constructor readonlyarray 
//En lugar de ello podemos asignar un arreglo normal a uno de solo lectura
//const miLista2 = new ReadonlyArray('a','b','c');
const miLista3: ReadonlyArray<string> = ['a','b','c']; 


//// Object type, tuplas ////////////////////
type Auto1 = [string, number]
//const prius : Auto1 ['toyota', 2015]
//const civic : Auto1 ['honda', 2016]
//console.log('El Prius es marca: ', prius[0], ' y modelo: ', prius[1])
//console.log('El civic es marca: ', civic[0], ' y modelo: ', civic[1])
// // // // // // // // // // // // 
const prius1: [string, number] = ["Toyota", 2015];
const [marca1, modelo1] = prius1;
console.log("La marca del prius es: ", marca1); 
console.log("El modelo del prius es: ", modelo1); 



//// Object type, tuplas ////////////////////
type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true]; 
type Auto = readonly [string, number];
const prius: Auto = ["Toyota", 2014];
//prius[0] = 'Honda'; //Esta linea generaria un error
