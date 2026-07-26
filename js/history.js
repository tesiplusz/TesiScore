/*
======================================================
 TesiScore
 History
 Version: 1.0
======================================================
*/

export class History {

    constructor(board) {

        this.board = board;

        this.stack = [];

    }

    save() {

    this.stack.push({

        left: this.board.left,

        right: this.board.right

    });

}

    undo() {

    if (this.stack.length === 0)
        return;

    const last = this.stack.pop();

    this.board.left = last.left;
    this.board.right = last.right;

    this.board.render();

}

}