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

  // Datos de las naves
  const naves = [
    {
      nombre: 'Spectrum',
      descripcion: 'Nave rápida y ágil, ideal para misiones de exploración.',
      gif: 'img/nave2.gif'
    },
    {
      nombre: 'Diminisher',
      descripcion: 'Nave de combate balanceada, con buena resistencia y potencia.',
      gif: 'img/nave1.gif'
    },
    {
      nombre: 'Venom',
      descripcion: 'Nave pesada, diseñada para ataques devastadores y defensa sólida.',
      gif: 'img/nave3.gif'
    }
  ];

  let indiceNave = 0;

  function actualizarNave() {
    $('#gif-nave').attr('src', naves[indiceNave].gif);
    $('#gif-nave').attr('alt', 'GIF nave ' + naves[indiceNave].nombre);
    $('#nombre-nave').text(naves[indiceNave].nombre);
    $('#descripcion-nave').text(naves[indiceNave].descripcion);
  }

  // Eventos para cambiar de nave
  $('#flecha-derecha').on('click', function() {
    indiceNave = (indiceNave + 1) % naves.length;
    actualizarNave();
  });

  $('#flecha-izquierda').on('click', function() {
    indiceNave = (indiceNave - 1 + naves.length) % naves.length;
    actualizarNave();
  });

  // Inicializar con la primera nave
  actualizarNave();
});
