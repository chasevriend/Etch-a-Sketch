//Create Board using divs
function createGrid() {
    let grid = document.querySelector(".grid");
    let squares = document.querySelector("div");
    grid.style.gridTemplateColumns = "repeat(16 , 1fr)";
    grid.style.gridTemplateColumns ="repeat(16 , 1fr)";

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover" , () => {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "blue";
        grid.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);
//Create a hover effect where it hightlights the selected divs

//Create a reset button that refreshes the entire drawing 




