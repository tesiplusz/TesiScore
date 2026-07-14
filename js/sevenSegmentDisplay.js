/*
======================================================
 TesiScore
 SevenSegmentDisplay
 Version: 1.0
======================================================
*/

import { SevenSegmentDigit } from "./sevenSegmentDigit.js";

export class SevenSegmentDisplay {

    constructor(parent, options = {}) {

        this.parent = parent;

        this.options = options;

        this.digits =
            options.digits || 2;

        this.color =
            options.color || "#2F80FF";

        this.offColor =
            options.offColor || "#102040";

        this.parent.innerHTML = "";

        this.items = [];

        for(let i=0;i<this.digits;i++){

            const div =
                document.createElement("div");

            div.style.display="inline-block";
            div.style.marginRight="10px";

            this.parent.appendChild(div);

            this.items.push(

                new SevenSegmentDigit(
                    div,
                    {
                        color:this.color,
                        offColor:this.offColor
                    }
                )

            );

        }

    }

    setValue(value){

        const text =
            String(value)
                .padStart(this.digits,"0");

        for(let i=0;i<this.digits;i++){

            this.items[i].setValue(text[i]);

        }

    }

}