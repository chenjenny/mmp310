const response = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	
	"Ask again later",
	"Cannot predit yet",
	
	"Don't count on it",
	"My reply is no"
];

const eightBall = document.getElementById("eight-ball");
const answer = document.getElementById("answer");
eightBall.onclick = function() {
	const response = responses[0];
	answer.textContent = response;
};