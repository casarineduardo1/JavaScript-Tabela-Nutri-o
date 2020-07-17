var titulo = document.querySelector('.titulo');
titulo.textContent = "Aprecida Nutricionista";


// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll('.paciente');
console.log('pacientes', pacientes);
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    //console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


//CLIQUE COM FUNCAO ANONIMA
titulo.addEventListener("click", function () {
    console.log("Olha só posso chamar uma função anônima.")
});
//CLIQUE COM FUNCAO NOMEADA
//titulo.addEventListener("click", mostraMensagem);
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
