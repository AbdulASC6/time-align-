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
        start.innerText = 'start';
        stop.innerText = 'stop';
        start.onclick = () => { this.start() };
        stop.onclick = () => { this.pause() };
        this.container.appendChild(start);
        this.container.appendChild(stop);
    }

    start(){
        this.timer.start();
    }

    pause(){
        this.timer.pause();
    }
}
