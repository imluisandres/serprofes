function enviarPrompt(event) {
    // Evitamos que el form recargue la página
    event.preventDefault();

    //1. Capturar el texto

    let mensaje = document.getElementById('mensaje-input').value.trim();

    //2. Condicional

    if (mensaje === "") {
        alert("¡Error! Escribe algo primero")
    } else {
        alert("Mensaje recibido:\n" + mensaje);
        //3. Limpiar input
        document.getElementById('mensaje-input').value="";
    }

}