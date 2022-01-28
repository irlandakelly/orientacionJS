
let ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

//Inicia solución al ejercicio 1

//Función para determinar si un número cualquiera es primo o no
function esPrimo(num){      // Comienza la función
  if (num <= 1) {       // Si el número es 1, 0 o negativo quiere decir que no es primo, nos regresa FALSO
    return false;
  } else {      // Si no entra la condición de arriba, entonces comienza el..
    for(let i = 2; i < num; i++){       // ciclo para encontrar si el número es divisible entre algún otro número menor que él
      if(num % i == 0){       // Si encuentra un número divisible quiere decir que el número no es primo, regresa FALSO
        return false;
      }
    }
    return true;      // Si no entra ninguna de las condiciones, el número es primo, regresa VERDADERO
  }
}

//Ciclo foreach para recorrer los elementos del Array que nos dio panchito
ejercicio1.forEach(function (element){      // Le indicamos que vamos a trabajar con el Array llamado ejercicio1
  const primo = esPrimo(element);       // 1 Creamos una constante que aplicará la función para determinar si el número es primo a cada elemento del Array. y guardará si es VERDADERO o FALSO                      
  if(primo){        // Si el resultado guardado en "primo" es VERDADERO..                   
    console.log(element + " es número primo."); // imprime que el número es primo
  } else {        // Y si no (si primo es FALSO)
    console.log(element + " NO es número primo.")       // imprime que el número no es primo.
  }
});

//Termina solución al ejercicio 1

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];



//Inicia solución al ejercicio 2

const extra = {nombre: "Jose", edad: 19, esFamiliar: false};

function puedePasar(){
  if(extra.edad >= 18 && extra.esFamiliar){
    return true;
  }else {
    return false
  }
}

ejercicio2.forEach(function (element){
  const pasele = puedePasar(element);
  if(pasele){
    console.log(element.nombre + " sí puede pasar.");
  } else {
    console.log(element.nombre + " NO puede pasar.");
  }
});


const pasele = puedePasar(ejercicio2);
console.log(pasele);

// Finaliza solución al ejercicio 2