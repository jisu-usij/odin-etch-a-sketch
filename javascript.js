function createGrid(n) {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('grid-container');
  
  for (let i = 0; i < n; i++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let i = 0; i < n; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      column.appendChild(square);
    }

    container.appendChild(column);
  }

  body.appendChild(container);

  addHoverEffect(colorSquareBlack);
}

function addHoverEffect(effectFunction) {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseenter', effectFunction));
}

function colorSquareBlack() {
  this.style.backgroundColor = 'black';
}

function removeGrid() {
  const container = document.querySelector('.grid-container');
  container.remove();  
}

function setUpSizeButton() {
  const sizeButton = document.querySelector('button.size');
  sizeButton.addEventListener('click', () => {
    const size = sizeFromUser();
    if (size === null) return;
    removeGrid();
    createGrid(size);
  });
}

function sizeFromUser() {
  const size = Number.parseInt(prompt('Enter desired number of pixels on each side of the canvas (min 16, max 100)'), 10);
  if (Number.isNaN(size)) {
    return null;
  }
  else if (size > 100 || size < 16) {
    return null;
  }
  else {
    return size;
  }
}

function setUpButtons() {
  setUpSizeButton();
}

createGrid(16);
setUpButtons();