/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const guestList = ['Luca', 'Giovanni', 'Marco', 'Laura', 'Arianna', 'Giada'];

let guestName = prompt('Qual è il tuo nome?');

let success = false;

for (i = 0; i < guestList.length; i++) {
    guestListIndex = guestList[i];
    if (guestName.includes(guestListIndex)) {
        success = true;
    }
};

if (success) {
    console.log('Sei nella lista, puoi entrare.');
} else {
    console.log('Mi dispiace il tuo nome non è nella lista, non puoi entrare.');
};