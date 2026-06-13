const formulario = document.getElementById("eventoForm");
const corpoTabela = document.getElementById("corpoTabela");
let indiceEdicao = null;

function carregarEventos() {

    corpoTabela.innerHTML = "";

    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    document.getElementById("totalEventos").textContent = eventos.length;

    if(eventos.length > 0){

    document.getElementById("proximoEvento").textContent =
    eventos[0].titulo;

}else{

    document.getElementById("proximoEvento").textContent =
    "Nenhum evento";

}

    eventos.forEach((evento, indice) => {

        corpoTabela.innerHTML += `
        
        <tr>
            <td>${evento.titulo}</td>
            <td>${evento.data}</td>
            <td>${evento.local}</td>
           <td>

    <button class="btn-editar"
        onclick="editarEvento(${indice})">
        Editar
    </button>

    <button class="btn-excluir"
        onclick="excluirEvento(${indice})">
        Excluir
    </button>

</td>
        </tr>

        `;

    });

}

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;
    const descricao = document.getElementById("descricao").value;

    const evento = {
        titulo,
        data,
        local,
        descricao
    };

    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    if(indiceEdicao !== null){

    eventos[indiceEdicao] = evento;

    indiceEdicao = null;

}else{

    eventos.push(evento);

}

    localStorage.setItem("eventos", JSON.stringify(eventos));

    formulario.reset();

    carregarEventos();

});

function excluirEvento(indice){

    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    eventos.splice(indice, 1);

    localStorage.setItem("eventos", JSON.stringify(eventos));

    carregarEventos();

}

function editarEvento(indice){

    const eventos =
        JSON.parse(localStorage.getItem("eventos")) || [];

    const evento = eventos[indice];

    document.getElementById("titulo").value =
        evento.titulo;

    document.getElementById("data").value =
        evento.data;

    document.getElementById("local").value =
        evento.local;

    document.getElementById("descricao").value =
        evento.descricao;

    indiceEdicao = indice;

}
carregarEventos();
function logout(){

    localStorage.removeItem("logado");

    window.location.href = "login.html";

}