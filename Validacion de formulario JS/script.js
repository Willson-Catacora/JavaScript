const firebaseConfig = {
  apiKey: "AIzaSyCoBgyaETorCmsCVKBzDv9UntDwHxXwD5g",
  authDomain: "formulario-de-datos-f2d82.firebaseapp.com",
  projectId: "formulario-de-datos-f2d82",
  storageBucket: "formulario-de-datos-f2d82.appspot.com",
  messagingSenderId: "762750453698",
  appId: "1:762750453698:web:073514662aa38bfcda785b",
  measurementId: "G-RMKF37YF7B"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    // Validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduzca su nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    //validar correo electronico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduci un mail valido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    //validar la contrasena
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La constrasena debe tener al menos 8 caracteres';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    //Sit todos los capos son validos enviar
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        //backend que envia la informacion a firebase
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        

        alert('El formulario se ha enviado con exito');
        document.getElementById('formulario').reset();
    }
});
