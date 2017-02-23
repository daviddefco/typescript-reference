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

let me = new Fan("Kobe Bryant")

// We have to cast to any to avoid compilation error. will be changed in the future
// me.cheerPlayer()
