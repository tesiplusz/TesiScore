/*
======================================================
 TesiScore
 keyboard.js
 Version: 1.1
======================================================
*/

export class KeyboardControls {

    constructor(board, timer, history) {

        this.board = board;
        this.timer = timer;
        this.history = history;

        this.init();

    }

    init() {

        document.addEventListener("keydown", (e) => {

            switch (e.key.toLowerCase()) {

                case "a":
                    this.board.addLeft();
                    break;

                case "y":
                    this.board.removeLeft();
                    break;

                case "k":
                    this.board.addRight();
                    break;

                case "m":
                    this.board.removeRight();
                    break;

                case "r":
                    this.timer.reset();
                    break;

                case "u":

                    if (this.history)
                        this.history.undo();

                    break;

                case " ":

                    e.preventDefault();

                    this.timer.toggle();

                    break;

            }

        });

    }

}