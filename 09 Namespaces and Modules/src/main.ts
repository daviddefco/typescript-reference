// We are using validation functions from the namespace
// defined in files under the 'Validation' folder

// Importing the namespace
/// <reference path="../validations/text-validations.ts" />
/// <reference path="../validations/date-validations.ts" />

// Using the namespace
console.log( Validations.validateLenght("a long string") )
console.log ( Validations.validateDate( new Date()) )

// Importing only the PI constant from the number validation module
import { PI } from "../validations/number-validations"
console.log(PI)