//input = document.querySelector('pre').textContent.split('\n')
var fs = require("fs");
//var input = fs.readFileSync("./d2_input.txt", "utf-8").toString().split('\n');
var input = ['abcdef','bababc','abbcde','abcccd','aabcdd','abcdee','ababab'];
part1 = (input) => {
	totalCounts = {
		2: 0,
		3: 0
	};
	countLetters = (barCode) => {
		counts = {};
		barCode
			.split('')
			.forEach(c => {
				if (counts[c]) {
					counts[c] = counts[c] + 1;
				} else {
					counts[c] = 1;
				}
				console.log(counts);	
			});
		return counts;
	}
	check = (letterCount, num) => {
		for (key in letterCount) {
			if (letterCount[key] == num) {
				return true;
			}
		}
		return false
	}
	input.map((barCode) => {
		const counts = countLetters(barCode)
		if (check(counts, 2)) {
			totalCounts[2] = totalCounts[2] + 1
		}
		if (check(counts, 3)) {
			totalCounts[3] = totalCounts[3] + 1
		}
	});
	return Object.values(totalCounts).reduce((t, x) => t * x);
}

part2 = (input) => {
	for (i = 0; i < input.length; i++) {
		aLetters = [...input[i]];
		for (j = 1; j < input.length; j++) {
			bLetters = [...input[j]];
			commonLetters = [];
			for (k = 0; k < aLetters.length; k++) {
				if (aLetters[k] === bLetters[k]) {
					commonLetters.push(aLetters[k]);	
                                } 
                        }
			if (aLetters.length - commonLetters.length === 1) {
				return commonLetters.join('');
			}
		}
	}
}

console.log(part1(input));
console.log(part2(input));