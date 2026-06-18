// ═══════════════════════════════════════
// DASHBOARD & PROGRESS
// ═══════════════════════════════════════
function renderDashboard() {
  const sessions = state.sessions;
  renderQuickStart();
  document.getElementById('statQuizzes').textContent = sessions.length;
  document.getElementById('statFiles').textContent = state.uploadedFiles.length;
  if (sessions.length > 0) {
    const recent = sessions.slice(0, 5);
    const avg = Math.round(recent.reduce((a, s) => a + s.pct, 0) / recent.length);
    document.getElementById('statAvgScore').textContent = avg + '%';
  }
  let streak = 0;
  const sessionDays = [...new Set(sessions.map(s => new Date(s.date).toDateString()))];
  let checkDay = new Date();
  for (let i = 0; i < 30; i++) {
    if (sessionDays.includes(checkDay.toDateString())) {
      streak++;
      checkDay.setDate(checkDay.getDate() - 1);
    } else break;
  }
  document.getElementById('statStreak').textContent = streak;
  const list = document.getElementById('dashboardSessionList');
  if (sessions.length === 0) {
    list.innerHTML = `<div class="empty-state" style="padding:24px;"><span class="empty-icon">📊</span><div class="empty-title">No sessions yet</div></div>`;
  } else {
    list.innerHTML = sessions.slice(0, 4).map(s => {
      const cls = s.pct >= 80 ? 'high' : s.pct >= 60 ? 'mid' : 'low';
      return `<div class="session-item"><div class="session-score-badge ${cls}">${s.pct}%</div><div class="session-info"><div class="session-name">${escHtml(s.topic)}</div><div class="session-date">${new Date(s.date).toLocaleDateString()} · ${s.correct}/${s.total} correct</div></div><span class="badge ${s.pct >= 70 ? 'badge-green' : 'badge-red'}">${s.pct >= 70 ? 'Pass' : 'Review'}</span></div>`;
    }).join('');
  }
  renderDashboardFiles();
}

function renderDashboardFiles() {
  const list = document.getElementById('dashboardFileList');
  if (!list) return;
  if (state.uploadedFiles.length === 0) {
    list.innerHTML = `<div class="empty-state" style="padding:24px;"><span class="empty-icon">📂</span><div class="empty-title">No files yet</div></div>`;
  } else {
    list.innerHTML = state.uploadedFiles.slice(0, 4).map(f => `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);"><span>${getFileIcon(f.type)}</span><div style="flex:1;min-width:0;"><div style="font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(f.name)}</div></div></div>`).join('');
  }
}

function renderProgress() {
  const sessions = state.sessions;
  document.getElementById('pStatQuizzes').textContent = sessions.length;
  document.getElementById('pStatQuestions').textContent = sessions.reduce((a, s) => a + s.total, 0);
  if (sessions.length > 0) {
    const best = Math.max(...sessions.map(s => s.pct));
    const avg = Math.round(sessions.reduce((a, s) => a + s.pct, 0) / sessions.length);
    document.getElementById('pStatBest').textContent = best + '%';
    document.getElementById('pStatAvg').textContent = avg + '%';
  }
  const ctx = document.getElementById('progressChart').getContext('2d');
  if (state.progressChart) state.progressChart.destroy();
  const chartData = sessions.slice(0, 10).reverse();
  state.progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.map((_, i) => `Quiz ${i + 1}`),
      datasets: [{
        label: 'Score %',
        data: chartData.map(s => s.pct),
        borderColor: '#c9a84c',
        backgroundColor: 'rgba(201,168,76,0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#c9a84c',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {legend: {display: false}},
      scales: {
        y: {min: 0, max: 100, grid: {color: 'rgba(255,255,255,0.05)'}, ticks: {color: '#6b7a99'}},
        x: {grid: {color: 'rgba(255,255,255,0.05)'}, ticks: {color: '#6b7a99'}}
      }
    }
  });
  const list = document.getElementById('progressSessionList');
  if (sessions.length === 0) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon">📊</span><div class="empty-title">No sessions recorded</div></div>`;
    return;
  }
  list.innerHTML = sessions.map(s => {
    const cls = s.pct >= 80 ? 'high' : s.pct >= 60 ? 'mid' : 'low';
    const m = Math.floor(s.timeElapsed / 60), sec = s.timeElapsed % 60;
    return `<div class="session-item"><div class="session-score-badge ${cls}">${s.pct}%</div><div class="session-info"><div class="session-name">${escHtml(s.topic)}</div><div class="session-date">${new Date(s.date).toLocaleString()} · ${s.correct}/${s.total} correct · ${m}:${sec.toString().padStart(2, '0')}</div></div><span class="badge ${s.pct >= 70 ? 'badge-green' : s.pct >= 60 ? 'badge-gold' : 'badge-red'}">${s.pct}%</span></div>`;
  }).join('');
}

function clearProgress() {
  if (!confirm('Clear all session history?')) return;
  state.sessions = [];
  localStorage.removeItem('voltage_sessions');
  renderDashboard();
  renderProgress();
  showToast('Progress cleared', 'info');
}

// ═══════════════════════════════════════
// API KEY MANAGEMENT
// ═══════════════════════════════════════
function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key) { showToast('Please enter a valid API key', 'error'); return; }
  state.apiKey = key;
  localStorage.setItem('voltage_api_key', key);
  closeModal('apiModal');
  updateApiKeyStatus();
  showToast('API key saved!', 'success');
}

function updateApiKeyStatus() {
  const el = document.getElementById('apiKeyStatus');
  if (!el) return;
  if (state.apiKey) {
    el.className = 'badge badge-green';
    el.textContent = '✓ Configured';
    document.getElementById('apiKeyInput').value = state.apiKey;
  } else {
    el.className = 'badge badge-muted';
    el.textContent = 'Not Set';
  }
}

function updateYear() {
  const year = document.getElementById('yearSelect').value;
  state.year = year;
  localStorage.setItem('voltage_year', year);
  document.getElementById('sidebarUserRole').textContent = year;
  document.getElementById('topbarYearBadge').textContent = year;
  document.getElementById('difficultySelect').value = {'Year 1': 'year1', 'Year 2': 'year2', 'Year 3': 'year3', 'Year 4': 'year4', 'Year 5': 'year4', 'Journeyman': 'journeyman'}[year] || 'year1';
  buildTopicsGrid();
  renderQuickStart();
  showToast('Year updated to ' + year, 'success');
}
