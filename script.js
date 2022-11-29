//Create divs within #container-div
// const grid = document.getElementsByClassName('grid');
// function createGrid(size) {
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

//     for (i = 0; i < size * size; i++) {
//         const gridElement = document.createElement('div');
//         gridElement.classList.add('grid-element');
//         gridElement.addEventListener('mouseover', changeColor);
//         gridElement.addEventListener('mousedown', changeColor);
//         grid.appendChild(gridElement);
//     };
// };

// createGrid(16);

function createGrid() {
    const grid = document.querySelector('#grid');
    newDivs = document.createElement('div');
    grid.classList.add('container');
    grid.appendChild(newDivs);
}

for (let i = 0; i < 16; i++ ) {
createGrid();
}

//Next step- make hovering over divs color them as black 