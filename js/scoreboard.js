/*
======================================================
 TesiScore
 scoreboard.js
 Version: 2.0
======================================================
*/
import { DisplayManager } from "./display/displayManager.js";
export class Scoreboard {

    constructor() {

        this.left = 0;
        this.right = 0;

        this.leftDisplay =
            document.getElementById("leftScore");

       this.rightDisplay =
    document.getElementById("rightScore");

this.display = new DisplayManager(
    this.leftDisplay,
    this.rightDisplay
);

        this.leftName =
            document.getElementById("teamLeftName");

        this.rightName =
            document.getElementById("teamRightName");

        this.history = null;
        this.sport = null;
        this.leftColor = localStorage.getItem("leftColor") || "#2F80FF";
        this.rightColor = localStorage.getItem("rightColor") || "#FF4040";

        // ÚJ:
        // Ha true, nem lehet pontot módosítani
        this.locked = false;

      this.loadSettings();

// Biztosan állítsuk be a kijelző színeit
this.setColors(this.leftColor, this.rightColor);

this.render();

    }
   
    render() {

    this.display.render(
        this.left,
        this.right
    );

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
        console.log("Mentés:", left, right);


    localStorage.setItem("leftTeam", left);
    localStorage.setItem("rightTeam", right);

    localStorage.setItem("leftColor", leftColor);
    localStorage.setItem("rightColor", rightColor);

    this.leftName.textContent = left;
    this.rightName.textContent = right;

    this.setColors(leftColor, rightColor);

}

    // Térfélcsere: a csapatok teljes oldala együtt mozog.
    swapSides() {

        [this.left, this.right] = [this.right, this.left];

        const leftName = this.leftName.textContent;
        this.leftName.textContent = this.rightName.textContent;
        this.rightName.textContent = leftName;

        [this.leftColor, this.rightColor] =
            [this.rightColor, this.leftColor];

        localStorage.setItem("leftTeam", this.leftName.textContent);
        localStorage.setItem("rightTeam", this.rightName.textContent);
        localStorage.setItem("leftColor", this.leftColor);
        localStorage.setItem("rightColor", this.rightColor);

        // A röplabda szettállása is a csapattal együtt cserélődik.
        if (this.sport && typeof this.sport.swapSides === "function") {
            this.sport.swapSides();
        }

        this.setColors(this.leftColor, this.rightColor);
        this.render();

        // A beállítópanel következő megnyitásakor is a friss értékek jelenjenek meg.
        const leftColorSelect = document.getElementById("leftColor");
        const rightColorSelect = document.getElementById("rightColor");
        if (leftColorSelect) leftColorSelect.value = this.leftColor;
        if (rightColorSelect) rightColorSelect.value = this.rightColor;

        if (this.history) this.history.stack = [];
    }

    setHistory(history) {

        this.history = history;

    }

    setSport(sport) {

        this.sport = sport;
        

    }
    getSport() {

    return this.sport;

}

setColors(leftColor, rightColor) {

    this.leftColor = leftColor;
    this.rightColor = rightColor;

    this.display.setColors(leftColor, rightColor);

    // A csapatnevek színét a megjelenítési téma határozza meg.
    // A csapatok saját színe csak az eredményjelző számokra vonatkozik.

}
setTheme(themeName) {

    this.display.setTheme(themeName);

}

}

