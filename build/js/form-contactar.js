const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const servicio = document.querySelector('#servicio');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario-contratar');
const boton = document.querySelector('.boton-contratar');

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
    eventosFormulario();
    
});

function iniciarApp(){
    boton.disabled = true;
    boton.classList.add('boton-deshabilitado');
}

function eventosFormulario() {
    nombre.addEventListener('blur',validarFormulario);
    correo.addEventListener('blur',validarFormulario);
    telefono.addEventListener('blur',validarFormulario);
    servicio.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}

function validarFormulario() {

    
}

function mensajeUsuario(){

}