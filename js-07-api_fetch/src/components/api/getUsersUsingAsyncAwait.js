import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
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
