//animaciones
AOS.init();
AOS.init({
	disable: false, 
	startEvent: 'DOMContentLoaded', 
	initClassName: 'aos-init', 
	animatedClassName: 'aos-animate', 
	useClassNames: false, 
	disableMutationObserver: false, 
	debounceDelay: 50,
	throttleDelay: 99,

	offset: 120, 
	delay: 0, 
	duration: 400, 
	easing: 'ease', 
	once: false, 
	mirror: false, 
	anchorPlacement: 'top-bottom',
  
  });
document.addEventListener('DOMContentLoaded', ()=>{

	menuHamburguesa();
	ObservarSeccion();
	actualizacionAnio();
	

});



function menuHamburguesa(){
	const nav = document.querySelector('#hamburguesa button');
	const navegacionNormal = document.querySelector('.navegacion');
	const enlaces = document.querySelectorAll('.navegacion a');
	const btnMenuMovil = document.querySelector('.menu-movil button');

	nav.addEventListener('click', e =>{
		
		//.toggle, lo que hace es añadir la clase si no esta o desaparecerla si, si lo esta
		nav.classList.toggle('abrir'); 
		navegacionNormal.classList.toggle('abrir');
		
		
	});	

	//cuando en un elemento hay multiples nodos, debemos iterarlo para agregarle un evento
	enlaces.forEach(enlace =>{
		
		enlace.addEventListener('click', e =>{
			// console.log(e.target.tagName);

			if(e.target.tagName === 'A'){
				navegacionNormal.classList.remove('abrir');
				btnMenuMovil.classList.remove('abrir');
			}
		});
	});
	
	
}

const anio = new Date();
const anioActual = anio.getFullYear();

function actualizacionAnio(){
    const contenedorAnio = document.querySelector('#fecha');
    contenedorAnio.textContent = anioActual;
}

const video = document.querySelector('.video');
const body = document.querySelector('body');

function ObservarSeccion(){

    const observar = new IntersectionObserver(entries =>{

        if(entries[0].isIntersecting){
            mostrarVideo();
        }
    });

    observar.observe(document.querySelector('.boton-info-nosotros'));
}

function mostrarVideo(){

    const divVideo = document.createElement('div');
    
    video.classList.remove('ocultar');
    divVideo.appendChild(video);
    divVideo.classList.add('pantallaCompleta');
    body.classList.add('fijar-body');
    body.appendChild(divVideo);

    console.log(divVideo);
    btnCerrarVideo(divVideo);
}

function btnCerrarVideo(divVideo){
    const btnCerrar = document.createElement('p');
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    divVideo.appendChild(btnCerrar);

     btnCerrar.onclick = function(){
        divVideo.remove();
        body.classList.remove('fijar-body');
     }
     divVideo.onclick = function(){
         divVideo.remove();
         body.classList.remove('fijar-body');
     }
}