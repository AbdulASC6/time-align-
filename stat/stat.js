
let totalTime = 0;
let button = document.getElementById("button");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
button.addEventListener("click", chart);
button1.addEventListener("click", chart2);
button2.addEventListener("click", chart3);
button3.addEventListener("click", chart4);
button4.addEventListener("click", chart5);

let labelArr = ["Math", "Reading", "Science","Other","Total"];

function chart(event) {
    // event.preventDefault();
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
                label: "Math",
                data:  [2, 1.5, 1, 1.5, 2, 1, .5],
                backgroundColor:'rgb(220, 20, 20)',
            }]
        },
        options:{
            scales: {
                xAxes:[{
                    gridLines: {
                        display: true,
                        // color: "rgb(0,0,0)"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'days',
                        fontSize: 20
                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15
                    }
                }],
                yAxes:[{
                    gridLines: {
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'hours',
                        fontSize: 20

                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15,
                        max: 6
                    }
                }]
            }
        }
    })
    myChart.scrollIntoView()
}
function chart2(event) {
    // event.preventDefault();
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
                label: "Reading",
                data:  [1, .5, 2, 0, 2, 2, 1.5],
                backgroundColor:'rgb(0, 20, 255)',
            }]
        },
        options:{
            scales: {
                xAxes:[{
                    gridLines: {
                        display: true,
                        // color: "rgb(0,0,0)"
                    },scaleLabel: {
                        display: true,
                        labelString: 'days',
                        fontSize: 20
                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15
                    }
                }],
                yAxes:[{
                    gridLines: {
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'hours',
                        fontSize: 20

                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15,
                        max: 6
                    }
                }]
            }
        }
    })
    myChart.scrollIntoView()
}
function chart3(event) {
    // event.preventDefault();
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
                label: "Science",
                data:  [1, .5, 0, 1.5, 1, 1.5, .5],
                backgroundColor:'rgb(255,255,102)',
            }]
        },
        options:{
            scales: {
                xAxes:[{
                    gridLines: {
                        display: true,
                        // color: "rgb(0,0,0)"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'days',
                        fontSize: 20
                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15
                    }
                }],
                yAxes:[{
                    gridLines: {
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'hours',
                        fontSize: 20

                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15,
                        max: 6
                    }
                }]
            }
        }
    })
    myChart.scrollIntoView()
}
function chart4(event) {
    // event.preventDefault();
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
                label: "Other",
                data:  [.5, 1, 2, 1.5, .5, .5, 1.5],
                backgroundColor:'rgb(128,128,128)',
            }]
        },
        options:{
            scales: {
                xAxes:[{
                    gridLines: {
                        display: true,
                        // color: "rgb(0,0,0)"
                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15
                    }
                }],
                yAxes:[{
                    gridLines: {
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'hours',
                        fontSize: 20

                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15,
                        max: 6
                    }
                }]
            }
        }
    })
    myChart.scrollIntoView()
}
function chart5(event) {
    // event.preventDefault();
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
                label: "Total",
                data:   [2.5, 3.5, 5.5, 4.5, 3.5, 5, 4],
                backgroundColor:'rgb(25, 100, 126)',
            }]
        },
        options:{
            scales: {
                xAxes:[{
                    gridLines: {
                        display: true,
                        // color: "rgb(0,0,0)"
                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15
                    }
                }],
                yAxes:[{
                    gridLines: {
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'hours',
                        fontSize: 20

                    },
                    ticks: {
                        fontColor: "#000000",
                        fontSize: 15,
                        max: 6,
                        min: 0
                    }
                }]
            }
        }
    })
    myChart.scrollIntoView()
}

let myChart2 = document.querySelector("#myChart2");
myChart2.getContext('2d');
let mainTask = new Chart(myChart2, {
    type: "bar",
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Math",
            data: [2, 1.5, 1, 1.5, .25, 1, .5],
            backgroundColor: "rgb(220, 20, 20)"
        },
        {
            label: "Reading",
            data: [1, .5, 2, .25, 2, 1.75, 1.5],
            backgroundColor: "rgb(0, 20, 255)"
        },
        {
            label: "Science",
            data: [1, .5, .25, 1.5, 1, 1.5, .5],
            backgroundColor: "rgb(255,255,102)"
        },
        {
            label: "Other",
            data: [.5, 1, 1, 1.5, .5, .5, 1.5],
            backgroundColor: "rgb(128,128,128)"
        }]
    },
    options:{
        legend:{
            labels:{
                fontSize: 20
            }
        },
        scales: {
            xAxes:[{
                barPercentage: .9,
                categoryPercentage: .8,
                gridLines: {
                    display: true,
                    // color: "rgb(0,0,0)"
                },
                ticks: {
                    fontColor: "#000000",
                    fontSize: 15
                }
            }],
            yAxes:[{
                gridLines: {
                    display: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'hours',
                    fontSize: 20
                },
                ticks: {
                    fontColor: "#000000",
                    fontSize: 15,
                    max: 3
                }
            }]
        }
    }
});