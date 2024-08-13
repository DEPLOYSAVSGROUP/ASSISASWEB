// Obtenemos la fecha actual
var DateO = new Date();

// Obtenemos la fecha guardada en el localStorage
var DateMEM = localStorage.getItem("DateMEM");

// Si no hay una fecha guardada en el localStorage, la establecemos como la fecha actual
if (!DateMEM) {
  DateMEM = DateO;
  localStorage.setItem("DateMEM", DateMEM);
}
// Calculamos la diferencia de tiempo en milisegundos
var timeDiff = DateO.getTime() - new Date (DateMEM).getTime();

// Convertimos la diferencia a horas
var hoursDiff = timeDiff / (1000 * 3600);

var head = document.getElementsByTagName('head')[0];
var meta = document.createElement('meta');
meta.httpEquiv = "Cache-Control";
meta.content = "no-cache, no-store, must-revalidate";

// Si la diferencia es mayor a 12 horas, forzamos un recargo de la página
if (hoursDiff > 0.0083) {
    localStorage.removeItem('DateMEM');
    // Agregar el elemento meta al head del documento
    head.appendChild(meta);
    
}
console.log(DateO);
console.log(DateMEM);
console.log(hoursDiff);

