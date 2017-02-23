// CLASS DECORATORS
// In order to use decorators we have to configure the compiler to avoid warnings: 
// "experimentalDecorators": true

// Class decorator
function TraceableContructor( constructor: Function ) {
    console.log( constructor )
}

// Factory decorator
function Traceable( print: boolean ): Function {
    if (print) {
        return TraceableContructor
    } else {
        return null
    }
}

@TraceableContructor
class Hero {
    name: string
    constructor( name: string ) {
        this.name = name
    }
}

@Traceable(true)
class Villain {
    name: string
    constructor( name: string ) {
        this.name = name
    }
}

// Multiple decorators
function cheer(constructor: Function) {
    constructor.prototype.cheerPlayer = function() {
        console.log(`come on ${this.favouritePlayer}, you can do it!`)
    }    
}

function trace(constructor: Function): void {
    constructor.prototype.log = function() {
        console.log(this)
    }
}

@cheer
@trace
class Fan {
    favouritePlayer: string
    constructor(public player:string) {
        this.favouritePlayer = player
    }
}

let meau = new Fan("Kobe Bryant")

// We have to cast to any to avoid compilation error. will be changed in the future
// Does not work for my compiler
// (<any>meau).cheerPlayer()

// METHOD DECORATORS
// A method decorator must return a function with 3 arguments
function editable(isEditable:boolean) {
    return function(target:any, propertyName:string, descriptor:PropertyDescriptor) {
        descriptor.writable = isEditable
    }
}

class Player {
    position: string
    constructor (position:string) {
        this.position = position
    }

    @editable(true)
    editablePlay() {
        console.log("I play basketball")
    }

    @editable(false)
    noEditablePlay() {
        console.log("I'm an all star")
    }
}

let george = new  Player("sf")
george.editablePlay = function () {
    console.log("I play poker")
}
george.editablePlay() // I play poker

george.noEditablePlay = function() {
    console.log("I don't know how to play BB")
}
george.noEditablePlay() // I'm an all star

// PROPERTY DECORATOR
function editableProperty(isEditable:boolean) {
    return function(target:any, propertyName:string): any {
        let descriptor:PropertyDescriptor = {
            writable: isEditable
        }
        return descriptor
    }
}

class BasketBallPlayer extends Player {
    @editableProperty(false)
    name:string
}

let kobe = new BasketBallPlayer("SG")
kobe.name = "Kobe Bryant"
console.log(kobe)
// Does not print the name: now name is a read only property

// PARAM DECORATOR
function parameter( target: any, method: string, index: number ) {
    console.log(`The annotated arg is argument number ${index} in method ${method}`)
}

class Printer {
    printMessage(capitalized:boolean, @parameter message: string) {
        if (capitalized) {
            console.log(message.toUpperCase())
        } else {
            console.log(message)
        }
    }
}

let printer = new Printer()
printer.printMessage(true, "hello world")