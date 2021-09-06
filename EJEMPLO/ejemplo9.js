//tipos, ANY
var variableSinTipo = 'hola pedrito';
variableSinTipo = 100;
console.log(variableSinTipo);
//tipos, UNKNOWN
var valordesconocido = 4;
valordesconocido = true;
console.log(valordesconocido);
//tipos, void
function saludar2() {
    console.log("HOLA MUNDO... CRUEL");
}
saludar2();
//tipos, NULL Y UNDEFINED
var variableSinDefinir = undefined;
var variableNula = null;
//tipos, NEVER
//  Esta función no tiene un punto final ya que dispara una excepción
function error(mensaje) {
    throw new Error(mensaje);
}
//  Esta función no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar Fallo");
}
// Esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
