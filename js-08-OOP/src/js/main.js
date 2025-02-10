import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import { amdRadeonRx } from "../modules/class/amd-radion-rx.js";

/*
    Ruta relativa: Son rutas que dependen de la ubicación actual del archivo
    Ruta absoluta: Especifican la ubicación exacta de un archivo
    o recurso sin importar desde dónde se acceda
*/

insertMainHeader();
insertMainFooter();

console.log(amdRadeonRx);
// Podemos acceder a los atributos usando el operador objeto.atributo (acces and call), n.predecedenc: 17
// podemos accerder usando objeto[nombreAtributo]

// Accediendo al modelo
console.log( amdRadeonRx.model );
console.log( amdRadeonRx["model"] );
let attribute = "model";
console.log( amdRadeonRx[attribute] ); // AMD Radeon RX 6800 XT
attribute = "price";
console.log( amdRadeonRx[attribute] );

// Acceder al atributo title e imprimir en consola, usando los dos métodos para acceder
console.log( amdRadeonRx.title );
console.log( amdRadeonRx["title"] );
attribute = "title";
console.log( amdRadeonRx[attribute] );