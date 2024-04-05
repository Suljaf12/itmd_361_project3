// JavaScript code for image slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 0;
const slideWidth = slides[0].clientWidth;

slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';

setInterval(() => {
  counter = (counter + 1) % slides.length;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
}, 500);

slider.addEventListener('transitionend', () => {
  if (slides[counter].id === 'lastClone') {
    slider.style.transition = 'none';
    counter = slides.length - 2;
    slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
  }
  if (slides[counter].id === 'firstClone') {
    slider.style.transition = 'none';
    counter = slides.length - counter;
    slider.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
  }
});