// ========== OBTENER ELEMENTOS DEL DOM ==========

const montobase = document.getElementById("monto_base");
const montobtn = document.getElementById("monto_btn");
const limpiarbtn = document.getElementById('lipiesabase');
const descuentobase = document.getElementById("descuentobase");
const descuentobtn = document.getElementById("descuento_btn");
const limpiesatablabtn = document.getElementById("limpiesa_tabla_btn");
const limpiesadesbtn = document.getElementById("limpiesa_des_btn");
const limpiesatotalbtn = document.getElementById("limpiesa_total_btn");
const datos = document.getElementById("datos");
const cuerpotabla = document.getElementById("cuerpo_tabla");
const montoMostrar = document.getElementById("monto_mostrar");
const montototal = document.getElementById("monto_total");
const totalDescuentosMostrar = document.getElementById("total_descuentos_mostrar");



// ========== FUNCIÓN: INGRESO ==========
function formatearNumero(numero) {
    return Math.round(numero);
}

function agregarmonto()
{
    //agregan

    const valor = parseFloat(montobase.value);

    if (isNaN(valor) || valor <= 0) {
        alert("⚠️ Por favor, ingresa un monto válido mayor a 0");
        return;
    }

    montoBase = valor;
    montoMostrar.textContent = `Monto: $${formatearNumero(montoBase)}`;
    montoMostrar.style.color = "green";
    montobase.value = "";

}


function agregardecuento() {

    var ttr = document.createElement("tr");
    var tbody = document.getElementById("datos")
    var monto = document.getElementById("monto_base");

    // 1. Obtener el valor del input

    var celda = document.createElement("td")
    var textcelda = document.createTextNode(descuentobase.value)

    celda.appendChild(textcelda)
    ttr.appendChild(celda)
    //envia los valores a la tabla
    tbody.appendChild(ttr)
    descuentobase.value = "";
    descuentobase.focus();

    //suma lo que esta en tabla descuento
    var total = 0;
    var filas = tbody.querySelectorAll("tr")
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].querySelectorAll("td")
        if (celdas.length > 0) {
            var texto = celdas[0].textContent;
            var numero = parseFloat(texto);
            if (!isNaN(numero)) {
                total += numero;
            }
        }

    }
   // va sumando los descuento
    // Mostrar total descuentos en el HTML
    document.getElementById("total_descuentos_mostrar").innerHTML = "Total Descuentos: $" + Math.round(total);

    // Calcular total final (Monto - Descuentos)
    
    var totalfinal =  montoBase - total   // ← Usar la variable "total" que es un número

    montototal.textContent = `Monto Total: $${formatearNumero(totalfinal)}`;


    if (totalfinal <= 50000) {

        montototal.style.color = "red";


    } else if (totalfinal <= 100000) {
        montototal.style.color = "#ff9800";

    } else if (totalfinal >= 100000) {
        montototal.style.color = "green";
    }



    
}










// ==========  FUNCIÓN: LIMPIAR ==========
function limpiarmontobtn() {

    if (confirm("¿Deseas borrar el monto ingresado?")) { 
        montobase.value = "";
        montoMostrar.textContent = "Monto: $0";
        montoMostrar.style.color = "black"
        montobase.focus();
    }

}



function limpiatabla() {
    var tbody = document.getElementById("datos")
    if (confirm("¿Deseas borrar el datos de la tabla?")) {
        datos.innerHTML = tbody.innerHTML = `
        <tr>
            <td colspan="3" style="text-align: center; color: #999;">
                No hay descuentos
            </td>
        </tr>
    `;
        totalDescuentosMostrar.textContent = "Monto: $0";
        montototal.textContent = "Monto total: $0";
        montototal.style.color = "black";
    }
}

function limpiesades() {
    if (confirm("¿Deseas borrar descuento?")) {
        descuentobase.value = "";
        descuentobase.focus();
    }
}



// ========== 3. FUNCIÓN: INSERTAR DESCUENTO ==========


/**
// ========== 4. FUNCIÓN: ACTUALIZAR TABLA ==========
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
                <td>$${formatearNumero(descuento)}</td>
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

//===================

function limpiardescuento() {

    if (confirm("¿Deseas borrar el monto ingresado?")) {
        descuentobase.value = "";
        descuentobase.focus();
    }

}




/*

// ========== 5. FUNCIÓN: ELIMINAR DESCUENTO ==========
function eliminarDescuento(index) {
    if (confirm(`¿Eliminar el descuento $${formatearNumero(descuentos[index])}?`)) {
        descuentos.splice(index, 1);
        actualizarTabla();
        actualizarTotal();
        actualizarTotalDescuentos();
    }
}







// ========== 9. FUNCIÓN: LIMPIAR TABLA ==========
limpiesatablabtn.addEventListener("click", function () {
    if (descuentos.length === 0) {
        alert("No hay descuentos para limpiar");
        return;
    }

    if (confirm("¿Estás seguro de eliminar todos los descuentos?")) {
        descuentos = [];
        actualizarTabla();
        actualizarTotal();
        actualizarTotalDescuentos();
    }
});

// ========== 10. FUNCIÓN: LIMPIAR CAMPO DESCUENTO ==========
limpiesadesbtn.addEventListener("click", function () {
    descuentoinput.value = "";
});

// ========== 11. FUNCIÓN: LIMPIAR TODO ==========
limpiesatotalbtn.addEventListener("click", function () {
    if (confirm("¿Estás seguro de limpiar todo?")) {
        montoBase = 0;
        descuentos = [];
        montoinput.value = "";
        descuentoinput.value = "";
        montoMostrar.textContent = "Monto: $0";
        totalMostrar.textContent = "Total a Pagar: $0";
        totalMostrar.style.color = "#333";
        totalMostrar.style.fontWeight = "normal";
        totalDescuentosMostrar.textContent = "Total Descuentos: $0";
        totalDescuentosMostrar.style.color = "#333";
        actualizarTabla();
    }
});

*/


/*
// ========== 12. INGRESAR CON TECLA ENTER ==========
montobase.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        montobtn.click();
    }
});

descuentobase.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        descuentobtn.click();
    }
});

*/