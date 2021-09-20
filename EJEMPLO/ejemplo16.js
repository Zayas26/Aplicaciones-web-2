//Tercera parte del PDF "Typescript.pdf", páginas 125-174
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//CLASSES
//ELEMENTOS DE LAS CLASES
//CAMPOS DE UNA CLASE
var Punto = /** @class */ (function () {
    function Punto() {
        this.b = 0; // tipo numero
    }
    return Punto;
}());
var miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;
//CLASSES, READONLY
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "mundo";
        if (!nuevoNombre) {
            this.nombre = nuevoNombre; // correcto, asignación es valida dentro del constructor
        }
    }
    Saludo.prototype.asignarNuevoNombre = function (nuevoNombre) {
        //this.nombre = nuevoNombre; //error, no se puede asignar valor fuera del constructor
    };
    return Saludo;
}());
var miNombre = new Saludo("Elio"); // correcto, asignación mediante el constructor
//miNombre.nombre = "Alejandro"; // error, no se puede asignar valor fuera del constructor
//CLASSES, CONSTRUCTORS
var Punto2 = /** @class */ (function () {
    // asignar normal utilizando valores por default
    function Punto2(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Punto2;
}());
var miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);
//SOBRECARGA DEL CONSTRUCTOR
var Punto3 = /** @class */ (function () {
    function Punto3(xs, y) {
    }
    return Punto3;
}());
//CLASSES, SUPER
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        //this.lados = 2; // esto generará un error
        return _super.call(this) || this;
        // a partir de este punto se puede utilizar this
    }
    return Circulo;
}(Figura));
//CLASSES, METHODS
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se est\u00E1 reproduciendo");
    };
    return Video;
}());
var miVideo = new Video("año nuevo");
miVideo.reproducir();
var titulo = "mi graduacion"; // (1)
var Video2 = /** @class */ (function () {
    function Video2() {
    }
    Video2.prototype.asignarTitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo; // esto hace referencia a (1)
        this.titulo = nuevoTitulo; // esto hace referencia a (2)
    };
    return Video2;
}());
//CLASSES, SETTERS Y GETTERS
var Desfile = /** @class */ (function () {
    function Desfile() {
        this._participantes = 0;
    }
    Object.defineProperty(Desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return Desfile;
}());
var desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); // 100
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.encender = function () {
        console.log("El televisor se ha encendido");
    };
    return Television;
}());
var NombreVerificable = /** @class */ (function () {
    function NombreVerificable() {
    }
    NombreVerificable.prototype.verificar = function (nombre) {
        return nombre.toLowerCase();
    };
    return NombreVerificable;
}());
//CLASSES, EXTENDS
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
//CLASSES, SOBRECARGA
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (!!nombre) {
            console.log("Hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
var h = new Hijo();
//CLASSES, ORDEN DE INICIALIZACIÓN DE LAS CLASES
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definicion";
        console.log("Mi nombre es " + this.nombre);
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
//CLASSES, VISIBILITY, PUBLIC
//VISIBILIDAD PUBLIC
var Saludo2 = /** @class */ (function () {
    function Saludo2() {
    }
    Saludo2.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo2;
}());
var inst = new Saludo2();
inst.saludar();
//CLASSES, VISIBILITY, PROTECTED
var Saludo3 = /** @class */ (function () {
    function Saludo3() {
    }
    Saludo3.prototype.getDestinatario = function () {
        return "amigos";
    };
    return Saludo3;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola " + this.getDestinatario()); // accedemos al método protected
    };
    return SaludoEspecial;
}(Saludo3));
var saludo = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario(); //error, no se tiene acceso de forma pública
//HABILITAR LOS MÉTODOS PROTEGIDOS
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base));
var d2 = new Derivada();
console.log(d2.m);
//CROSS-HIERARCHY PROTECTED ACCESS
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada2;
}(Base2));
var Derivada3 = /** @class */ (function (_super) {
    __extends(Derivada3, _super);
    function Derivada3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada3.prototype.imprimirx = function (c1) {
        console.log(c1.x);
    };
    return Derivada3;
}(Base2));
//CLASSES, VISIBILITY, PRIVATE
var Base4 = /** @class */ (function () {
    function Base4() {
        this.x = 0;
    }
    return Base4;
}());
var Derivada4 = /** @class */ (function (_super) {
    __extends(Derivada4, _super);
    function Derivada4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada4.prototype.imprimirX = function () {
        // console.log(this.x); //esta linea generará un error
    };
    return Derivada4;
}(Base4));
var b4 = new Base4();
//console.log(b4.x); // esta linea también generará un error
//CROSS-INSTANCE PRIVATE ACCESS
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimirX = function (otra) {
        console.log(otra.x); // podemos acceder a una propiedad privada de otra instancia
    };
    return A;
}());
var b = new A();
b.imprimirX(new A());
//CLASSES, STATIC MEMBERS
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        // para acceder a una propiedad estática utilizamos this dentro de un método estático
        console.log("El valor de x es: " + this.x);
    };
    MiClase.prototype.imprimirX = function () {
        // para acceder a una propiedad estática usamos el nombre de la clase dentro de un método de una instancia
        console.log("El valor de x en una instancia es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
// para acceder a un método lo hacemos directamente desde la clase
MiClase.imprimirX();
// para acceder a una propiedad estática lo hacemos directamente desde la clase
console.log("El valor obtenido de x es: " + MiClase.x);
var miClase = new MiClase();
miClase.imprimirX();
//Los elementos estáticos pueden ser también public, protected y private.
var MiClase2 = /** @class */ (function () {
    function MiClase2() {
    }
    MiClase2.x = 10;
    return MiClase2;
}());
//console.log(MiClase2.x); //esta línea generará un error
// Property 'x' is private and only accesible within class 'MiClase'
//Los métodos estáticos también se heredan.
var Base5 = /** @class */ (function () {
    function Base5() {
    }
    Base5.saludar = function () {
        console.log("Hola mundo");
    };
    return Base5;
}());
var Derivada5 = /** @class */ (function (_super) {
    __extends(Derivada5, _super);
    function Derivada5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada5;
}(Base5));
Derivada5.saludar();
//PALABRAS RESERVADAS EN CLASES
var base6 = /** @class */ (function () {
    function base6() {
    }
    return base6;
}());
//CLASSES, GENERICS
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
var miCajaDeJuguetes = new Caja(misJuguetes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
var MiCajaDeMaquillaje = new Caja(miMaquillaje);
//CLASSES, THIS TYPES
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
        this.contenido2 = "Test";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var miCaja2 = new Caja2();
var valorRetornado = miCaja2.set("Joyas");
console.log(miCaja2);
console.log(valorRetornado);
//También es posible utilizar this como anotación dentro de los parámetros
var Caja3 = /** @class */ (function () {
    function Caja3(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Caja3.prototype.igualQue = function (otro) {
        return otro.contenido === this.contenido;
    };
    return Caja3;
}());
var caja1 = new Caja3("Joyas");
var caja2 = new Caja3("Joyas");
var caja3 = new Caja3("Maquillaje");
console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
//Esto es diferente de escribir otro: Caja si se tiene una clase derivada, 
//entonces igualQue solo aceptara instancias derivadas de la misma clase.
var Caja6 = /** @class */ (function () {
    function Caja6() {
        this.contenido = "";
    }
    Caja6.prototype.igualQue = function (otro) {
        //return this.contenido === otraInstancia.contenido;
    };
    return Caja6;
}());
var CajaDerivada = /** @class */ (function (_super) {
    __extends(CajaDerivada, _super);
    function CajaDerivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otroContenido = "";
        return _this;
    }
    return CajaDerivada;
}(Caja6));
var base = new Caja6();
var derivada = new CajaDerivada();
//derivada.igualQue(base); // base no extiende de derivada, esto generará un error
// Argument of type 'Caja6' is not assignable to parameter of type 'CajaDerivada'
//CLASSES, PARAMETER PROPERTIES
var Video3 = /** @class */ (function () {
    function Video3(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video3;
}());
var miVideo2 = new Video3("vacaciones", 60, "mp4");
console.log("Mi video de: " + miVideo2.nombre);
console.log("Tiene una duraci\u00F3n de: " + miVideo2.duracion);
console.log("Y el formato es: " + miVideo2.formato);
//CLASSES, CLASS EXPRESSIONS
var miClase3 = /** @class */ (function () {
    function class_1(v) {
        this.contenido = v;
    }
    return class_1;
}());
var miInstancia = new miClase3("Un video de 12 minutos");
console.log("El contenido del video es: " + miInstancia.contenido);
