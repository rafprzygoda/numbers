// Excercise 8.6
// isNaN method added 

var a = prompt("podaj liczbę");
var b = prompt("podaj liczbę");
var number = (a * a) + (2 * a * b) - (b * b);
console.log(number);
if (isNaN('a') && isNaN('b') && number > 0) {
    alert(number + ' to jest liczba dodatnia');
} else if (isNaN('a') && isNaN('b') && number < 0) {
    alert(number + ' to jest liczba ujemna');
} else if (isNaN('a') && isNaN('b') && number === 0) {
    alert(number + ' wynik równy zero');
} else {
    alert("nie podałes liczb");
}