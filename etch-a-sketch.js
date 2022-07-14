const container = document.querySelector(".container");
const button = document.querySelector(".prompt");

function setCellPixel(size, cell){
    const containerWidth = container.style.width;
    let width = parseInt(containerWidth) / size;
    cell.style.width = `${width}px`;
    cell.style.height = cell.style.width;
}

function clearGrid(){
    container.textContent = "";
}

function createGrid(size){
    container.style.width = "960px";
    for (let i = 0; i < size; i++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < size; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            setCellPixel(size, cell);
            rowContainer.appendChild(cell);
        }
        container.appendChild(rowContainer);
    }
}

function changeColorWhenHover(cells){
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = "black"});
    });
}

function promptGridSize(){
    let size = prompt("Enter new size: ", "");
    clearGrid();
    run(size);
}

function run(size){
    createGrid(size);

    const cells = document.querySelectorAll(".cell");
    changeColorWhenHover(cells);
}

let size = 16;
run(size);
