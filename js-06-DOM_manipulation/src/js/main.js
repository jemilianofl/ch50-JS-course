

<<<<<<< HEAD

=======
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
<<<<<<< HEAD
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-operadores");
    console.log( descripcionOperadores );
      // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
      //descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
      //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
=======
  // document: representa cualquier página web carga en el navegador
  //         sirve como punto e entrada al contenido de la página.
  //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-operadores");
    console.log( descripcionOperadores );
    // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
    descripcionOperadores.innerHTML = '<span class="text-warning">document</span>: representa cualquier página web carga en el navegador.';
}

changeElementById();

/**
<<<<<<< HEAD
   * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
    const listItems = document.getElementsByTagName("li");
    console.log( listItems );

    for( let item of listItems){
        item.innerText = "Mi nuevo li"
    }
}  
// changeElementsByTagName();
/**
   * Acceder a un elemento usando el selector universar
*/
const getElementsByQuerySelector = () =>{
                    // document.getElementById("descripcion-operadores");
    const element = document.querySelector("#descripcion-operadores");
    console.log(element);
      const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
    console.log( elementParagraph );

      const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
    console.log( classTextCenter );

      const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning
=======
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
   const listItems = document.getElementsByTagName("li");
   console.log( listItems );

   for( let item of listItems){
     item.innerText = "Mi nuevo li"
   }

}

// changeElementsByTagName();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
                  // document.getElementById("descripcion-operadores");
    const element = document.querySelector("#descripcion-operadores");
    console.log(element);

    const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
    console.log( elementParagraph );

    const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
    console.log( classTextCenter );

    const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
    console.log( anchorAndTextWarning)
}

getElementsByQuerySelector();

/**
<<<<<<< HEAD
   * Acceder a varios elementos usando el selector universal
   * 
*/
const getListItemsByQuerySelector = () =>{
      // const listItems = document.querySelectorAll("main li");
=======
 * Acceder a varios elementos usando el selector universal
 * 
 */
const getListItemsByQuerySelector = () =>{
    // const listItems = document.querySelectorAll("main li");
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
    const listItems = document.querySelectorAll(".text-start li");
    console.log( listItems );
}

getListItemsByQuerySelector();

<<<<<<< HEAD
  // ----------------------- Ejercicio ----------------------------------
  // Seleccionar la imagen de dinosaurio que se muestra.
  // mostrar en consola el objeto
=======
// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
const getImagenDinosaurio = ( ) => {
    const  imagenDinosaurio = document.querySelector ( "main img" );
    console.log ( imagenDinosaurio );
    return imagenDinosaurio;
}
getImagenDinosaurio( );

<<<<<<< HEAD
  // Cambiar la imagen de dinosaurio a la imagen web-developer
=======
// Cambiar la imagen de dinosaurio a la imagen web-developer
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
const changeImage = () => {
    const refImage = getImagenDinosaurio();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Chica ninja como web developer";

}

const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";

<<<<<<< HEAD
  // imagenPrincipal.addEventListener( evento , callback );
  // imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
      // Hacer otras cosas
=======
// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
    changeImage();
} );


<<<<<<< HEAD
  // ------------------ Propiedades de visualización ---------------
  //                       Desaparecer el elemento
  // display : none (quitar el elemento del DOM)
  // visibility: hidden (ocultar el elemento)

  // refBtnPrimary = document.quearySelector("#btn-primary")
=======
// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)

// refBtnPrimary = document.quearySelector("#btn-primary")
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );

<<<<<<< HEAD
  // Aplicar visibility = "hidden" para el btn-secondary
=======
// Aplicar visibility = "hidden" para el btn-secondary
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

<<<<<<< HEAD
  // Reestablecer la visualizacion de los botones primary y secondary
  // Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
  // display: "block"      visibility: "visible"
=======
// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"
>>>>>>> 45e855bc3fc656fa0c908900e860cd24f583e346
refBtnSuccess.addEventListener ( "mouseover", () => {
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible"; 
} );