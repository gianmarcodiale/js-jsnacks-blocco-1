/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const guestList = ['Luca', 'Giovanni', 'Marco', 'Laura', 'Arianna', 'Giada'];

let guestName = prompt('Qual è il tuo nome?');

for (i = 0; i < guestList.length; i++) {
    guestListIndex = guestList[i];
    if (guestName.includes(guestListIndex)) {
        console.log('Il tuo nome è nella lista, puoi entrare.');
        break;
    } else {
        console.log('Mi dispiace non sei sulla lista, non puoi entrare.');
    }
};