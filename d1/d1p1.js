var fs = require("fs");
var array = fs.readFileSync("./d1_input.txt", "utf-8").toString().split('\n');

//array.forEach(function(part, index) {
//    this[index] = this[index].replace('+','');
//  }, array); 

var sum = array.reduce(add, 0);

function add(a, b) {
    return Number(a)+Number(b);
}

console.log(sum);
