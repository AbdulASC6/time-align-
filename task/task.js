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

inputContain.style.display = "none"
submitTaskB.style.display = "none"
addTaskB.innerText = "+"

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
    //event.preventDefault();
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


    let newUnit = document.createElement("div");
    let newTask = document.createElement("p");
    let newTime = document.createElement("p");
    let newDay = document.createElement("p");

    newTask.innerText = task;
    newTime.innerText = time;
    newDay.innerText = day;

    taskContain.appendChild(newUnit);
    newUnit.appendChild(newTask);
    newUnit.appendChild(newTime);
    newUnit.appendChild(newDay);

    newUnit.className = "newUnit";
    newTask.className = "newTask new";
    newTime.className = "newTime new";
    newDay.className = "newDay new";

}