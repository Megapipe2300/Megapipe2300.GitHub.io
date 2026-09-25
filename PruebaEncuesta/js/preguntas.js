// ============================
// Datos de las preguntas
// ============================
const preguntas = [
    {
        pregunta: "1. ¿Cuándo empezó la primera guerra mundial?",
        opciones: ["1939", "1914", "1924", "1929"],
        correcta: 1
    },
    {
        pregunta: "2. ¿Cuándo fue la segunda guerra mundial?",
        opciones: ["1914", "1924", "1939", "1929"],
        correcta: 2
    },
    {
        pregunta: "3. ¿En qué año pisó el hombre la Luna por primera vez?",
        opciones: ["1994", "1984", "1969", "1929"],
        correcta: 2
    },
    {
        pregunta: "4. ¿Cuándo llegó Cristóbal Colón a América?",
        opciones: ["1414", "1680", "1500", "1492"],
        correcta: 3
    },
    {
        pregunta: "5. ¿Cuándo se celebró la Primera Junta Nacional de Gobierno de Chile?",
        opciones: ["1879", "1589", "1639", "1810"],
        correcta: 3
    },
    {
        pregunta: "6. ¿Cuándo cayó el Muro de Berlín?",
        opciones: ["1989", "1924", "1988", "1929"],
        correcta: 0
    },
    {
        pregunta: "7. ¿Cuándo fue el Combate Naval de Iquique?",
        opciones: ["1884", "1888", "1879", "1869"],
        correcta: 2
    }
];

// ============================
// Referencias del DOM
// ============================
const form = document.getElementById("quiz-form");
const resultBtn = document.getElementById("result-btn");

// ============================
// Renderizar todas las preguntas
// ============================
function renderizarPreguntas() {
    preguntas.forEach((item, index) => {
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = item.pregunta;
        p.appendChild(strong);
        form.appendChild(p);

        const ol = document.createElement("ol");
        ol.type = "A";

        item.opciones.forEach((opcion, i) => {
            const li = document.createElement("li");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `pregunta${index}`;
            input.value = i;

            li.appendChild(input);
            li.appendChild(document.createTextNode(` ${opcion}`));
            ol.appendChild(li);
        });

        form.appendChild(ol);
    });
}

// ============================
// Recolectar respuestas y enviarlas a resultado.js
// ============================
function enviarRespuestas() {
    const respuestas = [];

    preguntas.forEach((item, index) => {
        const seleccionada = document.querySelector(
            `input[name="pregunta${index}"]:checked`
        );

        respuestas.push({
            pregunta: item.pregunta,
            opciones: item.opciones,
            correcta: item.correcta,
            seleccionada: seleccionada ? parseInt(seleccionada.value) : null
        });
    });

    // Guardar en sessionStorage para que resultado.js lo lea
    sessionStorage.setItem("respuestasQuiz", JSON.stringify(respuestas));

    // Redirigir a la página de resultados
    window.location.href = "resultado.html";
}

// ============================
// Eventos e inicio
// ============================
resultBtn.addEventListener("click", enviarRespuestas);
renderizarPreguntas();