const container = document.querySelector('.Grid-Container');
const gridCells = document.querySelectorAll('.Grid-Cell');
const gridsize = document.querySelector('#gridsize');
const gridlabel = document.querySelector('#gridLabel');
const colourChoice = document.querySelector('#colourWell');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createDivs(sideLength) {

    colourChoice.value = "black";

    document.querySelectorAll(".Grid-Cell").forEach(el => el.remove());

    container.style.setProperty('--cols', sideLength);

    for (let i = 1; i <= sideLength * sideLength; i++) {
        let cell = document.createElement("div")
        cell.className = "Grid-Cell"
        cell.addEventListener("mouseenter", function () {
            if (mouseDown) {
                this.style.backgroundColor = 'black';
            }
        })
        cell.addEventListener("click", function () {
            this.style.backgroundColor = 'black';
        })
        container.appendChild(cell);
    }
}

gridsize.addEventListener('change', () => {
    createDivs(gridsize.value);
    updateSizeValue(gridsize.value)
    
});

function updateSizeValue(sideLength) {
    gridlabel.innerHTML = "Grid size: " + sideLength.toString() + "x" + sideLength.toString();
  }

colourChoice.addEventListener("input", () => {
    const gridCells = document.querySelectorAll('.Grid-Cell');
    gridCells.forEach((cell) => {
        cell.addEventListener("mouseenter", function () {
            if (mouseDown) {
                this.style.backgroundColor = colourChoice.value;
            }
            
        })
        cell.addEventListener("click", function () {
            this.style.backgroundColor = colourChoice.value;
        })
    });
});

