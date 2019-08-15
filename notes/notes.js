const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

const database = firebase.database().ref('notes');

function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;
    console.log(username + " : " + message);
    usernameElement.value = "";
    messageElement.value  = "";

    const value = {
        NAME: username,
        MESSAGE: message
    }

    database.push(value);

}

database.on('child_added', addMessage);
const msgContainer = document.querySelector('.allMessages');

function addMessage(data) {
    const row = data.val();
    const name = row.NAME;
    const message = row.MESSAGE;

    const p = document.createElement('p'); 
    p.innerText = `${name}: ${message}`;
    msgContainer.appendChild(p);

}