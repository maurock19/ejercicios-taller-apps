const email = window.document.querySelector('#email');
const contra = window.document.querySelector('#contra');
const boton = window.document.querySelector('#boton');

boton.addEventListener('click',MostrarDatos);

function MostrarDatos(){
    const emailValue = email.value;
    const contraValue = contra.value;

    if (emailValue !== ''){
        console.log('email: ' + email.value);
        console.log('contra: '+ contra.value);
        email.value = "";
        contra.value = "";
        email.focus();

        if (emailValue == "ejemplo@gmail.com" && contraValue == '123456'){
            alert('Ingresando');
            window.location ="indexLa.html"
        } else {
            alert('Email o Conttraseña son Incorrectos');
        }
    } else {
        alert('campos en blanco')
    }
}