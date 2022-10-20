/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

/* 1. chiedere mail utente */
const mailUtente = document.getElementById('emailUtente').value;
let risposta = document.getElementById('risposta');
/* 2. creare lista di accesso */
const listaDAccesso = ['giada@gmail.com', 'mattia@gmail.com', 'pippo@gmail.com' ];



    let inviaMail = document.getElementById('btn').value;
    btn.addEventListener('click', function(){
        for (let i = 0; i < listaDAccesso.length; i++){
            alert(mailUtente); 
            if(mailUtente !== listaDAccesso[i]){
                risposta.innerHTML = 'Email Non Presente';
                /*  SE non è nella lista esito controllo negativo stampare esito */
            } else {
                risposta.innerHTML = 'Email Presente';
                /*   SE è nella lista esito controllo positivo stampare esito */                 
            }
        } 
    }) ;




 
/* 
creo array giocatore e array computer, 
genero i num random x tutti e 2, 
li metto dentro (push) agli rispettivi array 
calcolare il punteggio più alto e quindi assegnare vincitore.
*/
let numeriGeneratiGiocatore = [];
let  numeriGeneratiComputer = [];
for (let i= 0; i <= 6; i++){
    let numeriGeneratiGiocatore = Math.floor(Math.random()* (6 - 1)) + 1;
    numeriGeneratiGiocatore.push(numeriGeneratiGiocatore);  
}
/* non mi funziona il push */
for (let i= 0; i <= 6; i++){
    let numeriGeneratiComputer = Math.floor(Math.random()* (6 - 1)) + 1;
    numeriGeneratiComputer.push(numeriGeneratiComputer);
}


for (let i = 1 ; i <= numeriGeneratiGiocatore.length ; i++) {
    if(numeriGeneratiGiocatore[0] < numeriGeneratiComputer[0]){
        
    }
} 

console.log(numeroGiocatore, numeroComputer);

if (numeriGeneratiGiocatore < numeriGeneratiComputer){
    console.log('hai perso');
} else if (numeriGeneratiGiocatore > numeriGeneratiComputer) {
    console.log('hai vinto')
} else {
    console.log('pareggio') 
} 