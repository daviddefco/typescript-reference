// GENERIC FUNCTIONS

// Define returning type and argument type as generic
function processData<T>( arg: T ) {
    return arg
}

processData(15.45678).toFixed(2)
processData("A long string").charAt(0)
processData(new Date()).getMinutes()

function genericFunc<T>(arg: T) {
    return arg
}

type Hero = {
    name: string
    powers: string[]
}

type Villain = {
    name: string
    realName: string
}

let wolverine = {
    name: "Wolverine",
    realName: "Logan",
    powers: [ "regeneration", "admantium" ]
}

genericFunc(<Hero>wolverine).powers
genericFunc(<Villain>wolverine).realName
// This does not work, wolverine is a Hero
// genericFunc(<Hero>wolverine).realName

// GENERIC ARRAY DEFINITION
// It is equivalent to let array: string[] = [] 
let array: Array<string> = []

// GENERIC CLASSES

class Square<T extends number | string> {
    base: T
    height: T
    area():number { 
        return +this.base * +this.height
    }    
}

let mySquare = new Square()
mySquare.base = "10"
mySquare.height = 5.5
// This is not a generic that extends a number or string
// mySquare.height = true
console.log(mySquare.area())