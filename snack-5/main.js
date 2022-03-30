/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
*/

let numbersList = [];

for (let i = 0; i < 6; i++) {
    let numberInput = parseInt(prompt('Inserisci un numero.'));
    if (numberInput % 2 != 0) {
        numbersList.push(numberInput);
    };
};

console.log(numbersList);