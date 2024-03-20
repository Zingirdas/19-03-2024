const fs = require("fs");
let input = fs.readFileSync('./uzduotis2.txt').toString().split(' ').map(Number);

const mas = Array(10).fill(0);
input.forEach((x) => mas[x]++);
mas.forEach((d, i) => console.log(`[${i}]->${d}`));