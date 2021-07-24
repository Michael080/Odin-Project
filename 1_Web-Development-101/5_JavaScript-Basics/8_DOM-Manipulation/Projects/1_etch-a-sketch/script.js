const container = document.querySelector('.container');
const button = document.querySelector('.button');

function createCanvas(size) {
  let gridArray = [];

  const createGrid = () => {
    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    return newGrid;
  }

  for (let i = 0; i < size; i++) {
    container.appendChild(createGrid());
  }
}

function createRepeat(repeat) {
  return `repeat(${repeat}, 1fr)`;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function randomColor() {
  return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;
}

function darken(elem) {
  const rgb = elem.style.backgroundColor;

  function formatRGB(cssString) {
    let formatted = cssString.slice(4, cssString.length - 1);
    let rgbArray = formatted.split(',');
    // convert strings to number values
    rgbArray = rgbArray.map(colorValue => Number(colorValue));

    return rgbArray;
  }

  function addTenPercent(val) {
    return val - (val * .10);
  }

  let rgbValues = formatRGB(rgb);
  let darkenedArray = rgbValues.map(val => addTenPercent(val));

  return `rgb(${darkenedArray[0]}, ${darkenedArray[1]}, ${darkenedArray[2]})`;
}

function paintGrid(grid) {
  for (let elem of grid) {
    elem.addEventListener('mouseover', (e) => {
      if (!e.target.classList.contains('paint')) {
        e.target.style.backgroundColor = randomColor();
        e.target.classList.add('paint'); // class for 'marking' as painted
      } else {
        // darken color 10%
        e.target.style.backgroundColor = darken(e.target);
      }
    })
  }
}

// Create 'starter' canvas
createCanvas(25);
let grid = document.querySelectorAll('.grid');

// Add listeners to each grid-element:
paintGrid(grid);

function checkInput(input) {
  const checkInt = num => (num * 10) % 10 === 0;
  const isSquare = num => checkInt(Math.sqrt(num));
  
  return isSquare(input);
}

function changeCanvas() {
  let newSize = prompt('Enter a square number:');

  // remove grid:
  for (let elem of grid) {
    elem.remove();
  }

  // validate input
  if (checkInput(newSize)) {
    createCanvas(newSize);
    grid = document.querySelectorAll('.grid'); 
    paintGrid(grid);
    // adjust rows and columns:
    container.style.gridTemplateRows = `repeat(${Math.sqrt(newSize)}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${Math.sqrt(newSize)}, 1fr)`;
  } else {
    changeCanvas(); // reinitiate process
  }
}

button.addEventListener('click', changeCanvas);