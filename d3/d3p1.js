var fs = require("fs");
var initialData = fs.readFileSync("./d3_input.txt", "utf-8").toString().split('\n');
var testData = ['#1 @ 1,3: 4x4','#2 @ 3,1: 4x4','#3 @ 5,5: 2x2'];
var singleTest = '#1 @ 1,3: 4x4';

var res = singleTest.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
console.log(res);
