'use strict';

exports.encode = encode;
exports.decode = decode;
exports.escapes = escapes;

const chars = 'a:;c5de_`}<wxg2hi=$6-jst1u7?y+{#k8lmn|,9\\]3^op\'[%b>!0 &)*./"4(qr~f@vz'.split('');

function encode(input) {
    let output = [];
    let shift = Math.floor(Math.random() * 9) + 1;
    input.split('').forEach(function (v) {
        if (v.toUpperCase() == v) {
            output.push(randEven());
        } else {
            output.push(randOdd());
        }
        v = v.toLowerCase();
        if (chars.indexOf(v) >= 0) {
            let newLett;
            if (chars.indexOf(v) + shift > (chars.length - 1)) {
                newLett = chars[(chars.indexOf(v) + shift - (chars.length - 1)) - 1];
            } else {
                newLett = chars[chars.indexOf(v) + shift];
            }
            output.push(newLett);
        } else {
            output.push(v);
        }
    });
    var join = output.join('');
    return '?' + join + shift + '$';
}


function decode(input) {
    let output = [];
    let iSplit = input.split('');
    iSplit.shift();
    iSplit.pop();
    let shift = iSplit.pop();
    for (let i = 0; i < iSplit.length; i++) {
        if (isOdd(i)) {
            let v = iSplit[i];
            if (chars.indexOf(v) >= 0) {
                let newLett;
                if (chars.indexOf(v) - shift < 0) {
                    newLett = chars[chars.indexOf(v) - shift + chars.length];
                } else {
                    newLett = chars[chars.indexOf(v) - shift];
                }
                if (!isOdd(Number(iSplit[i - 1]))) {
                    newLett = newLett.toUpperCase();
                }
                output.push(newLett);
            } else {
                output.push(v);
            }
        }
    }
    return output.join('');
}

function escapes(str) {
    str = str.replaceAll('\\', '\\\\');
    str = str.replaceAll('\'', '\\\'');
    str = str.replaceAll('"', '\\"');
    return str;
}


function isOdd(i) {
    if (i % 2 == 0) {
        return false;
    }
    return true;
}

function randOdd() {
    let r = getRand();
    while (!isOdd(r)) {
        r = getRand();
    }
    return r;
}

function randEven() {
    let r = getRand();
    while (isOdd(r)) {
        r = getRand();
    }
    return r;
}

function getRand() {
    return Math.round(Math.random() * 9);
}