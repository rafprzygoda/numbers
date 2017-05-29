// Excercise 8.6
// New version of script, more simple. JSHint approved. 

var a = prompt("podaj liczbę");
var b = prompt("podaj liczbę");
var number = (a * a) + (2 * a * b) - (b * b);
console.log(number);
if (a == parseInt(a) && b == parseInt(b) && number > 0) {
    alert(number + ' to jest liczba dodatnia');
} else if (a == parseInt(a) && b == parseInt(b) && number < 0) {
    alert(number + ' to jest liczba ujemna');
} else if (a == parseInt(a) && b == parseInt(b) && number === 0) {
    alert(number + ' wynik równy zero');
} else {
    alert("nie podałes liczb");
}