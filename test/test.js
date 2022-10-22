const scrypt = require("../");


let encoded_text = scrypt.encode("Hello World");
let decoded_text = scrypt.decode(encoded_text);

console.log('Encoded: ' + scrypt.escapes(encoded_text));
console.log('Decoded: ' + decoded_text);