//Primer usuario valido
const userValido1 = "admin@alke.com";
const passValida1 = "12345";

//Segundo usuario valido
const userValido2 = "admin2@alke.com";
const passValida2 = "54321";

//Rescatando datos del form para inicio de sesion
const formulario = document.getElementById("formLogin");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

function login(e){
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
    
    if(email.value == userValido1 && password.value == passValida1){
        location.href = '../html/menu.html';
        sessionStorage.setItem("inicioDeSesion", 1);
    } else{
        if(email.value == userValido2 && password.value == passValida2){
            location.href = '../html/menu.html';
            sessionStorage.setItem("inicioDeSesion", 2);
        }else{
            alert("Email y/o contraseña erroneos");
        }
    }
}

formulario.addEventListener("submit", login)