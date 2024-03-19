
const fs = require("fs");
let temp = fs.readFileSync('./uzduotis1.txt').toString().split(' ').map(Number);

let maxTemp = temp[0];
let minTemp = temp[0];
const maxTempDays = [];
const minTempDays = [];

temp.forEach((temp, index) => {
    if (temp > maxTemp) {
        maxTemp = temp;
        maxTempDays.splice(0, maxTempDays.length, index + 1);
    } else if (temp === maxTemp) {
        maxTempDays.push(index + 1);
    }

    if (temp < minTemp) {
        minTemp = temp;
        minTempDays.splice(0, minTempDays.length, index + 1);
    } else if (temp === minTemp) {
        minTempDays.push(index + 1);
    }
});

console.log("Didžiausia temperatūra:", maxTemp, "Diena", maxTempDays);
console.log("Mažiausia temperatūra:", minTemp, "Diena", minTempDays);

