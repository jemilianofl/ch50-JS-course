import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import { amdRadeonRx, mouseGamerPixArt } from "../modules/class/amd-radion-rx.js";
import { Product } from "../modules/class/Product.js";
import { Mouse } from "../modules/class/Mouse.js";


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

// accediendo a atributos que no existen
console.log( amdRadeonRx.dato1 ); // Descrip 1
console.log( mouseGamerPixArt.dato1 ); //  undefined
console.log( mouseGamerPixArt.compatibilidad ); //  undefined

// Obteniendo el número de elementos
console.log( amdRadeonRx.compatibilidad.length ); // 2
//console.log( mouseGamerPixArt.compatibilidad.length ); // Cannot read properties of undefined

// Operador de encadenamiento opcional  ( ?. )
console.log( mouseGamerPixArt.compatibilidad?.length ); 
console.log( amdRadeonRx.imprimirPrecioMxN() );
console.log( amdRadeonRx.imprimirPrecioDolares() );
console.log( mouseGamerPixArt.imprimirPrecioMxN() );
console.log( mouseGamerPixArt.imprimirPrecioDolares() );

// ======== Usando la clase Product ======== //
const mouseLogi = new Product("Mouse", 800, "Logitech");
const tecladoGamer = new Product("Teclado");
const monitorHp = new Product("Monitor");
const bateria = new Product();

mouseLogi.price = 1;
console.table( mouseLogi );

console.log( mouseLogi.productName );
console.log( mouseLogi.printPrice() );

// ===== Usar la clase mouse

const mouseMac = new Mouse("Mouse Mac", 1400, "Mac", 3000 )
console.log( mouseMac.printPrice() );

// Generando un array de Mice
const mice = [mouseLogi, mouseMac, new Mouse("m3",3,"N/A",1000) ];

for(let mouse of mice){
    //Qué método se va a utilizar?
    console.log( mouse.card() );

}
