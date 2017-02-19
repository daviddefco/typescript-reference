// FUNCTION DEFINITION
let hero:string = "Flash"

// OO syntax
function printHero(): string {
    return hero
}

// With classic JS syntax
let anotherPrintHero = function(): string {
    return hero
}
console.log(printHero())

// ARGUMENTS

// Mandatory arguments
function salutation(name:string, surname:string): string {
    return `Hello ${name} {surname}`
}
console.log(salutation("Dr", "Strange"))

// Optional parameters: in JS no parameter is mandatory. In TS you can define mandatory or optional