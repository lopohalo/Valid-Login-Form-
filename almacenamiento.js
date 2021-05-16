
function iniciarSesion(){
    var semail= '' ;
    var spassword= '' ;
    var bAcceso= false;


semail = document.querySelector('#txtemail').value;
spassword = document.querySelector('#txtpassword').value;

bAcceso = validarCredenciales(semail, spassword);
if(bAcceso){
    window.alert("login satisfactorio")
}else {
window.alert("login incorrect")
}

  
}
//document.getElementById("logine").addEventListener("click", function lopo (event){
    //event.preventDefault()
 // });