// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function navigate(page) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.querySelector('.nav-item[data-page="' + page + '"]');
  if (navEl) navEl.classList.add('active');
  const titles = {
    dashboard: 'Dashboard', upload: 'Upload Materials', quiz: 'Take a Quiz', flashcards: 'Flashcards',
    progress: 'My Progress', topics: 'Study Topics', settings: 'Settings', 'wrong-answers': 'Wrong Answers',
    notes: 'Notes', 'bending-calc': 'Bending Calculator', 'nec-reference': 'NEC Reference',
    'wire-reference': 'Wire Reference', formulas: 'Formulas', guide: 'Guide'
  };
  document.getElementById('topbarTitle').textContent = titles[page] || 'Voltage';
  if (page === 'wrong-answers') renderWrongAnswers();
  if (page === 'notes') renderNotes();
  if (page === 'bending-calc') { }
  if (page === 'nec-reference') renderNECReference();
  if (page === 'wire-reference') renderWireTable();
  if (page === 'formulas') renderFormulaSheet();
  if (page === 'topics') buildTopicsGrid();
  closeSidebar();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

function switchGuideTab(tab, btn) {
  document.querySelectorAll('#page-guide .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#page-guide .tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('guide-panel-' + tab);
  if (panel) panel.classList.add('active');
}

// ═══════════════════════════════════════
// MODALS
// ═══════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ═══════════════════════════════════════
// LOADING & TOAST
// ═══════════════════════════════════════
function showLoading(text, sub) {
  document.getElementById('loadingOverlay').style.display = 'flex';
  document.getElementById('loadingText').textContent = text || 'Loading…';
  document.getElementById('loadingSub').textContent = sub || '';
}

function hideLoading() { document.getElementById('loadingOverlay').style.display = 'none'; }

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span><span>${escHtml(msg)}</span>`;
  container.appendChild(toast);
  toast.addEventListener('click', () => toast.remove());
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════
function escHtml(s) {
  if (typeof s !== 'string') s = String(s || '');
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ═══════════════════════════════════════
// FILE HANDLING
// ═══════════════════════════════════════
function getFileIcon(type) {
  if (type?.includes('pdf')) return '📄';
  if (type?.includes('image')) return '🖼️';
  if (type?.includes('word')) return '📝';
  return '📎';
}

async function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  const configCard = document.getElementById('quizConfigCard');
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = '';
  for (const file of files) {
    state.uploadedFiles.push({name: file.name, type: file.type, size: file.size, addedAt: new Date().toISOString()});
    fileList.innerHTML += `<div class="file-item"><span>${getFileIcon(file.type)}</span><div class="file-name">${escHtml(file.name)}</div><button class="btn btn-ghost btn-sm" onclick="this.parentElement.remove()">✕</button></div>`;
    if (file.type === 'application/pdf') {
      try {
        const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
        let text = '';
        for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\n';
        }
        state.fileContents[file.name] = text;
      } catch (err) { console.warn('PDF extraction failed:', err); }
    } else if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => { state.fileContents[file.name] = 'IMAGE_DATA:' + ev.target.result; };
      reader.readAsDataURL(file);
    } else if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (ev) => { state.fileContents[file.name] = ev.target.result; };
      reader.readAsText(file);
    }
  }
  localStorage.setItem('voltage_files', JSON.stringify(state.uploadedFiles));
  configCard.style.display = 'block';
  showToast(`Added ${files.length} file(s)`, 'success');
}

function clearFiles() {
  if (!confirm('Clear all uploaded files?')) return;
  state.uploadedFiles = [];
  state.fileContents = {};
  localStorage.removeItem('voltage_files');
  document.getElementById('fileList').innerHTML = '';
  document.getElementById('quizConfigCard').style.display = 'none';
  showToast('Files cleared', 'info');
}

// ═══════════════════════════════════════
// EXPORT / IMPORT
// ═══════════════════════════════════════
function exportData() {
  const data = {
    version: '2.0', exportedAt: new Date().toISOString(), apprenticeYear: state.year,
    sessions: state.sessions, wrongAnswers: getWrongAnswers(), notes: getNotes(), uploadedFiles: state.uploadedFiles
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const today = new Date().toISOString().slice(0, 10);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'voltage-backup-' + today + '.voltage';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Data exported!', 'success');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.voltage,.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.sessions && !data.wrongAnswers && !data.notes) { showToast('Invalid .voltage file', 'error'); return; }
      const choice = await showImportDialog(data);
      if (!choice) return;
      if (choice === 'replace') {
        if (data.sessions) { state.sessions = data.sessions; localStorage.setItem('voltage_sessions', JSON.stringify(data.sessions)); }
        if (data.wrongAnswers) saveWrongAnswers(data.wrongAnswers);
        if (data.notes) saveNotes(data.notes);
      } else {
        if (data.sessions) {
          const ids = new Set(state.sessions.map(s => s.id));
          state.sessions = [...state.sessions, ...data.sessions.filter(s => !ids.has(s.id))].sort((a, b) => new Date(b.date) - new Date(a.date));
          localStorage.setItem('voltage_sessions', JSON.stringify(state.sessions));
        }
        if (data.wrongAnswers) {
          const ex = getWrongAnswers();
          const keys = new Set(ex.map(w => w.qKey));
          saveWrongAnswers([...ex, ...data.wrongAnswers.filter(w => !keys.has(w.qKey))]);
        }
        if (data.notes) {
          const en = getNotes();
          Object.entries(data.notes).forEach(([k, v]) => { if (!en[k] || !en[k].text) en[k] = v; });
          saveNotes(en);
        }
      }
      showToast('Import complete!', 'success');
      renderDashboard();
      updateWrongAnswersBadge();
    } catch (err) { showToast('Import failed: ' + err.message, 'error'); }
  };
  input.click();
}

function showImportDialog(data) {
  return new Promise(resolve => {
    const overlay = document.getElementById('importModal');
    const sc = data.sessions?.length || 0, wc = data.wrongAnswers?.length || 0, nc = Object.keys(data.notes || {}).length;
    document.getElementById('importSummary').innerHTML = `<div style="background:var(--navy-light);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:16px;"><div style="display:flex;gap:10px;flex-wrap:wrap;"><span class="badge badge-blue">📝 ${sc} sessions</span><span class="badge badge-red">❌ ${wc} wrong answers</span><span class="badge badge-gold">📓 ${nc} notes</span></div></div>`;
    overlay.classList.add('open');
    document.getElementById('importBtnReplace').onclick = () => { overlay.classList.remove('open'); resolve('replace'); };
    document.getElementById('importBtnMerge').onclick = () => { overlay.classList.remove('open'); resolve('merge'); };
    document.getElementById('importBtnCancel').onclick = () => { overlay.classList.remove('open'); resolve(null); };
  });
}

// ═══════════════════════════════════════
// FLOATING PANELS
// ═══════════════════════════════════════
function togglePanel(panelId, btnId) {
  const panel = document.getElementById(panelId);
  const btn = document.getElementById(btnId);
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.float-panel').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.fab-btn').forEach(b => b.classList.remove('active'));
  if (!isOpen) {
    panel.classList.add('open');
    if (btn) btn.classList.add('active');
  }
}

(function setupDrag() {
  const panels = [
    {panel: 'calcPanel', handle: 'calcHandle'},
    {panel: 'timerPanel', handle: 'timerHandle'},
    {panel: 'aiChatPanel', handle: 'aiHandle'}
  ];
  panels.forEach(({panel, handle}) => {
    const p = document.getElementById(panel);
    const h = document.getElementById(handle);
    if (!p || !h) return;
    let dragging = false, startX, startY, origLeft, origTop;
    h.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      dragging = true;
      const rect = p.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      origLeft = rect.left;
      origTop = rect.top;
      p.style.right = 'auto';
      p.style.bottom = 'auto';
      p.style.left = origLeft + 'px';
      p.style.top = origTop + 'px';
      e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      p.style.left = Math.max(0, Math.min(window.innerWidth - p.offsetWidth, origLeft + dx)) + 'px';
      p.style.top = Math.max(0, Math.min(window.innerHeight - p.offsetHeight, origTop + dy)) + 'px';
    });
    document.addEventListener('mouseup', () => { dragging = false; });
  });
})();

// ═══════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════
document.addEventListener('keydown', e => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === 'n') {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn && !nextBtn.disabled) nextBtn.click();
  }
  if (e.key === 'ArrowLeft' || e.key === 'p') prevQuestion();
  if (e.key === ' ') {
    const fc = document.getElementById('flashcard');
    if (fc) { e.preventDefault(); flipCard(); }
  }
  if (e.key >= '1' && e.key <= '4') {
    const idx = parseInt(e.key) - 1;
    const opt = document.getElementById('opt_' + idx);
    if (opt) opt.click();
  }
  if (e.key === 't') {
    const tf0 = document.getElementById('tf_0');
    if (tf0) tf0.click();
  }
  if (e.key === 'f') {
    const tf1 = document.getElementById('tf_1');
    if (tf1) tf1.click();
  }
});

// ═══════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════
function init() {
  renderDashboard();
  updateApiKeyStatus();
  updateWrongAnswersBadge();
  timerUpdateDisplay();
  buildTopicsGrid();
  renderNECReference();
  renderWireTable();
  renderFormulaSheet();
}

// Auto-initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { init(); initGoogleSignIn(); });
} else {
  init();
  initGoogleSignIn();
}

// Check saved session on load
(function checkSavedSession() {
  const token = localStorage.getItem('voltage_token');
  const rawUser = localStorage.getItem('voltage_user');
  if (!token || !rawUser) return;
  try {
    const parts = token.split('.');
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      localStorage.removeItem('voltage_token');
      localStorage.removeItem('voltage_user');
      return;
    }
    const user = JSON.parse(rawUser);
    state.user = user;
    loginSuccess(user);
  } catch (e) {
    localStorage.removeItem('voltage_token');
    localStorage.removeItem('voltage_user');
  }
})();

timerUpdateDisplay();
