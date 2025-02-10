
/**
 *  Clase producto
 *      El nombre de lals clases (plantillas) debe ser con UpperCamelCase
 *      Se recomienda que el nombre sea un sustantivo.
 *
 *
 * */

class Product {
    // El método constructo nos ayuda a inicializar un objeto
    constructor( productName="---" ){
        console.log(`Te he dado vida ${productName}`);
    }

}
export { Product };