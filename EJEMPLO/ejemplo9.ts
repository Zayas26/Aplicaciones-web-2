//tipos, ANY
let variableSinTipo: any = 'hola pedrito';
variableSinTipo = 100;
console.log(variableSinTipo);
//tipos, UNKNOWN
let valordesconocido: unknown = 4;
valordesconocido = true;
console.log(valordesconocido);
//tipos, void
function saludar2(): void{
    console.log("HOLA MUNDO... CRUEL");
}
saludar2();
//tipos, NULL Y UNDEFINED
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;
//tipos, NEVER
//  Esta función no tiene un punto final ya que dispara una excepción
function error(mensaje: string): never {
    throw new Error(mensaje);
}
//  Esta función no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar Fallo");
}
// Esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while(true){}
}
//TIPOS OBJECTS
declare function crear(o:object): void;
crear({ prop:0 })
crear(null);
crear(undefined);
crear([]);
//false es un tipo primitivo, por lo cual se generara un error
//crear(false);

