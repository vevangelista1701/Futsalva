const listaEventos = document.getElementById("listaEventos");

const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

eventos.forEach(evento => {

    listaEventos.innerHTML += `
    
    <div class="evento">

        <h3>${evento.titulo}</h3>

        <p><strong>📅 Data:</strong> ${evento.data}</p>

        <p><strong>📍 Local:</strong> ${evento.local}</p>

        <p>${evento.descricao}</p>

        <a href="contato.html" class="btn-evento">
            Saiba Mais
        </a>

    </div>

    `;

});