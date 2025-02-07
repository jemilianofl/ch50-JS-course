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
