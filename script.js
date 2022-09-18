
////// The Container
const container = document.querySelector('.cont');
container.style.padding = "11px"
container.style.display = "grid"

container.style.border= "1px solid #A1C298"


let gridSize = prompt("Chose a canvas size");
let color = "red";

console.log(gridSize)




container.style.gridTemplateColumns= `repeat(${gridSize},10px)`
container.style.gridTemplateRows= `repeat(${gridSize},10px)`


let division ;
//// The divs

for(i = 0 ; i<gridSize*gridSize;i++){
    
    const newDiv = document.createElement("div");
    newDiv.className = "theDiv";
    newDiv.style.padding="5px 5px"
    newDiv.style.backgroundColor = "#C6EBC5"
    newDiv.style.border = "1px solid #FBF2CF"

    document.querySelector(".cont").appendChild(newDiv)

    newDiv.onmouseover = function changeColor(x){
        newDiv.style.backgroundColor=`${color}`;
    
    }
    

}

/////The buttons


const btnColor = document.querySelector("#colorchange")
function btnColorPrompt(){
   color = prompt("Choose a color , ex: red ");
}
btnColor.addEventListener("click",btnColorPrompt);



















