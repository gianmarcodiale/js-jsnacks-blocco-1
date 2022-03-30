/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Creo i prompt per inserire le due parole
const firstWord = String(prompt("Inserisci la prima parola:"));
const secondWord = String(prompt("Inserisci la seconda parola:"));

// Creo le variabili con la lunghezza delle parole
firstWordLength = firstWord.length;
secondWordLength = secondWord.length;
let stamp

// Creo la condizione per stabilire quale parola è più lunga
if (firstWordLength > secondWordLength) {
    console.log(secondWord);
    console.log(firstWord);
} else if (secondWordLength > firstWordLength) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log(`Le due parole hanno la stessa lunghezza! Lunghezza prima parola: ${firstWordLength} caratteri. Lughezza seconda parola ${secondWordLength} caratteri.`);
}