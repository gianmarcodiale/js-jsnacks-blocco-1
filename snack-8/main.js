/* 
SNACK 8
Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
*/

let numberInput = (prompt('Digita un numero di 4 cifre:'));
sum = 0;
//console.log(numberInput);
for (n = 0; n < numberInput.length; n++) {
    sum += Number(numberInput[n]);
};
console.log(sum);