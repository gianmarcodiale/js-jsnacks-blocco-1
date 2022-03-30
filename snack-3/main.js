/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

sum = 0;

for (let i = 0; i < 10; i++) {
    let inputNumber = (Number(prompt('Inserisci un numero')));
    sum += inputNumber;
}

console.log(sum);



