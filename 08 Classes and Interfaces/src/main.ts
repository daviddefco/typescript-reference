// Classes, methods and properties

class Avenger {
    static avengersTotalWins: number = 0
    protected name: string
    protected realName: string

    protected canFly: boolean = false
    private _matchesWon: number = 0

    constructor(name: string, realName: string) {
        this.name = name
        this.realName = realName
    }

    get matchesWon():number {
        return this._matchesWon
    }

    set matchesWon(wins:number) {
        this._matchesWon = wins
        Avenger.avengersTotalWins += wins
    }
}

class FlyingAvenger extends Avenger {
    constructor(name: string, realName: string) {
        super(name, realName)
        this.canFly = true
    } 

    public fly(): void{ 
        console.log(" I'm flying") 
    }
}

let ironMan: FlyingAvenger = new FlyingAvenger("Ironman", "Tony Stark")
let spiderMan: Avenger = new Avenger("Spiderman", "Peter Parker")
spiderMan.matchesWon = 12

// Abstract classes

abstract class Mutant {
    isMutant: boolean = true
    name: string
    realName: string

    constructor(name: string, realName: string) {
        this.name = name
        this.realName = realName
    }
    abstract team() : string
}

class XMen extends Mutant {
    team(): string {
        return "I'm an X-Men"
    }
}

// Singleton

class AvengerFactory {
    static instance: AvengerFactory
    public name: string

    private constructor() {
        // Inicialization
        this.name = "My Factory as a Singleton"
    }

    static getInstance() {
        if ( ! AvengerFactory.instance ) {
            this.instance = new AvengerFactory()
        }
        return this.instance
    }
}

console.log( AvengerFactory.getInstance().name )

// Interfaces

interface Hero {
    name: string
    realName?: string
    powers: string []
}

function heroCombat (hero: Hero) {
    console.log(`Fight with ${hero.powers.join(" ")}`)
}

class MarvelHero implements Hero {
    name: string
    powers: string[]
    constructor (name:string) {
        this.name = name
    }
}

let wolverine = new MarvelHero("Wolverine")

// Interfaces for Functions

interface DualOperation {
    (a: number, b:number) : number
}

let add: DualOperation
add = (arg1: number, arg2: number) => arg1 + arg2
let substract: DualOperation
substract = function(a: number, b:number) {
    return a - b
}