let taskInput = document.querySelector("input");
let listContainer = document.querySelector("ol");
let addButton = document.querySelector("button");

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || []

function displayTask() {
    listContainer.innerHTML = ""

    savedTasks.forEach((task, index) => {
        let li = document.createElement("li")
        li.textContent = task;

        let deleteBtn = document.createElement("img");
        deleteBtn.src = "delete.png";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            deleteTask(index)
        })

        li.appendChild(deleteBtn);
        listContainer.appendChild(li)
    });
}

function addTask() {
    try {
        let taskText = taskInput.value.trim();
        if (taskText === "") {
            throw Error(alert("Task can't be empty"))
        }
        savedTasks.push(taskText)
        localStorage.setItem("tasks", JSON.stringify(savedTasks))

        taskInput.value = ""
        displayTask()


    } catch (error) {
        console.log(error.message)
    }
}

listContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }

}, false);

function deleteTask(index) {
    savedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(savedTasks))
    displayTask()
}



addButton.addEventListener("click", addTask)
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})


displayTask()