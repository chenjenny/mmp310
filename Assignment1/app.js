const book1Button = document.getElementById("book1");
const book2Button = document.getElementById("book2");
const book3Button = document.getElementById("book3");
const book4Button = document.getElementById("book4");


const message = document.createElement("h1");
document.body.appendChild(message);

book1Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book1.value +
		" “ The more that you read, the more things you will know. The more that you learn, the more places you'll go.” "		

}

book2Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book2.value +
		"“ A person's a person, no matter how small.” "
}



book3Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book3.value +
		" “ Congratulations! Today is your day. You're off to Great Places! You're off and away!” "
}

book4Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book4.value +
		" “ Today you are You, that is truer than true. There is no one alive who is Youer than You.” "
}
