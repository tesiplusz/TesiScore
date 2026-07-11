export class TimerControls {

    constructor(timer) {

        this.timer = timer;

        this.init();

    }

    init() {

        document
            .getElementById("startStop")
            .addEventListener("click", () => {

                this.timer.toggle();

            });

        document
            .getElementById("reset")
            .addEventListener("click", () => {

                this.timer.reset();

            });

    }

}