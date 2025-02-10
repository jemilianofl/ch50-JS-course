<<<<<<< HEAD
const pinkyPromise = () => {
    return new Promise((resolve, reject) => {
        const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10

        if (!Number.isInteger(numeroSecreto)) {
            reject({
                error: 100,
                description: "Error al generar el número secreto."
            });
        } else {
            resolve(numeroSecreto);
        }
    });
};

const adivinaNumero = (numeroUsuario) => {
    console.log("Comenzando el juego de adivinanza...");

    if (!Number.isInteger(numeroUsuario)) {
        console.log("Error: Debes ingresar un número entero.");
        return;
    }

    pinkyPromise()
        .then((numeroSecreto) => {
            if (numeroUsuario === numeroSecreto) {
                console.log(`¡Felicidades! Adivinaste el número: ${numeroSecreto}`);
            } else {
                console.log(`Fallaste. El número secreto era: ${numeroSecreto}`);
            }
        })
        .catch((error) => console.log("Error:", error));

    console.log("Fin del intento de adivinanza.");
};

// Prueba con diferentes números
adivinaNumero(5);
adivinaNumero(3);
adivinaNumero("Hola"); // Prueba con un error
=======


const pinkyPromise = ( parametro ) =>{

  const myPromise = new Promise( (resolve, reject)=>{
     // TODO evaluar el parámetro y determinar si se resuelve o rechaza
  });

  return myPromise;
}

const secuenciaPrincipal = () =>{
   
    console.log("Comenzando Secuencia Principal");
    // TODO hacer el manejo de la promera pinkyPromise( miArgumento );
    console.log("Terminando mi secuencia principal")

}

secuenciaPrincipal();
>>>>>>> d1d9114ae565f4e3e34bddce058f973af0ee58a1
