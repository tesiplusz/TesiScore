/*
======================================================
 TesiScore
 fullscreen.js
 Version: 1.0
======================================================
*/

export class Fullscreen {

    constructor() {

        this.button =
            document.getElementById("fullscreen");

        this.hideTimer = null;

        this.init();

    }

    init() {

        if (this.button) {

            this.button.addEventListener("click", () => {

                this.toggle();

            });

        }

        document.addEventListener("keydown", (e) => {

            if (e.key.toLowerCase() === "f") {

                e.preventDefault();

                this.toggle();

            }

        });

        document.addEventListener("mousemove", () => {

            if (!document.fullscreenElement)
                return;

            document.body.classList.add("show-ui");

            clearTimeout(this.hideTimer);

            this.hideTimer = setTimeout(() => {

                document.body.classList.remove("show-ui");

            }, 3000);

        });

    }

    async toggle() {

        try {

            if (!document.fullscreenElement) {

                await document.documentElement.requestFullscreen();

                document.body.classList.add("presentation");

            } else {

                await document.exitFullscreen();

                document.body.classList.remove("presentation");
                document.body.classList.remove("show-ui");

            }

        } catch (err) {

            console.error("Fullscreen hiba:", err);

        }

    }

}