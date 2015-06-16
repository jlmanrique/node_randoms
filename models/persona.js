var chance = new (require('chance'));

function Persona() {
  this.nombre = chance.name();
  this.apellidos = chance.last();
  this.edad = chance.age({ type: 'adult'});
  this.pais = chance.country();
}

module.exports = Persona;