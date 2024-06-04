document.addEventListener("DOMContentLoaded", function(){
const formulario = document.getElementById("formulario");



formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const number = document.getElementById("number").value;

    alert("formulario enviado");


    formulario.reset();


    
})

})