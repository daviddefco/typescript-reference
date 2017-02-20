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

// Optional parameters: in JS no parameter is mandatory. 
// In TS you can define mandatory or optional
function optionalSalutation(name: string, surname?:string):string {
    if (surname) {
        return `Hello ${name} ${surname}`
    } else {
        return `Hello ${name}`
    }    
}
console.log(optionalSalutation("John", "Dole"))
console.log(optionalSalutation("John"))

// Parameters with default values
function formatName (
    name: string, surname:string, capitalize:boolean = true
):string {
    if (capitalize) {
        return `capitalizeString(name) capitalizeString(surname)`
    } else {
        return `${name} ${surname}`
    }    
}
function capitalizeString(word:string) :string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
}
console.log(formatName("john", "dole"))
console.log(formatName("John", "dole", false))

// Rest of parameters (varargs)
function salutationWithVariableParameters(name: string, ...rest:string[]):string {
    return name + " " + rest.join(" ")
}
console.log("Edward", "Joseph", "Simpson")
console.log("Mary", "Ann", "Waiters", "Johnson")

// Using functions as a type
function addNumbers(a: number, b:number):number {
    return a + b
}
let myFunction: (arg1: number, arg2:number) => number 
myFunction = addNumbers
console.log(myFunction(2, 2))
