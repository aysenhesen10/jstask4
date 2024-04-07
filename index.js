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
}

// task3
function fahrenheitToCelsius(fahrenheit) {
   
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}


let fahrenheitDerece = 75;


console.log(fahrenheitDerece + " Fahrenheit derecesi " + fahrenheitToCelsius(fahrenheitDerece) + " Celsius derecesine bearberdir.");

// task2
let array = [1,2,3,4,4]
function num (array){
    let eded =0
    for (let i=0; i< array.length ;i++){
        for (let j =1; j < array.length ;j++) {
            
            if (array[j]==[i]) {
                eded=array[i]
                
            }
        }
        
    }
    return eded
}
console.log(num(array))
    
