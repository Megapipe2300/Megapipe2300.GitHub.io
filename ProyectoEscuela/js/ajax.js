
function CargaPagina(sUrl) {
            $.ajax({
                type: "GET",
                cache: false,
                url: sUrl,
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                success: function(msg) {
                    if (msg.length > 0) {
                        document.getElementById("tabla").innerHTML = msg;
                        return;
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Página No Encontrada");
                }
            });
if(ExisteObj("ckbox")){
document.getElementById("ckbox").click();
}
        }

function ExisteObj(strObj){
return (document.all(strObj)!= null);
}


