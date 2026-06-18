// ═══════════════════════════════════════
// NOTES MANAGEMENT
// ═══════════════════════════════════════
function getNotes() { return JSON.parse(localStorage.getItem('voltage_notes') || '{}'); }
function saveNotes(notes) { localStorage.setItem('voltage_notes', JSON.stringify(notes)); }

function getNotesTopics() {
  const numYear = getNumericYear();
  const isJourneyman = numYear >= 99;
  const seen = new Set();
  const topics = [{id: 'general', displayName: 'My Notes', icon: '📓'}];
  ALL_YEAR_TOPICS.forEach(t => {
    if (t.year >= 99 && !isJourneyman) return;
    if (!isJourneyman && t.year > numYear) return;
    if (seen.has(t.displayName)) return;
    seen.add(t.displayName);
    topics.push({id: t.id, displayName: t.displayName, icon: t.icon});
  });
  return topics;
}

function renderNotes() {
  const container = document.getElementById('notesContainer');
  if (!container) return;
  const notes = getNotes();
  const topics = getNotesTopics();
  let tabHtml = '<div class="tab-bar">';
  topics.forEach((t, i) => {
    tabHtml += `<button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchNoteTab('${t.id}',this)">${t.icon} ${escHtml(t.displayName)}</button>`;
  });
  tabHtml += '</div>';
  let panelsHtml = '';
  topics.forEach((t, i) => {
    const note = notes[t.id] || {text: '', updatedAt: null};
    const ts = note.updatedAt ? 'Last saved: ' + new Date(note.updatedAt).toLocaleString() : 'Not saved yet';
    panelsHtml += `<div class="tab-panel ${i === 0 ? 'active' : ''}" id="note-panel-${t.id}"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px;"><div style="font-size:12px;color:var(--muted);" id="note-ts-${t.id}">${escHtml(ts)}</div><div style="display:flex;gap:8px;"><button class="btn btn-primary btn-sm" onclick="saveNote('${t.id}')">💾 Save</button><button class="btn btn-danger btn-sm" onclick="clearNote('${t.id}')">🗑️ Clear</button></div></div><textarea id="note-text-${t.id}" class="notes-textarea" placeholder="Type your notes for ${escHtml(t.displayName)} here…">${escHtml(note.text || '')}</textarea></div>`;
  });
  container.innerHTML = tabHtml + panelsHtml;
}

function switchNoteTab(topicId, btn) {
  document.querySelectorAll('#notesContainer .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#notesContainer .tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('note-panel-' + topicId);
  if (panel) panel.classList.add('active');
}

function saveNote(topicId) {
  const ta = document.getElementById('note-text-' + topicId);
  if (!ta) return;
  const notes = getNotes();
  notes[topicId] = {text: ta.value, updatedAt: new Date().toISOString()};
  saveNotes(notes);
  const ts = document.getElementById('note-ts-' + topicId);
  if (ts) ts.textContent = 'Last saved: ' + new Date().toLocaleString();
  showToast('Note saved!', 'success');
}

function clearNote(topicId) {
  if (!confirm('Clear this note?')) return;
  const ta = document.getElementById('note-text-' + topicId);
  if (ta) ta.value = '';
  const notes = getNotes();
  notes[topicId] = {text: '', updatedAt: new Date().toISOString()};
  saveNotes(notes);
  const ts = document.getElementById('note-ts-' + topicId);
  if (ts) ts.textContent = 'Last saved: ' + new Date().toLocaleString();
  showToast('Note cleared', 'info');
}
