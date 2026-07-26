/*
======================================================
 TesiScore
 SportManager
 Version: 2.0
======================================================
*/

export class SportManager {

    constructor(timer) {

        this.timer = timer;
        this.currentSport = "simple";

    }

    setSport(sport) {

        this.currentSport = sport;

        switch (sport) {

            case "simple":

                this.timer.setMinutes(10);

                break;

            case "volleyball":

                this.timer.setMinutes(10);

                break;

            default:

                this.timer.setMinutes(10);

        }

    }

}