export class Controls {

    constructor(board) {

        this.board = board;

        this.init();

    }

    init() {

        document
            .getElementById("swapSides")
            .addEventListener("click", () => {

                this.board.swapSides();

            });

        document
            .getElementById("leftPlus")
            .addEventListener("click", () => {

                this.board.addLeft();

            });

        document
            .getElementById("leftMinus")
            .addEventListener("click", () => {

                this.board.removeLeft();

            });

        document
            .getElementById("rightPlus")
            .addEventListener("click", () => {

                this.board.addRight();

            });

        document
            .getElementById("rightMinus")
            .addEventListener("click", () => {

                this.board.removeRight();

            });

    }

}