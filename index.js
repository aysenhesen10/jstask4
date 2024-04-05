function kreditHisselereBol(pul, aySayi) {
    
    let herAyOdenilecek = Math.floor(pul / aySayi);
    

    let qaliq = pul % aySayi;

 
    let netice = [];

  
    for (var i = 0; i < aySayi - 1; i++) {
        netice.push(herAyOdenilecek);
    }

 
    netice.push(herAyOdenilecek + qaliq);

    return netice;
}
let kreditMebliyi = 1000;
let aySayi = 3;

console.log("Kreditin aylıq hissələrə bölünmüş ödənişləri:");
var hisseler = kreditHisselereBol(kreditMebliyi, aySayi);
for (let j = 0; j < hisseler.length; j++) {
    console.log((j + 1) + "-ci ay: " + hisseler[j] + " manat");
// }
function fahrenheitToCelsius(fahrenheit) {
   
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}


let fahrenheitDerece = 75;


console.log(fahrenheitDerece + " Fahrenheit derecesi " + fahrenheitToCelsius(fahrenheitDerece) + " Celsius derecesine bearberdir.");
