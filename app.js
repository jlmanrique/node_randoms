var Persona = require('./models/persona');
var Estadistica = require('./utils/estadistica');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var numero_personas = getRandomInt(100,200);

var personas = [];
for (var i = 0; i < numero_personas; i++) {
  personas[i] = new Persona();
};

console.log('El promedio de las edades es %d', Estadistica.promedio(personas));

console.log('La edad minima es %d', Estadistica.minimo(personas));
console.log('La edad maxima es %d', Estadistica.maximo(personas));
