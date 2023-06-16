let Nombre = document.getElementById("Username")
let Email = document.getElementById("Email")
let Contraseña = document.getElementById("password")
document.getElementById("button").addEventListener('click',showForConsole)

function showForConsole(){
  console.log("Nombre: " + Nombre.value)
  console.log("Email : " + Email.value)
  console.log( "Contraseña: " +Contraseña.value)
  Nombre.value = "";
  Email.value = "";
  Contraseña.value = "";
}