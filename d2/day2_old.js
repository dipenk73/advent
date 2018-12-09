var fs = require("fs");
//var input_array = fs.readFileSync("./d2_input.txt", "utf-8").toString().split('\n');
var input_array = ['abcdef','bababc','abbcde','abcccd','aabcdd','abcdee','ababab'];
console.log(input_array);
//var counts = {};
var twos = 0;
var threes = 0;
//console.log("total counts2: " + twos);
//console.log("total counts3: " + threes);
//var c1 = {};
var counts = input_array.map(barCode);

console.log("main: "+ counts);
/* if (counts.includes(2)) {
    totalCounts.two = totalCounts.two + 1;
    console.log("total counts2: " + totalCounts.two);
}
if (counts.includes(3)) {
    totalCounts.three = totalCounts.three + 1;
    console.log("total counts3: " + totalCounts.three);
}
console.log("total counts: " + totalCounts); */
/* function checkNum(letterCounts, num) {
    for (keys in letterCounts) {
        if (letterCounts[keys] == num) {
            return true;
        }
    }
    return false
}; */
console.log("total counts2: " + twos);
console.log("total counts3: " + threes);

function barCode (value){
    var c= value.split("");
    console.log(c);
    var counts ={};
    var counts = c.forEach(countLetters); 
    //console.log(counts);
    return counts;
    function countLetters(value) {

         if (counts[value]) {
             counts[value] = counts[value]+1;
         }
         else {
             counts[value]=1
         }
        //console.log(value);
        console.log(counts);

        const values = Object.values(counts);

        if (values.includes(2)) twos++;
        if (values.includes(3)) threes++;

return counts;

};

};