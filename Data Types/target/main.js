// BOOLEANS
// Typical boolean definition
var isBoolean = true;
var isAnotherBoolean = true;
if (isBoolean) {
    console.log("It is a boolean indeed");
}
else {
    console.log("I was wrong. It is not a boolean");
}
// NUMBERS
var avengers = 5;
var villains;
// If a var is not defined it is undefined, hence avengers > villains = false
if (avengers > villains) {
    console.log("We are saved");
}
else {
    console.log("We have a real problem");
}
// STRINGS
var batman = "Batman";
var joker = 'Joker';
var penguin = "Penguin";
var addStrings = "Chars: " + batman + ", " + joker + " and " + penguin;
console.log(addStrings);
var stringInterpolation = "Chars: " + batman + ", " + joker + " and " + penguin;
console.log(stringInterpolation);
// ANY: Type can be changed. If no type is declared any is used by default
var anyVar;
anyVar = "Now I'm a String";
console.log(anyVar.charAt(0));
anyVar = 166.36666;
console.log(anyVar.toFixed(2));
// ARRAYS
var myNumberArray = [1, 2, 3];
// Compilation error, in a number[] can't push a string
// myNumberArray.push("asfasf")
console.log(myNumberArray[0].toFixed(2));
// TUPLAS
var hero = ["Batman", 445];
// Compilation error
// hero[0] = 155
// hero[1] = "Robin"
// ENUMERATIONS
var SurveyResult;
(function (SurveyResult) {
    SurveyResult[SurveyResult["poor"] = 1] = "poor";
    SurveyResult[SurveyResult["notSatisfied"] = 3] = "notSatisfied";
    SurveyResult[SurveyResult["partiallySatisfied"] = 5] = "partiallySatisfied";
    SurveyResult[SurveyResult["satisfied"] = 7] = "satisfied";
    SurveyResult[SurveyResult["awesome"] = 10] = "awesome";
})(SurveyResult || (SurveyResult = {}));
console.log(SurveyResult.awesome);
// NEVER: Represents a value that should never happen
function error(message) {
    throw new Error(message);
}
// If we uncomment the function call an error is generated and program stops there
// error("critical error")
// CASTING
var anyValue = "This is a String now";
var stringLength = anyValue.length;
console.log(stringLength);
