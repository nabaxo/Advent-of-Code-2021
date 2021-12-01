import { input } from './input_1.js';
// const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let output = 0;

let prevSum, sum;

for (let i = 3; i < input.length; i++) {
    prevSum = input[i - 1] + input[i - 2] + input[i - 3];
    sum = input[i] + input[i - 1] + input[i - 2];
    // console.log({ prevSum });
    // console.log({ sum });

    if (sum > prevSum) {
        output++;
    }
}

console.log(output);
