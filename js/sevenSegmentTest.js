/*
======================================================
 TesiScore
 SevenSegment Test
 Version: 1.0
======================================================
*/

import { SevenSegmentDisplay }
from "./sevenSegmentDisplay.js";

export function runSevenSegmentTest(){

    const container =
        document.getElementById("sevenSegmentTest");

    if(!container)
        return;

    const display =
        new SevenSegmentDisplay(
            container,
            {
                digits:2,
                color:"#2F80FF",
                offColor:"#04070D"
            }
        );

    display.setValue(18);

}