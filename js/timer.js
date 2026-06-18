// ═══════════════════════════════════════
// POMODORO TIMER
// ═══════════════════════════════════════
const timerState = {running: false, mode: 'study', totalSeconds: 25 * 60, remainingSeconds: 25 * 60, sessionCount: 1, interval: null, studyMin: 25, breakMin: 5};
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 60;

function timerToggle() {
  if (timerState.running) {
    clearInterval(timerState.interval);
    timerState.running = false;
    document.getElementById('timerStartBtn').textContent = '▶ Resume';
  } else {
    timerState.running = true;
    document.getElementById('timerStartBtn').textContent = '⏸ Pause';
    timerState.interval = setInterval(timerTick, 1000);
  }
}

function timerTick() {
  timerState.remainingSeconds--;
  timerUpdateDisplay();
  if (timerState.remainingSeconds <= 0) {
    clearInterval(timerState.interval);
    timerState.running = false;
    timerChime();
    if (timerState.mode === 'study') {
      timerState.mode = 'break';
      timerState.totalSeconds = timerState.breakMin * 60;
      timerState.remainingSeconds = timerState.breakMin * 60;
      showToast('Study session complete! Take a break. 🎉', 'success');
    } else {
      timerState.mode = 'study';
      timerState.sessionCount++;
      timerState.totalSeconds = timerState.studyMin * 60;
      timerState.remainingSeconds = timerState.studyMin * 60;
      showToast('Break over! Back to studying. 💪', 'info');
    }
    document.getElementById('timerStartBtn').textContent = '▶ Start';
    timerUpdateDisplay();
  }
  const badge = document.getElementById('fabTimerBadge');
  const panel = document.getElementById('timerPanel');
  if (badge && !panel.classList.contains('open')) {
    const m = Math.floor(timerState.remainingSeconds / 60), s = timerState.remainingSeconds % 60;
    badge.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    badge.style.display = 'block';
  } else if (badge) {
    badge.style.display = 'none';
  }
}

function timerUpdateDisplay() {
  const m = Math.floor(timerState.remainingSeconds / 60), s = timerState.remainingSeconds % 60;
  const countEl = document.getElementById('timerCount');
  const modeEl = document.getElementById('timerModeLabel');
  const sessEl = document.getElementById('timerSessions');
  const ringEl = document.getElementById('timerRingFill');
  if (countEl) countEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
  if (modeEl) modeEl.textContent = timerState.mode === 'study' ? 'STUDY' : 'BREAK';
  if (sessEl) sessEl.textContent = `Session ${timerState.sessionCount}`;
  if (ringEl) {
    const progress = timerState.remainingSeconds / timerState.totalSeconds;
    ringEl.style.strokeDashoffset = TIMER_CIRCUMFERENCE * (1 - progress);
    ringEl.classList.toggle('break', timerState.mode === 'break');
  }
}

function timerReset() {
  clearInterval(timerState.interval);
  timerState.running = false;
  timerState.mode = 'study';
  timerState.remainingSeconds = timerState.studyMin * 60;
  timerState.totalSeconds = timerState.studyMin * 60;
  document.getElementById('timerStartBtn').textContent = '▶ Start';
  const badge = document.getElementById('fabTimerBadge');
  if (badge) badge.style.display = 'none';
  timerUpdateDisplay();
}

function timerSkip() {
  clearInterval(timerState.interval);
  timerState.running = false;
  timerState.remainingSeconds = 0;
  document.getElementById('timerStartBtn').textContent = '▶ Start';
  timerTick();
}

function timerUpdateSettings() {
  const sm = parseInt(document.getElementById('timerStudyMin').value) || 25;
  const bm = parseInt(document.getElementById('timerBreakMin').value) || 5;
  timerState.studyMin = sm;
  timerState.breakMin = bm;
  if (!timerState.running) {
    timerState.totalSeconds = sm * 60;
    timerState.remainingSeconds = sm * 60;
    timerUpdateDisplay();
  }
}

function timerChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const playNote = (freq, start, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    };
    playNote(523, 0, 0.4);
    playNote(659, 0.15, 0.4);
    playNote(784, 0.3, 0.6);
  } catch(e) { console.log('Audio not available'); }
}
