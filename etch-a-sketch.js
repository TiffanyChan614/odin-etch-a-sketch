function createGrid(){
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < 16; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            rowContainer.appendChild(cell);
        }
        container.appendChild(rowContainer);
    }
}

function changeColorWhenHover(cells){
    Array.from(cells).forEach(cell => {
        cell.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = "black"});
        cell.addEventListener('mouseout', (event) => {event.target.style.backgroundColor = "grey"});
    });
}

createGrid()

const cells = document.querySelectorAll(".cell");
changeColorWhenHover(cells);
