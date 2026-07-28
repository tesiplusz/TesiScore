import { Scoreboard } from "./scoreboard.js";
import { Timer } from "./timer.js";
import { SettingsPanel } from "./panel.js";
import { Controls } from "./controls.js";
import { TimerControls } from "./timerControls.js";
import { KeyboardControls } from "./keyboard.js";
import { Fullscreen } from "./fullscreen.js";
import { History } from "./history.js";
import { SportManager } from "./sportManager.js";

import { Volleyball } from "./sports/volleyball.js";
import { SimpleScore } from "./sports/simpleScore.js";
import { ThemeManager } from "./themeManager.js";
import { UiScale } from "./uiScale.js";

const board = new Scoreboard();
const timer = new Timer();
const history = new History(board);

const sportManager = new SportManager(timer);

const sports = {
    simple: new SimpleScore(board),
    volleyball: new Volleyball(board)
    
};
const themeManager = new ThemeManager();
    document.addEventListener(
    "themeChanged",
    (event) => {

        board.setTheme(
            event.detail.theme
        );

    }
);
board.setTheme(
    themeManager.getTheme()
);

board.setHistory(history);

new Controls(board);
new TimerControls(timer);
new SettingsPanel(
    board,
    timer,
    themeManager
);
new KeyboardControls(board, timer, history);
new Fullscreen();
new UiScale();


//==============================
// Sport kiválasztása
//==============================

const sportSelect = document.getElementById("sportSelect");
const volleyballSettings =
    document.getElementById("volleyballSettings");

const leftSets =
    document.getElementById("leftSets");

const rightSets =
    document.getElementById("rightSets");
    function updateSportUI(sport) {

    const volleyballMode = sport === "volleyball";

    volleyballSettings.style.display =
        volleyballMode ? "block" : "none";

    leftSets.style.display =
        volleyballMode ? "" : "none";

    rightSets.style.display =
        volleyballMode ? "" : "none";

}

sportSelect.addEventListener("change", () => {

    const sport = sportSelect.value;

    sportManager.setSport(sport);

board.setSport(sports[sport]);
updateSportUI(sport);

});

// induláskor
sportSelect.value = "simple";

board.setSport(sports.simple);

sportManager.setSport("simple");

updateSportUI("simple");
//=====================================
// Reset = Új mérkőzés
//=====================================

document
    .getElementById("reset")
    .addEventListener("click", () => {

        timer.reset();

        const sport = board.getSport();

        if (sport && typeof sport.newMatch === "function") {
            sport.newMatch();
        }

    });