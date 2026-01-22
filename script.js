let inputBox = document.querySelector("input");
let listContainer = document.querySelector("ol");
let addButton = document.querySelector("button");

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});


addButton.addEventListener("click", () => {
    addTask();
});

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let img = document.createElement("img");
        img.src = "delete.png";          
        img.className = "delete";       
        li.appendChild(img);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }

}, false);
