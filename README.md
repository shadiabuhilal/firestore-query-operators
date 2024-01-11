# firestore-query-operators
![Build Status](https://github.com/shadiabuhilal/firestore-query-operators/actions/workflows/push-workflows.yml/badge.svg)

Firestore query operators helper

https://shadiabuhilal.github.io/firestore-query-operators/

-----------

## Usage

### import firestore-query-operators
```js
import { QueryOperators } from 'firestore-query-operators';
```

Or

### require firestore-query-operators
```js
const { QueryOperators } = require('firestore-query-operators');
```

---

### Available Query Operations
Support query operations that used in firestore.

| Variable | Oprator | Description |
|-----|---------|--------------|
| QueryOperators.lessThan | < | less than |
| QueryOperators.lessThanOrEqualTo | <= | less than or equal to |
| QueryOperators.equalTo | == | equal to |
| QueryOperators.greaterThan | > | greater than |
| QueryOperators.greaterThanOrEqualTo | >= | greater than or equal to |
| QueryOperators.notEqualTo | != | not equal to |
| QueryOperators.arrayContains | array-contains | array contains |
| QueryOperators.arrayContainsAny | array-contains-any | array contains any |
| QueryOperators.in | in | in |
| QueryOperators.notIn | not-in | not-in |

[Firestore query operations doc](https://firebase.google.com/docs/firestore/query-data/queries).

