const fs = require('fs');

const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));
// const input = fs.readFileSync('./input.txt').toString().split(/\r\n/g).map(e => e.split('')).map(e => e.map(n => parseInt(n)));

let output = 0;

for (let i = 0; i < input.length; i++) {
    const row = input[i];

    for (let j = 0; j < row.length; j++) {
        const element = input[i][j];
        let n, s, w, e;
        let basinSize = 0;
        let basinStart = [];

        try {
            n = input[i - 1][j];
        } catch (e) { }
        try {
            s = input[i + 1][j];
        } catch (e) { }
        try {
            w = input[i][j - 1];
        } catch (e) { }
        try {
            e = input[i][j + 1];
        } catch (e) { }

        if ((element < n) &&
            (element < e) &&
            (element < s) &&
            (element < w)) {
            basinStart = [i, j];
            basinSize++;
        }

        if (n === undefined) {
            if ((element < e) &&
                (element < s) &&
                (element < w)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (e === undefined) {
            if ((element < n) &&
                (element < s) &&
                (element < w)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (s === undefined) {
            if ((element < n) &&
                (element < e) &&
                (element < w)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (w === undefined) {
            if ((element < n) &&
                (element < s) &&
                (element < e)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (n === undefined && w === undefined) {
            if ((element < e) &&
                (element < s)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (n === undefined && e === undefined) {
            if ((element < w) &&
                (element < s)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (s === undefined && w === undefined) {
            if ((element < e) &&
                (element < n)) {
                basinStart = [i, j];
                basinSize++;
            }
        }
        if (s === undefined && e === undefined) {
            if ((element < n) &&
                (element < w)) {
                basinStart = [i, j];
                basinSize++;
            }
        }


        if (basinSize > 0) {
            console.log({ basinStart, basinSize });
        }
    }
}

console.table(input);
console.log(output);
