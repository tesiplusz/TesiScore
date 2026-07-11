/*
======================================================
 TesiScore
 scoreboard.js
 Version: 1.1
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

        this.loadSettings();

        this.render();

    }

    render() {

        this.leftDisplay.textContent =
            this.left;

        this.rightDisplay.textContent =
            this.right;

    }

    addLeft() {

        if (this.history)
            this.history.save();

        this.left++;

        this.render();

    }

    removeLeft() {

        if (this.history)
            this.history.save();

        if (this.left > 0)
            this.left--;

        this.render();

    }

    addRight() {

        if (this.history)
            this.history.save();

        this.right++;

        this.render();

    }

    removeRight() {

        if (this.history)
            this.history.save();

        if (this.right > 0)
            this.right--;

        this.render();

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

}