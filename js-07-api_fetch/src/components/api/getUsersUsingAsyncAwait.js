import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";
<<<<<<< HEAD
=======

>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
<<<<<<< HEAD
 */


const getUsersUsingAsyncAwait = async ( url ) =>{

    const createCards = async ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray );
    }

    console.log("Estoy iniciando en la función Async y Await ")
    const resolve = await fetch( url );
    const users = await resolve.json();
    console.log( "Finalizado la petición de fetch con Async y Await" )
    createCards( users.data );
    
};



getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2");
=======
*/
const createCards = ( usersArray )=>{
    document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
}

const getUsersUsingAsyncAwait = async (url) => {

    const resolve = await fetch( url );
    const users = await resolve.json();
    createCards( users.data );
    
};
  // getUsersUsingAsyncAwait("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
  getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2"); // Página 2, sin retardo
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
