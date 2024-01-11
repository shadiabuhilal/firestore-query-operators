/* globals describe, it */
import expect from 'expect.js';
import { QueryOperators } from '../index.js';

describe('firestore-query-operators util', () => {
    it('should has all keys and values', () => {
        expect(QueryOperators).to.eql({
            lessThan: '<',
            lessThanOrEqualTo: '<=',
            equalTo: '==',
            greaterThan: '>',
            greaterThanOrEqualTo: '>=',
            notEqualTo: '!=',
            arrayContains: 'array-contains',
            arrayContainsAny: 'array-contains-any',
            in: 'in',
            notIn: 'not-in'
        });
    });
});
