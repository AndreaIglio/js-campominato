//TASK 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

// function notDuplicate (array, number, iteration) {

//        var i = 0;        

//     while (array.length < iteration) {

//         var number;

//         if (array.indexOf(number) == -1) {
//            return array.push(number);
//         }

//         i++

//     }

// }





// var genNumber = Math.floor(Math.random() * 100 + 1);

// var pcNumberFunction = notDuplicate (pcNumberList, genNumber, 16);
// console.log(pcNumberFunction);




var pcNumberList = [];

var i = 0;

while (pcNumberList.length < 16){

var genNumber = Math.floor(Math.random() * 100 + 1);
console.log(genNumber);


if (pcNumberList.indexOf(genNumber) == -1) {

pcNumberList.push(genNumber);

}
 i++;

}

console.log(pcNumberList);


// TASK 2 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.


var userNumberList = [];

while (userNumberList.length < 2 ){

    var userNumber = Number(prompt('Inserisci un numero compreso tra 1 e 100'));

    if(userNumberList.indexOf(userNumber) == -1) {

        userNumberList.push(userNumber);

    }

    i++

}

console.log(userNumberList);



//TASK 3 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.




//TASK 4 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//TASK 5 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50