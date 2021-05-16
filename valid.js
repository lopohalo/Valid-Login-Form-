function validar(){
	var nombres, apellidos, correo, correos;
	nombres = document.getElementById("nombres").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	correos = document.getElementById("correos").value;
       
    expresion = /\w+@\w+\.+[a-z]/;
    

	if(nombres ==="" || apellidos ===""|| correos ==="" || correo===""){
		alert("All fields are required")
		return false;
	}
    else if(nombres.length>10) {
        alert("the name is very long")
        return false;
    }
    else if(apellidos.length>10) {
        alert("the last name is very long")
        return false;
    }
    else if(!expresion.test(correo)){

    }
    else if(correo.length>30) {
        alert("the email is very long")
        return false;
    }
}
