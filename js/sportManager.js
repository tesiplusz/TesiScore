/*
======================================================
 TesiScore
 SportManager
 Version: 1.0
======================================================
*/

export class SportManager {

    constructor(timer) {

        this.timer = timer;

        this.currentSport = "football";

    }

    setSport(sport) {

        this.currentSport = sport;

        switch (sport) {

            case "football":

                this.timer.setMinutes(45);

                break;

            case "volleyball":

                this.timer.setMinutes(10);

                break;

            case "basketball":

                this.timer.setMinutes(10);

                break;

            case "handball":

                this.timer.setMinutes(30);

                break;

            default:

                this.timer.setMinutes(10);

        }

    }

}