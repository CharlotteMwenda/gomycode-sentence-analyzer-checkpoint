# Sentence Analyzer

## Overview
This project is a simple **JavaScript program** that reads a sentence character by character and analyzes it to provide key information. The program calculates:

- **Length of the sentence** (total number of characters, including the period).  
- **Number of words** (assuming words are separated by a single space).  
- **Number of vowels** (`a, e, i, o, u`) in the sentence.  

It demonstrates basic programming concepts such as **loops, conditionals, string manipulation, and counters**.

---

## Technologies Used
- **JavaScript (ES6)** – Main programming language used for logic.  
- **Node.js** – To run the program in a console environment.  
- **VS Code / any text editor** – Recommended for editing and running the code.

---

## How It Works
1. The program takes a sentence that **ends with a period**.  
2. It loops **through each character**, using three counters to track:
   - Characters (`length`)  
   - Words (`words`)  
   - Vowels (`vowels`)  
3. Spaces are used to determine word boundaries, and vowels are counted **case-insensitively**.  
4. The program stops reading once it reaches the period and outputs all counts.

---
