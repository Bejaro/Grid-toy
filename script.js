gridDefaultSize = 16;

const slider = document.getElementById("myRange");
const counter = document.getElementById("counter");
let gridSize = slider.value;
var container = document.getElementById("grid-container");
var cellAmt = document.getElementsByClassName("cell");

slider.oninput = function(){
    var gridSize = this.value;
    counter.innerHTML = ("Grid size: " + gridSize + " x " + gridSize);
}

const generateButton = document.querySelector('.generate');
//console.log (generateButton);
generateButton.addEventListener('click', generateGrid);

function generateGrid(){
    container.classList.remove('hidden');
    let gridSize = slider.value;
    let totalCells = gridSize * gridSize;
    while (container.firstChild && cellAmt.length > 0) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < totalCells; i++){
        var cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
        
    }
    container.style.gridTemplateColumns = 'repeat('+gridSize+', 1fr)';
    container.style.gridTemplateRows = 'repeat('+gridSize+', 1fr)';

    var cells = container.querySelectorAll('div');
    cells.forEach(cell => cell.addEventListener('mouseover', activateCell));
}

function activateCell(){
    this.classList.add('cell-active');
}

