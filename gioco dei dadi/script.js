
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: 
//Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//Generare un numero random per l'utente da 1 a 6
let num_utente = Math.floor((Math.random() * 6) + 1);
console.log('Il numero dell\'utente è :', num_utente);


//Generare un numero random per il computer da 1 a 6
let num_computer = Math.floor((Math.random() * 6) + 1);
console.log('Il numero del computer è :', num_computer);

if (num_utente > num_computer){

    console.log('L\'utente ha vinto contro il computer '+ num_utente + ' a ' + num_computer);

} else if(num_utente < num_computer){

    console.log('Il computer ha vinto contro l\'utente '+ num_computer + ' a ' + num_utente);

} else {

    console.log('L\'utente e il computer hanno pareggiato con ' + num_utente + ' e ' + num_computer);
}