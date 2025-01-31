const postres = [];

// Agregar postres al final del arreglo
postres.push("Pastel de guayaba");
postres.push("Flan", "Gelatina");

console.log( postres ); // [ 'Pastel de guayaba', 'Flan', 'Gelatina' ]

// Eliminar un postre del final del arreglo
console.log(`Elemento eliminado con pop(): ${ postres.pop() }`); // Gelatina
console.log( postres ); // [ 'Pastel de guayaba', 'Flan' ]

// Agregar un postre al inicio del arreglo.
postres.unshift("Tiramisú");
console.log( postres ); // [ 'Tiramisú', 'Pastel de guayaba', 'Flan' ]

// Eliminar un postre del inicio del arreglo.
console.log(`Elemento eliminado con shift(): ${ postres.shift() }`); // Tiramisú
console.log( postres ); // [ 'Pastel de guayaba', 'Flan' ]

// Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // 1

// Buscar el postres "Flan" 
// Si existe mostrar "El flan existe"
// Si no existe mostrar "El flan no existe"
// Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso
console.log( postres.includes("Flan") ? "El flan existe" : "El flan no existe" );

console.log( postres.indexOf("Flan") ? "El flan existe" : "El flan no existe" );

// ================================================

const pasteles = ['Pastel de chocolate', 'Pastel de zanahoria', 'Pastel de limón'];

const eliminarPastel = ( array, indice ) => {
    const pastelEliminado = array.splice(indice, 1);
    console.log( array ); // ["Pastel de chocolate", "Pastel de limón"]
    return pastelEliminado;

}

eliminarPastel(pasteles, 1);
console.log( pasteles ); // ["Pastel de chocolate", "Pastel de limón"]

// =================== Declarar un arreglo ===========
const myArray = []; // []
const myArray2 = new Array(); // []
const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ================== Iterar un arreglo con for loop ==================
/*
    Sintaxis:
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
*/
const nombres = ["Juan", "Pedro", "Maria", "Ana"];

for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
    
}
console.log("Me muestro en consola, muchas veces?");

// ================= Iterar un arreglo y mostrar 

const gelatinas = ["Fresa", "Limon", "Naranja", "Uva"];
const gelatinasLista = [];

for ( let index = 0; index < gelatinas.length; index++) {
    gelatinasLista.push(`<li> ${ gelatinas[index] } </li>`);
}

console.log( gelatinasLista ); 
/*
    [
    "<li> Fresa </li>", 
    "<li> Limon </li>", 
    "<li> Naranja </li>", 
    "<li> Uva </li>"
    ]
*/

const refGeletinasLista = document.getElementById("gelatina-lista");
console.log(refGeletinasLista);
refGeletinasLista.innerHTML = gelatinasLista;

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");
const generarListaCantantes = (cantantesArray) => {
    const cantantesLista = [];
    for (const cantante of cantantesArray) {
        cantantesLista.push(`<li>${cantante}</li>`);
    }
    return cantantesLista.join("");
}
const insertarListaDeCantantesAlDOM = (lista, refDom)=> refDom.innerHTML = lista;
const listItemsOfCantantes = generarListaCantantes(cantantes);
insertarListaDeCantantesAlDOM( listItemsOfCantantes, refListaCantantes);


// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
let iteracion = 0;
for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}


// --------------------- Uso de break en ciclos y label en ciclos anidados

for (let i = 1; i <= 7; i++ ){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
        if ( i >= 4 ) break;
    }
}
