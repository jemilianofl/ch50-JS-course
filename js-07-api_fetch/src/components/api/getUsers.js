<<<<<<< HEAD
import generateUsersCards from "./generateUsersCards.js";
=======
import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

>>>>>>> d4a9b7f50fdae2f935d2cdfd1d4a0ba2943bf888
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */
<<<<<<< HEAD


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
=======
const getUsers = (url) => {

    const createCards = ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
    }

    fetch(url)
      .then((res) => res.json())
      .then((users) => createCards( users.data ) )
      .catch((error) => console.log(error))
      .finally(() => console.log("He terminado"));
  };
  // getUsers("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
  getUsers("https://reqres.in/api/users?page=2"); // Página 2, sin retardo
>>>>>>> d4a9b7f50fdae2f935d2cdfd1d4a0ba2943bf888
