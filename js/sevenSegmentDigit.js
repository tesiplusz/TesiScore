/*
======================================================
 TesiScore
 SevenSegmentDigit
 Version: 1.0
======================================================
*/

import { SegmentMap } from "./segmentMap.js";

export class SevenSegmentDigit {

    constructor(parent, options = {}) {

        this.parent = parent;

        this.value = "0";

        this.color =
            options.color || "#2F80FF";

        this.offColor =
            options.offColor || "#102040";

    }

    setValue(value) {

        this.value = String(value);

        this.render();

    }

    render() {

        const map =
            SegmentMap[this.value] || SegmentMap["0"];

        this.parent.innerHTML = "";

        const svg =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );

        svg.setAttribute("viewBox","0 0 220 340");
        svg.setAttribute("width","250");
        svg.setAttribute("height","380");

        const segments = [

    [52,18,146,34],   // felső
    [194,44,34,122],  // jobb felső
    [194,192,34,122], // jobb alsó
    [52,314,146,34],  // alsó
    [18,192,34,122],  // bal alsó
    [18,44,34,122],   // bal felső
    [52,166,146,34]   // középső

];

        segments.forEach((s,index)=>{

            const rect =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect"
                );

            rect.setAttribute("x",s[0]);
            rect.setAttribute("y",s[1]);
            rect.setAttribute("width",s[2]);
            rect.setAttribute("height",s[3]);
            rect.setAttribute("rx","12");

           rect.setAttribute(
    "fill",
    map[index]
        ? this.color
        : this.offColor
);
if (map[index]) {

    rect.style.filter = `
        drop-shadow(0 0 6px ${this.color})
        drop-shadow(0 0 12px ${this.color})
    `;

}

            svg.appendChild(rect);

        });

        this.parent.appendChild(svg);

    }

}