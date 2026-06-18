// ═══════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════
function loadFlashcards(questions) {
  state.currentFlashcards = questions;
  state.currentCardIndex = 0;
  state.cardKnown = new Array(questions.length).fill(null);
  renderFlashcards();
}

function renderFlashcards() {
  const cards = state.currentFlashcards;
  if (!cards || cards.length === 0) return;
  const i = state.currentCardIndex;
  const c = cards[i];
  const question = c.q;
  const answer = c.type === 'mc' ? `${c.opts?.[c.ans] || c.ans}` : c.ans;
  const container = document.getElementById('flashcardContainer');
  container.innerHTML = `<div class="flashcard-wrap">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
      <div class="section-title" style="font-size:17px;">Flashcard Review</div>
      <div class="flex gap-8">
        <button class="btn btn-secondary btn-sm" onclick="navigate('quiz');startQuiz(state.currentFlashcards)">Switch to Quiz Mode</button>
        <button class="btn btn-ghost btn-sm" onclick="navigate('dashboard')">✕ Exit</button>
      </div>
    </div>
    <div class="flashcard-container" onclick="flipCard()">
      <div class="flashcard" id="flashcard">
        <div class="card-face card-front">
          <div class="card-face-label">❓ Question ${i+1} of ${cards.length}</div>
          <div class="card-text">${escHtml(question)}</div>
          ${c.nec ? `<div class="card-nec">📖 ${escHtml(c.nec)}</div>` : ''}
          <div class="card-hint">Tap to reveal answer</div>
        </div>
        <div class="card-face card-back">
          <div class="card-face-label back">✅ Answer</div>
          <div class="card-text">${escHtml(answer)}</div>
          ${c.exp ? `<div class="card-hint" style="margin-top:16px;font-size:12px;color:var(--muted);">${escHtml(c.exp.slice(0,120))}${c.exp.length > 120 ? '…' : ''}</div>` : ''}
        </div>
      </div>
    </div>
    <div class="flashcard-controls">
      <button class="btn btn-danger btn-sm" onclick="markCard(false)">✘ Still Learning</button>
      <div class="fc-nav">
        <button class="btn btn-icon btn-secondary" onclick="prevCard()" ${i === 0 ? 'disabled' : ''}>←</button>
        <span class="fc-counter">${i+1} / ${cards.length}</span>
        <button class="btn btn-icon btn-secondary" onclick="nextCard()" ${i === cards.length - 1 ? 'disabled' : ''}>→</button>
      </div>
      <button class="btn btn-secondary btn-sm" style="border-color:rgba(74,222,128,0.4);color:var(--success-light);" onclick="markCard(true)">✓ Got It</button>
    </div>
    <div class="fc-progress">${cards.map((_, j) => `<div class="fc-dot ${j === i ? 'current' : state.cardKnown[j] === true ? 'known' : state.cardKnown[j] === false ? 'unknown' : ''}" id="fcd_${j}"></div>`).join('')}</div>
    <div style="text-align:center;margin-top:16px;">
      <span class="badge badge-green">✓ ${state.cardKnown.filter(k => k === true).length} Known</span>
      <span class="badge badge-red" style="margin-left:8px;">✘ ${state.cardKnown.filter(k => k === false).length} Learning</span>
      <span class="badge badge-muted" style="margin-left:8px;">— ${state.cardKnown.filter(k => k === null).length} Unseen</span>
    </div>
  </div>`;
}

function flipCard() {
  document.getElementById('flashcard')?.classList.toggle('flipped');
}

function nextCard() {
  if (state.currentCardIndex < state.currentFlashcards.length - 1) {
    state.currentCardIndex++;
    renderFlashcards();
  }
}

function prevCard() {
  if (state.currentCardIndex > 0) {
    state.currentCardIndex--;
    renderFlashcards();
  }
}

function markCard(known) {
  state.cardKnown[state.currentCardIndex] = known;
  if (state.currentCardIndex < state.currentFlashcards.length - 1) state.currentCardIndex++;
  renderFlashcards();
  if (state.cardKnown.every(k => k !== null)) {
    const kc = state.cardKnown.filter(k => k === true).length;
    showToast(`Done! ${kc}/${state.currentFlashcards.length} known`, 'success');
  }
}
