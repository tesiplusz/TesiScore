/*
======================================================
 TesiScore
 SevenSegment Engine
 v0.1
======================================================
*/

export class SevenSegmentDigit {

    constructor(parent, value = "8") {
        this.parent = parent;
        this.value = String(value);

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