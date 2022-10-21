/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

/* 1. chiedere mail utente */

let risposta = document.getElementById('risposta');
/* 2. creare lista di accesso */
const listaDAccesso = ['giada@gmail.com', 'mattia@gmail.com', 'pippo@gmail.com' ];



const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    risposta.innerHTML = '';
    let mailUtente = document.getElementById('emailUtente').value;
    let check = false;
    for (let i = 0; i < listaDAccesso.length; i++){
        if(mailUtente === listaDAccesso[i]){
            check = true;
            risposta.innerHTML = 'Email Presente';
            /*   SE è nella lista esito controllo positivo stampare esito */   
    } 
    } 
    if(check){
        console.log('Benvenuto puoi entrare!')
        risposta.innerHTML = 'Benvenuto puoi entrare'
    } else {
        console.log('La tua mail non è presente')
        risposta.innerHTML = 'la tua mail non è presente'
    }

    }) ;

   



 
/* 
creo array giocatore e array computer, 
genero i num random x tutti e 2, 
li metto dentro (push) agli rispettivi array 
calcolare il punteggio più alto e quindi assegnare vincitore.
*/
const dadi = document.getElementById('dadi');
dadi.addEventListener('click', function() {


//scrivo il ciclo per generare i 1 numero

    let numeroGiocatore = Math.floor(Math.random()* (6 - 1)) + 1;  

//scrivo il ciclo per generare gli altri 6 numeri

    let numeroComputer = Math.floor(Math.random()* (6 - 1)) + 1;

//scrivo confrontare i due 

if (numeroGiocatore < numeroComputer){
    console.log('hai perso');
} else if (numeroGiocatore > numeroComputer) {
    console.log('hai vinto')
} else {
    console.log('pareggio') 
} 
});


/*
ESEMPIO MIO:
let i = 1;
i = i + i;

i += i; */