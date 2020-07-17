var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
    console.log(event);
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    //paiDoAlvo.remove();
});

// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     });
// });