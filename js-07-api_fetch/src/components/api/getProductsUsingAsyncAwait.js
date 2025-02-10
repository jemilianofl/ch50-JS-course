<<<<<<< HEAD

/*
    Async y Await facilita la escritura y lectura de código asíncrono.
    Permite escribir código asíncrono de manera similar a cómo se escribiría 
    código sincróno.

*/

async function functionName () {
    await fetch( url );
}

const getProductsUsingAsyncAwait = async ( url ) =>{
    
    
    console.log("Estoy iniciando en la función Async y Await ")
    const resolve = await fetch( url );
    const products = await resolve.json();
    console.log( products );
    console.log( "Finalizado la petición de fetch con Async y Await" )

};

const realizaSecuenciaPrincipal = async ( url ) =>{
    
    try{
    console.log("Antes de la llamada de la función")
    await getProductsUsingAsyncAwait( "https://fakestoreapi.com/products" );
    console.log( "Después de la llamda de la función" )
    } catch( error ){
        console.warn("No corro, no grito, no empujo")
        console.error("Que pasó?", error)
    }

};

=======
/*
Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.
*/

async function functionName() {
  await fetch(url);
}

const getProductsUsingAsyncAwait = async (url) => {
  console.log("Estoy iniciando en la función con Async y Await");
  const resolve = await fetch(url);
  const products = await resolve.json();
  console.log(products);
  console.log("Finalizado la petición fetch con Async y Await");
};

const realizaSecuenciaPrincipal = async () => {
  try {
    console.log("Antes de la llamada de la función");
    await getProductsUsingAsyncAwait("https://fakestoreapi/products");
    console.log("Después de la llamada de la función");
  } catch (error) {
    console.warn("No corro, no grito, no empujo");
    console.error("Que pasó?", error);
  }
};

realizaSecuenciaPrincipal();
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
