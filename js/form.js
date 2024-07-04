//ENVIAR PRODUCTO

document.querySelector("#submit").addEventListener("click", e => {
  
    let nombre = document.querySelector('#nombre').value;
    let mensaje = document.querySelector('#mensaje').value;
    let enviado = document.querySelector('#submitSuccessMessage');

    let url = "https://api.whatsapp.com/send?phone=522283640113&text=*Nombre*%0A" + nombre + "%0A%0A" + mensaje;

    if (nombre === "" && mensaje === "") {
        document.getElementById("nombreinvalido").style.display="block";
        document.getElementById("mensajeinvalido").style.display="block";
    }
    else if (nombre === "" && mensaje != "") {
        document.getElementById("nombreinvalido").style.display="block";
        document.getElementById("mensajeinvalido").style.display="none";
    }
    else if (nombre != "" && mensaje === "") {
        document.getElementById("nombreinvalido").style.display="none";
        document.getElementById("mensajeinvalido").style.display="block";
    }
    else{
        window.open(url);
        document.getElementById("nombreinvalido").style.display="none";
        document.getElementById("mensajeinvalido").style.display="none";
        enviado.classList.remove('d-none')
        enviado.classList.add('d-block');
    }
});