/*
======================================================
 TesiScore
 scoreboard.js
 Version: 2.0
======================================================
*/
import { SevenSegmentDisplay } from "./sevenSegmentDisplay.js";
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
            this.setColors(

        "#2F80FF",

        "#FF4040"

    );

        this.render();

    }
   
    render() {

        this.leftDisplay.textContent =
            String(this.left).padStart(2, "0");

        this.rightDisplay.textContent =
            String(this.right).padStart(2, "0");

    }

    addLeft() {
        if(this.sport?.finished)
    return;

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
        if(this.sport?.finished)
    return;

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
        const leftColor =
    localStorage.getItem("leftColor");

const rightColor =
    localStorage.getItem("rightColor");

this.setColors(

    leftColor || "#2F80FF",

    rightColor || "#FF4040"

);

    }

    saveSettings(left, right, leftColor, rightColor) {

    localStorage.setItem("leftTeam", left);
    localStorage.setItem("rightTeam", right);

    localStorage.setItem("leftColor", leftColor);
    localStorage.setItem("rightColor", rightColor);

    this.leftName.textContent = left;
    this.rightName.textContent = right;

    this.setColors(leftColor, rightColor);

}

    setHistory(history) {

        this.history = history;

    }

    setSport(sport) {

        this.sport = sport;

    }

setColors(leftColor, rightColor){

    this.leftDisplay.style.color = leftColor;

    this.rightDisplay.style.color = rightColor;

}
}

