function fazerLogin(){

    const usuario =
        document.getElementById("usuario").value;

    const senha =
        document.getElementById("senha").value;

    if(
        usuario === "admin" &&
        senha === "futsalva123"
    ){

        localStorage.setItem(
            "logado",
            "true"
        );

        window.location.href =
            "admin.html";

    }else{

        document.getElementById("erro")
            .textContent =
            "Usuário ou senha inválidos.";

    }

}