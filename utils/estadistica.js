function Estadistica(){

}

Estadistica.promedio = function(personas){
  
  var cantidad = personas.length;
  var suma_edades = personas.reduce(function(acumulador,persona){ return acumulador+persona.edad; },0);
  return (suma_edades/cantidad);
}

Estadistica.minimo = function(personas){

  var minimo = personas.reduce(
    function(minimo_actual,persona){ 
      if (minimo_actual>persona.edad)
        return persona.edad;
      else
        return minimo_actual;
    },
    personas[0].edad);
  return minimo;
}

Estadistica.maximo = function(personas){

  var maximo = personas.reduce(
    function(maximo_actual,persona){ 
      if (maximo_actual<persona.edad)
        return persona.edad;
      else
        return maximo_actual;
    },
    personas[0].edad);
  return maximo;
}

module.exports = Estadistica;