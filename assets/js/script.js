
//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//lista email
const lista_email = ['leo@gmail.it', 'fabio@gmail.it', 'marco@gmail.it']

//chiedo all'utente la sua email
const email = prompt('Dimmi la tua E-mail')

for (let i = 0; i < lista_email.length; i++) {
    const element = lista_email[i];
}

//stampo messaggio sull'esito del controllo
if(email == element){
    alert('Benvenuto')
}else{
    alert('Accesso negato')
}