/*
======================================================
 TesiScore
 Settings Panel
 Version: 2.1
======================================================
*/

export class SettingsPanel {

    constructor(board, timer) {

        this.board = board;
        this.timer = timer;

        this.panel =
            document.getElementById("settingsPanel");

        this.button =
            document.getElementById("settingsButton");

        this.save =
            document.getElementById("save");

        this.cancel =
            document.getElementById("cancel");

        this.init();

    }

    init() {

        // Fogaskerék: nyit / zár
        this.button.addEventListener("click", () => {

            if (this.panel.style.display === "block") {

                this.close();

            } else {

                this.open();

            }

        });

        // Mentés
        this.save.addEventListener("click", () => {

            this.saveSettings();

            this.close();

        });

        // Mégse
        this.cancel.addEventListener("click", () => {

            this.close();

        });

        // ESC bezárja
        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {

                this.close();

            }

        });

    }

    open() {

        document.getElementById("ln").value =
            this.board.leftName.textContent;

        document.getElementById("rn").value =
            this.board.rightName.textContent;

        this.panel.style.display = "block";

    }

    close() {

        this.panel.style.display = "none";

    }

    saveSettings() {

        this.board.saveSettings(

    document.getElementById("ln").value,

    document.getElementById("rn").value,

    document.getElementById("leftColor").value,

    document.getElementById("rightColor").value

);
        this.board.setColors(

    document.getElementById("leftColor").value,

    document.getElementById("rightColor").value

);

        // -----------------------
        // Játékidő
        // -----------------------

        const minutes =
            Number(
                document.getElementById("matchTime").value
            );

        if (!isNaN(minutes) && minutes > 0) {

            this.timer.setMinutes(minutes);

        }

        // -----------------------
        // Idő kijelzése
        // -----------------------

        const showTimer =
            document.getElementById("showTimer");

        const timerArea =
            document.getElementById("timerArea");

        if (showTimer) {

            timerArea.style.display =
                showTimer.checked
                    ? ""
                    : "none";

        }

    }

}