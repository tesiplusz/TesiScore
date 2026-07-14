/*
======================================================
 TesiScore
 scoreboard.js
 Version: 2.0
======================================================
*/

export class Scoreboard {

    constructor() {

        this.left = 18;
        this.right = 16;

        this.leftDisplay =
            document.getElementById("leftScore");

        this.rightDisplay =
            document.getElementById("rightScore");

        this.leftName =
            document.getElementById("teamLeftName");

        this.rightName =
            document.getElementById("teamRightName");

        this.history = null;
        this.sport = null;

        // ÚJ:
        // Ha true, nem lehet pontot módosítani
        this.locked = false;

        this.loadSettings();

        this.render();

    }

    render() {

        this.leftDisplay.textContent =
            String(this.left).padStart(2, "0");

        this.rightDisplay.textContent =
            String(this.right).padStart(2, "0");

    }

    addLeft() {

        if (this.locked)
            return;

        if (this.history)
            this.history.save();

        this.left++;

        this.render();

        if (this.sport)
            this.sport.checkSet();

    }

    removeLeft() {

        if (this.locked)
            return;

        if (this.history)
            this.history.save();

        if (this.left > 0)
            this.left--;

        this.render();

    }

    addRight() {

        if (this.locked)
            return;

        if (this.history)
            this.history.save();

        this.right++;

        this.render();

        if (this.sport)
            this.sport.checkSet();

    }

    removeRight() {

        if (this.locked)
            return;

        if (this.history)
            this.history.save();

        if (this.right > 0)
            this.right--;

        this.render();

    }

    resetPoints() {

        this.left = 0;
        this.right = 0;

        this.render();

    }

    lock() {

        this.locked = true;

    }

    unlock() {

        this.locked = false;

    }

    loadSettings() {

        const left =
            localStorage.getItem("leftTeam");

        const right =
            localStorage.getItem("rightTeam");

        if (left)
            this.leftName.textContent = left;

        if (right)
            this.rightName.textContent = right;

    }

    saveSettings(left, right) {

        localStorage.setItem("leftTeam", left);

        localStorage.setItem("rightTeam", right);

        this.leftName.textContent = left;

        this.rightName.textContent = right;

    }

    setHistory(history) {

        this.history = history;

    }

    setSport(sport) {

        this.sport = sport;

    }

}