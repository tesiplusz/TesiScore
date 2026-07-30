import { MolkkyPlayerRow } from "./MolkkyPlayerRow.js";

export class MolkkyView {

    constructor() {

        this.container =
            document.getElementById("molkkyPlayers");

        this.players = [];

    }

    addPlayer(name) {

        const row = new MolkkyPlayerRow(name);

        this.players.push(row);

        this.container.appendChild(row.element);

        return row;

    }

}