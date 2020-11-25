//VAR


var rndNumberMaxValue;
var userOpportunities;
var minValue;
var maxValue;
var genNumber;


//VAR ARRAY

var userNumberList = [];
var pcNumberList = [];


// FUNCTIONS

/** The function will generate a random number between 1 and 100
 * 
 * @param {*} min  min value
 * @param {*} max  max value
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}



/** The function will generate n2 different numbers and push them into an array
 * 
 * @param {*} array array of bombs (including all the n1 numbers)
 * @param {*} n1    random numbers between 1 and 100 following getRndInteger function (pcNumbers) that will be pushed to the array
 * @param {*} n2    length of the array
 */
function notDuplicate(array, n1, n2){

while (array.length < n2) {
    var i = 0;
        
        var n1 = getRndInteger(minValue, maxValue);
        console.log(n1);

        if (array.indexOf(n1) == -1) {
        array.push(n1);
         }
    i++;
    }
    console.log(array);
    return true;
}






// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50



do {
  var difficulty = Number(prompt('Choose a difficulty between da 0 a 2', '0,1,2'));
} while (difficulty > 2 || difficulty < 0);

switch (difficulty) {

    case 0:
        minValue = 1;
        maxValue = 100;
        userOpportunities = "Inserisci un numero da 1 a 100";
        break;
    case 1:
        minValue = 1;
        maxValue = 80;
        userOpportunities = "Inserisci un numero da 1 a 80"
        break;
    case 2:
        minValue = 1;
        maxValue = 50;
        userOpportunities = "Inserisci un numero da 1 a 50"
        break;
}


//TASK 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

// riferimento funzione riga 24

// riferimento function riga 36

var bombs = notDuplicate(pcNumberList, genNumber, 16);


// TASK 2 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// TASK 3 L’utente non può inserire più volte lo stesso numero.
// TASK 4 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//TASK 5 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

var userNumberPossibilities = 100 - pcNumberList.length;

var i = 0;

while (userNumberList.length < userNumberPossibilities) {
  var userNumber = Number(prompt(userOpportunities));
  var checkResult = false;

  if (userNumberList.indexOf(userNumber) == -1) {
    userNumberList.push(userNumber);
    checkResult = true;
  }

  if (pcNumberList.indexOf(userNumber) != -1){
      console.log('Game over');
      break;
  }


  i++;
}

console.log(userNumberList);

//TASK 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//TASK 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

if (userNumberList.length == userNumberPossibilities) {
  console.log("You win");
    console.log("You scored " + (userNumberList.length));
}
else {
  console.log("You scored " + (userNumberList.length - 1));}




  



