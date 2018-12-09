var fs = require("fs");
var input_array = fs.readFileSync("./d1_input.txt", "utf-8").toString().split('\n');
//var input_array = [+3,+3,+4,-2,-4];
//var input_array = [-6, +3, +8, +5, -6];
//var input_array = [+7, +7, -2, -7, -4];
var freq = 0;
var start = 0;
var duplicate = false;

var iteration = 0;
var sum_array = [0];

console.log('start');
while (duplicate == false)
{
    iteration = iteration + 1;
    //console.log("iteration " + iteration);
    start = freq;
    freq = input_array.reduce(add, freq, start);
}
//console.log("sum " + sum);
//console.log("sum_array " + sum_array);

function add(total, value) {
    freq = Number(total) + Number(value);
   // console.log("total =" + total);
   // console.log("value =" + value);
   // console.log("freq =" + freq);
    var a = sum_array.indexOf(freq);
    if (a == -1) {
        sum_array.push(freq);
        return freq;
    } 
    else {
        duplicate = true;
        //console.log("freq =" + freq);
        console.log("iterations: " + iteration);
        //console.log("array: " + sum_array);
        //console.log("a: " + a);
        console.log("answer: " + freq);
        ;
    }
};

