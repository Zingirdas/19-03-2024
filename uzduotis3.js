const fs = require("fs");
const input = fs.readFileSync('./uzduotis3.txt').toString().split("\n");

let mas = [];
input.forEach((l) => {
    mas.push(l.split(" ")); // jei is excell .csv failo toks variantas (",") kad nuimtu kablelius tarpuose 
});

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas[i][y]} `;
    }
    console.log(s);
}

console.log("---------------");

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas[y][i]} `;
    }
    console.log(s);
}