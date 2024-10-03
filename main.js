/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
 */

//passo 1 chiedere all'utente la sua email
let mail=prompt("inserisci la tua email")

//Passo 2 creare una lista di email, conm un array
const list_mail=[
    "francescomarra@gmail.com",
    "boolean@gmail.com",
    "fabio@hotmail.com",
    "barbara@gmail.com",
    "anna@gmail.com"
];
//passo 3 effettuare il controllo sull'inserimento corretto della stringa
if (mail.includes("@") && mail.includes(".")) {
    alert("mail valida")
        //passo 4 effettuare il controllo sulla lista
    if (list_mail.includes(mail) {
        console.log(mail);
        //passo 5 stampare un messaggio appropriato
        alert("Questa mail può accedere")
    } 
    else{
        alert("Questa mail non può accedere")
    }

}
else{
    alert("La mail non è valida")
}

