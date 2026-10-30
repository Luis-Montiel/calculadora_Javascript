let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");

function obtenerNumeros(){
    if (numero1.Value.trim() === ""||
    numero2.Value.trim() ===""){
        resultado.textContent = "escribe los dos numeros";
        return null;
    }


let a = Number(numero1.Value);
let b = Number(numero2.Value);
return [a,b];
}

document.getElementById("sumar").addEventListener("click",function(){
    let numeros = obtenerNumeros()
    if(numeros === null) return;

    resultado.textContent = "Resultado" + (numeros[0] + numeros[1]);
});


document.getElementById("restar").addEventListener("click",function(){
    let numeros = obtenerNumeros()
    if(numeros === null) return;

    resultado.textContent = "Resultado" + (numeros[0] - numeros[1]);
});

document.getElementById("multiplicar").addEventListener("click",function(){
    let numeros = obtenerNumeros()
    if(numeros === null) return;

    resultado.textContent = "Resultado" + (numeros[0] * numeros[1]);
});
document.getElementById("dividir").addEventListener("click",function(){
    let numeros = obtenerNumeros()
    if(numeros === null) return;

    resultado.textContent = "Resultado" + (numeros[0] / numeros[1]);
});

