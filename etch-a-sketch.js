const container = document.querySelector(".container");

function clearGrid(){
    container.textContent = "";
}

function createGrid(size){
    container.style.width = "960px";
    container.style.height = "960px";
    for (let i = 0; i < size; i++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < size; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell", "black");
            rowContainer.appendChild(cell);
        }
        container.appendChild(rowContainer);
    }
}

function changeColorWhenHover(){
    const blackCells = document.querySelectorAll(".black", ".cell");
    const rainbowCells = document.querySelectorAll(".rainbow", ".cell");
    Array.from(blackCells).forEach(cell => {
        cell.addEventListener('mouseover', (event) => useBlack(event));
    });
    Array.from(rainbowCells).forEach(cell => {
        cell.addEventListener('mouseover', (event) => useRainbow(event));
    });
}

function useBlack(event){
    event.target.style.backgroundColor = "black";
}

function useRainbow(event){
   event.target.style.backgroundColor = generateRandomColor();
}

function turnBlack(){
    console.log("turn black!");
    const cells = document.querySelectorAll(".cell");
    Array.from(cells).forEach((cell) => cell.classList.add("black"));
    Array.from(cells).forEach((cell) => cell.classList.remove("rainbow"));
    changeColorWhenHover();
}

function turnRainbow(){
    console.log("turn rainbow!");
    const cells = document.querySelectorAll(".cell");
    Array.from(cells).forEach((cell) => cell.classList.add("rainbow"));
    Array.from(cells).forEach((cell) => cell.classList.remove("black"));
    changeColorWhenHover();
}

function promptGridSize(){
    let size = prompt("Enter new size: ", "");
    while(!size){
        alert("Size cannot be empty");
        size = prompt("Enter new size: ", "");
    }
    clearGrid();
    run(size);
}

function generateRandomColor(){
    let res = "rgb(";
    let colors = [];
    for (let i = 0; i < 3; i++){
        colors.push(Math.floor(Math.random() * 256));
        res += colors[i];
        if (i < 2) res += ","
    }
    return res + ")";
}

function run(size){
    createGrid(size);

    changeColorWhenHover();
}

let size = 16;
run(size);
