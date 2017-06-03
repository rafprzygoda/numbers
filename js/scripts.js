// Excercise 8.6
// isNaN method added 

var a = prompt("podaj liczbę");  
var b = prompt("podaj liczbę"); 
if (!isNaN(a) && !isNaN(b)) {
var number = (a * a) + (2 * a * b) - (b * b); 
}
console.log(number);

if (number > 0) {
    alert(number + ' liczba dodatnia');
} else if (number < 0) {
    alert(number + ' liczba ujemna');
} else {
    alert('zero');
}