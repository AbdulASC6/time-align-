let myChart = document.getElementById('myChart').getContext('2d');
let barChart = new Chart(myChart, {
   type: "bar",
   data:{
       labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
       datasets:[{
           label:"Math",
           data:[2,3,1,2.5,2,1.5,.5],
           backgroundColor: 'rgb(220, 20, 20)',
           borderColor: 'rgb(0, 0, 0)',
       },
       {
           label:"English",
           data:[1,0,2,.5,1,1.5,2.5],
           backgroundColor: 'rgb(0, 0, 255)',
           borderColor: 'rgb(0, 0, 0)',
       },
       {
           label:"Other",
           data:[1,2,1,0.5,.5,2.5,3],
           backgroundColor: 'rgb(170, 170, 170)',
           borderColor: 'rgb(0, 0, 0)',
       }]
   },
   options:{}
});