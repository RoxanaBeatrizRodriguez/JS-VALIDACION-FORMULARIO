//Capturando elementos
let formulario = document.querySelector('form');
let nombre = document.querySelector('#nombre');
let error = document.querySelector('#error');
let boton = document.querySelector('#boton');
let titulo = document.querySelector('#titulo');
//console.log(nombre);

/*
let valor1 = 10;
let valor2 = '10';
console.log(valor1 + valor2);
if(valor1 === valor2){
    console.log('Los dos numeros para mi son iguales');
}else{
    console.log('Los dos numeros no son iguales');
}
*/

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    if(nombre.value === ''){
        //alert('El campo nombre no puede estar vacio');
        error.innerHTML = 'El campo nombre no puede estar vacio';
        //error.style.color = 'white';
        //error.style.backgroundColor = 'tomato'; 
        error.classList.add('mensajeError');
    }else{
        formulario.submit();
    }
})
//Evento input 
nombre.addEventListener('input', function(){
    error.innerHTML = '';
})

//Evento focus - Estamos dentro del campo
nombre.addEventListener('focus', function() {
    nombre.classList.add('foco');
})
//Evento blur - Estamos afuera del campo
nombre.addEventListener('blur', function() {
    nombre.classList.remove('foco');
})

//Evento click
boton.addEventListener('click', function(){
    titulo.classList.toggle('titulo');
})




