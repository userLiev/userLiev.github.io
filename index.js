const board = document.querySelector('#board');

// let cont = 0;

// for (let j = 0; j < 80; j++) {
//   for (let i = 0; i < 26; i++) {
//     board.innerHTML += `<div class="cell"></div>`;
//   }
//   board.innerHTML += '<div class="column"></div>';
//   for (let i = 0; i < 26; i++) {
//     if (j % 5 === 4 && i === 25) {
//       cont += 5;
//       board.innerHTML += `<div class="cell"><div class="number">${cont}</div></div>`;
//     } else {
//       board.innerHTML += `<div class="cell"></div>`;
//     }
//   }

//   if (j % 10 === 9) {
//     board.innerHTML += '<div class="line"></div>';
//   }
// }

const search = document.querySelector('#search');

function onBirthday(e) {
  e.preventDefault();
  const el = document.querySelector('#date');
  const now = new Date().getTime();
  const birth = new Date(el.value).getTime();
  const diff = parseInt((now - birth)/(24 * 3600 * 1000 * 7));

  const cells = document.querySelectorAll('.cell');

  for (let i = 0; i < cells.length; i++) {
    if (i < diff) {
      cells[i].classList.add('paint');
    } else {
      cells[i].classList.remove('paint');
    }
  }
}

search.addEventListener('submit', onBirthday);