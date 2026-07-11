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

            left: this.board.leftScore,

            right: this.board.rightScore

        });

    }

    undo() {

        if(this.stack.length===0)
            return;

        const last=this.stack.pop();

        this.board.leftScore=last.left;
        this.board.rightScore=last.right;

        this.board.render();

    }

}