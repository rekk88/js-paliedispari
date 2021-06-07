// var str = "ciao ciao ";
// var stringa;
// console.log("log pre function " + str);
document.getElementById("palindroma").addEventListener("click",function(){
    palindroma();
});

document.getElementById("pariDispari").addEventListener("click",function(){
    pariDispari();
});




// -------------------funcions--------------

function pariDispari(){
    var sceltaUtente;
    var numeroUtente;
    var numeroPC = rand1_5(); //genero un numero random 0 < x < 6
    var somma=0;

    console.log(numeroPC);
    //input utente
    do{
        sceltaUtente = prompt("pari o dispari ? ");
    }
    while(sceltaUtente != "pari" && sceltaUtente != "dispari");
    do{
        numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 5 : "));
        console.log(numeroUtente);
    }
    while(numeroUtente < 1 || numeroUtente > 5);
    somma = numeroPC + numeroUtente;
    //verifica pari / dispari
    if(sceltaUtente == "pari" && somma % 2 == 0){
        console.log("L'utente vince");
        console.log(somma);
    }
    else if(sceltaUtente == "dispari" && somma % 2 != 0){
            console.log("L'utente vince");
            console.log(somma);
         }
         else //tolti gli unici due casi in cui l'utente vince rimangono solo quelli in cui vince il PC
         {
            console.log("Il PC vince");
            console.log(somma);
         }
}



function palindroma(){
    var str = prompt("inserisci una parola palindroma");
    var i = 0;
    var j = str.length - 1;
    var p = false;
    // alert(str);
    console.log("parola inserita : " + str);

    // console.log(str.length);
    do{
        if (str.charAt(i) == str.charAt(j)){
            p = true;
        }
        else{
            p = false;
        }
        i++;
        j--;
    }
    while(i < str.length);

    if(p){
        console.log("palindroma");
        alert("palidroma!!!!!")

    }
    else{
        console.log("non palindroma");
        alert("eh voleeeeviiiii ......non è palindroma");
    }
}

function rand1_5(){
    var x = Math.floor(Math.random() * 5 + 1);
    return x;
}