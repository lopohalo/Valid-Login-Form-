function capturar(){
    function persona(name, lastName, email, password){
      this.name = name;
      this.lastName=lastName;
      this.email=email;
      this.password=password;
    }

    var nameCapture = document.getElementById("nombres").value;
    var lastNameCapture = document.getElementById("apellidos").value;
    var emailCapture = document.getElementById("correos").value;
    var passwordCapture = document.getElementById("correo").value;


    NewPerson = new persona(nameCapture,lastNameCapture,emailCapture,passwordCapture);
    agregar();
}


var baseDAt0s=[];
function agregar(){
    baseDAt0s.push(NewPerson);
}