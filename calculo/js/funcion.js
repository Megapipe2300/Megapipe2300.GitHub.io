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
    return Math.round(numero).toLocaleString('es-ES');
}


function agregarmonto()
{
    //agregan
    
    const valor = parseFloat(montobase.value);


    if (isNaN(valor) || valor <= 0) {
        alert("⚠️ Por favor, ingresa un descuento válido mayor a 0");
        return;
    }
    

    montoBase = valor;
  
    montoMostrar.textContent = `Monto: $${formatearNumero(montoBase)}`;
    montoMostrar.style.color = "green";
    montobase.value = "";
    montobase.disabled = true;
    montobase.style.backgroundColor = "#f0f0f0"; // Cambiar color de fondo
    montobtn.disabled = true; 
    montobtn.style.opacity = "0.6";   // Cambiar opacidad del botón

}



function agregardecuento() {

    var ttr = document.createElement("tr");
    var tbody = document.getElementById("datos")
    var monto = document.getElementById("monto_base");
    var des = document.getElementById("descuentobase");
    var desc = document.getElementById("descripcion_input");

    //validar que el descuento no sea mayor al monto
/*
    if (des >= monto) {
        alert("El monto ingresado no puede ser mayor al monto base")
        des.value = "";

    }

*/
    //formato para punto

    /*
function format_currency(num) {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    
    return currencyFormatter.format(num);
}

        */
    


    // 1. Obtener el valor del input

    var celda1 = document.createElement("td")
    var celda2 = document.createElement("td")

    var textcelda1 = document.createTextNode(descuentobase.value);
    var textcelda2 = document.createTextNode(descripcion_input.value);


    // Agregar cada texto a su celda correspondiente

    celda1.appendChild(textcelda1)
    celda2.appendChild(textcelda2)

    // Agregar las celdas a la fila

    ttr.appendChild(celda1);
    ttr.appendChild(celda2);
    
    // Agregar la fila a la tabla

    tbody.appendChild(ttr)

    //envia los valores a la tabla

    
    descuentobase.value = "";
    descripcion_input.value = "";
    descuentobase.focus();

    //suma lo que esta en tabla descuento
    var total = 0;
    var filas = tbody.querySelectorAll("tr")
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].querySelectorAll("td")
        if (celdas.length > 0) {
            var txt = celdas[0].textContent;
            var texto = celdas[0].textContent;
           
            var numero = parseFloat(texto);

            if (!isNaN(numero)) {
                total += numero;
            }
        }

    }
    // va sumando los descuento


    // Mostrar total descuentos en el HTML

    document.getElementById("total_descuentos_mostrar").innerHTML = "Total Descuentos: $" + formatearNumero(total);

    // Calcular total final (Monto - Descuentos)

    var totalfinal =  montoBase - total   // ← Usar la variable "total" que es un número

    montototal.textContent = `Monto Total: $${formatearNumero(totalfinal)}`;

    if (totalfinal == 0) {
        alert("⚠️Quedaste pato ");

    }else if (totalfinal <= 50000) {

        montototal.style.color = "red";


    } else if (totalfinal <= 100000) {
        montototal.style.color = "#ff9800";

    } else if (totalfinal >= 100000) {
        montototal.style.color = "green";
    }

}

/*
function actualizarTabla() {
    const tbody = document.getElementById("datos");

    if (descuentos.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; color: #999;">No hay descuentos</td>
            </tr>
        `;
        return;
    }

    let html = "";
    descuentos.forEach((descuento, index) => {
        html += `
            <tr>
                <td>$${formatearNumero(descuento)}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDescuento(${index})">
                        ❌ Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}
*/

// ========== ELIMINAR DESCUENTO ==========
function eliminarDescuento(index) {
    if (confirm(`¿Eliminar el descuento $${formatearNumero(descuentos[index])}?`)) {
        descuentos.splice(index, 1);
        actualizarTabla();
        actualizarTotal();
        actualizarTotalDescuentos();
    }
}




// ==========  FUNCIÓN: LIMPIAR ==========
function limpiarmontobtn() {

    if (confirm("¿Deseas borrar el monto ingresado?")) { 
        montobase.value = "";
        montoMostrar.textContent = "Monto: $0";
        montoMostrar.style.color = "black";
        montobase.focus();


        // ========== HABILITAR CAMPO Y BOTÓN ==========
        montobase.disabled = false;           // Habilitar el input
        montobase.style.backgroundColor = "white"; // Restaurar color de fondo
        montobtn.disabled = false;            // Habilitar el botón
        montobtn.style.opacity = "1";         // Restaurar opacidad
        montobtn.style.cursor = "pointer";    // Restaurar cursor
    }

}



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
        montototal.style.color = "black";
    }
}

function limpiesades() {
   
    descuentobase.value = "";
    descripcion_input.value = "";
        descuentobase.focus();
 
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
