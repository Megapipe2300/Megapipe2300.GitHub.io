// ============================
// Recuperar respuestas desde sessionStorage
// ============================
const respuestas = JSON.parse(sessionStorage.getItem("respuestasQuiz"));

if (!respuestas) {
    // Si no hay respuestas, volver al inicio
    window.location.href = "index.html";
}

// ============================
// Calcular puntuación
// ============================
let puntuacion = 0;
let sinResponder = 0;
const total = respuestas.length;

respuestas.forEach((item) => {
    if (item.seleccionada === null) {
        sinResponder++;
    } else if (item.seleccionada === item.correcta) {
        puntuacion++;
    }
});

const incorrectas = total - puntuacion;
const porcentaje = Math.round((puntuacion / total) * 100);

// ============================
// Mensaje corto (igual que el JS original)
// ============================
let mensaje;
if (sinResponder > 0) {
    mensaje = `Has dejado ${sinResponder} pregunta(s) sin responder. Tu puntuación es ${puntuacion} de ${total}.`;
} else {
    mensaje = `¡Cuestionario terminado! Tu puntuación es ${puntuacion} de ${total}.`;
}

// ============================
// Actualizar el DOM
// ============================
document.querySelector(".nota-grande #nota").textContent = puntuacion;
document.querySelector(".nota-grande .total").textContent = `/${total}`;
document.getElementById("mensaje").textContent = mensaje;
document.getElementById("aciertos").textContent = puntuacion;
document.getElementById("fallos").textContent = incorrectas;
document.getElementById("total-preguntas").textContent = total;

// ============================
// Configuración de SweetAlert según porcentaje
// ============================
let titulo, texto, icono, color;

if (porcentaje === 100) {
    titulo = "¡Excelente! 🎉";
    texto  = "Todas las respuestas son correctas";
    icono  = "success";
    color  = "#48bb78";
} else if (porcentaje >= 70) {
    titulo = "¡Muy bien! 🌟";
    texto  = `Tienes ${puntuacion} de ${total} respuestas correctas`;
    icono  = "success";
    color  = "#48bb78";
} else if (porcentaje >= 50) {
    titulo = "¡Puedes mejorar! 📚";
    texto  = `Tienes ${puntuacion} de ${total} respuestas correctas`;
    icono  = "warning";
    color  = "#ed8936";
} else if (porcentaje >= 30) {
    titulo = "¡Ánimo! 💪";
    texto  = `Tienes ${puntuacion} de ${total} respuestas correctas`;
    icono  = "info";
    color  = "#4299e1";
} else {
    titulo = "¡Necesitas repasar! 📕";
    texto  = `Tienes ${puntuacion} de ${total} respuestas correctas`;
    icono  = "error";
    color  = "#fc8181";
}

// ============================
// Mostrar SweetAlert
// ============================
document.addEventListener("DOMContentLoaded", function () {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        draggable: true,
        confirmButtonColor: color
    });
});