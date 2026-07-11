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

        this.init();

    }

    init() {

        this.button.addEventListener("click", () => {

            document.getElementById("ln").value =
                this.board.leftName.textContent;

            document.getElementById("rn").value =
                this.board.rightName.textContent;

            this.panel.style.display = "block";

        });

        this.save.addEventListener("click", () => {

            this.board.saveSettings(

                document.getElementById("ln").value,

                document.getElementById("rn").value

            );

            this.timer.setMinutes(

                Number(

                    document.getElementById("matchTime").value

                )

            );

            this.panel.style.display = "none";

        });

    }

}