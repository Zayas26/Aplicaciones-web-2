//¿CÓMO DEFINIR UTILIZAR UNION EN TYPESCRIPT?
function imprimirId(id) {
    console.log("El Id es: " + id);
}
imprimirId(1);
imprimirId('abc');
//¿COMÓ TRABAJAR CON UNIONES?
function imprimirId2(id2) {
    if (typeof id2 === "string") {
        console.log("El id es: " + id2.toUpperCase());
    }
    else {
        console.log("El id es: " + id2.toFixed(2));
    }
}
imprimirId2('este_es_mi_id');
imprimirId2(100.234234123);
