// ═══════════════════════════════════════
// CONDUIT BENDING CALCULATOR
// ═══════════════════════════════════════
function switchBendTab(tab, btn) {
  document.querySelectorAll('[id^="bend-panel-"]').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#page-bending-calc .tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('bend-panel-' + tab);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
}

function calcStub() {
  const height = parseFloat(document.getElementById('stubHeight').value);
  const sizeKey = document.getElementById('stubConduitSize').value;
  const takeUp = CONDUIT_TAKEUP[sizeKey] || 5;
  const el = document.getElementById('stubResult');
  if (isNaN(height)) { el.style.display = 'none'; return; }
  const mark = height - takeUp;
  el.style.display = 'block';
  el.innerHTML = `<div class="bend-result-row"><span class="bend-result-label">Take-Up</span><span class="bend-result-val">${takeUp}"</span></div><div class="bend-result-row"><span class="bend-result-label">Mark from end</span><span class="bend-result-val">${mark > 0 ? mark + '"' : 'Too short!'}</span></div><div class="bend-result-row"><span class="bend-result-label">Finished Height</span><span class="bend-result-val">${height}"</span></div>`;
}

function calcOffset() {
  const rise = parseFloat(document.getElementById('offsetRise').value);
  const angleKey = document.getElementById('offsetAngle').value;
  const od = OFFSET_DATA[angleKey];
  const el = document.getElementById('offsetResult');
  if (isNaN(rise) || !od) { el.style.display = 'none'; return; }
  const dist = rise * od.mult;
  const shrink = rise * od.shrink;
  el.style.display = 'block';
  el.innerHTML = `<div class="bend-result-row"><span class="bend-result-label">Distance Between Bends</span><span class="bend-result-val">${dist.toFixed(3)}"</span></div><div class="bend-result-row"><span class="bend-result-label">Shrink</span><span class="bend-result-val">${shrink.toFixed(4)}"</span></div>`;
}

function calcSaddle() {
  const height = parseFloat(document.getElementById('saddleHeight').value);
  const angle = parseInt(document.getElementById('saddleAngle').value);
  const el = document.getElementById('saddleResult');
  if (isNaN(height)) { el.style.display = 'none'; return; }
  const outerSpacing = +(height * (angle === 45 ? 2.5 : 3)).toFixed(3);
  const centerBendAngle = angle === 45 ? 90 : 44;
  el.style.display = 'block';
  el.innerHTML = `<div class="bend-result-row"><span class="bend-result-label">Outer Marks (each side)</span><span class="bend-result-val">${outerSpacing}"</span></div><div class="bend-result-row"><span class="bend-result-label">Center Bend</span><span class="bend-result-val">${centerBendAngle}°</span></div><div class="bend-result-row"><span class="bend-result-label">Outer Bends</span><span class="bend-result-val">${angle}° each</span></div>`;
}

function calcRolling() {
  const rise = parseFloat(document.getElementById('rollRise').value);
  const run = parseFloat(document.getElementById('rollRun').value);
  const el = document.getElementById('rollingResult');
  if (isNaN(rise) || isNaN(run)) { el.style.display = 'none'; return; }
  const diagonal = Math.sqrt(rise * rise + run * run);
  const angle = Math.atan(rise / run) * 180 / Math.PI;
  const angles = [10, 22, 30, 45, 60];
  const closest = angles.reduce((prev, curr) => Math.abs(curr - angle) < Math.abs(prev - angle) ? curr : prev);
  const mult = OFFSET_DATA[String(closest)].mult;
  el.style.display = 'block';
  el.innerHTML = `<div class="bend-result-row"><span class="bend-result-label">True Offset</span><span class="bend-result-val">${diagonal.toFixed(3)}"</span></div><div class="bend-result-row"><span class="bend-result-label">True Angle</span><span class="bend-result-val">${angle.toFixed(1)}°</span></div><div class="bend-result-row"><span class="bend-result-label">Use ${closest}° bends</span><span class="bend-result-val">${(diagonal * mult).toFixed(3)}" apart</span></div>`;
}
