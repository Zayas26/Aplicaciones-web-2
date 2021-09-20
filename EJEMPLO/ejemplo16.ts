//Tercera parte del PDF "Typescript.pdf", páginas 125-174

//CLASSES
//ELEMENTOS DE LAS CLASES
//CAMPOS DE UNA CLASE
class Punto {
    x: number;
    y: number;
    a; // cualquier tipo
    b = 0; // tipo numero
}

const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;


//CLASSES, READONLY
class Saludo {
    readonly nombre: string = "mundo";
    constructor(nuevoNombre: string) {
        if (!nuevoNombre) {
            this.nombre = nuevoNombre; // correcto, asignación es valida dentro del constructor
        }
    }

    asignarNuevoNombre(nuevoNombre: string){
        //this.nombre = nuevoNombre; //error, no se puede asignar valor fuera del constructor
    }
}

const miNombre = new Saludo("Elio"); // correcto, asignación mediante el constructor
//miNombre.nombre = "Alejandro"; // error, no se puede asignar valor fuera del constructor


//CLASSES, CONSTRUCTORS
class Punto2 {
    x: number;
    y: number;

    // asignar normal utilizando valores por default
    constructor(x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }
}

let miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);


//SOBRECARGA DEL CONSTRUCTOR
class Punto3 {
    // uso de sobrecarga
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number) {

    }
}


//CLASSES, SUPER
class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor() {
        //this.lados = 2; // esto generará un error
        super();
        // a partir de este punto se puede utilizar this
    }
}


//CLASSES, METHODS
class Video {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`${this.titulo} se está reproduciendo`);
    }
}

const miVideo = new Video("año nuevo");
miVideo.reproducir();


let titulo = "mi graduacion"; // (1)

class Video2 {
    titulo: string; // (2)

    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo; // esto hace referencia a (1)
        this.titulo = nuevoTitulo; // esto hace referencia a (2)
    }
}

//CLASSES, SETTERS Y GETTERS
class Desfile {
    private _participantes = 0;

    get participantes(): number {
        return this._participantes;
    }

