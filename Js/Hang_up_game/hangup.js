function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function validLetter(f) {
	for (var j = 0; j < currentWord.length; j++) {
		if (f.value == currentWord[j]) {
			document.getElementById("c" + j).innerHTML = currentWord[j];
			rightCount++;
			if (rightCount == currentWord.length) alert("You won!"); 
		} 
	} 
	count++;
	counter.innerHTML = "Your tries: " + count;
	if (count > 9) alert("You are hanged up!");
	document.getElementById("check").value="";
}
var gameBoard = document.getElementById("gameboard");
var count = 0;
var rightCount = 0;
var counter = document.getElementById("counter");
var wordsArray = ["battleship", "magazine", "house", "folder", "index", "javascript", "element"];
var currentWord = wordsArray[getRand(0,6)];
for (var i = 0; i < currentWord.length; i++) {
	var cell = document.createElement("td");
	gameBoard.appendChild(cell);
	cell.id = "c"+ i;
}
counter.innerHTML = "Your tries: " + count;
	