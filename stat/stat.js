
let totalTime = 0;
let button = document.getElementById("button");
button.addEventListener("click", chart);

let labelArr = ["Math", "Reading", "Science","Other","Total"];
let dataArr = [
    [2, 1.5, 1, 1.5, 2, 1, .5],
    [1, .5, 2, 0, 2, 2, 1.5],
    [1, .5, 2, 1.5, 1, 1.5, .5],
    [.5, 1, 2, 1.5, .5, .5, 1.5],
    [2.5, 3.5, 5, 4.5, 3.5, 5, 4]
];
let backgroundColorArr = ['rgb(220, 20, 20)', 'rgb(0, 20, 255)', 'rgb(255,255,102)',"rgb(128,128,128)","rgb(25, 100, 126)"];
let borderColorArr = ['rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)','rgb(0, 0, 0)','rgb(0, 0, 0)'];

function chart() {
    event.preventDefault();
    if (totalTime > 0) {
        let delContain = document.querySelector(".container");
        delContain.remove();
    }
    let container = document.createElement("div");
    container.className = "container";
    let canvas = document.createElement("canvas");
    canvas.className = "myChart";
    canvas.style.height = "400";
    canvas.style.width = "400";
    container.appendChild(canvas);
    let body = document.getElementById("body")
    body.appendChild(container);
    totalTime++

    let myChart = document.querySelector('.myChart');
    myChart.getContext('2d');
    let task1 = new Chart(myChart, {
        type: "bar",
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: labelArr[totalTime % 5],
                data: dataArr[totalTime % 5],
                backgroundColor: backgroundColorArr[totalTime % 5],
                borderColor: borderColorArr[totalTime % 5],
            }]
        }
    })

}

let myChart2 = document.querySelector("#myChart2");
myChart2.getContext('2d');
let mainTask = new Chart(myChart2, {
    type: "bar",
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Math",
            data: [2, 1.5, 1, 1.5, 0, 1, .5],
            backgroundColor: "rgb(220, 20, 20)"
        },
        {
            label: "Reading",
            data: [1, .5, 2, 0, 2, 2, 1.5],
            backgroundColor: "rgb(0, 20, 255)"
        },
        {
            label: "Science",
            data: [1, .5, 0, 1.5, 1, 1.5, .5],
            backgroundColor: "rgb(255,255,102)"
        },
        {
            label: "Other",
            data: [.5, 1, 2, 1.5, .5, .5, 1.5],
            backgroundColor: "rgb(128,128,128)"
        },
        {
            label: "Total",
            data: [4.5, 3.5, 5, 4.5, 3.5, 5, 4],
            backgroundColor: "rgb(25, 100, 126)"
        }]
    },
    options: {}
});