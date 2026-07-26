import { SevenSegmentDisplay } from "../sevenSegmentDisplay.js";

export class DisplayManager {

    constructor(leftElement, rightElement) {

       this.leftDisplay = new SevenSegmentDisplay(leftElement, {
    digits: 2,
    color: "#2F80FF"
});

this.rightDisplay = new SevenSegmentDisplay(rightElement, {
    digits: 2,
    color: "#FF4040"
});

    }

    render(left, right) {

        this.leftDisplay.setValue(left);
        this.rightDisplay.setValue(right);

    }

    setColors(leftColor, rightColor) {

        this.leftDisplay.setColor(leftColor);
        this.rightDisplay.setColor(rightColor);

    }

    setOffColors(leftColor, rightColor) {

        this.leftDisplay.setOffColor(leftColor);
        this.rightDisplay.setOffColor(rightColor);

    }
    setTheme(themeName) {

    this.leftDisplay.setDisplayTheme(themeName);
    this.rightDisplay.setDisplayTheme(themeName);

}

    reset() {

        this.render(0, 0);

    }

}