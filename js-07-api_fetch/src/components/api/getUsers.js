import generateUsersCards from "./generateUsersCards.js";
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */


const getUsers = ( url ) =>{

    const createCards = ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray );
    }

    fetch( url )
    .then( (resolve)=> resolve.json() )
    .then( (usuarios)  => console.log( usuarios.data ))
    .catch( (error)=> console.log(error)  )
    .catch( (error)=> console.log(error)  )
    .finally( ()=>console.log("He terminado") ) 
};
getUsers("https://reqres.in/api/users?page=2");