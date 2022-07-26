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
    while (container.firstChild && cellAmt.length > 0) {
        container.removeChild(container.firstChild);
    }
    //container.style.gridTemplateColumns = 'repeat(${gridSize}, 1fr)';
    //container.style.gridTemplateRows = 'repeat(${gridSize}, 1fr)';
    for (let i = 0; i < slider.value; i++){
        var cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    }
}

