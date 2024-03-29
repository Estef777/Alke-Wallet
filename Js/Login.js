// Primer usuario válido
const userValido1 = "hola@alkewallet.com";
const passValida1 = "12345";

// Segundo usuario válido
const userValido2 = "hola2@alkewallet.com";
const passValida2 = "54321";

// Rescatando datos del formulario para inicio de sesión
const formulario = document.getElementById("formLogin");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

// Función que inicia el inicio de sesión
function login(e) {
    e.preventDefault();

    if (email.value === userValido1 && password.value === passValida1) {
        // Si el primer usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
        location.href = '../html/menu.html';
        sessionStorage.setItem("inicioDeSesion", 1);
    } else if (email.value === userValido2 && password.value === passValida2) {
        // Si el segundo usuario es correcto, dirigirlo al menú principal y almacenar el inicio de sesión en sessionStorage
        location.href = '../html/menu.html';
        sessionStorage.setItem("inicioDeSesion", 2);
    } else {
        // Si ninguno de los usuarios es correcto, mostrar un mensaje de error
        alert("Correo electrónico y/o contraseña incorrectos");
    }
}

// Ejecutar la función login al enviar el formulario
formulario.addEventListener("submit", login);