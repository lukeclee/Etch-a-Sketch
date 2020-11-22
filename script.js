let gridDimensions = prompt("How many cells do you want each side to have?");

if(gridDimensions < 2) {
    gridDimensions = 2;
    alert("Please enter a number greater than or equal to 2.");
}else if(gridDimensions > 64){
    gridDimensions = 64;
    alert("Please enter a number less than or equal to 64");
}

const grid = document.getElementById("grid");

grid.addEventListener("mouseover", function(e) {
    target = e.target;
    if(target.matches("div.cell")) {
        target.style.backgroundColor = "black";
    }
});

function createGrid(dimensions){
    grid.style.setProperty('--numRows', dimensions);
    grid.style.setProperty('--numCols', dimensions);
    console.log("We are in the createGrid method")
    for(let i = 0; i < dimensions*dimensions; i++){
        newCell = document.createElement("div");
        newCell.className = "cell";
        grid.appendChild(newCell);
    }
}

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', function() {
    window.location.reload();
});

createGrid(gridDimensions);