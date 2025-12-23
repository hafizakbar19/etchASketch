const container = document.querySelector('.container');

// Hover effect
function addHoverEffect() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
}


// Function to make grid
function makeGrid(size) {
  container.innerHTML = ''; // clear old grid
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
  addHoverEffect();
}



// Reset button
document.getElementById('reset').addEventListener('click', () => {
  let size = prompt("Enter grid size (max 100):");
  if (size > 0 && size <= 100) {
    makeGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Start with default 16x16 grid
makeGrid(160);
