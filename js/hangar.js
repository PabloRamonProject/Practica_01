$(document).ready(function() {
  // Cambiar color de fondo según facción seleccionada
  $('.btn-faccion').on('click', function() {
    const faccion = $(this).data('faccion');

    // Resetear background
    $('body').css('background-color', '');

    if (faccion === 'VRU') {
      $('body').css('background-color', '#013300');  // verde muy oscuro
    } else if (faccion === 'MMO') {
      $('body').css('background-color', '#4b0000');  // rojo muy oscuro
    } else if (faccion === 'EIC') {
      $('body').css('background-color', '#001933');  // azul muy oscuro
    }
  });

  // Mostrar imagen al hacer hover sobre botón de facción
  const faccionImages = {
    'MMO': 'img/Marte.jpg',
    'EIC': 'img/Tierra.jpg',
    'VRU': 'img/Venus.jpg'
  };

  $('.btn-faccion').on('mouseenter', function() {
    const faccion = $(this).data('faccion');
    const imgSrc = faccionImages[faccion] || '';

    if (imgSrc) {
      $('#preview-image').attr('src', imgSrc).fadeIn(200);
    }
  });

  $('.btn-faccion').on('mouseleave', function() {
    $('#preview-image').fadeOut(200);
  });
});
