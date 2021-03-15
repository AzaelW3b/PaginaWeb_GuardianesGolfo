document.addEventListener('DOMContentLoaded', ()=>{
	menuHamburguesa();
	mostrarVideo();
	

});
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

//Mostramos el video de la seccion de nosotros
function mostrarVideo(){
	const btnVideo = document.querySelector('#btn-video');
	const video = document.querySelector('.video');
	const divVideo = document.createElement('div');
	const body = document.querySelector('body');
	divVideo.appendChild(video);

	btnVideo.addEventListener('click', e=>{
		e.preventDefault();
		video.classList.remove('ocultar');

		divVideo.classList.add('pantallaCompleta');
		
		body.appendChild(divVideo);
		console.log(divVideo);

	});
}

function menuHamburguesa(){
	const nav = document.querySelector('#hamburguesa button');
	const navegacionNormal = document.querySelector('.navegacion');

	nav.addEventListener('click', e =>{
		//.toggle, lo que hace es añadir la clase si no esta o desaparecerla si, si lo esta
		nav.classList.toggle('abrir'); 
		navegacionNormal.classList.toggle('abrir');
		
		
	});	
}

