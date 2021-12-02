// import { input } from './input_1.js';
// const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const fs = require('fs');

let input;

let hPos = 0;
let vPos = 0;

fs.readFile('./input_1.txt', 'utf-8', (e, d) => {
    input = d.replace(/\r\n/g, '\n').split('\n');


    input.forEach(element => {
        const line = element.split(' ');
        if (line[0] === 'forward') {
            hPos += parseInt(line[1]);
        }
        else if (line[0] === 'up') {
            vPos -= parseInt(line[1]);
        }
        else if (line[0] === 'down') {
            vPos += parseInt(line[1]);
        }
    });

    console.log(hPos * vPos);
});
