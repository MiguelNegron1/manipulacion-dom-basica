const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const calcularButton = document.querySelector('#btnCalcula');
const resultadoElement = document.querySelector('#resultado');

form.addEventListener('submit', verifyingData)

function verifyingData(e) {
    e.preventDefault();

    if(!isNaN(input1.value && input2.value)){
        let totalFromInput = Number(input1.value) + Number(input2.value);
        resultadoElement.innerHTML = "El resultado es " + totalFromInput;

    }else{            
        resultadoElement.innerHTML = 'Lo sentimos, solo aceptamos numeros, verifique los datos que ingreso y asegurece que no halla ninguna letra. ';
        }
        
    }
