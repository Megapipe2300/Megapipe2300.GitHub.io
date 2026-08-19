

function resultado()
{

    var p1, p2,nota;

    //respuesta



    // Validar primera pregunta
    if (document.getElementById('p11').checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }


    // Validar segunda pregunta
    if (document.getElementById('p19').checked == true) {
        p2 = 1;
    } else {
        p2 = 0;
    }

    nota=p1+p2;

    Swal.fire({
        title: "¡Excelente! 🎉",
        text: "Respondiste toda las preguntas.",
        icon: "success",
        draggable: true,
        confirmButtonText: "Ver puntaje",
        confirmButtonColor: "#48bb78"
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir después de que el usuario haga clic en el botón
            window.location.href = "respuesta/puntaje.html"; // Debe ser un archivo HTML
        }
    });


    /*
    if (nota === 2) {


//        alert(" Todas las respuestas son correctas. Nota: " + nota   );



        Swal.fire({
            title: "¡Excelente! 🎉",
            text: "Todas las respuestas son correctas.",
            icon: "success",
            draggable: true,
            confirmButtonText: "Ver puntaje",
            confirmButtonColor: "#48bb78"
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir después de que el usuario haga clic en el botón
                window.location.href = "respuesta/puntaje.html"; // Debe ser un archivo HTML
            }
        });
        
    } else if (nota === 1) {

      //  alert(" solo 1 respuesta correcta. ¡Sigue mejorando!. Nota: " + nota);
    } else {
       // alert(" Reprobado. ¡Repasa la historia!. Nota: " + nota);
    }

    document.getElementById('p11').checked = false;
    document.getElementById('p22').checked = false;
    document.getElementById('p13').checked = false;
    document.getElementById('p14').checked = false;
    
    document.getElementById('p16').checked = false;
    document.getElementById('p17').checked = false;
    document.getElementById('p18').checked = false;
    document.getElementById('p19').checked = false;

    */
}
