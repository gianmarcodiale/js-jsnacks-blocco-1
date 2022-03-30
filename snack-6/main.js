/* 
SNACK 6
Stampa il cubo dei primi n numeri, dove n è un numero indicato dall'utente.
*/

let inputNumbers = [];
for (i = 0; i < 5; i++) {
    let chosedNumbers = Number(prompt('Digita 5 numeri:'));
    let numbersPower = Math.pow(chosedNumbers, 3);
    inputNumbers.push(numbersPower);
    
};
console.log(inputNumbers);