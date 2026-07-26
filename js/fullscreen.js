/*
======================================================
 TesiScore
 fullscreen.js
 Version: 2.0
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

        document.addEventListener("fullscreenchange", () => {

            if (document.fullscreenElement) {

                document.body.classList.add("presentation");
                document.body.classList.add("show-ui");

            } else {

                document.body.classList.remove("presentation");
                document.body.classList.remove("show-ui");

            }

        });

    }

    async toggle() {

        try {

            if (!document.fullscreenElement) {

                await document.documentElement.requestFullscreen();

            } else {

                await document.exitFullscreen();

            }

        } catch (err) {

            console.error("Fullscreen hiba:", err);

        }

    }

}