var fs = require("fs");
var input_array = fs.readFileSync("./d2_input.txt", "utf-8").toString().split('\n');

// var text = fs.readFileSync("./mytext.txt").toString('utf-8');
// var textByLine = text.split("\n")

function diffCount (input1, input2) {
    let count = 0;
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== input2[i]) count++;
        if (count > 1) break;
    };
    //console.log(count);
    return count;
};

function getCommon (input1, input2) {
    var commonString = '';
    for (let i=0; i<input1.length; i++) {
        if (input1[i]===input2[i]) {
            commonString += input1[i];
        };
    };
    return commonString;
} ;

var ID1;
var ID2;
commonString = '';

for (let i = 0; i < input_array.length; i++) { //first string to compare
//console.log("i: " + i);
    for (let j = i + 1; j < input_array.length; j++) { //second string to compare
        //console.log("j: " + j);
        if (diffCount(input_array[i], input_array[j]) === 1) {
            ID1 = input_array[i];
            ID2 = input_array[j];
            console.log("string 1: "+ i);
            console.log("string 2: "+ j);
            break; //when we find a pair with exactly one difference
        }
        if (ID1 && ID2)
            break; //No need to compare any more if we have the pair
    }
}
console.log("ID1: " + ID1);
console.log("ID2: " + ID2);
commonString = getCommon (ID1, ID2);
console.log ("common: "+ commonString);
