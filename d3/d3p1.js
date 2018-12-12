var fs = require("fs");
var input_array = fs.readFileSync("./d3_input.txt", "utf-8").toString().split('\n');
//var input_array = ['#1 @ 1,3: 4x4','#2 @ 3,1: 4x4','#3 @ 5,5: 2x2'];
//var singleTest = '#1 @ 1,3: 4x4';

var grid = {};
var xMax = 0;
var yMax = 0;

for (let i = 0; i < input_array.length; i++) { 
    //console.log("i: " + i);
    var request = input_array[i].match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
    
  //  console.log("i: "+ i);
  //  console.log(input_array[i]);

    var id = request[1];
    var xStart = parseInt(request[2]);
    var yStart = parseInt(request[3]);
    var xWidth = parseInt(request[4]);
    var yLength = parseInt(request[5]);
    var xEnd = (xStart+xWidth);
    var yEnd = (yStart+yLength);

    //console.log("id: " + id);
    //console.log("xStart: " + xStart);
    //console.log("yStart: " + yStart);
    //console.log("xEnd: " + xEnd);
    //console.log("yEnd: " + yEnd); 
    //console.log("id: " + id); 
    
    for (let x=xStart; x<xEnd; x++) {
        for (let y=yStart; y<yEnd; y++) {
                    if(grid[x]===undefined) {grid[x]=[];}
                    if (grid[x][y]===undefined){grid[x][y]=1;}
                    else {
                        grid[x][y]=grid[x][y]+1;
                    }
           //console.log("x: "+ x + " y: "+ y + " grid: " + grid[x][y] );
           if (yEnd+1>yMax) {yMax= yEnd+1};
        }
        if (xEnd+1>xMax) {xMax = xEnd+1};  
    }
//    console.log("xmax: "+ xMax);
//    console.log("ymax: "+ yMax);
}
//console.log(grid);
console.log("xmax: "+ xMax);
console.log("ymax: "+ yMax);

var count = 0;
for (let x=0; x<=xMax; x++) {
    for (let y=0; y<=yMax; y++){
        if (grid[x] && grid[x][y]> 1) {count++};
    }
} 
console.log("count: " + count);