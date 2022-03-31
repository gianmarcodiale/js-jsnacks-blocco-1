/* 
SNACK 7
Stampa le potenze di 2 fino a 1000.
*/

nPower2 = Math.pow(2, n);

for (n = 1; n < 100; n++) {
    //console.log(n);
    nPower2 = Math.pow(2, n);
    //console.log(nPower2);
    if (nPower2 < 1000) {
        console.log(nPower2);
    };
};