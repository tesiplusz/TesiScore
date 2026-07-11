import { Scoreboard } from "./scoreboard.js";
import { Timer } from "./timer.js";
import { SettingsPanel } from "./panel.js";
import { Controls } from "./controls.js";
import { TimerControls } from "./timerControls.js";
import { KeyboardControls } from "./keyboard.js";
import { Fullscreen } from "./fullscreen.js";
import { History } from "./history.js";
import { SportManager } from "./sportManager.js";
const board = new Scoreboard();
const timer = new Timer();
const history = new History(board);
const sportManager =
    new SportManager(timer);

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
sportManager.setSport("football");


