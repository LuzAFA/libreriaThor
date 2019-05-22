// crear libreria thor basada en la libreria Francesa
function suscripcion(){
    var nombre= document.form.name.value;
    var correo = document.form.correo.value;;
    var mensaje = `Gracias ${validarNombre} Una confirmación por e-mail ${validarCorreo} ha sido enviada por favor haga clic en el enlace de confirmación a fin de ratificar su suscripción`
    var validarNombre = document.forms["form"]["name"].value;
    var validarCorreo = document.forms["form"]["correo"].value;
    
      if (validarNombre == "") {
        alert("Debes llenar el campo nombre");
        return false;
      }
  
      if (validarCorreo == "") {
        alert("Debes llenar el campo de correo");
        return false;
      }
    document.getElementByName('form').innerHTML = mensaje;
    
  }
  function cerrar() {
    window.location="index.html";	
}
