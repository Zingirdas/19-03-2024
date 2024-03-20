
const fs = require("fs");
let input = fs.readFileSync('./uzduotis1.txt').toString().split(' ').map(Number);

let minT = input[0];
let minD = 1;
let maxT = [0];
let maxD = 1;
input.forEach((d, i) => {
    if (minT > d) {
        minT = d;
        minD = i + 1;
    }
    if (maxT > d) {
        maxT = d;
        maxD = i + 1;
    }
});
console.log(`Min: ${minT}, ${minD} Max: ${maxT}, ${maxD}`);