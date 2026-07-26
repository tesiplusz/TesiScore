/*
======================================================
 TesiScore
 SevenSegment Engine
 v0.1
======================================================
*/
const DIGITS = {
    "0":[1,1,1,1,1,1,0],
    "1":[0,1,1,0,0,0,0],
    "2":[1,1,0,1,1,0,1],
    "3":[1,1,1,1,0,0,1],
    "4":[0,1,1,0,0,1,1],
    "5":[1,0,1,1,0,1,1],
    "6":[1,0,1,1,1,1,1],
    "7":[1,1,1,0,0,0,0],
    "8":[1,1,1,1,1,1,1],
    "9":[1,1,1,1,0,1,1]
};

const THEMES = {

    dark:{
        on:"#2F80FF",
        off:"#09101d",
        glow:true
    },

    light:{
        on:"#2F80FF",
        off:"#00FF00",
        glow:false
    }

};
export class SevenSegmentDigit {

   constructor(parent, value = "8", theme = "dark") {

    this.parent = parent;
    this.value = String(value);
    this.theme = theme;

    this.render();
    }

    render() {

        this.parent.innerHTML = "";

        for (const digit of this.value) {

            this.parent.innerHTML += `
<svg
    width="220"
    height="340"
    viewBox="0 0 220 340"
    xmlns="http://www.w3.org/2000/svg"
    style="margin-right:18px">

    <!-- felső -->
    <rect x="50" y="20"
          width="120"
          height="28"
          rx="8"
          fill="#2F80FF"/>

    <!-- jobb felső -->
    <rect x="170" y="45"
          width="28"
          height="110"
          rx="8"
          fill="#2F80FF"/>

    <!-- jobb alsó -->
    <rect x="170" y="185"
          width="28"
          height="110"
          rx="8"
          fill="#2F80FF"/>

    <!-- alsó -->
    <rect x="50" y="292"
          width="120"
          height="28"
          rx="8"
          fill="#2F80FF"/>

    <!-- bal alsó -->
    <rect x="22" y="185"
          width="28"
          height="110"
          rx="8"
          fill="#2F80FF"/>

    <!-- bal felső -->
    <rect x="22" y="45"
          width="28"
          height="110"
          rx="8"
          fill="#2F80FF"/>

    <!-- középső -->
    <rect x="50" y="156"
          width="120"
          height="28"
          rx="8"
          fill="#2F80FF"/>

</svg>
`;
        }
    }

}
export class SevenSegmentDisplay {

    constructor(parent, value = 0) {

        this.parent = parent;

        this.digits = [];

        this.setValue(value);

    }

    setValue(value) {

        this.parent.innerHTML = "";

        this.digits = [];

        const text = String(value).padStart(2, "0");

        for (const digit of text) {

            const holder = document.createElement("div");

            holder.style.display = "inline-block";

            holder.style.margin = "0 2px";

            this.parent.appendChild(holder);

            this.digits.push(
                new SevenSegmentDigit(holder, digit)
            );

        }

    }

}