// BOOLEANS
// Typical boolean definition
let isBoolean:boolean = true
let isAnotherBoolean = true

if(isBoolean) {
    console.log("It is a boolean indeed")
} else {
    console.log("I was wrong. It is not a boolean")
}

// NUMBERS
let avengers:number = 5
let villains:number

// If a var is not defined it is undefined, hence avengers > villains = false
if (avengers > villains) {
    console.log("We are saved")
} else {
    console.log("We have a real problem")
}

// STRINGS
let batman:string = "Batman"
let joker:string = 'Joker'
let penguin:string = `Penguin`
let multilineString:string = `This is
a valid
string`

let addStrings: string = "Chars: " + batman + ", " + joker + " and " + penguin
console.log(addStrings)
let stringInterpolation = `Chars: ${batman}, ${joker} and ${penguin}`
console.log(stringInterpolation)

// ANY: Type can be changed. If no type is declared any is used by default
let anyVar:any

anyVar = "Now I'm a String"
console.log(anyVar.charAt(0))

anyVar = 166.36666
console.log(anyVar.toFixed(2))

// ARRAYS
let myNumberArray:number[] = [1,2,3]
// Compilation error, in a number[] can't push a string
// myNumberArray.push("asfasf")

console.log(myNumberArray[0].toFixed(2))

// TUPLAS
let hero: [string, number] = ["Batman", 445]
// Compilation error
// hero[0] = 155
// hero[1] = "Robin"

// ENUMERATIONS
enum SurveyResult {
    poor = 1,
    notSatisfied = 3,
    partiallySatisfied = 5,
    satisfied = 7,
    awesome = 10
}
console.log(SurveyResult.awesome)

// NEVER: Represents a value that should never happen
function error(message): never {
    throw new Error(message)
}
// If we uncomment the function call an error is generated and program stops there
// error("critical error")

// CASTING
let anyValue:any = "This is a String now"
let stringLength:number = (<string>anyValue).length
console.log(stringLength)