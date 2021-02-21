const planels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

planels.forEach((panel) => panel.addEventListener('click', toggleOpen));
planels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
