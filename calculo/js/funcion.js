// ========== VARIABLES GLOBALES ==========
let montoBase = 0;

// ========== OBTENER ELEMENTOS DEL DOM ==========
const montobase = document.getElementById("monto_base");
const montobtn = document.getElementById("monto_btn");
const limpiarbtn = document.getElementById('lipiesabase');
const descuentobase = document.getElementById("descuentobase");
const descripcionInput = document.getElementById("descripcion_input");
const descuentobtn = document.getElementById("descuento_btn");
const limpiesatablabtn = document.getElementById("limpiesa_tabla_btn");
const limpiesadesbtn = document.getElementById("limpiesa_des_btn");
const datos = document.getElementById("datos");
const montoMostrar = document.getElementById("monto_mostrar");
const montototal = document.getElementById("monto_total");
const totalDescuentosMostrar = document.getElementById("total_descuentos_mostrar");

// ========== FUNCIÓN: FORMATEAR CON PUNTOS ==========
function formatearConPuntos(numero) {
    return Math.round(numero).toLocaleString('es-ES');
}

// ========== FUNCIÓN: FORMATEAR INPUT ==========
function formatearInput(input) {
    let soloNumeros = input.value.replace(/[^0-9]/g, '');
    
    if (soloNumeros === '') {
        input.value = '';
        return;
    }
    
    let numero = parseInt(soloNumeros, 10);
    
    if (isNaN(numero) || numero === 0) {
        input.value = '';
        return;
    }
    
    input.value = numero.toLocaleString('es-ES');
}

// ========== FUNCIÓN: OBTENER VALOR SIN PUNTOS ==========
function obtenerValorSinPuntos(input) {
    return parseFloat(input.value.replace(/\./g, '')) || 0;
}

// ========== DESHABILITAR CAMPOS DE DESCUENTO ==========
function deshabilitarCamposDescuento() {
    descripcionInput.disabled = true;
    descripcionInput.style.backgroundColor = "#f0f0f0";
    descripcionInput.style.cursor = "not-allowed";
    descuentobase.disabled = true;
    descuentobase.style.backgroundColor = "#f0f0f0";
    descuentobase.style.cursor = "not-allowed";
    descuentobtn.disabled = true;
    descuentobtn.style.opacity = "0.6";
    descuentobtn.style.cursor = "not-allowed";
    limpiesadesbtn.disabled = true;
    limpiesadesbtn.style.opacity = "0.6";
    limpiesadesbtn.style.cursor = "not-allowed";
    limpiesatablabtn.disabled = true;
    limpiesatablabtn.style.opacity = "0.6";
    limpiesatablabtn.style.cursor = "not-allowed";




}

// ========== HABILITAR CAMPOS DE DESCUENTO ==========
function habilitarCamposDescuento() {
    descripcionInput.disabled = false;
    descripcionInput.style.backgroundColor = "white";
    descripcionInput.style.cursor = "text";
    descuentobase.disabled = false;
    descuentobase.style.backgroundColor = "white";
    descuentobase.style.cursor = "text";
    descuentobtn.disabled = false;
    descuentobtn.style.opacity = "1";
    descuentobtn.style.cursor = "pointer";
    limpiesadesbtn.disabled = false;
    limpiesadesbtn.style.opacity = "1";
    limpiesadesbtn.style.cursor = "pointer";
    limpiesatablabtn.disabled = false;
    limpiesatablabtn.style.opacity = "1";
    limpiesatablabtn.style.cursor = "pointer";
}

// ========== 1. AGREGAR MONTO ==========
function agregarmonto() {
    const valorSinPuntos = montobase.value.replace(/\./g, '');
    const valor = parseFloat(valorSinPuntos);
    
    if (isNaN(valor) || valor <= 0) {
        alert("⚠️ Por favor, ingresa un monto válido mayor a 0");
        montobase.focus();
        montobase.value = '';
        return;
    }
    
    montoBase = valor;
    montoMostrar.textContent = `Monto: $${formatearConPuntos(montoBase)}`;
    montoMostrar.style.color = "green";
    montobase.value = formatearConPuntos(valor);
    montobase.disabled = true;
    montobase.style.backgroundColor = "#f0f0f0";
    montobtn.disabled = true;
    montobtn.style.opacity = "0.6";
    montobtn.style.cursor = "not-allowed";
    
    
    habilitarCamposDescuento();
    document.getElementById("descuentobase").focus();
}

