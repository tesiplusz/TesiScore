export class UiScale {

    constructor() {

        this.update();

        window.addEventListener(
            "resize",
            () => this.update()
        );

    }

    update() {

        const widthScale = window.innerWidth / 1600;
        const heightScale = window.innerHeight / 900;

        const scale = Math.max(
            0.55,
            Math.min(widthScale, heightScale, 1)
        );

        document.documentElement.style.setProperty(
            "--ui-scale",
            scale.toFixed(3)
        );

    }

}