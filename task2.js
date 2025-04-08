function Add() {
    let inputs = document.getElementById("inp"); 
    let text = document.querySelector(".text"); 

    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span class="task-text">${inputs.value}</span> 
            <span class="icons">
                <i class="fa-solid fa-pen-to-square edit-icon"></i>
                <i class="fa-solid fa-trash delete-icon"></i>                   
            </span>
        `;

        text.appendChild(newEle);

        // Clear input after adding
        inputs.value = ""; 

        // Delete functionality
        newEle.querySelector(".delete-icon").addEventListener("click", function () {
            newEle.remove();
        });
          
        // Edit functionality - send task back to input field
        newEle.querySelector(".edit-icon").addEventListener("click", function () {
            let taskSpan = newEle.querySelector(".task-text");
            inputs.value = taskSpan.innerText; // put task back in input
            newEle.remove(); // remove old task
        });
    }
}
