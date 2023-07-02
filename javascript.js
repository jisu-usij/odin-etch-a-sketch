const container = document.querySelector('.grid-container');

// Add squares to the grid
for (let i = 0; i < 16; i++) {
  const column = document.createElement('div');
  column.classList.add('column');

  for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    column.appendChild(square);
  }

  container.appendChild(column);
}