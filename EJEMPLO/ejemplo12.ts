//TIPOS INTERFACES
function imprimirEtiqueta (etiqueta: {label:string}){
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

//Podemos reescribir el ejemplo anterior definiendo una interface que
//describe los requerimientos anteriores.
// interface etiqueta {
//     label: string;
// }
// function imprimirEtiqueta(etiqueta: etiqueta){
//     console.log(etiqueta.label);
// };
// let miEtiqueta = { numero: 10, label: "esta es mi etiqueta" };
// imprimirEtiqueta(miEtiqueta);