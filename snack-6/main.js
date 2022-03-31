/* 
SNACK 6
Stampa il cubo dei primi n numeri, dove n è un numero indicato dall'utente.
*/

/*
let inputNumbers = [];
for (i = 0; i < 5; i++) {
    let chosedNumbers = Number(prompt('Digita 5 numeri:'));
    let numbersPower = Math.pow(chosedNumbers, 3);
    inputNumbers.push(numbersPower);
    
};
console.log(inputNumbers);
*/



let n = Number(prompt('Digita un numero.'));
let cubo;

for (i = 1; i < n; i++) {
    cubo = Math.pow(i, 3);
    console.log(cubo);
};