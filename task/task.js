let database = firebase.database().ref()
const usernameE = document.getElementById("username");
const taskE = document.getElementById("task");
const timeE = document.getElementById("time");
const dayE = document.getElementById("time");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();
    const username = usernameE.value;
    const task = taskE.value;
    console.log(username + task)
}