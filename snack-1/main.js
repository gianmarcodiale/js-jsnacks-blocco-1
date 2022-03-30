/* 
SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// creo i prompt per inserire i numeri
const firstNumber = prompt("Inserisci il primo numero:");
const secondNumber = prompt("Inserisci il secondo numero:");

// creo la condizione per verificare se uno è maggiore, minore o uguale all'altro
if (firstNumber > secondNumber) {

    console.log(`Il primo numero inserito (${firstNumber}) è maggiore del secondo (${secondNumber})!`);

} else if (secondNumber > firstNumber) {

    console.log(`Il secondo numero inserito (${secondNumber}) è maggiore del primo (${firstNumber})!`);

} else {

    console.log("I numeri inseriti sono uguali!");

};