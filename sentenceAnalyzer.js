// Sentence Analyzer
// Reads a sentence character by character until a period (.)

let sentence = "This is a simple sentence."; 

let length = 0;
let words = 1;
let vowels = 0;

for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];

    if (ch === ".") {
        break;
    }

    // Count characters
    length++;

    // Count words
    if (ch === " ") {
        words++;
    }

    // Count vowels
    if ("aeiouAEIOU".includes(ch)) {
        vowels++;
    }
}

console.log("Sentence length:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);