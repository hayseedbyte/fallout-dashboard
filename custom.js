const all = [];
window.addEventListener('DOMContentLoaded', getAll(all));
function makeGreen() {
  if (all.length > 0) {
    for (i = 0; i < all.length; i++) {
      const a = all[i];
      const b = document.createElement('span');
      const c = a.parentNode.appendChild(b);
      b.classList.add('green');
      c.innerHTML = a.innerHTML;
    }
  }
}
function getAll(arr) {
  const items = document.querySelectorAll('#sortable > section');
  for (i = 1; i < items.length; i++) {
    arr.push(
      document.querySelector(
        `#sortable > section:nth-child(${i}) > div > div.details > div`
      )
    );
  }
  makeGreen();
  font();
}

function font() {
  const head = document.querySelector('head');
  const x = document.createElement('style');
  head.appendChild(x);
  x.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`;
}
