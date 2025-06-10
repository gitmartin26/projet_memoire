//get element from the DOM
const parallax = document.querySelector('.parallax');
const front = document.getElementById('front-layer');
const back = document.getElementById('back-layer');
const middle = document.getElementById('middle-layer');

//sensibilité --> plus le nombre est grand, moins il y a de sensibilité 
const sFront = 20;
const sBack = 400;
const sMiddle = 200;
const reduction = 0.5;

//mousemove event à l'intégralité de la section
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  document.getElementById('front-layer').style.transform = `
    translate(
      ${x / sFront}%,
      ${y / sFront*reduction}%
    )`;

  document.getElementById('back-layer').style.transform = `
    translate(
      ${x / sBack}%,
      ${y / sBack*reduction}%
  )`;
  
  document.getElementById('middle-layer').style.transform = `
    translate(
      ${x / sMiddle}%,
      ${y / sMiddle*reduction}%
  )`;
})
