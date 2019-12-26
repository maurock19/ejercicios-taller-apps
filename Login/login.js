const email = window.document.querySelector("#mail");
const password = window.document.querySelector("#passwo");
const boton = window.document.querySelector("#boton");

boton.addEventListener('click', Validar_Datos);

function Validar_Datos() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue !== '') {
        console.log('email: ' + email.value);
        console.log('password: ' + password.value);
        email.value = "";
        password.value = "";
        email.focus();

        if (emailValue == "ejemplo@gmail.com" && passwordValue == '123456') {
            console.log("Estas iniciando sesion ");
        } else {
            console.log("El email o contraseña son incorrectos!");
        }
    } else {
        console.log(" no has escrito nada!")
    }
}

