// ═══════════════════════════════════════
// QUIZ GENERATION
// ═══════════════════════════════════════
function updateCheckbox(el) {
  el.closest('.checkbox-item').classList.toggle('checked', el.checked);
}

async function generateQuiz() {
  if (!state.apiKey && Object.keys(state.fileContents).length > 0) {
    openModal('apiModal'); showToast('Please configure your OpenRouter API key first', 'error'); return;
  }
  const difficulty = document.getElementById('difficultySelect').value;
  const qCount = parseInt(document.getElementById('questionCountSelect').value);
  const focus = document.getElementById('focusTopicSelect').value;
  const mode = document.getElementById('quizModeSelect').value;
  const mcEnabled = document.querySelector('#chk-mc input').checked;
  const tfEnabled = document.querySelector('#chk-tf input').checked;
  const fillEnabled = document.querySelector('#chk-fill input').checked;
  const shortEnabled = document.querySelector('#chk-short input').checked;
  const enabledTypes = [mcEnabled&&'mc',tfEnabled&&'tf',fillEnabled&&'fill',shortEnabled&&'short'].filter(Boolean);
  if (enabledTypes.length === 0) { showToast('Please select at least one question type', 'error'); return; }
  showLoading('Generating your quiz…', 'Analyzing content with OpenRouter AI…');
  try {
    let questions;
    const hasFileContent = Object.keys(state.fileContents).length > 0;
    if (hasFileContent && state.apiKey) {
      questions = await generateWithGemini(qCount, difficulty, focus, enabledTypes);
    } else {
      questions = generateFromBank(focus, qCount, enabledTypes);
      showToast('Using built-in question bank', 'info');
    }
    if (mode === 'flashcards') { loadFlashcards(questions); navigate('flashcards'); }
    else if (mode === 'both') { loadFlashcards(questions); startQuiz(questions); navigate('quiz'); }
    else { startQuiz(questions); navigate('quiz'); }
    showToast(`${questions.length} questions generated!`, 'success');
  } catch (err) { showToast('Quiz generation failed: ' + err.message, 'error'); }
  finally { hideLoading(); }
}

function generateFromBank(topic, count, types) {
  let bank = [];
  const bankMap = {
    'general': Object.values(QUESTION_BANKS).flat(),
    'nec': QUESTION_BANKS.nec,
    'ohm': [...(QUESTION_BANKS.ohm||[]), ...(QUESTION_BANKS.y1_tech_math||[])],
    'load': QUESTION_BANKS.load,
    'conduit': [...(QUESTION_BANKS.conduit||[]), ...(QUESTION_BANKS.y1_bending||[])],
    'motors': [...(QUESTION_BANKS.motors||[]), ...(QUESTION_BANKS.y2_motor||[])],
    'grounding': QUESTION_BANKS.grounding,
    'safety': [...(QUESTION_BANKS.safety||[]), ...(QUESTION_BANKS.y1_const_tech||[])],
    'wiring': QUESTION_BANKS.wiring,
  };
  bank = bankMap[topic] || (QUESTION_BANKS[topic] ? QUESTION_BANKS[topic] : Object.values(QUESTION_BANKS).flat());
  const filtered = bank.filter(q => types.includes(q.type));
  const pool = filtered.length > 0 ? filtered : bank;
  return shuffle(pool).slice(0, Math.min(count, pool.length));
}