    set participantes(v: number) {
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); // 100


//CLASSES, HERENCIA
interface Encendible {
    encender(): void;
}

class Television implements Encendible{ // se generará un error mientras no se haya definido el método de la interface encender
    encender(): void {
        console.log("El televisor se ha encendido");
    }
}


//PRECAUCIONES
interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable {
    verificar(nombre): boolean { // nombre se convierte en un parámetro typo any
        return nombre.toLowerCase();
    }
}


//CLASSES, EXTENDS
class Animal {
    moverse() {
        console.log("El animal se mueve");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();


//CLASSES, SOBRECARGA
class Padre {
    saludar() {
        console.log("Hola");
    }
}

class Hijo extends Padre {
    saludar(nombre?: string) {
        if (!!nombre) {
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");

const h : Padre = new Hijo();

//CLASSES, ORDEN DE INICIALIZACIÓN DE LAS CLASES
class Definicion {
    nombre = "definicion";
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion {}
const d = new Implementacion();


//CLASSES, VISIBILITY, PUBLIC
//VISIBILIDAD PUBLIC
class Saludo2 {
    public saludar() {
        console.log("Saludar!");
    }
}

const inst = new Saludo2();
inst.saludar();


//CLASSES, VISIBILITY, PROTECTED
class Saludo3 {
    protected getDestinatario() {
        return "amigos";
    }
}

class SaludoEspecial extends Saludo3 {
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`); // accedemos al método protected
    }
}

const saludo: SaludoEspecial = new SaludoEspecial(); 
saludo.saludar();
//saludo.getDestinatario(); //error, no se tiene acceso de forma pública


//HABILITAR LOS MÉTODOS PROTEGIDOS
class Base {
    protected m = 10;
}

class Derivada extends Base {
    m = 15;
}

const d2 = new Derivada();
console.log(d2.m);


//CROSS-HIERARCHY PROTECTED ACCESS
class Base2 {
    protected x: number = 1;
}

class Derivada2 extends Base2 {
    protected x: number = 5;
}

class Derivada3 extends Base2{
    imprimirx(c1: Derivada3){ // Si reemplazamos Derivada2 por Derivada1 esto generará un error ya que esta fuera de su scope
       
        console.log(c1.x);
    }
}


//CLASSES, VISIBILITY, PRIVATE
class Base4 {
    private x = 0;
}

class Derivada4 extends Base4 {
    imprimirX() {
        // console.log(this.x); //esta linea generará un error
    }
}

const b4 = new Base4();
//console.log(b4.x); // esta linea también generará un error


//CROSS-INSTANCE PRIVATE ACCESS
class A {
    private x = 10;

    public imprimirX(otra: A){
        console.log(otra.x); // podemos acceder a una propiedad privada de otra instancia
    }
}

const b = new A();

b.imprimirX(new A());


//CLASSES, STATIC MEMBERS
class MiClase {
    static x = 10;

    static imprimirX() {
        // para acceder a una propiedad estática utilizamos this dentro de un método estático
        console.log(`El valor de x es: ${this.x}`);
    }

    imprimirX() {
        // para acceder a una propiedad estática usamos el nombre de la clase dentro de un método de una instancia
        console.log(`El valor de x en una instancia es: ${MiClase.x}`);
    }
}

// para acceder a un método lo hacemos directamente desde la clase
MiClase.imprimirX();

// para acceder a una propiedad estática lo hacemos directamente desde la clase
console.log(`El valor obtenido de x es: ${MiClase.x}`);

const miClase = new MiClase();
miClase.imprimirX();

//Los elementos estáticos pueden ser también public, protected y private.
class MiClase2 {
    private static x = 10;
}

//console.log(MiClase2.x); //esta línea generará un error
// Property 'x' is private and only accesible within class 'MiClase'

//Los métodos estáticos también se heredan.
class Base5 {
    static saludar() {
        console.log("Hola mundo");
    }
}

class Derivada5 extends Base5 {}

Derivada5.saludar();


//PALABRAS RESERVADAS EN CLASES
class base6 {
    //static name = "S!"; // esta línea generará un error
    //static property 'name' conflicts with built-in property 'Function.name' of constructor function 'Base'
}


//CLASSES, GENERICS
class Caja<T>{
    contenido: T;

    constructor(value: T) {
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });

const MiCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);


//CLASSES, THIS TYPES
class Caja2 {
    contenido = "";
    contenido2 = "Test";
    set(valor: string) {
        this.contenido = valor;
        return this;
    }
}

const miCaja2: Caja2 = new Caja2();
const valorRetornado = miCaja2.set("Joyas");
console.log(miCaja2);
console.log(valorRetornado);


//También es posible utilizar this como anotación dentro de los parámetros
class Caja3 {
    contenido = "";

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    igualQue(otro: this) {
        return otro.contenido === this.contenido;
    }
}

const caja1 = new Caja3("Joyas");
const caja2 = new Caja3("Joyas");
const caja3 = new Caja3("Maquillaje");

console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));

//Esto es diferente de escribir otro: Caja si se tiene una clase derivada, 
//entonces igualQue solo aceptara instancias derivadas de la misma clase.
class Caja6 {
    contenido = "";

    igualQue(otro: this) {
        //return this.contenido === otraInstancia.contenido;
    }
}

class CajaDerivada extends Caja6 {
    otroContenido = "";
}

const base = new Caja6();
const derivada = new CajaDerivada();
//derivada.igualQue(base); // base no extiende de derivada, esto generará un error
// Argument of type 'Caja6' is not assignable to parameter of type 'CajaDerivada'

//CLASSES, PARAMETER PROPERTIES
class Video3{
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ) {}
}

const miVideo2: Video3 = new Video3("vacaciones", 60, "mp4");

console.log(`Mi video de: ${miVideo2.nombre}`);
console.log(`Tiene una duración de: ${miVideo2.duracion}`);
console.log(`Y el formato es: ${miVideo2.formato}`);


//CLASSES, CLASS EXPRESSIONS
const miClase3 = class<T> {
    contenido: T;
    constructor(v: T) {
        this.contenido = v;
    }
};

const miInstancia = new miClase3("Un video de 12 minutos");

console.log(`El contenido del video es: ${miInstancia.contenido}`);