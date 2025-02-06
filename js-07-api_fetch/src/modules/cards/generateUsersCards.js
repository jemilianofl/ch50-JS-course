import userCards from "./userCard.js"

/**
 * @param {Object array} userArray Arreglo de usuarios
 */

const generateUsersCards = (userArray) => {

    const userCards = userArray.map( ( user )=> userCards( user ) );
}

export { generateUsersCards }