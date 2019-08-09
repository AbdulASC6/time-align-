let database = firebase.database().ref()
const usernameE = document.getElementById("username");
const taskE = document.getElementById("task");
const timeE = document.getElementById("time");
const dayE = document.getElementById("day");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();
    const username = usernameE.value;
    const task = taskE.value;
    const time = timeE.value;
    const day = dayE.value;
    
    usernameE.value = "";
    taskE.value = "";
    timeE.value = "";
    dayE.value = "";

    let value = {
        NAME: username,
        TASK: task,
        TIME: time,
        DAY: day
    }
    database.push(value);
    console.log(username + task)
}

// database.on("child_added", addMessag);
// document.createElement("div")
// let taskContainer = document.