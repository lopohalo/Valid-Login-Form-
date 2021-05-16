
function capturar(){
    function persona(name, lastName, email, password){
      this.name = name;
      this.lastName=lastName;
      this.email=email;
      this.password=password;
    }

    var nameCapture = document.getElementById("nombres").value;
    var lastNameCapture = document.getElementById("apellidos").value;
    var emailCapture = document.getElementById("correo").value;
    var passwordCapture = document.getElementById("correos").value;


    NewPerson = new persona(nameCapture,lastNameCapture,emailCapture,passwordCapture);
    console.log(NewPerson)
    agregar();
}


var baseDAt0s=[];
function agregar(){
    baseDAt0s.push(NewPerson);
}



function obtenerListaUsuarios(){
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'))
    if (ListaUsuarios == null){
        listaUsuarios =
        [
            NewPerson
        ]
    }
    return listaUsuarios; 
}



function validarCredenciales( pemail,  ppassword){

   var listaUsuarios = obtenerListaUsuarios();

   if (listaUsuarios.filter(NewPerson => NewPerson.email === pemail && NewPerson.password === ppassword).length > 0) {
    sessionStorage.setItem('usuarioActivo', pemail);
    return true;
  }
   return false;
}


