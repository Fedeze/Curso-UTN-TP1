function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const horaFormateada = hora.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2, '0');
    const segundosFormateados = segundos.toString().padStart(2, '0');

    document.getElementById("reloj").textContent = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
}

actualizarReloj(); // Llamar la función para actualizar al inicio
setInterval(actualizarReloj, 1000); // Actualizar cada segundo