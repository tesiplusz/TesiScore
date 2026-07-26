export class SimpleScore {

    constructor(board) {

        this.board = board;

        this.finished = false;

    }

    checkSet() {

        // nincs teendő

    }

    newMatch() {

        this.board.resetPoints();

        this.finished = false;

    }

}