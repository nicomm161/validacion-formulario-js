document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); //Previene que el formulario se envíe automáticamente (se controla por JS en vez de HTML)


    //Validar nombre

    let nombreEntrada = document.getElementById('name');
    let nombreError = document.getElementById('nameError');

    if(nombreEntrada.value.trim() === '') {
        nombreError.textContent = 'Por favor, ingresa tu nombre';
        nombreError.classList.add('error-message');
    }else{
        nombreError.textContent = '';
        nombreError.classList.remove('error-message');
    }

    //Validar correo electrónico

    let emailEntrada = document.getElementById('email'); //Recogemos la id de nuestro email en el formulario
    let emailError = document.getElementById('emailError'); //Recogemos el error
    let emailPatron = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Patron de validacion de email

    if (!emailPatron.test(emailEntrada.value.trim())) { //Si no cumple con el patron lanzara el error
       emailError.textContent = 'Por favor, ingresa un correo electrónico valido';
       emailError.classList.add('error-message'); 
    } else {
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }
    //Validar contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPatron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //Patron de validacion de contraseña
    if (!contrasenaPatron.test(contrasenaEntrada.value.trim())) { //Si no cumple el patron lanzara el error
        contrasenaError.textContent = 'Por favor, ingresa una contraseña valida con almenos 8 caracteres, una letra mayúscula, una letra minúscula y un número';
        contrasenaError.classList.add('error-message');
    } else {
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }


    //Si todos los campos son válidos enviar

    if (!nombreError.textContent && !emailError.textContent && !contrasenaError.textContent) {
        alert('Formulario enviado con exito');
        document.getElementById('formulario').reset(); //Reseteamos el formulario
    }
})