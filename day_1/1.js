import { input } from './input_1.js';
// const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let output = 0;

for (let index = 1; index < input.length; index++) {
    const prevElement = input[index - 1];
    const element = input[index];

    if (element > prevElement) {
        output++;
    }
}

console.log(output);
