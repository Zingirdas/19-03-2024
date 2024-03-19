const fs = require("fs");
let data = fs.readFileSync('./uzduotis3.txt').toString().split('\n').
    map(line => line.split(' '));

function apverstiMasyva(masyvas) {
    masyvas.reverse().forEach(eilute => {
        console.log(eilute.reverse().join(' '));
    });
}
apverstiMasyva(data);
