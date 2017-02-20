// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes: [string, string] = [batman,superman];
var villano: [string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza {
  flash = 5,
  superman = 100,
  batman = 1,
  aquaman = 0
}
let fuerzaFlash = Fuerza.flash
let fuerzaSuperman = Fuerza.superman
let fuerzaBatman = Fuerza.batman
let fuerzaAcuaman = Fuerza.aquaman

// Retorno de funciones
function activar_batiseñal(): string {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = 100;
let largoDelPoder = poder.toString().length;
console.log( largoDelPoder );
