// fabien-h (github)
console.time("Data processing");
var fs = require("fs");
var initialData = fs.readFileSync("./d2_input.txt", "utf-8").toString().split('\n');
var testData = ['abcdef','bababc','abbcde','abcccd','aabcdd','abcdee','ababab'];
/**
 * Parse our data
 */
const isTest = false;
const parsedData = (isTest ? testData : initialData);
const length = parsedData.length;
let twos = 0;
let threes = 0;

for (let index = length - 1; index > -1; index--) {
  let line = parsedData[index];
  let obj = {};

  for (let i = line.length - 1; i > -1; i--) {
    const character = line[i]
    if (obj[character]) obj[character]++;
    else obj[character] = 1;
  }

  const counts = Object.values(obj);
 //console.log(obj);
  if (counts.includes(2)) twos++;
  if (counts.includes(3)) threes++;
}

console.log(twos * threes);

console.timeEnd("Data processing");