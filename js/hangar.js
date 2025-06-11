// Datos de naves y empresas
const naves = [
  {
    img: 'img/nave1.gif',
    descripcion: 'Nave Águila: Rápida, ágil y con un sistema de invisibilidad.',
    habilidades: 'Velocidad alta, escudo medio, daño bajo.'
  },
  {
    img: 'img/nave2.gif',
    descripcion: 'Nave Halcón: Balanceada, con buen daño y escudo.',
    habilidades: 'Velocidad media, escudo medio, daño medio.'
  },
  {
    img: 'img/nave3.gif',
    descripcion: 'Nave Dragón: Pesada, con alto daño y escudo.',
    habilidades: 'Velocidad baja, escudo alto, daño alto.'
  }
];

const empresas = [
  {
    img: 'img/Venus.jpg',
    descripcion: 'Venus: Poder comercial, acceso a recursos y naves tecnológicas.',
    color: '#0a3f1e' // verde
  },
  {
    img: 'img/Marte.jpg',
    descripcion: 'Marte: Fuerza militar y tácticas de combate avanzadas.',
    color: '#3f0a0a' // rojo
  },
  {
    img: 'img/Tierra.jpg',
    descripcion: 'Tierra: Equilibrio y resistencia con tecnología diversificada.',
    color: '#0a1e3f' // azul
  }
];

let naveIndex = 0;
let empresaIndex = 0;

const naveImg = document.getElementById('nave-img');
const naveDesc = document.getElementById('nave-descripcion');

const empresaImg = document.getElementById('empresa-img');
const empresaDesc = document.getElementById('empresa-descripcion');

const mainContainer = document.querySelector('main');

function actualizarNave() {
  naveImg.src = naves[naveIndex].img;
  naveDesc.textContent = `${naves[naveIndex].descripcion} ${naves[naveIndex].habilidades}`;
}

function actualizarEmpresa() {
  empresaImg.src = empresas[empresaIndex].img;
  empresaDesc.textContent = empresas[empresaIndex].descripcion;
  mainContainer.style.backgroundColor = empresas[empresaIndex].color;
}

function cambiarNave(direccion) {
  naveIndex += direccion;
  if (naveIndex < 0) naveIndex = naves.length -1;
  if (naveIndex >= naves.length) naveIndex = 0;
  actualizarNave();
}

function cambiarEmpresa(direccion) {
  empresaIndex += direccion;
  if (empresaIndex < 0) empresaIndex = empresas.length -1;
  if (empresaIndex >= empresas.length) empresaIndex = 0;
  actualizarEmpresa();
}

// Ajuste restringido de daño, escudo y velocidad
const danoInput = document.getElementById('dano');
const escudoInput = document.getElementById('escudo');
const velocidadInput = document.getElementById('velocidad');

const danoVal = document.getElementById('valor-dano');
const escudoVal = document.getElementById('valor-escudo');
const velocidadVal = document.getElementById('valor-velocidad');

function ajustarValores(changed) {
  // Convertimos a números
  let dano = +danoInput.value;
  let escudo = +escudoInput.value;
  let velocidad = +velocidadInput.value;

  // Máximo total 100
  const total = dano + escudo + velocidad;
  if (total > 100) {
    // Reducimos proporcionalmente lo que no es el changed
    const exceso = total - 100;

    if (changed === 'dano') {
      // Reducir escudo y velocidad proporcionalmente
      const otros = escudo + velocidad;
      if (otros > 0) {
        escudo -= (exceso * (escudo / otros));
        velocidad -= (exceso * (velocidad / otros));
      } else {
        // Si otros 0, reducimos el cambiado (dano)
        dano -= exceso;
      }
    } else if (changed === 'escudo') {
      const otros = dano + velocidad;
      if (otros > 0) {
        dano -= (exceso * (dano / otros));
        velocidad -= (exceso * (velocidad / otros));
      } else {
        escudo -= exceso;
      }
    } else if (changed === 'velocidad') {
      const otros = dano + escudo;
      if (otros > 0) {
        dano -= (exceso * (dano / otros));
        escudo -= (exceso * (escudo / otros));
      } else {
        velocidad -= exceso;
      }
    }

    // Aseguramos que no sean negativos
    dano = Math.max(0, dano);
    escudo = Math.max(0, escudo);
    velocidad = Math.max(0, velocidad);
  }

  // Actualizamos inputs y textos
  danoInput.value = dano.toFixed(0);
  escudoInput.value = escudo.toFixed(0);
  velocidadInput.value = velocidad.toFixed(0);

  danoVal.textContent = danoInput.value + '%';
  escudoVal.textContent = escudoInput.value + '%';
  velocidadVal.textContent = velocidadInput.value + '%';
}

danoInput.addEventListener('input', () => ajustarValores('dano'));
escudoInput.addEventListener('input', () => ajustarValores('escudo'));
velocidadInput.addEventListener('input', () => ajustarValores('velocidad'));

// Volumen música
const volumenInput = document.getElementById('volumen');
const musica = document.getElementById('musica-fondo');

volumenInput.addEventListener('input', () => {
  musica.volume = volumenInput.value / 100;
});

// Animación pantalla carga
const btnDespegar = document.getElementById('despegar-btn');
const pantallaCarga = document.getElementById('pantalla-carga');

btnDespegar.addEventListener('click', () => {
  pantallaCarga.classList.remove('hidden');

  // Simulamos carga 5 segundos
  setTimeout(() => {
    pantallaCarga.classList.add('hidden');
    alert('¡Despegue completado!');
  }, 5000);
});

// Inicialización
actualizarNave();
actualizarEmpresa();
musica.volume = volumenInput.value / 100;
ajustarValores();
