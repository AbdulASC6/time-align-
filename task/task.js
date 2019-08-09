let database = firebase.database().ref()
const taskE = document.getElementById("task");
const timeE = document.getElementById("time");
const dayE = document.getElementById("day");
const button = document.getElementById("submitButton");
let count = 0
let arr = []
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();
    const task = taskE.value;
    const time = timeE.value;
    const day = dayE.value;
    
    taskE.value = "";
    timeE.value = "";
    dayE.value = "";

    let value = {
        TASK: task,
        TIME: time,
        DAY: day
    }
    arr.push(count)
    count +=1
    database.push(value);
    console.log(arr)
}

database.on("child_added", addTask);
let taskContain = document.querySelector(".taskContain")

function addTask(data){
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
    newTask.className = "newTask";
    newTime.className = "newTime";
    newDay.className = "newDay";


    

}