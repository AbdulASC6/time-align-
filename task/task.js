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
let contain = [];

inputContain.style.display = "none"
submitTaskB.style.display = "none"
addTaskB.innerText = "+"

//Add Task Button Opening and closing task menu//
if (!menu) addTaskB.addEventListener("click", addTaskMenu);
if (menu) {
    addTaskB.addEventListener("click", subTaskMenu);
}

submitTaskB.addEventListener("click", updateDB);
function addTaskMenu(event) {
    if (!menu) {
        event.preventDefault();
        inputContain.style.display = "inline";
        submitTaskB.style.display = "block";
        addTaskB.innerText = "-";
        menu = true;
    } else {
        inputContain.style.display = "none";
        submitTaskB.style.display = "none";
        addTaskB.innerText = "+";
        menu = false
    }
}

function subTaskMenu(event) {
    // event.preventDefault();
    inputContain.style.display = "none";
    submitTaskB.style.display = "none";
    addTaskB.innerText = "+";
    menu = false;
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
    arr.push(count)
    count += 1

    database.push(value);
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

    tempNewUnit.appendChild(tempNewTask);
    tempNewUnit.appendChild(tempNewTime);
    tempNewUnit.appendChild(tempNewDay);
    tempNewUnit.appendChild(tempEditButton);
    taskContain.appendChild(tempNewUnit);

    tempNewUnit.className = "newUnit";
    tempNewTask.className = "newTask new";
    tempNewTime.className = "newTime new";
    tempNewDay.className = "newDay new";
    tempEditButton.className = "editTask new";

    timer();

    const editButton = document.getElementsByClassName("editTask");
    editButton[editButton.length - 1].addEventListener("click", function (event) {
        changeTask(event, data);
    });
}

function changeTask(event, data) {
    console.log(event);
    unitPath = event.path[1];
    let editInputContain = document.createElement("div");
    let editTaskInput = document.createElement("input");
    let editTimeInput = document.createElement("input");
    let editDayInput = document.createElement("input");
    let submitEdit = document.createElement("button");
    let deleteEdit = document.createElement("button");

    editInputContain.className = "dot3"
    submitEdit.className = "submitEdit"
    deleteEdit.className = "deleteEdit"

    submitEdit.innerText = "submit";
    deleteEdit.innerText = "X";

    editInputContain.appendChild(editTaskInput);

    editInputContain.appendChild(editTimeInput);

    editInputContain.appendChild(editDayInput);

    unitPath.appendChild(editInputContain);
    unitPath.appendChild(submitEdit);
    unitPath.appendChild(deleteEdit);

    submitEdit.addEventListener("click", function (event) {
        changeDB(data, {
            TASK: editTaskInput.value,
            TIME: editTimeInput.value,
            DAY: editDayInput.value
        });
    });
    deleteEdit.addEventListener("click", subEdit);
}

function subEdit() {
    unitPath = event.path[1];
    let editInputContain = unitPath.querySelector(".dot3");
    let submitEdit = unitPath.querySelector(".submitEdit");
    let deleteEdit = unitPath.querySelector(".deleteEdit");
    editInputContain.remove();
    submitEdit.remove();
    deleteEdit.remove();
}

function changeDB(data, obj) {
    const id = data.key;
    console.log(obj)
    firebase.database().ref(id).set(obj);
    location.reload();
}



// timer
function timer() {
    let timer = new easytimer.Timer();
    $('#chronoExample .startButton').click(function () {
        timer.start();
    });
    $('#chronoExample .pauseButton').click(function () {
        timer.pause();
    });
    $('#chronoExample .stopButton').click(function () {
        timer.stop();
    });
    $('#chronoExample .resetButton').click(function () {
        timer.reset();
    });
    timer.addEventListener('secondsUpdated', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('started', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('reset', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
}