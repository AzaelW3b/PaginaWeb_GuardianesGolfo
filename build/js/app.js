document.addEventListener('DOMContentLoaded', ()=>{

	menuHamburguesa();
	// mostrarVideo();
	

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
// function mostrarVideo(){
// 	const btnVideo = document.querySelector('#btn-video');
// 	const video = document.querySelector('.video');
// 	const divVideo = document.createElement('div');
// 	const body = document.querySelector('body');
// 	const btnCerrar = document.createElement('p');
// 	btnCerrar.textContent = 'x';
// 	btnCerrar.classList.add('btn-cerrar');

// 	divVideo.appendChild(video);
// 	divVideo.appendChild(btnCerrar);
// 	btnVideo.addEventListener('click', e=>{
// 		e.preventDefault();
// 		video.classList.remove('ocultar');

// 		divVideo.classList.add('pantallaCompleta');
		
	
	
		
// 		body.appendChild(divVideo);
// 		console.log(divVideo);

// 	});
	
// 	divVideo.onclick = function(){
// 		divVideo.remove();
	
// 	}

// 	btnCerrar.onclick = function(){
// 		divVideo.remove();
	
// 	}
// }

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

// function scrollNav(){
// 	const enlaces = document.querySelectorAll('.navegacion a');
// 	let numeroEnlace = 1;

// 	enlaces.forEach(enlace =>{
		
// 		enlace.addEventListener('click', (e)=>{
// 			e.preventDefault();
// 			const seccion = document.querySelector(e.target.attributes.href.value);

// 			// if(e.target.attributes.href.value === 'postulate.html'){
// 			// 	location.href='postulate.html';

// 			// }else if(e.target.attributes.href.value === 'index.html'){
// 			// 	location.href='index.html';
// 			// }else{
// 			// 	seccion.scrollIntoView({
// 			// 		behavior:'smooth'
// 			// 	});
// 			// }
			
// 			seccion.scrollIntoView({
// 				behavior:'smooth'
// 			});
		
// 			// const enlaceAnterior = document.querySelector('.navegacion a');
			
// 			// if(enlaceAnterior){
// 			// 	enlaceAnterior.classList.remove('activo');
// 			// }else{
// 			// 	enlace.classList.add('activo');
// 			// }
// 			// if(e.target.tagName === 'A' ){
				
// 			// 	enlace.classList.toggle('activo');
			
// 			// }
// 			numeroEnlace = parseInt(e.target.dataset.numero);
			
// 			//enlace anterior
// 			const enlaceAnterior = document.querySelector('.navegacion a');

// 			if(enlaceAnterior){
// 				enlaceAnterior.classList.remove('activo');
// 			}
// 			const tab = document.querySelector(`[data-numero="${numeroEnlace}"]`);
// 			tab.classList.add('activo')
		
// 		});
// 	});
// }

