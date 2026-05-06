function comprobarNumero(){
    // 1. Atrapamos el número usando let
    let numero = Number(document.getElementById('numero-input').value);
    let etiqueta = document.getElementById('mensaje-salida');

    //2. Tomamos la decisión con IF / ELSE 
    if (numero > 5 == SOBRESALIENTE) {
        //Si el resto de la división entre 2 es 0... 
        etiqueta.textContent = "El resultado " + numero + " es SOBRESALIENTE";
        etiqueta.style.color = "green";
        }
        

    else (5 == APROBADO) {
        //Si el resto de la división entre 2 es 0... 
        etiqueta.textContent = "El resultado " + numero + " es APROBADO";
        etiqueta.style.color = "green";
        }

    else (numero < 5 == SUSPENSO) {
        //Si no...
        etiqueta.textContent = "El resultado " + numero + " es SUSPENSO";
        etiqueta.style.color = "red";
    }
}