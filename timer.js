/**
 * Build004 Alpha
 * File: js/timer.js
 * Version: 1.0.0
 */

export class MatchTimer {
  constructor(onTick = () => {}, onFinished = () => {}) {
    this.duration = 600;
    this.remaining = 600;
    this.interval = null;
    this.running = false;
    this.onTick = onTick;
    this.onFinished = onFinished;
  }

  setMinutes(minutes) {
    this.duration = Math.max(0, Number(minutes) * 60);
    this.reset();
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
    this.onTick(this.getTime());
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.interval = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
        this.onTick(this.getTime());
      } else {
        this.stop();
        this.onFinished();
      }
    }, 1000);
  }

  stop() {
    this.running = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  toggle() {
    this.running ? this.stop() : this.start();
  }

  getTime() {
    const m = Math.floor(this.remaining / 60);
    const s = this.remaining % 60;
    return {
      minutes: m,
      seconds: s,
      text: String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")
    };
  }
}
