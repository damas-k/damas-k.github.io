// ═══════════════════════════════════════
// AI ASSISTANT
// ═══════════════════════════════════════
function updateAISubjectLock() {
  const el = document.getElementById('aiSubjectLock');
  if (!el) return;
  if (state.currentAISubject) {
    el.innerHTML = `🔒 Subject Lock: <strong>${escHtml(state.currentAISubject)}</strong>`;
  } else {
    el.textContent = '🔒 Subject Lock: None — start a quiz first to lock a subject';
  }
}

function aiClearChat() {
  state.aiChatHistory = [];
  const msgs = document.getElementById('aiMessages');
  if (msgs) msgs.innerHTML = `<div class="ai-msg"><div class="ai-bubble">Chat cleared. ${state.currentAISubject ? 'Still locked to <strong>' + escHtml(state.currentAISubject) + '</strong>.' : 'Start a quiz to lock a subject.'}</div></div>`;
}

let lastAICall = 0;

async function aiSend() {
  const input = document.getElementById('aiInput');
  const sendBtn = document.getElementById('aiSendBtn');
  if (!input) return;
  if (sendBtn && sendBtn.disabled) return;
  const userMsg = input.value.trim();
  if (!userMsg) return;
  const _now = Date.now();
  if (_now - lastAICall < 2000) { showToast('Please wait a moment...', 'info'); return; }
  lastAICall = _now;
  if (!state.apiKey) {
    showToast('Configure your OpenRouter API key to use the AI assistant', 'error');
    openModal('apiModal');
    return;
  }
  input.value = '';
  sendBtn.disabled = true;
  const msgs = document.getElementById('aiMessages');
  msgs.innerHTML += `<div class="ai-msg user"><div class="ai-bubble">${escHtml(userMsg)}</div></div>`;
  const typingId = 'typing-' + Date.now();
  msgs.innerHTML += `<div class="ai-msg" id="${typingId}"><div class="ai-bubble"><div class="ai-bubble-typing"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div></div>`;
  msgs.scrollTop = msgs.scrollHeight;
  try {
    const subject = state.currentAISubject || 'IBEW Electrical Apprenticeship General';
    const systemInstruction = `You are a strict IBEW Local 134 apprenticeship instructor assistant. You ONLY answer questions directly related to "${subject}" as taught in the IBEW Local 134 apprenticeship program. If the question is not related to "${subject}", politely decline with something like "I can only help with ${subject} right now. Switch topics in the sidebar to ask about something else." Keep answers concise, practical, and trade-focused. Use specific NEC references when applicable.`;
    let aiText = '';
    let lastError;
    for (const model of FREE_MODELS) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${state.apiKey}`, 'HTTP-Referer': window.location.href, 'X-Title': 'Voltage IBEW Study Tool'},
          body: JSON.stringify({model, max_tokens: 400, messages: [
            {role: 'system', content: systemInstruction},
            ...state.aiChatHistory.slice(-10).map(h => ({role: h.role === 'model' ? 'assistant' : h.role, content: h.text.slice(0, 500)})),
            {role: 'user', content: userMsg}
          ]})
        });
        const data = await response.json();
        if (!response.ok) { const errMsg = data.error?.message || 'API error ' + response.status; throw new Error(errMsg); }
        const content = data.choices?.[0]?.message?.content?.trim();
        if (content) { aiText = content; break; }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${model} failed:`, err.message);
      }
    }
    if (!aiText) { aiText = 'No response — try again.'; }
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();
    msgs.innerHTML += `<div class="ai-msg"><div class="ai-bubble">${escHtml(aiText).replace(/\n/g, '<br>')}</div></div>`;
    state.aiChatHistory.push({role: 'user', text: userMsg});
    state.aiChatHistory.push({role: 'model', text: aiText});
    if (state.aiChatHistory.length > 20) state.aiChatHistory = state.aiChatHistory.slice(-20);
  } catch (err) {
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();
    msgs.innerHTML += `<div class="ai-msg"><div class="ai-bubble" style="color:var(--error-light);">⚠ Error: ${escHtml(err.message)}</div></div>`;
  }
  sendBtn.disabled = false;
  msgs.scrollTop = msgs.scrollHeight;
}
