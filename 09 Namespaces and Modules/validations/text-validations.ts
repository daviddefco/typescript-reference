// In namespaces we group all logic that is common to a part of the program. We need to export
// functions if we want them to be accesible out of the namespace
namespace Validations {
    export function validateLenght(s: string): boolean {
        return s.length > 3 ? true : false
    }
}