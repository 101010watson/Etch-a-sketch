const container = document.querySelector(".container");
let isDrawing = false;
for(let i = 0;i<16;i++){
        for(let j = 0;j<16;j++){
            let newDiv = document.createElement("div");
            container.appendChild(newDiv);


            newDiv.addEventListener('mousedown',() => { //starts drawing when mousedown in the container
            isDrawing = true;
            newDiv.classList.add("hover"); 
            });

            newDiv.addEventListener("dragstart",(e)=>{ // to prevent the drag to select the text 
                e.preventDefault();
            });

            newDiv.addEventListener("mouseenter",()=>{ //then user drags hence he is performing the mouse enter event continously
                if(isDrawing){ // checks if the user has done the mouseup event
                    newDiv.classList.add("hover");
                }
            });
        }
    }

    document.addEventListener("mouseup",()=>{
        isDrawing = false;
    });

const gridSize = document.querySelector(".gridSize")
let size = 16;
gridSize.addEventListener("click",() => {
        size = prompt("Enter the grid size(max 100): ");
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
            newDiv.classList.add("hover"); 
            });

            newDiv.addEventListener("mouseenter",()=>{ //then user drags hence he is performing the mouse enter event continously
                if(isDrawing){ // checks if the user has done the mouseup event
                    newDiv.classList.add("hover");
                }
            });
        }
    }
});







        

