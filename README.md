SCrypt
======

`scrypt` does simple text encoding/decoding.

The algorithm will generate a new encoded string for given text in each running time. 

## install

With [npm](https://npmjs.org) do:

`npm i @mhs003/scrypt`

After installation, include the module in main file, 
```javascript
const scrypt = require('@mhs003/scrypt');
```

## methods

`scrypt` has three methods, `encode`, `decode` and `escapes`, which both take a single argument.

* `encode` - Takes regular string and returns an encoded string
* `decode` - Takes an encoded string and returns it's decoded regular string
* `escapes` - Adds an escape character (`\`) before all `\`, `'` and `"`

## Examples

**Encode**

```javascript
scrypt.encode('Hello World');
// Returns: ?461<3,5,9%8.2h3%9v5,1}4$
// or something else...
```

**Decode**

```javascript
scrypt.decode('?461<3,5,9%8.2h3%9v5,1}4$');
// Returns: Hello World
```

**Escapes**

```javascript
let enc = scrypt.encode('Hello World');
console.log(enc);
    // Output: ?4j7x1\1\3>8"4=7>1a1\5w6$
console.log(scrypt.escapes(enc));
    // Output: ?4j7x1\\1\\3>8\"4=7>1a1\\5w6$
```

## Ques.

* *Why this does exists?* - **Don't know :p Created just for fun.**
* *Why should I use?* - **You don't have to :b**
