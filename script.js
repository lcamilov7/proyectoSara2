const couponButton = document.getElementById('coupon-button')
couponButton.addEventListener('click', function() {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.classList.toggle('hidden');

  if (couponButton.style.backgroundColor === 'rgb(212, 172, 13)') {
    couponButton.style.backgroundColor = ''; // Resetea a su color original
  } else {
    couponButton.style.backgroundColor = '#d4ac0d'; // Cambia a color nuevo
  }
});

const letterButton = document.getElementById('letter-button')
letterButton.addEventListener('click', function() {
  const letterContainer = document.querySelector('.letter-container');
  letterContainer.classList.toggle('hidden');
  letterContainer.classList.toggle('flex');

  if (letterButton.style.backgroundColor === 'rgb(175, 122, 197)') {
    letterButton.style.backgroundColor = ''; // Resetea a su color original
  } else {
    letterButton.style.backgroundColor = '#af7ac5'; // Cambia a color nuevo
  }
});

const snivy = document.getElementById('snivy');
const bubbleText = document.getElementById('bubble-text');
const messages = [
  "Te amo más que a un emparedado de puppys",
  "Te amo más que a una pizza de people",
  "Te amo más que a mi siesta de la tarde",
  "Te amo más que a a las gomitas de efrutti y Fini",
  "Te amo más que a las lentejas",
  "Te amo más que a las porpetas de procinal",
  "Te amo más que al lomito pimienta.",
  "Te amo más que a mis pocos festivos",
  "Te amo más que a Anuel",
  "Te amo casi tanto como a CR7 SIUUUUU",
  "Te amo más que a los dálmatas",
  "Te amo más que a los gatos calvos",
  "Te amo más que pedir por temu",
  "Te amo más que mis loncitos",
  "Te amo más que a no bañarme un domingo",
  "Te amo más que a un litro de helado de yogurt",
  "Te amo más que a mi xbox",
  "Te amo más que a mi buso gris de la suerte",
  "Te amo más que a Snivy",
  "Te amo más que a mi colección de funkos",
  "Te amo más que a las siestas después de almorzar.",
  "Te amo más que como amaba la ardilla de la era del hielo a las bellotas",
  "Te amo más que a los días grises",
  "Te amo más que a Itachi",
  "Te amo más que al ajiaco de tu mamá",
  "Te amo más que a los días que puedo quedarme en tu casa.",
  "Te amo más que las ampollas",
  "Te amo como pimienta a las rosquitas",
  "Te amo como Olivia al pollo",
  "Te amo como un ratón al queso"
];

function random(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

snivy.addEventListener('click', function() {
  bubbleText.innerText = random(messages);
});
