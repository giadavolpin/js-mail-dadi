/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

/* 




1. random 1-6 giocatore
2. random 1-6 computer
3. vince punteggio più alto


*/
/* 1. chiedere mail utente */
const mailUtente = document.getElementById('emailUtente');
let risposta = document.getElementById('risposta');
/* 2. creare lista di accesso */
const listaDAccesso = ['giada@gmail.com', 'mattia@gmail.com', 'pippo@gmail.com' ] 
/*  3. SE è nella lista esito controllo positivo stampare esito
    4. SE non è nella lista esito controllo negativo stampare esito */

    let inviaMail = document.getElementById('btn').value;
    btn.addEventListener('click', function(){
        let check = false;
        
        for (let i = 0; i < listaDAccesso.lenght; i++){
            if(mailUtente === listaDAccesso [i]){
            check = true;
            }
            if(check) {
               risposta.innerHTML = 'Email Presente';
               
            }
            else {
               risposta.innerHTML = 'Email Non Presente';
        }
    } 
    }  
    ) ;







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
/* 
let numeroGiocatore = Math.floor(Math.random()* (6 - 1)) + 1;
let numeroComputer = Math.floor(Math.random()* (6 - 1)) + 1;
console.log(numeroGiocatore, numeroComputer);

if (numeroGiocatore < numeroComputer){
    console.log('hai perso');
} else if (numeroGiocatore > numeroComputer) {
    console.log('hai vinto')
} else {
    console.log('pareggio') 
} */