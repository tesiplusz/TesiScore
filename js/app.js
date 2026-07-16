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
const board = new Scoreboard();
const timer = new Timer();
const history = new History(board);
const sportManager =
    new SportManager(timer);
    const volleyball =
    new Volleyball(board);

board.setSport(volleyball);

board.setHistory(history);
new Controls(board);
new TimerControls(timer);
new SettingsPanel(board, timer);
new KeyboardControls(board,timer,history);
new Fullscreen();


    document
    .getElementById("save")
    .addEventListener("click", () => {

        board.saveSettings(

            document.getElementById("ln").value,

            document.getElementById("rn").value

        );

    });
    // ===============================
// Beállítások panel
// ===============================
sportManager.setSport("volleyball");
// =====================================
// Reset = Új szett
// =====================================

document
    .getElementById("reset")
    .addEventListener("click", () => {

        timer.reset();

        volleyball.newMatch();

    });
