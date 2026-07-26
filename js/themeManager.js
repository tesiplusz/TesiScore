/*
======================================================
 TesiScore
 Theme Manager
 Version: 1.0
======================================================
*/

export class ThemeManager {

    constructor() {

        this.theme =
            localStorage.getItem("theme") || "dark";

        this.apply();

    }

    setTheme(theme) {

        this.theme = theme;

        localStorage.setItem(
            "theme",
            theme
        );

        this.apply();

    }

    getTheme() {

        return this.theme;

    }

    apply() {

        document.body.classList.remove(
            "dark",
            "light"
        );

        document.body.classList.add(
            this.theme
        );

        document.dispatchEvent(
            new CustomEvent(
                "themeChanged",
                {
                    detail: {
                        theme: this.theme
                    }
                }
            )
        );

    }

}