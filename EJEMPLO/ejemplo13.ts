// PROPIEDADES OPCIONALES DE LAS
// INTERFACES
interface Cuadrado{
    color?: string;
    ancho: number;
}
function crearCuadrado(cuadrado: Cuadrado):{ area: number }{
    const area = cuadrado.ancho * cuadrado.ancho;
    return{ area: area};
}
crearCuadrado({ancho: 10});