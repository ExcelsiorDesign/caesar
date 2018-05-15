function encrypt() {
	let text = document.getElementById("textbox1").value.toLowerCase().replace(/ /g,'');
	let textLength = text.length -1;
	let array = [];
	let shift = parseInt(document.getElementById("textbox2").value, 10);
	document.getElementById("swagga").innerHTML = "Message: " ;
	for (i = 0; i <= textLength; i++) {
		array[i] = text.charAt(i);
		let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		let letter = array[i];
		let letterPosition = alphabet.indexOf(letter);
		let shiftedPos = (letterPosition + shift) % 26;
		let shiftedLetPos = alphabet[shiftedPos];
		document.getElementById("swagga").innerHTML += " " + shiftedLetPos;
	};
}
