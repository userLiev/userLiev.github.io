const search = document.querySelector('#search');

function onBirthday(e) {
  e.preventDefault();
  const el = document.querySelector('#date');
  const now = new Date().getTime();
  const birth = new Date(el.value).getTime();
  const diff = parseInt((now - birth)/(24 * 3600 * 1000 * 7));
  const less = parseInt(diff / (52 * 5));

  const cells = document.querySelectorAll('.cell');

  for (let i = 0; i < cells.length; i++) {
    if (i < (diff - less)) {
      cells[i].classList.add('paint');
    } else {
      cells[i].classList.remove('paint');
    }
  }
}

search.addEventListener('submit', onBirthday);