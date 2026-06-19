// ========== VARIABLES GLOBALES ==========
let montoBase = 0;
let descuentos = [];

// ========== OBTENER ELEMENTOS DEL DOM ==========
const montobtn = document.getElementById("monto_btn");
const descuentoingbtn = document.getElementById("descuento_ing_btn");
const limpiesatablabtn = document.getElementById("limpiesa_tabla_btn");
const limpiesadesbtn = document.getElementById("limpiesa_des_btn");
const limpiesatotalbtn = document.getElementById("limpiesa_total_btn");
const montoinput = document.getElementById("monto_input");
const descuentoinput = document.getElementById("descuento_input");
const cuerpotabla = document.getElementById("cuerpo_tabla");
const montoMostrar = document.getElementById("monto_mostrar");
const totalMostrar = document.getElementById("total_mostrar");

// ========== 1. FUNCIÓN: INGRESAR MONTO ==========
montobtn.addEventListener("click", function () {
    const valor = parseFloat(montoinput.value);

    if (isNaN(valor) || valor <= 0) {
        alert("⚠️ Por favor, ingresa un monto válido mayor a 0");
        return;
    }

    montoBase = valor;
    montoMostrar.textContent = `Monto: $${montoBase.toFixed(2)}`;
    montoinput.value = "";
    actualizarTotal();
});

// ========== 2. FUNCIÓN: INSERTAR DESCUENTO ==========
descuentoingbtn.addEventListener("click", function () {
    if (montoBase === 0) {
        alert("⚠️ Primero ingresa un monto base");
        return;
    }

    const valor = parseFloat(descuentoinput.value);

    if (isNaN(valor) || valor <= 0) {
        alert("⚠️ Por favor, ingresa un descuento válido mayor a 0");
        return;
    }

    // Verificar que el descuento no sea mayor que el total actual
    const totalActual = calcularTotal();
    if (valor > totalActual) {
        alert(`⚠️ El descuento no puede ser mayor que el saldo actual ($${totalActual.toFixed(2)})`);
        return;
    }

    // Agregar descuento al array
    descuentos.push(valor);
    descuentoinput.value = "";
    actualizarTabla();
    actualizarTotal();
});

// ========== 3. FUNCIÓN: ACTUALIZAR TABLA ==========
function actualizarTabla() {
    if (descuentos.length === 0) {
        cuerpotabla.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: #999;">No hay descuentos</td>
            </tr>
        `;
        return;
    }

    let html = "";
    descuentos.forEach((descuento, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>$${descuento.toFixed(2)}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDescuento(${index})">
                        ❌
                    </button>
                </td>
            </tr>
        `;
    });

    cuerpotabla.innerHTML = html;
}

// ========== 4. FUNCIÓN: ELIMINAR DESCUENTO ==========
function eliminarDescuento(index) {
    if (confirm(`¿Eliminar el descuento $${descuentos[index].toFixed(2)}?`)) {
        descuentos.splice(index, 1);
        actualizarTabla();
        actualizarTotal();
    }
}

// ========== 5. FUNCIÓN: CALCULAR TOTAL ==========
function calcularTotal() {
    const totalDescuentos = descuentos.reduce((sum, desc) => sum + desc, 0);
    return montoBase - totalDescuentos;
}

// ========== 6. FUNCIÓN: ACTUALIZAR TOTAL ==========
function actualizarTotal() {
    const total = calcularTotal();

    // Asegurar que total sea un número
    const totalNumerico = Number(total) || 0;

    if (totalNumerico < 0) {
        totalMostrar.textContent = `Total: $0.00 (¡En negativo!)`;
        totalMostrar.style.color = "red";
    } else {
        totalMostrar.textContent = `Total: $${totalNumerico.toFixed(2)}`;
        totalMostrar.style.color = "#333";
    }
}

// ========== 7. FUNCIÓN: LIMPIAR TABLA ==========
limpiesatablabtn.addEventListener("click", function () {
    if (descuentos.length === 0) {
        alert("No hay descuentos para limpiar");
        return;
    }

    if (confirm("¿Estás seguro de eliminar todos los descuentos?")) {
        descuentos = [];
        actualizarTabla();
        actualizarTotal();
    }
});

// ========== 8. FUNCIÓN: LIMPIAR CAMPO DESCUENTO ==========
limpiesadesbtn.addEventListener("click", function () {
    descuentoinput.value = "";
});

// ========== 9. FUNCIÓN: LIMPIAR TODO ==========
limpiesatotalbtn.addEventListener("click", function () {
    if (confirm("¿Estás seguro de limpiar todo?")) {
        montoBase = 0;
        descuentos = [];
        montoinput.value = "";
        descuentoinput.value = "";
        montoMostrar.textContent = "Monto: $0.00";
        totalMostrar.textContent = "Total: $0.00";
        totalMostrar.style.color = "#333";
        actualizarTabla();
    }
});

// ========== 10. INGRESAR CON TECLA ENTER ==========
montoinput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        montobtn.click();
    }
});

descuentoinput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        descuentoingbtn.click();
    }
});