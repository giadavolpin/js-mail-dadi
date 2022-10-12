/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

/* 
1. chiedere mail utente
2. creare lista di accesso , 
3. SE è nella lista esito controllo positivo stampare esito
3. SE non è nella lista esito controllo negativo stampare esito

1. random 1-6 giocatore
2. random 1-6 computer
3. vince punteggio più alto


*/

const email = document.getElementById('email');
const btn = document.getElementById('btn');
btn.addEventListener('click',
    function(){
        

    }
    ) 

const listaDAccesso = ['volpingiada@gmail.com', 'marco@gmail.com' , 'pippo@gmail.com' ] 
if (email){
    listaDAccesso

}



/* let numeriGeneratiGiocatore = [];
let numeriGeneratiComputer = [];

for (let i = 1 ; i <= 6 ; i++) {
    let numeroGiocatore = Math.floor(Math.random()* (6 - 1)) + 1;
    numeriGeneratiGiocatore.push (numeroGiocatore);  
}
console.log(numeriGeneratiGiocatore);

for (let i= 1 ; i <= 6; i++) {
    let numeroComputer = Math.floor(Math.random()* (6 - 1)) + 1;
    numeriGeneratiComputer.push (numeroComputer);
}
console.log(numeriGeneratiComputer);

for (let i = 1 ; i <= numeriGeneratiGiocatore.length ; i++) {
    if(numeriGeneratiGiocatore[0] < numeriGeneratiComputer[0]){
        console.log(); NON SO CHE SCRIVERE QUI
    }
} */

let numeroGiocatore = Math.floor(Math.random()* (6 - 1)) + 1;
let numeroComputer = Math.floor(Math.random()* (6 - 1)) + 1;
console.log(numeroGiocatore, numeroComputer);

if (numeroGiocatore < numeroComputer){
    console.log('hai perso');
} else if (numeroGiocatore > numeroComputer) {
    console.log('hai vinto')
} else {
    console.log('pareggio') 
}