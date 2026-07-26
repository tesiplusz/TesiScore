/*
======================================================
 TesiScore
 SevenSegmentDisplay
 Version: 2.0
======================================================
*/

import { SevenSegmentDigit } from "./sevenSegmentDigit.js";
import { DisplayThemes } from "./displayThemes.js";

export class SevenSegmentDisplay {

    constructor(parent, options = {}) {

        this.parent = parent;

        this.digits =
            options.digits || 2;

        this.color =
            options.color || "#2F80FF";

        this.offColor =
            options.offColor ||"#050B16";
            this.glow =
    options.glow ?? true;

        this.parent.innerHTML = "";

        this.items = [];

        for (let i = 0; i < this.digits; i++) {

            const div = document.createElement("div");

            div.style.display = "inline-block";
            div.style.marginRight = "4px";

            this.parent.appendChild(div);

            this.items.push(
                new SevenSegmentDigit(
    div,
    {
        color: this.color,
        offColor: this.offColor,
        glow: this.glow
    }
)
            );

        }

    }

    setValue(value) {

        const text =
            String(value).padStart(this.digits, "0");

        for (let i = 0; i < this.digits; i++) {

            this.items[i].setValue(text[i]);

        }

    }

    setColor(color) {

        this.color = color;

        this.items.forEach(item => {

            item.color = color;

            item.render();

        });

    }
   setDisplayTheme(themeName) {

    const theme = DisplayThemes[themeName];

    if (!theme) return;

    // Ne írjuk felül a kijelző saját színét!
    this.setOffColor(theme.off);

    this.glow = theme.glow;

    this.items.forEach(item => {

        item.glow = this.glow;
        item.render();

    });

}

    setOffColor(color) {

    this.offColor = color;

    this.items.forEach(item => {

        item.offColor = color;
        item.render();

    });

}
refresh() {

    this.items.forEach(item => item.render());

}
}
