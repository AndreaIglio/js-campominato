//TASK 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

/** Generate a random number between 1 and 100
 * 
 * @param {*} min  min value
 * @param {*} max  max value
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}





var genNumber = getRndInteger(1, 100);
var pcNumberList = [];
var i = 0;

/** The function will generate n2 different numbers and push them into an array
 * 
 * @param {*} array array of bombs (including all the n1 numbers)
 * @param {*} n1    random numbers between 1 and 100 following getRndInteger function (pcNumbers) that will be pushed to the array
 * @param {*} n2    length of the array
 */
function notDuplicate(array, n1, n2){

while (array.length < n2) {
    var i = 0;
        
        var n1 = getRndInteger(1, 100);
        console.log(n1);

        if (array.indexOf(n1) == -1) {
        array.push(n1);
         }
    i++;
    }
    console.log(array);
    return true;
}

var bombs = notDuplicate(pcNumberList, genNumber, 16);


// TASK 2 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//TASK 3 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var userNumberList = [];
var userNumberListLength = 20 - pcNumberList.length;

while (userNumberList.length < userNumberListLength) {
  var userNumber = Number(prompt("Inserisci un numero compreso tra 1 e 100"));

  if (userNumberList.indexOf(userNumber) == -1) {
    userNumberList.push(userNumber);
  }

  if (pcNumberList.indexOf(userNumber) != -1){
      console.log('Game over');
      break;
  }


  i++;
}

console.log(userNumberList);

//TASK 3 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

if (userNumberList.length == userNumberListLength) {
  console.log("You win");
}



// WHILE LOOP


// /WHILE LOOP



//TASK 4 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.





// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50