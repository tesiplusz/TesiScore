export class MolkkyPlayerRow {

    constructor(name) {

        this.name = name;
        this.throws = [];
        this.score = 0;

        this.element = document.createElement("div");
        this.element.className = "molkkyPlayerRow";

        this.render();
    }

    addThrow(value) {

        this.throws.push(value);

        if (value !== "X") {
            this.score += value;
        }

        this.render();
    }

    render() {

        this.element.innerHTML = "";

        const name = document.createElement("div");
        name.className = "playerName";
        name.textContent = this.name;

        const throws = document.createElement("div");
        throws.className = "playerThrows";

        this.throws.forEach(value => {

            const token = document.createElement("div");
            token.className = "throwToken";
            token.textContent = value;

            throws.appendChild(token);

        });

        const score = document.createElement("div");
        score.className = "playerScore";
        score.textContent = this.score;

        this.element.append(
            name,
            throws,
            score
        );

    }

}