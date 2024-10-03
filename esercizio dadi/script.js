/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore,
in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


//passo 1 genera un numero random da 1 a 6 per l'utente
let firstNumber=Math.floor(Math.random() * 6) + 1;
console.log(firstNumber);

//passo 2 generta un numero random da 1 a 6 per il computer
let secondNumber=Math.floor(Math.random() * 6) + 1;
console.log(secondNumber);

//confronta i due numeri, il maggiore vince
if (firstNumber > secondNumber) {
    //stampa messaggio con il vincitore
    alert("l'utente è il vincitore!")
}else if (firstNumber<secondNumber) {
    //stampa messaggio con il vincitore
    alert("Il computer è il vincitore!");
}else{
    alert("c'è un pareggio!");
}
