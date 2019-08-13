class AlignTimer{
    constructor(idx, className, parent){
        this.timer = new easytimer.Timer();
        this.container = document.createElement("div");
        this.container.className = className;
        this.container.id = `timer${idx}`;
        const timerText = document.createElement('span');
        timerText.innerText = '00:00:00';
        this.container.appendChild(timerText)
        let ref = this;
        this.timer.addEventListener('secondsUpdated', function(e){
            timerText.innerText = ref.timer.getTimeValues().toString();
        });
        parent.appendChild(this.container);

        const start = document.createElement('button');
        const stop = document.createElement('button');
        start.innerText = 'Start';
        stop.innerText = 'Stop';
        start.className = "timeB";
        stop.className = "timeB";
        start.onclick = () => { this.start(idx) };
        stop.onclick = () => { this.pause() };
        this.container.appendChild(start);
        this.container.appendChild(stop);
    }

    start(idx){
        this.timer.start();
        const database = firebase.database().ref(`/timers/timer${idx}`);
        const startDate = new Date();
        console.log(startDate);
        console.log(database);
        database.set({
            'date' : startDate
        });
    }
 
    pause(){
        this.timer.pause();
    }
}
