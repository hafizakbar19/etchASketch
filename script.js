const container = document.querySelector('.container');

function makeGrid(size) {
  container.innerHTML = ''; // clear old grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  addHoverEffect();
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
}

document.getElementById('reset').addEventListener('click', () => {
  let size = prompt("Enter grid size (max 100):");
  if (size > 0 && size <= 100) {
    makeGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

makeGrid(16);
