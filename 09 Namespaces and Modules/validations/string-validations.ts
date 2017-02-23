export const MESSAGES:string [] = [
   "Text is valid",
   "Text is not valid"
]

export function obtainError(errorType:number):string {
   return MESSAGES[errorType]
}