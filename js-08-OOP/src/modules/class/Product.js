<<<<<<< HEAD

/**
 *  Clase producto
 *      El nombre de lals clases (plantillas) debe ser con UpperCamelCase
 *      Se recomienda que el nombre sea un sustantivo.
=======
/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 *
 *  Encapsulamiento: La encapsulación ayuda a proteger la integridad
 *  de los datos y asegura que un objeto mantenga su estado interno
 *  consistente. Al limitar el acceso directo a los datos internos
 *  de un objeto, se reduce la posibilidad de que estos datos sean
 *  modificados de manera incorrecta o que se produzcan efectos
 *  secundarios no deseados.
>>>>>>> 8d79d0933bb22196b5b3f8c1d8c7c5ea0cebcfb3
 *
 *
 * */

<<<<<<< HEAD
/*  Encapsulamiento: La encapsulación ayuda a proteger la integridad 
 *  de los datos y asegura que un objeto mantenga su estado interno 
 *  consistente. Al limitar el acceso directo a los datos internos 
 *  de un objeto, se reduce la posibilidad de que estos datos sean 
 *  modificados de manera incorrecta o que se produzcan efectos 
 *  secundarios no deseados.
*/

class Product {
    // Determinar los atributos de mi clase
    #productName;
    #price;
    #brand;
    // El método constructor nos ayuda a inicializar un objeto
    constructor( productName="---", price, brand ){
        this.#productName = productName; 
        this.#price = price;
        this.#brand = brand;
    }

    // Métodos getters y setters
    set productName( newProductName ){
        // TODO continuar solo si cumple
        // ciertas condiciones
        this.#productName = newProductName;
    }

    get productName(){
        return this.#productName;
    }

    set price( newPrice ){
        this.#price = newPrice;
    }

    get price(){
        return this.#price;
    }

    set brand( newBrand ){
        this.#brand = newBrand;
    }

    get price(){
        return this.#brand;
    }

    printPrice() {
        return `${this.#productName} cuesta ${this.#price} MxN`
    }

    card() {
        return `
            <h2>${this.#productName}</h2>
            <p>Llévatelo por ${this.#price} MxN</p>
        `
    }

}
export { Product };
=======
class Product {
  // Determinar los atributos de mi clase
  #productName;
  #price;
  #brand;

  // El método constructor nos ayuda a inicializar un objeto
  constructor(productName = "---", price, brand) {
    this.#productName = productName;
    this.#price = price;
    this.#brand = brand;
  }

  // Métodos setters y getters
  set productName(newProductName) {
    // TODO continuar solo si cumple
    // ciertas condiciones
    this.#productName = newProductName;
  }

  get productName() {
    return this.#productName.toUpperCase();
  }

  // Generar el set y get de #price y #brand
/*   set price(price) {
    this.#price = price;
  } */
  get price() {
    return this.#price;
  }
  set brand(brand) {
    this.#brand = brand;
  }
  get brand() {
    return this.#brand;
  }

  printPrice() {
    return `${this.productName} cuesta $${this.#price} MxN`;
  }

  card() {
    return `
        <h2>${this.productName}</h2>
        <p>Llévatelo por ${this.price}</p>
    `
  }
}

export { Product };
>>>>>>> 8d79d0933bb22196b5b3f8c1d8c7c5ea0cebcfb3
