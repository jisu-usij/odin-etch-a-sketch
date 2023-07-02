const container = document.querySelector('.grid-container');

function createGrid(n) {
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
}

createGrid(16);