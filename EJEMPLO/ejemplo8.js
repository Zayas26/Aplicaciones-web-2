var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["Toyota2"] = 100] = "Toyota2";
    MarcasDeAutos2[MarcasDeAutos2["Chevrolet2"] = 101] = "Chevrolet2";
    MarcasDeAutos2[MarcasDeAutos2["Ford2"] = 102] = "Ford2";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var tacoma2 = MarcasDeAutos2.Toyota2;
console.log(tacoma2);
console.log(MarcasDeAutos[0]);
