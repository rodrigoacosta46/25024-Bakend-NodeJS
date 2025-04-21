//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que:
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla:
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir
4- Al finalizar mostrar mensaje
*/
// SOLUCION
// 1-
// alert("Bienvenido/a a tu Home Banking")
// 2-
let pin = "5701";
let ingresar = false;
for (let i = 3; i >= 1; i--) {
  let ingreso = prompt("Ingresa tu Pin");
  if (ingreso === pin) {
    alert("Bienvenido ya podes operar");
    ingresar = true;
    break;
  } else {
    alert("Error de ingreso. Volver a intentar");
  }
}

// if
if (ingresar) {
  let saldo = 30000;
  let opcion = prompt(
    "Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );
  while (opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es :$" + saldo);
        break;

      default:
        break;
    }

    opcion = prompt(
      "ELEGI una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Retuvimos comunicate al 0800-quete ayudetoto");
}
