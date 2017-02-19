// FUNCTION DEFINITION
var hero = "Flash";
// OO syntax
function printHero() {
    return hero;
}
// With classic JS syntax
var anotherPrintHero = function () {
    return hero;
};
console.log(printHero());
// ARGUMENTS
// Mandatory arguments
function salutation(name, surname) {
    return "Hello " + name + " {surname}";
}
console.log(salutation("Dr", "Strange"));
// Optional parameters: in JS no parameter is mandatory. In TS you can define mandatory or optional 
