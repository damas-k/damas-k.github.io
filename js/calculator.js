// ═══════════════════════════════════════
// CALCULATOR
// ═══════════════════════════════════════
const calcState = {expr: '', result: '0', hasResult: false};

function switchCalcTab(tab, btn) {
  document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.calc-tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('calc-' + tab).classList.add('active');
}

function calcAction(type, val) {
  let expr = calcState.expr;
  if (type === 'clear') {
    calcState.expr = '';
    calcState.result = '0';
    calcState.hasResult = false;
  } else if (type === 'back') {
    if (calcState.hasResult) { calcState.expr = ''; calcState.hasResult = false; }
    else { calcState.expr = expr.slice(0, -1); }
  } else if (type === 'num') {
    if (calcState.hasResult) { calcState.expr = val; calcState.hasResult = false; }
    else calcState.expr += val;
  } else if (type === 'dot') {
    if (!expr.split(/[\+\-\*\/]/).pop().includes('.')) calcState.expr += '.';
  } else if (type === 'op') {
    calcState.hasResult = false;
    calcState.expr += val;
  } else if (type === 'pct') {
    try { calcState.result = String(eval(calcState.expr || '0') / 100); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'sqrt') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(Math.sqrt(n)); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'sin') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(Math.round(Math.sin(n * Math.PI / 180) * 1e10) / 1e10); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'cos') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(Math.round(Math.cos(n * Math.PI / 180) * 1e10) / 1e10); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'tan') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(Math.round(Math.tan(n * Math.PI / 180) * 1e10) / 1e10); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'log') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(Math.round(Math.log10(n) * 1e10) / 1e10); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'pow') {
    try { const n = parseFloat(calcState.expr || calcState.result); calcState.result = String(n * n); calcState.expr = ''; calcState.hasResult = true; } catch(e) {}
  } else if (type === 'pi') {
    if (calcState.hasResult) { calcState.expr = ''; calcState.hasResult = false; }
    calcState.expr += '3.14159265';
  } else if (type === 'eq') {
    try {
      const r = eval(calcState.expr.replace(/×/g, '*').replace(/÷/g, '/'));
      calcState.result = String(Math.round(r * 1e10) / 1e10);
      calcState.hasResult = true;
    } catch(e) { calcState.result = 'Error'; }
  }
  const exprEl = document.getElementById('calcExpr');
  const resEl = document.getElementById('calcResult');
  if (exprEl) exprEl.textContent = calcState.expr;
  if (resEl) resEl.textContent = calcState.hasResult ? calcState.result : (calcState.expr || '0');
}

function solveOhm() {
  const V = parseFloat(document.getElementById('ohmV').value);
  const I = parseFloat(document.getElementById('ohmI').value);
  const R = parseFloat(document.getElementById('ohmR').value);
  const el = document.getElementById('ohmResult');
  try {
    if (isNaN(V) && !isNaN(I) && !isNaN(R)) {
      el.textContent = `V = I × R = ${I} × ${R} = ${Math.round(I * R * 100) / 100} V`;
    } else if (isNaN(I) && !isNaN(V) && !isNaN(R)) {
      el.textContent = `I = V ÷ R = ${V} ÷ ${R} = ${Math.round(V / R * 1000) / 1000} A`;
    } else if (isNaN(R) && !isNaN(V) && !isNaN(I)) {
      el.textContent = `R = V ÷ I = ${V} ÷ ${I} = ${Math.round(V / I * 1000) / 1000} Ω`;
    } else {
      el.textContent = 'Leave exactly one field blank';
    }
  } catch(e) { el.textContent = 'Enter 2 values above'; }
}

function solvePower() {
  const P = parseFloat(document.getElementById('pwrP').value);
  const I = parseFloat(document.getElementById('pwrI').value);
  const E = parseFloat(document.getElementById('pwrE').value);
  const el = document.getElementById('pwrResult');
  try {
    if (isNaN(P) && !isNaN(I) && !isNaN(E)) {
      el.textContent = `P = I × E = ${I} × ${E} = ${Math.round(I * E * 100) / 100} W`;
    } else if (isNaN(I) && !isNaN(P) && !isNaN(E)) {
      el.textContent = `I = P ÷ E = ${P} ÷ ${E} = ${Math.round(P / E * 1000) / 1000} A`;
    } else if (isNaN(E) && !isNaN(P) && !isNaN(I)) {
      el.textContent = `E = P ÷ I = ${P} ÷ ${I} = ${Math.round(P / I * 100) / 100} V`;
    } else {
      el.textContent = 'Leave exactly one field blank';
    }
  } catch(e) { el.textContent = 'Enter 2 values above'; }
}

function solveVD() {
  const K = parseFloat(document.getElementById('vdMaterial').value);
  const I = parseFloat(document.getElementById('vdAmps').value);
  const L = parseFloat(document.getElementById('vdDist').value);
  const CM = parseFloat(document.getElementById('vdGauge').value);
  const el = document.getElementById('vdResult');
  if (isNaN(I) || isNaN(L)) { el.textContent = 'Enter amperage and distance'; return; }
  const VD = (2 * K * I * L) / CM;
  const VDpct120 = (VD / 120) * 100;
  const VDpct240 = (VD / 240) * 100;
  el.innerHTML = `VD = ${VD.toFixed(3)} V | ${VDpct120.toFixed(1)}% @ 120V | ${VDpct240.toFixed(1)}% @ 240V`;
  el.style.color = VDpct120 > 3 ? 'var(--error-light)' : VDpct120 > 2 ? 'var(--warning)' : 'var(--success-light)';
}
