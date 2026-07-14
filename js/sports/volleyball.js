/*
======================================================
 TesiScore
 Volleyball
 Version: 3.0
======================================================
*/

export class Volleyball {

    constructor(board) {

        this.board = board;

        this.leftSets = 0;
        this.rightSets = 0;

        this.pointsToWin = 25;
        this.lastSetPoints = 15;
        this.mustWinBy = 2;
        this.setsToWin = 3;

        this.setFinished = false;

        this.leftSetsDisplay =
            document.getElementById("leftSets");

        this.rightSetsDisplay =
            document.getElementById("rightSets");

        this.message =
            document.getElementById("matchMessage");

        this.renderSets();

    }

    checkSet() {

        if (this.setFinished)
            return;

        const left = this.board.left;
        const right = this.board.right;

        const target =
            (
                this.leftSets === this.setsToWin - 1 &&
                this.rightSets === this.setsToWin - 1
            )
            ? this.lastSetPoints
            : this.pointsToWin;

        // Bal csapat nyert szettet
        if (
            left >= target &&
            left - right >= this.mustWinBy
        ) {

            this.finishSet("left", left, right);

            return;

        }

        // Jobb csapat nyert szettet
        if (
            right >= target &&
            right - left >= this.mustWinBy
        ) {

            this.finishSet("right", left, right);

        }

    }

    finishSet(winner, leftScore, rightScore) {

        this.setFinished = true;

        this.board.lock();

        if (winner === "left") {

            this.leftSets++;

        } else {

            this.rightSets++;

        }

        this.renderSets();

        this.showMessage(
            `🏐 ${leftScore} : ${rightScore}`
        );

        setTimeout(() => {

            if (this.checkMatch()) {

                return;

            }

            this.board.resetPoints();

            this.board.unlock();

            this.setFinished = false;

        }, 2000);

    }

    checkMatch() {

        if (this.leftSets >= this.setsToWin) {

            this.showMessage("🏆 KÉKEK GYŐZTEK!");

            return true;

        }

        if (this.rightSets >= this.setsToWin) {

            this.showMessage("🏆 PIROSAK GYŐZTEK!");

            return true;

        }

        return false;

    }

    newMatch() {

        this.leftSets = 0;
        this.rightSets = 0;

        this.renderSets();

        this.board.resetPoints();

        this.board.unlock();

        this.setFinished = false;

    }

    renderSets() {

        this.leftSetsDisplay.textContent =
            this.leftSets;

        this.rightSetsDisplay.textContent =
            this.rightSets;

    }

    showMessage(text) {

        if (!this.message)
            return;

        this.message.textContent = text;

        this.message.style.display = "block";

        clearTimeout(this.messageTimer);

        this.messageTimer = setTimeout(() => {

            this.message.style.display = "none";

        }, 2000);

    }

}