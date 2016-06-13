// Logik hinter dem Spiel

// Alphabet als Array definieren, ohne Umlaute
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Search Word
var searchWord = ['A', 'F', 'F', 'E'];

// Number of all fields in the game
var completeField = 36;

// Laenge des Alphabets auslesen, wg. Abrunden - 1
var arrayLength = alphabet.length - 1;

//find out search word length
var searchWordLength = searchWord.length;

// CompleteField consists of random numbers plus searchWord
var reducedField = completeField - searchWordLength;

// Minimum fuer Zufall festlegen
var min = 0;

// Maximum fuer Zufall = Laenge des Alphabets
var max = arrayLength;

// Text in For-Schleife
var text = [];
var word = [];

// Zufaelligen Zufall generieren, Zahl zwischen 0 und 25.
function random(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Map random number to random letter
for (i = 1 ; i <= reducedField; i++) {
    text += alphabet[random(min, max)];
}

// get all letters from searchWord into word
for (i = 0 ; i < searchWordLength; i++) {
     word += searchWord[i];
}

//join arrays
textur = text.concat(word);

// Zufaellig erzeugten Buchstaben aus 'alphabet' auswaehlen
console.log(textur);
