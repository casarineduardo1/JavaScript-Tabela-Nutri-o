var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes111");

    xhr.send();
    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function (paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        }else {
            console.log("else");
            varErro = retornaErro(xhr.status)
            alert(varErro);
            console.log(xhr.responseText);
        }
    });
});

function retornaErro(cdErro) { 
    var msgErro = null;
    switch (cdErro){
        case  404:
            msgErro = "Url não encontrada";
            break;
        default:
            msgErro = "Erro desconhecido";
            break;
    }
    return msgErro;
}