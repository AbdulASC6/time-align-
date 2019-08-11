let database = firebase.database().ref();
const inputContain = document.querySelector(".inputContainer");
const addTaskB = document.querySelector(".taskButton");
const taskE = document.getElementById("task");
const timeE = document.getElementById("time");
const dayE = document.getElementById("day");
const submitTaskB = document.getElementById("submitButton");
let postTime = new Date();
let menu = false
let count = 0
let arr = []
let contain = []

inputContain.style.display = "none"
submitTaskB.style.display = "none"
addTaskB.innerText = "+"

//Add Task Button Opening and closing task menu//
if (!menu) addTaskB.addEventListener("click", addTaskMenu);
if (menu) {
    addTaskB.addEventListener("click", subTaskMenu);
    console.log("bruh")
}


submitTaskB.addEventListener("click", updateDB);
console.log(menu)
function addTaskMenu(event) {
    event.preventDefault();
    inputContain.style.display = "inline";
    submitTaskB.style.display = "block";
    addTaskB.innerText = "-";
    menu = true;
    console.log(menu);
}

function subTaskMenu(event) {
    // event.preventDefault();
    inputContain.style.display = "none";
    submitTaskB.style.display = "none";
    addTaskB.innerText = "+";
    menu = false;
    console.log(menu);
}

function updateDB(event) {
    event.preventDefault();
    const task = taskE.value;
    const time = timeE.value;
    const day = dayE.value;
    let postTime = new Date();

    taskE.value = "";
    timeE.value = "";
    dayE.value = "";

    let value = {
        TASK: task,
        TIME: time,
        DAY: day,
        POSTTIME: postTime
    }
    //Want to make each task unit a part of an array. Need help.//
    contain.push(value);
    console.log(count)
    arr.push(count)
    count += 1

    console.log(value);
    database.push(value)
    subTaskMenu();
}

database.on("child_added", addTask);
let taskContain = document.querySelector(".taskContain")

function addTask(data) {
    const unit = data.val();
    const task = unit.TASK;
    const time = unit.TIME;
    const day = unit.DAY;


    let tempNewUnit = document.createElement("div");
    let tempNewTask = document.createElement("p");
    let tempNewTime = document.createElement("p");
    let tempNewDay = document.createElement("p");
    let tempEditButton = document.createElement("button");

    tempNewTask.innerText = task;
    tempNewTime.innerText = time;
    tempNewDay.innerText = day;
    tempEditButton.innerText = "..."

    taskContain.appendChild(tempNewUnit);
    tempNewUnit.appendChild(tempNewTask);
    tempNewUnit.appendChild(tempNewTime);
    tempNewUnit.appendChild(tempNewDay);
    tempNewUnit.appendChild(tempEditButton);

    tempNewUnit.className = "newUnit";
    tempNewTask.className = "newTask new";
    tempNewTime.className = "newTime new";
    tempNewDay.className = "newDay new";
    tempEditButton.className = "editTask new";


    const editButton = document.getElementsByClassName("editTask");
    for (i = 0; i < editButton.length; i ++){
        editButton[i].addEventListener("click", changeTask);
    }

    function changeTask() {
        console.log("bruh")
        let editInputContain = document.createElement("div");
        let editTaskContain = document.createElement("div");
        let editTaskLabel = document.createElement("label");
        let editTaskInput = document.createElement("input");
        let editTimeContain = document.createElement("div");
        let editTimeLabel = document.createElement("label");
        let editTimeInput = document.createElement("input");
        let editDayContain = document.createElement("div");
        let editDayLabel = document.createElement("label");
        let editDayInput = document.createElement("input");

        editTaskContain.appendChild(editTaskLabel);
        editTaskContain.appendChild(editTaskInput);
        editInputContain.appendChild(editTaskContain);
        
        editTimeContain.appendChild(editTimeLabel);
        editTimeContain.appendChild(editTimeInput);
        editInputContain.appendChild(editTimeContain);

        editDayContain.appendChild(editDayLabel);
        editDayContain.appendChild(editDayInput);
        editInputContain.appendChild(editDayContain);

        tempNewUnit.appendChild(editInputContain)

        // editTaskInput.innerText = 
    }

}