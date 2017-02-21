// CONSTANTS
const PI:number = 3.14

// We can define the same constant name in different scopes
if(true) {
    const PI:number = 3.1416
}

// Each loop iteration is a different scopes
for(const I of [1,2,3,4]) {
    console.log(I)
}

// BEWARE: Object constants can be modified, they are not trully constants
const CONST_OBJECT = {
    name: "John",
    phone: "999333999"
}
CONST_OBJECT.name = "Mary"
CONST_OBJECT.phone = "555 777 957"

// LAMBDA FUNCTIONS
// In lambda functions the context (object this is not lost)

// Lambda functions sytax: can group a sinple return in a line
let addNumbers = (a: number, b:number) => a+b
let salute = (name:string) => `Hello ${name}`

// Using lambda for context changes
let boss = {
    employee: "Adam",
    order: function() {
        setTimeout(function() {
            // This prints "undefined do that please". Name does not belong to current function context
            console.log(`${this.nombre} do that!`)
        }, 1000)
    }
}

let goodBoss = {
    employee: "Adam",
    order: function() {
        // Now setTimeout shares the context, and "Adam please do that is printed"
        setTimeout( () => console.log(`${this.nombre} please do that`), 1000)
    } 
}

// DESTRUCTURING OBJECTS
// When we need to use different properties of the object and we want to convert all variables of the
// object in on e line

let lakers = {
    pg: "D'Angelo Russell",
    sg: "Nick Young",
    sf: "Brandon Ingram",
    pf: "Julius Randle",
    c: "Tarik Black"
}

let { pg, sg, sf, pf, c:center} = lakers
console.log(pg)

// We can destructure arrays in a similar way
let lakerSquad = [ "Dlo", "Swaggy", "BI", "Randle", "Black" ]
let [ lakerPG, lakerSG, lakerSF, lakerPF, lakerC ] = lakerSquad
console.log(lakerPG)

// FOR SYNTAX TO NAVIGATE ARRAYS
let dlo = {
    name: "D'Angelo Russell",
    height: 6.5
}

let bi = {
    name: "Brandon Ingram",
    height: 6.9
}

let zu = {
    name: "Ivica Zubac",
    height: 7.0
}

let players = [ dlo, bi, zu ]

for ( let laker of players ) {
    console.log(`{laker.name} with a height of {laker.height}`)
}