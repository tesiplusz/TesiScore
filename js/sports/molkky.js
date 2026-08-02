import { MolkkyGame } from "./MolkkyGame.js";
import { MolkkyView } from "./MolkkyView.js";

export class Molkky {

    constructor(board) {

        this.board = board;

        this.game = new MolkkyGame();
        this.view = new MolkkyView();
        this.view.addPlayer("Peti");
        this.view.addPlayer("Anna");
        this.view.addPlayer("Laci");
        this.view.players[0].addThrow(5);
this.view.players[0].addThrow("X");
this.view.players[0].addThrow(8);

this.view.players[1].addThrow(12);
this.view.players[1].addThrow(4);

this.view.players[2].addThrow(6);

    }

    newMatch() {

    }

}