
const container = document.querySelector('.cont');
container.style.padding = "11px"
container.style.display = "grid"
container.style.gridTemplateColumns= `repeat(16,10px)`
container.style.border= "1px solid #A1C298"
container.style.content="auto"
















for(i = 0 ; i<16*16;i++){
    const newDiv = document.createElement("div");
    newDiv.className = "theDiv";
    newDiv.style.padding="5px 5px"
    newDiv.style.backgroundColor = "#C6EBC5"
    newDiv.style.border = "1px solid #FBF2CF"

    document.querySelector(".cont").appendChild(newDiv)

    newDiv.onmouseover = function changeColor(x){
        newDiv.style.backgroundColor="black"
    
    }
    

}
















