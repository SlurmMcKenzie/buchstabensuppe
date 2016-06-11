// Logik hinter dem Spiel

// Alphabet als Array definieren, ohne Umlaute
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Number of all fields in the game
var completeField = 36;

// Laenge des Alphabets auslesen
var arrayLength = alphabet.length;

// CompleteField consists of random numbers plus searchWord
var reducedField = completeField - searchWord

// Minimum fuer Zufall festlegen
var min = 1;

// Maximum fuer Zufall = Laenge des Alphabets
var max = arrayLength;

	// Zufaelligen Zufall generieren, Zahl zwischen 1 und 26.
	function random (min , max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


// Zufaellig erzeugten Buchstaben aus 'alphabet' auswaehlen
console.log(alphabet[random(min, max)]);
