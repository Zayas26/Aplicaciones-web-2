//tipos, ENUMS
enum MarcasDeAutos {
    Toyota,
    Chevrolet,
    Ford
}
let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);

enum MarcasDeAutos2 {
    Toyota2 = 100,
    Chevrolet2,
    Ford2
}
let tacoma2: MarcasDeAutos2 = MarcasDeAutos2.Toyota2;
console.log(tacoma2);

console.log(MarcasDeAutos[0]);
console.log(MarcasDeAutos2[0]);