async function generateWithGemini(count, difficulty, focus, types) {
  const rawContent = Object.values(state.fileContents).filter(c => !c.startsWith('IMAGE_DATA:')).join('\n').replace(/\s+/g, ' ').trim();
  const sentences = [...new Set(rawContent.split(/(?<=[.!?])\s+/))];
  const content = sentences.join(' ').slice(0, 3000);
  const typeDesc = types.map(t => ({mc:'multiple_choice',tf:'true_false',fill:'fill_in_blank',short:'short_answer'}[t])).join(', ');
  const diffDesc = {year1:'1st year apprentice',year2:'2nd year apprentice',year3:'3rd year apprentice',year4:'4th year apprentice',journeyman:'journeyman level'}[difficulty];
  const prompt = `You are an IBEW electrical exam question writer. Generate exactly ${count} questions on ${focus} at ${diffDesc} level. OUTPUT: Valid JSON array only. No markdown, no preamble, no explanation outside the array. ALLOWED TYPES: ${types.join(', ')} — generate ONLY these types, no others. SCHEMA:${types.includes('mc') ? ' {"type":"mc","q":"Question under 20 words?","opts":["A","B","C","D"],"ans":0,"nec":"NEC XXX.XX","exp":"Under 25 word explanation."}' : ''}${types.includes('tf') ? ' {"type":"tf","q":"Statement.","opts":["True","False"],"ans":0,"nec":"NEC XXX.XX","exp":"Under 25 word explanation."}' : ''}${types.includes('fill') ? ' {"type":"fill","q":"The ___ is...","ans":"1-3 word answer","nec":"NEC XXX.XX","exp":"Under 25 word explanation."}' : ''} STRICT RULE: ONLY generate question types listed in ALLOWED TYPES. If only mc is listed generate ONLY multiple choice. RULES: 4 plausible options for mc. Fill answers max 3 words. Only include a NEC reference if the question is directly about an NEC code requirement. For math calculations and basic electrical theory leave the nec field as an empty string. No repeated questions. CONTENT: ${content} Generate ${count} questions now:`;
  let lastError;
  for (const model of FREE_MODELS) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${state.apiKey}`,'HTTP-Referer':window.location.href,'X-Title':'Voltage IBEW Study Tool'},body:JSON.stringify({model,max_tokens:4000,messages:[{role:'user',content:prompt}]})});
      const data = await response.json();
      if (!response.ok) {
        const errMsg = data.error?.message || 'API error ' + response.status;
        throw new Error(errMsg);
      }
      const text = data.choices?.[0]?.message?.content || '';
      if (!text.trim()) throw new Error('Empty response from model');
      const cleaned_text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const jsonMatch = cleaned_text.match(/\[[\s\S]*\]/);
      if (!jsonMatch) throw new Error('Could not parse AI response');
      try {
        return JSON.parse(jsonMatch[0]);
      } catch(e) {
        const cleaned = jsonMatch[0]
          .replace(/,\s*}/g, '}')
          .replace(/,\s*\]/g, ']')
          .replace(/[\x00-\x1F\x7F]/g, ' ')
          .replace(/\\'/g, "'")
          .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
          .replace(/:\s*'([^']*)'/g, ': "$1"')
          .replace(/\n/g, ' ')
          .replace(/\t/g, ' ')
          .replace(/\r/g, '')
          .trim();
        try {
          return JSON.parse(cleaned);
        } catch(e2) {
          const match2 = cleaned.match(/\[.*\]/s);
          if (match2) return JSON.parse(match2[0]);
          throw new Error('AI returned malformed JSON — try generating again');
        }
      }
    } catch (err) {
      lastError = err;
      console.warn(`Model ${model} failed:`, err.message);
    }
  }
  throw lastError || new Error('All models failed');
}

function startQuickQuiz(topic) {
  const bank = generateFromBank(topic, 10, ['mc','tf','fill']);
  startQuiz(bank);
  navigate('quiz');
}

// ═══════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════
function startQuiz(questions) {
  state.currentQuiz = questions;
  state.currentQuestion = 0;
  state.answers = new Array(questions.length).fill(null);
  state.timeElapsed = 0;
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => { state.timeElapsed++; updateTimer(); }, 1000);
  renderQuiz();
}

function renderQuiz() {
  const quiz = state.currentQuiz;
  if (!quiz || quiz.length === 0) return;
  const qi = state.currentQuestion;
  const q = quiz[qi];
  const circumference = 2 * Math.PI * 22;
  const progress = (qi / quiz.length) * circumference;
  const container = document.getElementById('quizContainer');
  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-ring"><svg width="52" height="52" viewBox="0 0 52 52"><circle class="ring-bg" cx="26" cy="26" r="22"/><circle class="ring-fill" cx="26" cy="26" r="22" stroke-dasharray="${circumference}" stroke-dashoffset="${circumference-progress}"/></svg><div class="ring-text">${qi+1}/${quiz.length}</div></div>
      <div class="quiz-meta"><div class="quiz-q-label">Question</div><div class="quiz-q-count">${qi+1} of ${quiz.length}</div></div>
      <div class="quiz-timer" id="quizTimer">⏱ 0:00</div>
      <button class="btn btn-ghost btn-sm" onclick="abandonQuiz()">✕ End Quiz</button>
    </div>
    <div class="quiz-card">
      <div class="question-type-badge">${q.type==='mc'?'<span class="badge badge-blue">Multiple Choice</span>':q.type==='tf'?'<span class="badge badge-gold">True / False</span>':q.type==='fill'?'<span class="badge badge-green">Fill in the Blank</span>':'<span class="badge badge-muted">Short Answer</span>'}</div>
      ${q.nec?`<div class="question-nec">📖 ${escHtml(q.nec)}</div>`:''}
      <div class="question-text">${escHtml(q.q)}</div>
      <div id="answerArea">${renderAnswerArea(q,qi)}</div>
      <div class="answer-feedback" id="answerFeedback"></div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-secondary" onclick="prevQuestion()" ${qi===0?'disabled':''}>← Previous</button>
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
        ${quiz.map((_,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${state.answers[i]!==null?'var(--gold)':i===qi?'var(--text)':'var(--border)'};cursor:pointer;" onclick="jumpToQuestion(${i})"></div>`).join('')}
      </div>
      <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()">${qi===quiz.length-1?'🏁 Finish Quiz':'Next →'}</button>
    </div>`;
}

function renderAnswerArea(q, qi) {
  if (q.type==='mc') {
    return `<div class="options-list">${(q.opts||[]).map((o,i)=>`<button class="option-item" onclick="selectOption(${i})" id="opt_${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${escHtml(o)}</button>`).join('')}</div>`;
  } else if (q.type==='tf') {
    return `<div class="tf-options"><button class="tf-btn" onclick="selectTF(0)" id="tf_0">✔ True</button><button class="tf-btn" onclick="selectTF(1)" id="tf_1">✘ False</button></div>`;
  } else if (q.type==='fill') {
    return `<input class="fill-blank-input" id="fillInput" type="text" placeholder="Type your answer…" onkeydown="if(event.key==='Enter')nextQuestion()">`;
  } else {
    return `<textarea class="short-answer-textarea" id="shortInput" placeholder="Write your answer here…"></textarea>`;
  }
}

function selectOption(idx) {
  const qi = state.currentQuestion; state.answers[qi] = idx; const q = state.currentQuiz[qi];
  document.querySelectorAll('.option-item').forEach((el,i) => {el.classList.remove('selected','correct','incorrect');if(i===idx)el.classList.add('selected');});
  showFeedback(q, idx);
}

function selectTF(idx) {
  const qi = state.currentQuestion; state.answers[qi] = idx; const q = state.currentQuiz[qi];
  document.querySelectorAll('.tf-btn').forEach((el,i) => {el.classList.remove('selected','correct','incorrect');if(i===idx)el.classList.add('selected');});
  showFeedback(q, idx);
}

function showFeedback(q, selected) {
  const fb = document.getElementById('answerFeedback');
  if (!fb || !document.getElementById('toggleExplain')?.checked) return;
  const correct = selected === q.ans;
  fb.className = 'answer-feedback shown ' + (correct ? 'correct' : 'incorrect');
  fb.innerHTML = correct ? `✅ <strong>Correct!</strong> ${q.exp?escHtml(q.exp):''}` : `❌ <strong>Incorrect.</strong> The correct answer is <strong>${q.opts?escHtml(q.opts[q.ans]):escHtml(q.ans)}</strong>. ${q.exp?escHtml(q.exp):''}`;
}

function nextQuestion() {
  const qi = state.currentQuestion; const q = state.currentQuiz[qi];
  if (q.type==='fill') { const val = document.getElementById('fillInput')?.value.trim(); state.answers[qi] = val || null; }
  else if (q.type==='short') { const val = document.getElementById('shortInput')?.value.trim(); state.answers[qi] = val || null; }
  else if (q.type==='mc' || q.type==='tf') { if (state.answers[qi] === null) { showToast('Please select an answer', 'info'); return; } }
  if (qi === state.currentQuiz.length - 1) finishQuiz();
  else { state.currentQuestion++; renderQuiz(); }
}

function prevQuestion() { if (state.currentQuestion > 0) { state.currentQuestion--; renderQuiz(); } }
function jumpToQuestion(i) { state.currentQuestion = i; renderQuiz(); }

function updateTimer() {
  const el = document.getElementById('quizTimer');
  if (!el) return;
  const m = Math.floor(state.timeElapsed / 60), s = state.timeElapsed % 60;
  el.textContent = `⏱ ${m}:${s.toString().padStart(2, '0')}`;
}

function abandonQuiz() { clearInterval(state.timerInterval); state.currentQuiz = null; navigate('dashboard'); showToast('Quiz ended', 'info'); }

function finishQuiz() {
  clearInterval(state.timerInterval);
  const quiz = state.currentQuiz;
  let correct = 0;
  quiz.forEach((q, i) => {
    if (q.type === 'mc' || q.type === 'tf') { if (state.answers[i] === q.ans) correct++; }
    else if (q.type === 'fill') { const u = (state.answers[i] || '').toString().toLowerCase().trim(); const c = q.ans.toString().toLowerCase().trim(); if (u === c || u.includes(c)) correct++; }
    else { if (state.answers[i] && state.answers[i].length > 10) correct++; }
  });
  const pct = Math.round((correct / quiz.length) * 100);
  const session = {id: Date.now(), date: new Date().toISOString(), topic: state.currentAISubject || 'Custom Quiz', total: quiz.length, correct, pct, timeElapsed: state.timeElapsed};
  state.sessions.unshift(session);
  localStorage.setItem('voltage_sessions', JSON.stringify(state.sessions));
  trackWrongAnswers(quiz, state.answers);
  state.isReDrill = false;
  renderResults(session, quiz);
}

function renderResults(session, quiz) {
  const grade = session.pct >= 90 ? 'A' : session.pct >= 80 ? 'B' : session.pct >= 70 ? 'C' : session.pct >= 60 ? 'D' : 'F';
  const gradeColor = session.pct >= 70 ? 'var(--success-light)' : session.pct >= 60 ? 'var(--gold)' : 'var(--error-light)';
  const msg = session.pct >= 90 ? 'Outstanding! You nailed it! 🔥' : session.pct >= 80 ? 'Great job! Keep it up!' : session.pct >= 70 ? 'Passing grade. Review missed topics.' : session.pct >= 60 ? 'Close — more study needed.' : 'Back to the books. You\'ve got this.';
  const min = Math.floor(session.timeElapsed / 60), sec = session.timeElapsed % 60;
  const container = document.getElementById('quizContainer');
  container.innerHTML = `
    <div class="results-hero">
      <div class="score-circle" style="--pct:${session.pct}"><div class="score-circle-inner"><div class="score-pct">${session.pct}%</div><div class="score-label">SCORE</div></div></div>
      <div class="results-grade" style="color:${gradeColor}">Grade: ${grade}</div>
      <div class="results-message">${msg}</div>
      <div class="results-stats">
        <div class="results-stat"><div class="results-stat-val" style="color:var(--success-light)">${session.correct}</div><div class="results-stat-label">Correct</div></div>
        <div class="results-stat"><div class="results-stat-val" style="color:var(--error-light)">${session.total - session.correct}</div><div class="results-stat-label">Incorrect</div></div>
        <div class="results-stat"><div class="results-stat-val">${session.total}</div><div class="results-stat-label">Total</div></div>
        <div class="results-stat"><div class="results-stat-val">${min}:${sec.toString().padStart(2, '0')}</div><div class="results-stat-label">Time</div></div>
      </div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
      <button class="btn btn-primary" onclick="startQuiz(state.currentQuiz)">🔁 Retake Quiz</button>
      <button class="btn btn-secondary" onclick="navigate('upload')">📁 New Quiz</button>
      <button class="btn btn-secondary" onclick="navigate('dashboard')">🏠 Dashboard</button>
      <button class="btn btn-secondary" onclick="navigate('progress')">📊 View Progress</button>
    </div>
    <div class="card"><div class="card-header"><div class="card-title">📋 Question Review</div></div>
      <div class="review-list">${quiz.map((q, i) => {
        const isCorrect = q.type === 'mc' || q.type === 'tf' ? state.answers[i] === q.ans : q.type === 'fill' ? (state.answers[i] || '').toString().toLowerCase().includes(q.ans.toString().toLowerCase()) : !!(state.answers[i] && state.answers[i].length > 10);
        const userAnswer = q.type === 'mc' || q.type === 'tf' ? (q.opts?.[state.answers[i]] || 'Not answered') : (state.answers[i] || 'Not answered');
        const correctAnswer = q.type === 'mc' || q.type === 'tf' ? q.opts?.[q.ans] : q.ans;
        return `<div class="review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}">
          <div class="review-q">${i+1}. ${escHtml(q.q)}</div>
          <div class="review-answer">Your answer: <strong>${escHtml(userAnswer)}</strong>${!isCorrect ? ` · Correct: <strong style="color:var(--success-light)">${escHtml(correctAnswer)}</strong>` : ' <span style="color:var(--success-light)">✓</span>'}</div>
          ${q.exp ? `<div style="font-size:12px;color:var(--muted);margin-top:6px;">${escHtml(q.exp)}</div>` : ''}
        </div>`;
      }).join('')}</div>
    </div>`;
  renderDashboard();
}

// ═══════════════════════════════════════
// WRONG ANSWERS TRACKING
// ═══════════════════════════════════════
function getWrongAnswers() { return JSON.parse(localStorage.getItem('voltage_wrong_answers') || '[]'); }
function saveWrongAnswers(arr) { localStorage.setItem('voltage_wrong_answers', JSON.stringify(arr)); updateWrongAnswersBadge(); }

function checkAnswerCorrect(q, answer) {
  if (q.type === 'mc' || q.type === 'tf') return answer === q.ans;
  if (q.type === 'fill') { const u = (answer || '').toString().toLowerCase().trim(); const c = q.ans.toString().toLowerCase().trim(); return u === c || u.includes(c); }
  return !!(answer && answer.length > 10);
}

function detectTopic(q) {
  const nec = (q.nec || '').toLowerCase();
  if (nec.includes('250') || nec.includes('grounding')) return 'Grounding & Bonding';
  if (nec.includes('430') || nec.includes('motor')) return 'Motor Controls';
  if (nec.includes('conduit') || nec.includes('bend')) return 'Conduit Bending';
  if (nec.includes('ohm') || nec.includes('power')) return "Ohm's Law";
  if (nec.includes('osha') || nec.includes('safety')) return 'Safety';
  return 'General';
}

function trackWrongAnswers(quiz, answers) {
  let wa = getWrongAnswers();
  quiz.forEach((q, i) => {
    const ok = checkAnswerCorrect(q, answers[i]);
    const qKey = q.q.slice(0, 100);
    if (ok && state.isReDrill) {
      wa = wa.filter(w => w.qKey !== qKey);
    } else if (!ok) {
      const ex = wa.find(w => w.qKey === qKey);
      if (ex) { ex.attempts = (ex.attempts || 1) + 1; }
      else { wa.push({qKey, question: q, topic: detectTopic(q), addedAt: new Date().toISOString(), attempts: 1}); }
    }
  });
  saveWrongAnswers(wa);
}

function updateWrongAnswersBadge() {
  const count = getWrongAnswers().length;
  const badge = document.getElementById('wrongAnswersBadge');
  if (!badge) return;
  badge.textContent = count > 0 ? count : '';
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

function renderWrongAnswers() {
  const wa = getWrongAnswers();
  const container = document.getElementById('wrongAnswersContent');
  if (!container) return;
  if (!wa.length) { container.innerHTML = '<div class="empty-state"><span class="empty-icon">✅</span><div class="empty-title">No wrong answers saved</div></div>'; return; }
  const grouped = {};
  wa.forEach(w => { const t = w.topic || 'General'; if (!grouped[t]) grouped[t] = []; grouped[t].push(w); });
  let html = '';
  Object.entries(grouped).forEach(([topic, items]) => {
    html += `<div class="wrong-topic-group"><div class="wrong-topic-header">${escHtml(topic)} <span class="badge badge-red">${items.length}</span></div>`;
    items.forEach(w => {
      const q = w.question;
      const correct = (q.type === 'mc' || q.type === 'tf') ? (q.opts?.[q.ans] || q.ans) : q.ans;
      html += `<div class="review-item incorrect-item" style="margin-bottom:8px;"><div class="review-q">${escHtml(q.q)}</div><div class="review-answer" style="margin-top:6px;">Correct answer: <strong style="color:var(--success-light)">${escHtml(String(correct))}</strong></div>${q.exp ? `<div style="font-size:12px;color:var(--muted);margin-top:4px;">${escHtml(q.exp)}</div>` : ''}${w.attempts > 1 ? `<div style="font-size:11px;color:var(--error-light);margin-top:4px;">⚠ Missed ${w.attempts}x</div>` : ''}</div>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

function startReDrill() {
  const wa = getWrongAnswers();
  if (!wa.length) { showToast('No wrong answers to re-drill!', 'info'); return; }
  state.isReDrill = true;
  startQuiz(wa.map(w => w.question));
  navigate('quiz');
  showToast('Re-Drill started — ' + wa.length + ' questions', 'info');
}

function clearWrongAnswers() {
  if (!confirm('Clear all wrong answers?')) return;
  saveWrongAnswers([]);
  renderWrongAnswers();
  showToast('Wrong answers cleared', 'info');
}
