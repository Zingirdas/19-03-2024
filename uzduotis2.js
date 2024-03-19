const fs = require("fs");
let data = fs.readFileSync('./uzduotis2.txt').toString().split(' ').map(Number);

const counts = new Array(10).fill(0);
data.forEach(number => {
    if (!isNaN(number) && number >= 0 && number <= 9) {
        counts[number]++;
    }
});

counts.forEach((count, index) => {
    console.log(`${index} -> ${count}`);
});