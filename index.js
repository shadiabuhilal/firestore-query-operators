/**
 * Collection of query operators for Firestore queries.
 *
 * @typedef {Object} QueryOperators
 * @property {string} lessThan - Represents the less than operator (`<`).
 * @property {string} lessThanOrEqualTo - Represents the less than or equal to operator (`<=`).
 * @property {string} equalTo - Represents the equal to operator (`==`).
 * @property {string} greaterThan - Represents the greater than operator (`>`).
 * @property {string} greaterThanOrEqualTo - Represents the greater than or equal to operator (`>=`).
 * @property {string} notEqualTo - Represents the not equal to operator (`!=`).
 * @property {string} arrayContains - Represents the array contains operator (`array-contains`).
 * @property {string} arrayContainsAny - Represents the array contains any operator (`array-contains-any`).
 * @property {string} in - Represents the "in" operator (`in`).
 * @property {string} notIn - Represents the not in operator (`not-in`).
 */
export const QueryOperators = Object.freeze({
    lessThan: '<',
    lessThanOrEqualTo: '<=',
    equalTo: '==',
    greaterThan: '>',
    greaterThanOrEqualTo: '>=',
    notEqualTo: '!=',
    arrayContains: 'array-contains',
    arrayContainsAny: 'array-contains-any',
    in:'in',
    notIn: 'not-in'
});
