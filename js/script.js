// var str = "ciao ciao ";
// var stringa;
// console.log("log pre function " + str);
document.getElementById("palindroma").addEventListener("click",function(){
    palindroma();
});






// -------------------funcions--------------

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