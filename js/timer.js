export class Timer {

    constructor() {

        this.duration = 10 * 60;
        this.time = this.duration;

        this.running = false;
        this.interval = null;

        this.display =
            document.getElementById("timerDisplay");
        this.button =
            document.getElementById("startStop");
        this.finished = false;
        this.render();

    }

    render() {

        const minutes =
            Math.floor(this.time / 60);

        const seconds =
            this.time % 60;

        this.display.textContent =
            `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
        if (this.finished) {

        this.display.style.color = "#ff3030";

} else {

     this.display.style.color = "#D9A400";

}
    }

    start() {

        if (this.running || this.finished) return;

        this.running = true;
        this.button.textContent = "⏸";
        this.interval = setInterval(() => {

            if (this.time > 0) {

                this.time--;

                this.render();

            } else {

                this.finished = true;

        this.stop();

        this.render();

        this.beep();

            }

        },1000);

    }

    stop() {

        this.running = false;
        this.button.textContent = "▶";
        clearInterval(this.interval);

    }

    toggle() {

        if (this.running)
            this.stop();
        else
            this.start();

    }

    reset() {

        this.stop();

        this.time = this.duration;
        this.finished = false;
        this.render();
        this.button.textContent = "▶";

    }
    setMinutes(minutes){

    this.duration = minutes * 60;

    this.time = this.duration;

    this.finished = false;

    this.render();

}
beep() {

    const audio = new AudioContext();

    const osc = audio.createOscillator();

    const gain = audio.createGain();

    osc.connect(gain);

    gain.connect(audio.destination);

    osc.frequency.value = 1000;

    osc.type = "square";

    gain.gain.value = 0.05;

    osc.start();

    osc.stop(audio.currentTime + 0.25);

}
}