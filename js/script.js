$(document).ready(function () {
  
 
  // Validación de formulario
  $("#beta-form").on("submit", function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let plataforma = $("#plataforma").val();

    if (!nombre || !email || !plataforma) {
      $("#form-message").text("Por favor completa todos los campos.");
      return;
    }

    // Simular envío (aquí puedes conectar backend si tienes)
    $("#form-message").text("¡Gracias por registrarte a la beta!");
    this.reset();
  });

   


});