// ========== 2. AGREGAR DESCUENTO ==========
function agregardecuento() {
    var tbody = document.getElementById("datos");
    
    if (montoBase === 0) {
        alert("⚠️ Primero ingresa un monto base");
        montobase.focus();
        return;
    }
    
    var descripcion = descripcionInput.value.trim();
    if (!descripcion) {
        alert("⚠️ La descripción no puede estar vacía");
        descripcionInput.focus();
        return;
    }
    
    var descuentoValor = obtenerValorSinPuntos(descuentobase);
    
    if (isNaN(descuentoValor) || descuentoValor <= 0) {
        alert("⚠️ Por favor, ingresa un descuento válido mayor a 0");
        descuentobase.focus();
        descuentobase.value = '';
        return;
    }
    
    // Calcular total actual de descuentos
    var totalDescuentosActual = 0;
    var filas = tbody.querySelectorAll("tr");
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].querySelectorAll("td");
        if (celdas.length > 0) {
            var texto = celdas[0].textContent;
            var numero = parseFloat(texto.replace(/[$.]/g, ''));
            if (!isNaN(numero)) {
                totalDescuentosActual += numero;
            }
        }
    }
    
    var saldoDisponible = montoBase - totalDescuentosActual;
    if (descuentoValor > saldoDisponible) {
        alert(`⚠️ El descuento no puede ser mayor que el saldo disponible ($${formatearConPuntos(saldoDisponible)})`);
        descuentobase.focus();
        descuentobase.value = '';
        return;
    }
    
    // ========== CREAR FILA ==========
    var ttr = document.createElement("tr");
    
    // ========== CELDA 1: DESCUENTO CON PUNTOS ==========

    var celda1 = document.createElement("td");
    var textCelda1 = document.createTextNode("$" + formatearConPuntos(descuentoValor));
    celda1.appendChild(textCelda1);
    ttr.appendChild(celda1);
    
    // ========== CELDA 2: DESCRIPCIÓN ==========

    var celda2 = document.createElement("td");
    var textCelda2 = document.createTextNode(descripcion);
    celda2.appendChild(textCelda2);
    ttr.appendChild(celda2);
    
    // ========== CELDA 3: BOTÓN ELIMINAR ==========
    var celda3 = document.createElement("td");
    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.border = "none";
    btnEliminar.style.background = "transparent";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.style.fontSize = "16px";
    btnEliminar.style.padding = "5px 10px";
    btnEliminar.title = "Eliminar descuento";
    
    btnEliminar.onclick = function() {
        if (confirm(`¿Eliminar el descuento "${descripcion}" por $${formatearConPuntos(descuentoValor)}?`)) {
            tbody.removeChild(ttr);
            calcularTotales();
        }
    };
    
    celda3.appendChild(btnEliminar);
    ttr.appendChild(celda3);
    
    tbody.appendChild(ttr);
    
    descripcionInput.value = "";
    descuentobase.value = "";
    descripcionInput.focus();
    
    calcularTotales();
}

