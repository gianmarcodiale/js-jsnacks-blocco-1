/* 
SNACK 9
Calcola la somma e la media dei primi 10 numeri.
*/

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0;

for (n = 0; n < numbersList.length; n++) {
    sum += numbersList[n];
};

console.log(sum);
console.log(sum / 2);