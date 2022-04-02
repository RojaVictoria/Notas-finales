//Mis variables + prompts

let nombre = document.getElementById("nombre").innerHTML = prompt("Ingrese un nombre:","Victoria Rojas");
let carrera = document.getElementById("carrera").innerHTML = prompt("Ingrese una carrera:","Desarrollo Web");
let ramo1 = document.getElementById("ramo1").innerHTML = prompt("Ingrese ramo 1:","HTML");
let ramo2 = document.getElementById("ramo2").innerHTML = prompt("Ingrese ramo 2:","CSS");
let ramo3 = document.getElementById("ramo3").innerHTML = prompt("Ingrese ramo 3:","JavaScript");
let nota1ramo1 = document.getElementById("nota1ramo1").innerHTML = parseInt(prompt("Ingrese nota 1 del ramo " + ramo1 , "4"));
let nota2ramo1 = document.getElementById("nota2ramo1").innerHTML = parseInt(prompt("Ingrese nota 2 del ramo " + ramo1 , "5"));
let nota3ramo1 = document.getElementById("nota3ramo1").innerHTML = parseInt(prompt("Ingrese nota 3 del ramo " + ramo1 , "4"));
let nota1ramo2 = document.getElementById("nota1ramo2").innerHTML = parseInt(prompt("Ingrese nota 1 del ramo " + ramo2 , "3"));
let nota2ramo2 = document.getElementById("nota2ramo2").innerHTML = parseInt(prompt("Ingrese nota 2 del ramo " + ramo2 , "4"));
let nota3ramo2 = document.getElementById("nota3ramo2").innerHTML = parseInt(prompt("Ingrese nota 3 del ramo " + ramo2 , "5"));
let nota1ramo3 = document.getElementById("nota1ramo3").innerHTML = parseInt(prompt("Ingrese nota 1 del ramo " + ramo3 , "2"));
let nota2ramo3 = document.getElementById("nota2ramo3").innerHTML = parseInt(prompt("Ingrese nota 2 del ramo " + ramo3 , "6"));
let promedio1 = document.getElementById("promedio1").innerHTML = ((nota1ramo1 + nota2ramo1 + nota3ramo1)/3)
    .toLocaleString(undefined, { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
let promedio2 = document.getElementById("promedio2").innerHTML = ((nota1ramo2 + nota2ramo2 + nota3ramo2)/3)
    .toLocaleString(undefined, { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
    