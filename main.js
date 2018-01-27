

let currentScore = 0;

let testString = "X, 4, /, 1, 1";
let scoreArray = testString.split(", ");
scoreArray.forEach(function(score, index) {
	if (score == "/") {
		scoreArray[index] = 10 - scoreArray[index - 1];
	}
	else if (score == "X" || score == "x") {
		scoreArray[index] = 10;
	}
	else {scoreArray[index] = parseInt(score)}
});

scoreArray.forEach(function(score, index) {
	if (score)

});

console.log (scoreArray);
console.log ("Current Score", currentScore);
