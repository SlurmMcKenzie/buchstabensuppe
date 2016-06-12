// Logik hinter dem Spiel

// Alphabet als Array definieren, ohne Umlaute
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Search Word
var searchWord = ['A', 'F', 'F', 'E', 'N']; 

// Number of all fields in the game
var completeField = 36;

// Laenge des Alphabets auslesen
var arrayLength = alphabet.length;

//find out search word length
var searchWordLength = searchWord.length;

// CompleteField consists of random numbers plus searchWord
var reducedField = completeField - searchWordLength

// Minimum fuer Zufall festlegen
var min = 1;

// Maximum fuer Zufall = Laenge des Alphabets
var max = arrayLength;

	// Zufaelligen Zufall generieren, Zahl zwischen 1 und 26.
	function random (min , max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


// Zufaellig erzeugten Buchstaben aus 'alphabet' auswaehlen
console.log("Buchstabe aus dem Alphabet:" + alphabet[random(min, max)]);
console.log("Suchwortlaenge:" + searchWordLength);
console.log("Feldgroesse:" + reducedField);
