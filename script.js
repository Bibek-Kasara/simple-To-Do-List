let inputBox = document.querySelector("input");
let listContainer = document.querySelector("ol");
let addButton = document.querySelector("button");

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

        // REVISED: create img correctly
        let img = document.createElement("img");
        img.src = "delete.png";          // REVISED
        img.className = "delete";        // REVISED (for CSS)
        li.appendChild(img);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {

    // REVISED: toggle only when clicking LI text
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    // REVISED: delete when clicking image
    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }

}, false);
