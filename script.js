const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const randomColors = document.querySelector(".color");
const justBlack = document.querySelector(".black");

let isDrawing = false;

for(let i = 0;i<16;i++){
        for(let j = 0;j<16;j++){
            let newDiv = document.createElement("div");
            container.appendChild(newDiv);

            newDiv.addEventListener('mousedown',() => { //starts drawing when mousedown in the container
            isDrawing = true;
            if(isRandom){
                newDiv.style.backgroundColor = `${generateRandomRGB()}`;
            }
            else{
                newDiv.style.backgroundColor = "";
                newDiv.classList.add("hover");
            } 
            });

            newDiv.addEventListener("dragstart",(e)=>{ // to prevent the drag to select the text 
                e.preventDefault();
            });

            newDiv.addEventListener("mouseenter",()=>{ //then user drags hence he is performing the mouse enter event continously
                if(isDrawing){ // checks if the user has done the mouseup event
                    if(isRandom){
                        newDiv.style.backgroundColor = `${generateRandomRGB()}`;
                    }
                    else{
                        newDiv.style.backgroundColor = "";
                        newDiv.classList.add("hover");
                    } 
                }
            });

            reset.addEventListener("click",()=> {
                newDiv.classList.remove("hover");
                newDiv.style.backgroundColor = "";
            });
        }
    }

    document.addEventListener("mouseup",()=>{
        isDrawing = false;
    });

const gridSize = document.querySelector(".gridSize")
let size = 0;
gridSize.addEventListener("click",() => {
    size = prompt("Enter the grid size(max 100): ",50);

    // Handle cancellation - exit early without changing anything
    if(size === null || size == "") {
        return; // Exit the function, keep existing grid
    }

    if(size>100){
        alert("enter a size between 1 and 100");
        size = prompt("Enter the grid size(max 100): ");
    }
    container.innerHTML = ""; // this removes the existing grid and then start creating the new one 

    for(let i = 0;i<size;i++){
        for(let j = 0;j<size;j++){
            let newDiv = document.createElement("div");
            let squareSize = 590 / size;  // this defines the actual div size
            newDiv.style.width = squareSize + "px";
            newDiv.style.height = squareSize + "px";
            container.appendChild(newDiv);
            newDiv.addEventListener('mousedown',() => { //starts drawing when mousedown in the container
            isDrawing = true;
            if(isRandom){
                newDiv.style.backgroundColor = `${generateRandomRGB()}`;
            }
            else{
                newDiv.style.backgroundColor = "";
                newDiv.classList.add("hover");
            } 
            });

            newDiv.addEventListener("dragstart",(e)=>{ // to prevent the drag to select the text 
                e.preventDefault();
            });

            newDiv.addEventListener("mouseenter",()=>{ //then user drags hence he is performing the mouse enter event continously
                if(isDrawing){ // checks if the user has done the mouseup event
                    if(isRandom){
                        newDiv.style.backgroundColor = `${generateRandomRGB()}`;
                    }
                    else{
                        newDiv.style.backgroundColor = "";
                        newDiv.classList.add("hover");
                    } 
                }
            });

            reset.addEventListener("click",()=> {
                newDiv.classList.remove("hover");
                newDiv.style.backgroundColor = "";
            });
        }
    }
});

function generateRandomRGB(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

let isRandom = false;
randomColors.addEventListener("click",()=> {
    isRandom = true;
});


justBlack.addEventListener("click",()=> {
    isRandom = false;
});



        

