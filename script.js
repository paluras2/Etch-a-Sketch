
const container = document.querySelector('.cont');
container.style.display = "flex";
container.style.padding = "100px 100px"






for(i = 0 ; i<16;i++){
    const newDiv = document.createElement("div");
    newDiv.className = "theDiv";
    newDiv.style.padding = "20px";
    newDiv.style.backgroundColor = "black"
    newDiv.style.border = "1px solid red"

    document.querySelector(".cont").appendChild(newDiv)
}














