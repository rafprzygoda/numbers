// Zadanie 8.6

var a = prompt('Podaj pierwsza liczbe');
		if (a == parseInt(a)) {
    var b = prompt('Podaj druga liczbe');
  }
    if (b == parseInt(b)) {
        summary = (a * a) + (2 * a * b) - (b * b);
			     console.log(summary);
		
			 if (summary > 0) {
				    alert('Liczba dodatnia');
			 }
			 else if (summary < 0) {
				    alert('Liczba ujemna');	
			 }
			 else {
				    alert('Wynik rowny zero');	
			 }
		}
		else {
    		alert("Liczbe prosilem a nie litere");
		}