// ========== 3. CALCULAR TOTALES ==========
function calcularTotales() {
    var tbody = document.getElementById("datos");
    
    // ========== SUMAR DESCUENTOS ==========
    var totalDescuentos = 0;
    var filas = tbody.querySelectorAll("tr");
    
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].querySelectorAll("td");
        if (celdas.length > 0) {
            // Obtener el texto y eliminar $ y . para sumar
            var texto = celdas[0].textContent;
            var numero = parseFloat(texto.replace(/[$.]/g, ''));
            
            if (!isNaN(numero)) {
                totalDescuentos += numero;
            }
        }
    }
    
    // ========== MOSTRAR TOTALES CON PUNTOS ==========

    totalDescuentosMostrar.textContent = "Total Descuentos: $" + formatearConPuntos(totalDescuentos);
    totalDescuentosMostrar.style.color = totalDescuentos > 0 ? "#f44336" : "#333";
    
    var totalFinal = montoBase - totalDescuentos;
    montototal.textContent = `Monto Total: $${formatearConPuntos(totalFinal)}`;
    
    if (totalFinal == 0) {

        alert("⚠️ Quedaste pato");
        montototal.style.color = "red";

        // Deshabilitar campos de descuento
        descuentobase.disabled = true;
        descuentobase.style.opacity = "0.6";
        descuentobase.style.cursor = "not-allowed";
        descuentobase.style.backgroundColor = "#f0f0f0";

        descripcionInput.disabled = true;
        descripcionInput.style.opacity = "0.6";
        descripcionInput.style.cursor = "not-allowed";
        descripcionInput.style.backgroundColor = "#f0f0f0";

        descuentobtn.disabled = true;
        descuentobtn.style.opacity = "0.6";
        descuentobtn.style.cursor = "not-allowed";

        limpiesadesbtn.disabled = true;
        limpiesadesbtn.style.opacity = "0.6";
        limpiesadesbtn.style.cursor = "not-allowed";

        // Deshabilitar también limpiar tabla
        limpiesatablabtn.disabled = false;
        limpiarbtn.disabled = false;

    } else if (totalFinal <= 50000) {
        // Monto bajo
        montototal.style.color = "red";

        // Habilitar campos de descuento
        descuentobase.disabled = false;
        descuentobase.style.opacity = "1";
        descuentobase.style.cursor = "text";
        descuentobase.style.backgroundColor = "white";

        descripcionInput.disabled = false;
        descripcionInput.style.opacity = "1";
        descripcionInput.style.cursor = "text";
        descripcionInput.style.backgroundColor = "white";

        descuentobtn.disabled = false;
        descuentobtn.style.opacity = "1";
        descuentobtn.style.cursor = "pointer";

        limpiesadesbtn.disabled = false;
        limpiesadesbtn.style.opacity = "1";
        limpiesadesbtn.style.cursor = "pointer";

        limpiesatablabtn.disabled = false;
        limpiesatablabtn.style.opacity = "1";
        limpiesatablabtn.style.cursor = "pointer";

    } else if (totalFinal <= 100000) {
        // Monto medio
        montototal.style.color = "#ff9800";

        // Habilitar campos de descuento
        descuentobase.disabled = false;
        descuentobase.style.opacity = "1";
        descuentobase.style.cursor = "text";
        descuentobase.style.backgroundColor = "white";

        descripcionInput.disabled = false;
        descripcionInput.style.opacity = "1";
        descripcionInput.style.cursor = "text";
        descripcionInput.style.backgroundColor = "white";

        descuentobtn.disabled = false;
        descuentobtn.style.opacity = "1";
        descuentobtn.style.cursor = "pointer";

        limpiesadesbtn.disabled = false;
        limpiesadesbtn.style.opacity = "1";
        limpiesadesbtn.style.cursor = "pointer";

        limpiesatablabtn.disabled = false;
        limpiesatablabtn.style.opacity = "1";
        limpiesatablabtn.style.cursor = "pointer";

    } else {
        // Monto alto
        montototal.style.color = "green";

        // Habilitar campos de descuento
        descuentobase.disabled = false;
        descuentobase.style.opacity = "1";
        descuentobase.style.cursor = "text";
        descuentobase.style.backgroundColor = "white";

        descripcionInput.disabled = false;
        descripcionInput.style.opacity = "1";
        descripcionInput.style.cursor = "text";
        descripcionInput.style.backgroundColor = "white";

        descuentobtn.disabled = false;
        descuentobtn.style.opacity = "1";
        descuentobtn.style.cursor = "pointer";

        limpiesadesbtn.disabled = false;
        limpiesadesbtn.style.opacity = "1";
        limpiesadesbtn.style.cursor = "pointer";

        limpiesatablabtn.disabled = false;
        limpiesatablabtn.style.opacity = "1";
        limpiesatablabtn.style.cursor = "pointer";
    }



}

// ========== 4. LIMPIAR MONTO ==========

function limpiarmontobtn() {

    if (confirm("¿Deseas borrar el monto ingresado?")) {
        montobase.value = "";
        montoMostrar.textContent = "Monto: $0";
        montoMostrar.style.color = "#667eea";
        montobase.focus();

        // ========== HABILITAR CAMPO Y BOTÓN ==========
        montobase.disabled = false;           // Habilitar el input
        montobase.style.backgroundColor = "white"; // Restaurar color de fondo
        montobtn.disabled = false;            // Habilitar el botón
        montobtn.style.opacity = "1";         // Restaurar opacidad
        montobtn.style.cursor = "pointer";    // Restaurar cursor

        deshabilitarCamposDescuento();
        montobase.focus();
    }

}

// ========== 5. LIMPIAR TABLA ==========

function limpiatabla() {
    var tbody = document.getElementById("datos")
    if (confirm("¿Deseas borrar el datos de descuento?")) {
        datos.innerHTML = tbody.innerHTML = `
        <tr>
            <td colspan="3" style="text-align: center; color: #999;">
                No hay descuentos
            </td>
        </tr>
    `;
        totalDescuentosMostrar.textContent = "Monto: $0";
        montototal.textContent = "Monto total: $0";
        montototal.style.color = "#48bb78";
        descuentobase.focus();
    }
}

// ========== 6. LIMPIAR CAMPOS ==========
function limpiesades() {
    descripcionInput.value = "";
    descuentobase.value = "";
    descripcionInput.focus();
}

// ========== 7. FORMATEAR INPUTS ==========
montobase.addEventListener('input', function() {
    formatearInput(this);
});

descuentobase.addEventListener('input', function() {
    formatearInput(this);
});

// ========== 8. TECLA ENTER ==========
montobase.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarmonto();
    }
});

descuentobase.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregardecuento();
    }
});

descripcionInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        descuentobase.focus();
    }
});

// ========== 9. AL CARGAR ==========
document.addEventListener('DOMContentLoaded', function() {
    deshabilitarCamposDescuento();
    montobase.focus();
});
