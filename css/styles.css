:root {
  --navy: #0a1628;
  --navy-light: #0f1f3d;
  --charcoal: #131c2e;
  --card: #172035;
  --card-hover: #1d2a45;
  --border: #243050;
  --border-light: #2d3a5a;
  --gold: #c9a84c;
  --gold-light: #e2c472;
  --gold-dim: rgba(201,168,76,0.15);
  --cream: #f5f0e8;
  --muted: #6b7a99;
  --muted-light: #8892aa;
  --text: #dde3f0;
  --success: #2e7d5e;
  --success-light: #4ade80;
  --error: #c0392b;
  --error-light: #f87171;
  --warning: #d97706;
  --info: #2563eb;
  --radius: 10px;
  --radius-lg: 16px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--navy);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--charcoal); }
::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 3px; }

.view { display: none; min-height: 100vh; }
.view.active { display: flex; flex-direction: column; }

/* ════ LOGIN ════ */
#view-login {
  align-items: center; justify-content: center;
  background: radial-gradient(ellipse at 30% 20%, #1a2a4a 0%, var(--navy) 60%),
              radial-gradient(ellipse at 70% 80%, #0d1f36 0%, transparent 50%);
  position: relative; overflow: hidden;
}
#view-login::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px);
  background-size: 60px 60px; pointer-events: none;
}
.login-card {
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 52px 44px; width: 100%; max-width: 420px; text-align: center;
  box-shadow: var(--shadow), 0 0 80px rgba(201,168,76,0.05); position: relative; z-index: 1;
}
.brand-wordmark { font-size: 11px; font-weight: 600; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); margin-bottom: 32px; opacity: 0.85; }
.login-logo { width: 64px; height: 64px; background: linear-gradient(135deg, var(--gold) 0%, #a07830 100%); border-radius: 16px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 8px 32px rgba(201,168,76,0.3); }
.login-title { font-size: 26px; font-weight: 700; color: var(--cream); letter-spacing: -0.02em; margin-bottom: 6px; }
.login-subtitle { font-size: 13px; color: var(--muted); margin-bottom: 36px; line-height: 1.5; }
.divider-text { position: relative; color: var(--muted); font-size: 12px; letter-spacing: 0.08em; margin: 24px 0; }
.divider-text::before, .divider-text::after { content: ''; position: absolute; top: 50%; width: 40%; height: 1px; background: var(--border); }
.divider-text::before { left: 0; } .divider-text::after { right: 0; }
.btn-google { width: 100%; padding: 13px 20px; background: #fff; color: #1a1a2e; border: none; border-radius: var(--radius); font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.2s; box-shadow: var(--shadow-sm); }
.btn-google:hover { background: #f1f3f4; transform: translateY(-1px); box-shadow: var(--shadow); }
.google-icon { width: 18px; height: 18px; flex-shrink: 0; }
.login-footer { margin-top: 32px; font-size: 11px; color: var(--muted); letter-spacing: 0.02em; }

/* ════ APP SHELL ════ */
#view-app { flex-direction: row; }
.sidebar { width: 240px; min-height: 100vh; background: var(--charcoal); border-right: 1px solid var(--border); display: flex; flex-direction: column; flex-shrink: 0; position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; transition: transform 0.3s; }
.sidebar-logo { padding: 24px 20px 20px; border-bottom: 1px solid var(--border); }
.sidebar-brand { font-size: 18px; font-weight: 700; color: var(--cream); letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; }
.sidebar-brand-icon { width: 32px; height: 32px; background: linear-gradient(135deg, var(--gold) 0%, #a07830 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.sidebar-tagline { font-size: 10px; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; margin-left: 42px; }
.sidebar-nav { flex: 1; padding: 16px 12px; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }
.nav-section-label { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); padding: 12px 8px 6px; }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; cursor: pointer; color: var(--muted-light); font-size: 13.5px; font-weight: 500; transition: all 0.15s; border: 1px solid transparent; user-select: none; }
.nav-item:hover { background: var(--card); color: var(--text); }
.nav-item.active { background: var(--gold-dim); color: var(--gold); border-color: rgba(201,168,76,0.2); }
.nav-item .nav-icon { font-size: 16px; width: 20px; text-align: center; }
.sidebar-user { padding: 16px; border-top: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
.user-avatar { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--gold) 0%, #a07830 100%); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: var(--navy); flex-shrink: 0; overflow: hidden; }
.user-avatar img { width: 100%; height: 100%; object-fit: cover; }
.user-info { flex: 1; min-width: 0; }
.user-name { font-size: 13px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.user-role { font-size: 11px; color: var(--muted); }
.btn-signout { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 16px; padding: 4px; border-radius: 4px; transition: color 0.2s; }
.btn-signout:hover { color: var(--error-light); }

.main-content { flex: 1; margin-left: 240px; min-height: 100vh; display: flex; flex-direction: column; }
.topbar { background: var(--charcoal); border-bottom: 1px solid var(--border); padding: 14px 28px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
.topbar-title { font-size: 16px; font-weight: 700; color: var(--cream); letter-spacing: -0.01em; }
.topbar-actions { display: flex; align-items: center; gap: 10px; }
.btn-hamburger { display: none; background: none; border: 1px solid var(--border); color: var(--text); padding: 7px 10px; border-radius: 7px; cursor: pointer; font-size: 16px; }
.page-inner { flex: 1; padding: 28px; max-width: 1100px; width: 100%; margin: 0 auto; }
.page-section { display: none; }
.page-section.active { display: block; }

/* ════ COMPONENTS ════ */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 10px 18px; border-radius: var(--radius); font-size: 13.5px; font-weight: 600; cursor: pointer; border: 1px solid transparent; transition: all 0.18s; white-space: nowrap; }
.btn:disabled { opacity: 0.45; cursor: not-allowed; }
.btn-primary { background: var(--gold); color: var(--navy); border-color: var(--gold); }
.btn-primary:hover:not(:disabled) { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(201,168,76,0.3); }
.btn-secondary { background: var(--card); color: var(--text); border-color: var(--border); }
.btn-secondary:hover:not(:disabled) { background: var(--card-hover); border-color: var(--border-light); }
.btn-ghost { background: none; color: var(--muted-light); border-color: transparent; }
.btn-ghost:hover:not(:disabled) { background: var(--card); color: var(--text); }
.btn-danger { background: rgba(192,57,43,0.15); color: var(--error-light); border-color: rgba(192,57,43,0.3); }
.btn-danger:hover:not(:disabled) { background: rgba(192,57,43,0.25); }
.btn-sm { padding: 7px 12px; font-size: 12.5px; }
.btn-lg { padding: 14px 28px; font-size: 15px; }
.btn-full { width: 100%; }
.btn-icon { padding: 8px; width: 36px; height: 36px; }
.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; }
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.card-title { font-size: 14px; font-weight: 700; color: var(--cream); letter-spacing: -0.01em; display: flex; align-items: center; gap: 8px; }
.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.03em; }
.badge-gold { background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(201,168,76,0.25); }
.badge-blue { background: rgba(37,99,235,0.15); color: #60a5fa; border: 1px solid rgba(37,99,235,0.25); }
.badge-green { background: rgba(46,125,94,0.15); color: var(--success-light); border: 1px solid rgba(46,125,94,0.25); }
.badge-red { background: rgba(192,57,43,0.15); color: var(--error-light); border: 1px solid rgba(192,57,43,0.25); }
.badge-muted { background: rgba(107,122,153,0.15); color: var(--muted-light); border: 1px solid rgba(107,122,153,0.2); }
.section-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
.section-title { font-size: 21px; font-weight: 700; color: var(--cream); letter-spacing: -0.02em; line-height: 1.2; }
.section-desc { font-size: 13px; color: var(--muted); margin-top: 4px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.stat-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px 20px; }
.stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.stat-value { font-size: 28px; font-weight: 700; color: var(--cream); letter-spacing: -0.02em; line-height: 1; }
.stat-sub { font-size: 12px; color: var(--muted); margin-top: 6px; }
.stat-icon { font-size: 20px; margin-bottom: 10px; display: block; }

/* Drop zone */
.drop-zone { border: 2px dashed var(--border-light); border-radius: var(--radius-lg); padding: 48px 24px; text-align: center; cursor: pointer; transition: all 0.2s; background: rgba(201,168,76,0.02); position: relative; }
.drop-zone:hover, .drop-zone.drag-over { border-color: var(--gold); background: var(--gold-dim); }
.drop-zone input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
.drop-icon { font-size: 40px; margin-bottom: 14px; display: block; }
.drop-title { font-size: 16px; font-weight: 600; color: var(--cream); margin-bottom: 6px; }
.drop-desc { font-size: 13px; color: var(--muted); }
.drop-formats { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 14px; }
.file-list { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
.file-item { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px; display: flex; align-items: center; gap: 12px; }
.file-icon { font-size: 22px; flex-shrink: 0; }
.file-info { flex: 1; min-width: 0; }
.file-name { font-size: 13px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.file-meta { font-size: 11px; color: var(--muted); margin-top: 2px; }
.file-status { font-size: 12px; font-weight: 600; }
.file-status.ready { color: var(--success-light); } .file-status.processing { color: var(--gold); } .file-status.error { color: var(--error-light); }
.progress-bar-wrap { background: var(--border); border-radius: 4px; height: 4px; margin-top: 6px; overflow: hidden; }
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--gold), var(--gold-light)); border-radius: 4px; transition: width 0.3s; }

/* Settings */
.settings-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label { font-size: 12px; font-weight: 600; color: var(--muted-light); letter-spacing: 0.05em; text-transform: uppercase; }
.form-select, .form-input { background: var(--navy-light); border: 1px solid var(--border); border-radius: 8px; color: var(--text); padding: 10px 12px; font-size: 13.5px; outline: none; transition: border-color 0.2s; width: 100%; }
.form-select:focus, .form-input:focus { border-color: var(--gold); }
.form-select option { background: var(--charcoal); }
.checkbox-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.checkbox-item { display: flex; align-items: center; gap: 8px; padding: 9px 12px; background: var(--navy-light); border: 1px solid var(--border); border-radius: 8px; cursor: pointer; transition: all 0.15s; font-size: 13px; color: var(--muted-light); }
.checkbox-item input { accent-color: var(--gold); }
.checkbox-item.checked { border-color: rgba(201,168,76,0.3); background: var(--gold-dim); color: var(--text); }

/* Quiz UI */
.quiz-header { background: var(--charcoal); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 16px 20px; margin-bottom: 20px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.quiz-progress-ring { position: relative; width: 52px; height: 52px; flex-shrink: 0; }
.quiz-progress-ring svg { transform: rotate(-90deg); }
.quiz-progress-ring .ring-bg { fill: none; stroke: var(--border); stroke-width: 4; }
.quiz-progress-ring .ring-fill { fill: none; stroke: var(--gold); stroke-width: 4; stroke-linecap: round; transition: stroke-dashoffset 0.4s; }
.ring-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: var(--gold); }
.quiz-meta { flex: 1; }
.quiz-q-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; }
.quiz-q-count { font-size: 17px; font-weight: 700; color: var(--cream); }
.quiz-timer { display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: var(--text); background: var(--navy); padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border); }
.quiz-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; margin-bottom: 16px; }
.question-type-badge { margin-bottom: 12px; }
.question-text { font-size: 17px; font-weight: 600; color: var(--cream); line-height: 1.55; margin-bottom: 22px; }
.question-nec { font-size: 12px; color: var(--gold); margin-bottom: 16px; font-style: italic; }
.options-list { display: flex; flex-direction: column; gap: 10px; }
.option-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; background: var(--navy-light); border: 1px solid var(--border); border-radius: 10px; cursor: pointer; transition: all 0.15s; text-align: left; width: 100%; color: var(--text); font-size: 14px; line-height: 1.45; }
.option-item:hover { border-color: var(--gold); background: var(--gold-dim); }
.option-item.selected { border-color: var(--gold); background: var(--gold-dim); }
.option-item.correct { border-color: var(--success-light); background: rgba(46,125,94,0.15); color: var(--success-light); }
.option-item.incorrect { border-color: var(--error-light); background: rgba(192,57,43,0.15); color: var(--error-light); }
.option-letter { width: 26px; height: 26px; border-radius: 50%; background: var(--border); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; color: var(--muted-light); margin-top: -1px; }
.option-item.selected .option-letter { background: var(--gold); color: var(--navy); }
.option-item.correct .option-letter { background: var(--success-light); color: var(--navy); }
.option-item.incorrect .option-letter { background: var(--error-light); color: #fff; }
.tf-options { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.tf-btn { padding: 18px; border: 1px solid var(--border); border-radius: 10px; background: var(--navy-light); color: var(--text); font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; }
.tf-btn:hover { border-color: var(--gold); background: var(--gold-dim); }
.tf-btn.selected { border-color: var(--gold); background: var(--gold-dim); color: var(--gold); }
.tf-btn.correct { border-color: var(--success-light); background: rgba(46,125,94,0.15); color: var(--success-light); }
.tf-btn.incorrect { border-color: var(--error-light); background: rgba(192,57,43,0.15); color: var(--error-light); }
.fill-blank-input { width: 100%; background: var(--navy-light); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; color: var(--text); font-size: 15px; outline: none; transition: border-color 0.2s; }
.fill-blank-input:focus { border-color: var(--gold); }
.fill-blank-input.correct { border-color: var(--success-light); }
.fill-blank-input.incorrect { border-color: var(--error-light); }
.short-answer-textarea { width: 100%; background: var(--navy-light); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; color: var(--text); font-size: 14px; outline: none; transition: border-color 0.2s; resize: vertical; min-height: 100px; font-family: inherit; line-height: 1.5; }
.short-answer-textarea:focus { border-color: var(--gold); }
.answer-feedback { margin-top: 16px; padding: 14px 16px; border-radius: 10px; font-size: 13.5px; line-height: 1.5; display: none; }
.answer-feedback.correct { background: rgba(46,125,94,0.15); border: 1px solid rgba(74,222,128,0.25); color: var(--success-light); }
.answer-feedback.incorrect { background: rgba(192,57,43,0.15); border: 1px solid rgba(248,113,113,0.25); color: var(--error-light); }
.answer-feedback.shown { display: block; }
.quiz-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }

/* Results */
.results-hero { text-align: center; padding: 40px 24px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 24px; }
.score-circle { width: 140px; height: 140px; border-radius: 50%; background: conic-gradient(var(--gold) 0%, var(--gold) calc(var(--pct) * 1%), var(--border) calc(var(--pct) * 1%)); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; position: relative; }
.score-circle-inner { width: 108px; height: 108px; border-radius: 50%; background: var(--card); display: flex; flex-direction: column; align-items: center; justify-content: center; }
.score-pct { font-size: 30px; font-weight: 800; color: var(--cream); letter-spacing: -0.03em; }
.score-label { font-size: 11px; color: var(--muted); font-weight: 600; }
.results-grade { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 6px; }
.results-message { font-size: 14px; color: var(--muted); margin-bottom: 20px; }
.results-stats { display: flex; justify-content: center; gap: 32px; }
.results-stat { text-align: center; }
.results-stat-val { font-size: 22px; font-weight: 700; color: var(--cream); }
.results-stat-label { font-size: 11px; color: var(--muted); margin-top: 2px; }
.review-list { display: flex; flex-direction: column; gap: 12px; }
.review-item { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; }
.review-item.correct-item { border-left: 3px solid var(--success-light); }
.review-item.incorrect-item { border-left: 3px solid var(--error-light); }
.review-q { font-size: 13.5px; font-weight: 600; color: var(--text); margin-bottom: 8px; }
.review-answer { font-size: 12.5px; color: var(--muted); }
.review-answer strong { color: var(--text); }

/* Flashcards */
.flashcard-wrap { max-width: 680px; margin: 0 auto; }
.flashcard-container { perspective: 1200px; margin-bottom: 24px; height: 360px; }
.flashcard { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
.flashcard.flipped { transform: rotateY(180deg); }
.card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 36px 28px; text-align: center; }
.card-front { background: var(--card); border: 1px solid var(--border); }
.card-back { background: linear-gradient(135deg, #172035 0%, #1d2a45 100%); border: 1px solid rgba(201,168,76,0.3); transform: rotateY(180deg); }
.card-face-label { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 20px; display: flex; align-items: center; gap: 6px; }
.card-face-label.back { color: var(--gold); }
.card-text { font-size: 19px; font-weight: 600; color: var(--cream); line-height: 1.5; }
.card-hint { font-size: 12px; color: var(--muted); margin-top: 20px; }
.card-nec { font-size: 12px; color: var(--gold); margin-top: 12px; }
.flashcard-controls { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 20px; flex-wrap: wrap; }
.fc-nav { display: flex; align-items: center; gap: 16px; }
.fc-counter { font-size: 13px; color: var(--muted); font-weight: 600; }
.fc-progress { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
.fc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); transition: background 0.2s; }
.fc-dot.known { background: var(--success-light); } .fc-dot.unknown { background: var(--error-light); } .fc-dot.current { background: var(--gold); }

/* Progress */
.chart-wrap { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px; }
.chart-title { font-size: 13px; font-weight: 700; color: var(--cream); margin-bottom: 16px; }
.chart-canvas { width: 100% !important; }
.session-list { display: flex; flex-direction: column; gap: 10px; }
.session-item { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.session-score-badge { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; flex-shrink: 0; }
.session-score-badge.high { background: rgba(46,125,94,0.2); color: var(--success-light); }
.session-score-badge.mid { background: rgba(201,168,76,0.15); color: var(--gold); }
.session-score-badge.low { background: rgba(192,57,43,0.15); color: var(--error-light); }
.session-info { flex: 1; min-width: 120px; }
.session-name { font-size: 13px; font-weight: 600; color: var(--text); }
.session-date { font-size: 11px; color: var(--muted); margin-top: 2px; }

/* Settings page */
.settings-section { margin-bottom: 28px; }
.settings-section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }
.settings-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border); gap: 16px; flex-wrap: wrap; }
.settings-row:last-child { border-bottom: none; }
.settings-row-info { flex: 1; }
.settings-row-title { font-size: 13.5px; font-weight: 600; color: var(--text); }
.settings-row-desc { font-size: 12px; color: var(--muted); margin-top: 2px; }
.toggle-wrap { display: flex; align-items: center; gap: 8px; }
.toggle { position: relative; width: 42px; height: 24px; cursor: pointer; }
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle-slider { position: absolute; inset: 0; background: var(--border); border-radius: 24px; transition: 0.2s; }
.toggle-slider::before { content: ''; position: absolute; width: 18px; height: 18px; left: 3px; top: 3px; background: #fff; border-radius: 50%; transition: 0.2s; }
.toggle input:checked + .toggle-slider { background: var(--gold); }
.toggle input:checked + .toggle-slider::before { transform: translateX(18px); }

/* Loading */
.spinner { display: inline-block; width: 20px; height: 20px; border: 2px solid var(--border); border-top-color: var(--gold); border-radius: 50%; animation: spin 0.7s linear infinite; }
.spinner-lg { width: 36px; height: 36px; border-width: 3px; }
@keyframes spin { to { transform: rotate(360deg); } }
.loading-overlay { position: fixed; inset: 0; background: rgba(10,22,40,0.85); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px); gap: 20px; }
.loading-text { font-size: 15px; color: var(--text); font-weight: 600; }
.loading-sub { font-size: 12px; color: var(--muted); }

/* Toast - moved to LEFT to avoid overlap with float buttons */
.toast-container { position: fixed; bottom: 24px; left: 24px; z-index: 2000; display: flex; flex-direction: column; gap: 8px; }
.toast { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px; font-size: 13px; color: var(--text); box-shadow: var(--shadow); display: flex; align-items: center; gap: 10px; max-width: 320px; animation: slideIn 0.25s ease; cursor: pointer; }
.toast.success { border-left: 3px solid var(--success-light); }
.toast.error { border-left: 3px solid var(--error-light); }
.toast.info { border-left: 3px solid var(--gold); }
@keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 500; padding: 20px; backdrop-filter: blur(3px); display: none; }
.modal-overlay.open { display: flex; }
.modal { background: var(--charcoal); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; width: 100%; max-width: 500px; box-shadow: var(--shadow); position: relative; }
.modal-title { font-size: 17px; font-weight: 700; color: var(--cream); margin-bottom: 6px; }
.modal-desc { font-size: 13px; color: var(--muted); margin-bottom: 20px; }
.modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; color: var(--muted); font-size: 20px; cursor: pointer; padding: 4px; border-radius: 4px; transition: color 0.2s; }
.modal-close:hover { color: var(--text); }

/* Empty states */
.empty-state { text-align: center; padding: 48px 24px; color: var(--muted); }
.empty-icon { font-size: 40px; margin-bottom: 12px; display: block; opacity: 0.5; }
.empty-title { font-size: 15px; font-weight: 600; color: var(--muted-light); margin-bottom: 6px; }
.empty-desc { font-size: 13px; }

/* Footer */
.app-footer { text-align: center; padding: 20px; font-size: 11px; color: var(--muted); border-top: 1px solid var(--border); letter-spacing: 0.05em; margin-top: auto; }
.footer-brand { font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); opacity: 0.7; font-size: 10px; }

/* Locked topics */
.locked-topic-card { cursor: default !important; opacity: 0.65; }
.locked-topic-card:hover { transform: none !important; border-color: var(--border) !important; box-shadow: none !important; }
.locked-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: rgba(107,122,153,0.12); border: 1px dashed var(--border-light); border-radius: 8px; font-size: 12px; font-weight: 600; color: var(--muted-light); }
.mega-quiz-bar { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.wrong-topic-group { margin-bottom: 24px; }
.wrong-topic-header { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid var(--border); }
.notes-textarea { width: 100%; background: var(--navy-light); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; color: var(--text); font-size: 14px; outline: none; transition: border-color 0.2s; resize: vertical; min-height: 320px; font-family: inherit; line-height: 1.7; }
.notes-textarea:focus { border-color: var(--gold); }
.tab-bar { display: flex; gap: 0; border-bottom: 1px solid var(--border); margin-bottom: 20px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.tab-btn { padding: 11px 18px; font-size: 13px; font-weight: 600; color: var(--muted); border: none; background: none; cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; transition: all 0.15s; margin-bottom: -1px; }
.tab-btn:hover { color: var(--text); }
.tab-btn.active { color: var(--gold); border-bottom-color: var(--gold); }
.tab-panel { display: none; }
.tab-panel.active { display: block; }

/* Utilities */
@keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); } 50% { box-shadow: 0 0 0 8px rgba(201,168,76,0); } }
.btn-pulse { animation: pulse-gold 2s infinite; }
.shimmer { background: linear-gradient(90deg, var(--card) 25%, var(--card-hover) 50%, var(--card) 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 8px; height: 16px; margin-bottom: 8px; }
@keyframes shimmer { to { background-position: -200% 0; } }
.topic-tag { padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; background: var(--navy-light); border: 1px solid var(--border); color: var(--muted-light); cursor: pointer; transition: all 0.15s; }
.topic-tag.active { background: var(--gold-dim); border-color: rgba(201,168,76,0.3); color: var(--gold); }
.highlight-gold { color: var(--gold); }
.mt-4{margin-top:4px;}.mt-8{margin-top:8px;}.mt-12{margin-top:12px;}.mt-16{margin-top:16px;}.mt-20{margin-top:20px;}.mt-24{margin-top:24px;}
.mb-16{margin-bottom:16px;}.mb-20{margin-bottom:20px;}
.flex{display:flex;}.flex-center{display:flex;align-items:center;}.gap-8{gap:8px;}.gap-12{gap:12px;}.gap-16{gap:16px;}
.w-full{width:100%;}.text-muted{color:var(--muted);}.text-gold{color:var(--gold);}.text-sm{font-size:12.5px;}.fw-600{font-weight:600;}.text-center{text-align:center;}
.separator{border:none;border-top:1px solid var(--border);margin:20px 0;}
.nav-badge { background: var(--error-light); color: #fff; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 10px; margin-left: auto; }

/* ════════════════════════════════════════════
   NEW FEATURE STYLES
════════════════════════════════════════════ */

/* ─── FLOATING ACTION BUTTONS ─── */
.fab-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}
.fab-btn {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid var(--border-light);
  background: var(--charcoal);
  color: var(--gold);
  font-size: 22px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  transition: all 0.2s;
  position: relative;
}
.fab-btn:hover { background: var(--card-hover); border-color: var(--gold); transform: scale(1.1); }
.fab-btn.active { background: var(--gold-dim); border-color: var(--gold); }
.fab-timer-badge {
  position: absolute;
  top: -4px; right: -4px;
  background: var(--error-light);
  color: #fff;
  font-size: 9px; font-weight: 800;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 20px; text-align: center;
  line-height: 1.4;
  display: none;
}

/* ─── FLOATING PANELS ─── */
.float-panel {
  position: fixed;
  bottom: 90px;
  right: 24px;
  z-index: 1400;
  background: var(--charcoal);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  display: none;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s, opacity 0.2s;
}
.float-panel.open { display: flex; }
.float-panel-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  background: var(--navy-light);
  border-bottom: 1px solid var(--border);
  cursor: grab;
  user-select: none;
}
.float-panel-header:active { cursor: grabbing; }
.float-panel-title { font-size: 13px; font-weight: 700; color: var(--cream); display: flex; align-items: center; gap: 8px; }
.float-panel-close { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; padding: 2px 6px; border-radius: 4px; line-height: 1; }
.float-panel-close:hover { color: var(--text); background: var(--border); }

/* ─── CALCULATOR ─── */
#calcPanel { width: 340px; }
.calc-tabs { display: flex; border-bottom: 1px solid var(--border); }
.calc-tab { flex: 1; padding: 9px; font-size: 11.5px; font-weight: 600; color: var(--muted); border: none; background: none; cursor: pointer; transition: all 0.15s; border-bottom: 2px solid transparent; }
.calc-tab.active { color: var(--gold); border-bottom-color: var(--gold); background: var(--gold-dim); }
.calc-tab-panel { display: none; padding: 12px; }
.calc-tab-panel.active { display: block; }
.calc-display {
  background: var(--navy); border: 1px solid var(--border); border-radius: 8px;
  padding: 12px; text-align: right; margin-bottom: 10px;
}
.calc-expr { font-size: 11px; color: var(--muted); min-height: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.calc-result { font-size: 26px; font-weight: 700; color: var(--cream); font-family: monospace; }
.calc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
.calc-btn {
  padding: 11px 4px; border: 1px solid var(--border); border-radius: 7px;
  background: var(--navy-light); color: var(--text); font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.12s; text-align: center;
}
.calc-btn:hover { background: var(--card-hover); border-color: var(--border-light); }
.calc-btn:active { transform: scale(0.93); }
.calc-btn.op { color: var(--gold); }
.calc-btn.fn { font-size: 11px; color: var(--muted-light); }
.calc-btn.eq { background: var(--gold); color: var(--navy); border-color: var(--gold); }
.calc-btn.eq:hover { background: var(--gold-light); }
.calc-btn.clr { color: var(--error-light); }
.calc-btn.span2 { grid-column: span 2; }
.elec-solver { background: var(--navy-light); border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin-bottom: 10px; }
.elec-solver h4 { font-size: 12px; font-weight: 700; color: var(--gold); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
.solver-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 8px; }
.solver-input-group { display: flex; flex-direction: column; gap: 3px; }
.solver-label { font-size: 10px; color: var(--muted); font-weight: 600; letter-spacing: 0.05em; }
.solver-input { background: var(--navy); border: 1px solid var(--border); border-radius: 5px; color: var(--text); padding: 6px 8px; font-size: 13px; font-family: monospace; width: 100%; outline: none; }
.solver-input:focus { border-color: var(--gold); }
.solver-result { background: var(--gold-dim); border: 1px solid rgba(201,168,76,0.3); border-radius: 6px; padding: 8px 10px; font-size: 13px; color: var(--gold); font-weight: 700; text-align: center; min-height: 32px; }
.vd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

/* ─── TIMER ─── */
#timerPanel { width: 300px; }
.timer-display {
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 12px 12px;
}
.timer-ring { position: relative; width: 140px; height: 140px; }
.timer-ring svg { transform: rotate(-90deg); }
.timer-ring .tr-bg { fill: none; stroke: var(--border); stroke-width: 8; }
.timer-ring .tr-fill { fill: none; stroke: var(--gold); stroke-width: 8; stroke-linecap: round; transition: stroke-dashoffset 1s linear, stroke 0.3s; }
.timer-ring .tr-fill.break { stroke: var(--success-light); }
.timer-time { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.timer-count { font-size: 32px; font-weight: 800; color: var(--cream); font-family: monospace; letter-spacing: -0.02em; }
.timer-mode-label { font-size: 10px; color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 2px; }
.timer-sessions { font-size: 12px; color: var(--gold); margin-top: 8px; font-weight: 600; }
.timer-controls { display: flex; gap: 8px; padding: 0 12px 12px; justify-content: center; }
.timer-settings { padding: 10px 12px; border-top: 1px solid var(--border); display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.timer-set-group { display: flex; flex-direction: column; gap: 3px; }
.timer-set-label { font-size: 10px; color: var(--muted); font-weight: 600; }
.timer-set-input { background: var(--navy); border: 1px solid var(--border); border-radius: 5px; color: var(--text); padding: 5px 8px; font-size: 13px; width: 100%; outline: none; }
.timer-set-input:focus { border-color: var(--gold); }

/* ─── AI CHAT ─── */
#aiChatPanel { width: 340px; height: 480px; }
.ai-subject-lock {
  background: var(--gold-dim); border-bottom: 1px solid rgba(201,168,76,0.2);
  padding: 8px 14px; font-size: 11.5px; color: var(--gold); font-weight: 600;
  display: flex; align-items: center; gap: 6px;
}
.ai-messages {
  flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px;
}
.ai-msg { display: flex; gap: 8px; }
.ai-msg.user { flex-direction: row-reverse; }
.ai-bubble { max-width: 82%; padding: 9px 12px; border-radius: 14px; font-size: 13px; line-height: 1.45; color: var(--text); }
.ai-msg:not(.user) .ai-bubble { background: var(--navy-light); border: 1px solid var(--border); border-bottom-left-radius: 4px; }
.ai-msg.user .ai-bubble { background: var(--gold-dim); border: 1px solid rgba(201,168,76,0.25); border-bottom-right-radius: 4px; color: var(--cream); }
.ai-bubble-typing { display: flex; gap: 4px; align-items: center; padding: 10px 12px; }
.ai-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--muted); animation: aiDot 1.2s infinite; }
.ai-dot:nth-child(2) { animation-delay: 0.2s; } .ai-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes aiDot { 0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);} }
.ai-input-row { display: flex; gap: 8px; padding: 10px 12px; border-top: 1px solid var(--border); }
.ai-input { flex: 1; background: var(--navy-light); border: 1px solid var(--border); border-radius: 18px; padding: 8px 14px; color: var(--text); font-size: 13px; outline: none; resize: none; font-family: inherit; line-height: 1.4; max-height: 80px; overflow-y: auto; }
.ai-input:focus { border-color: var(--gold); }
.ai-send { background: var(--gold); border: none; border-radius: 50%; width: 36px; height: 36px; color: var(--navy); font-size: 16px; cursor: pointer; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.ai-send:hover { background: var(--gold-light); }
.ai-send:disabled { opacity: 0.5; cursor: not-allowed; }
.ai-clear-btn { background: none; border: none; color: var(--muted); font-size: 11px; cursor: pointer; padding: 4px 8px; border-radius: 4px; transition: color 0.15s; }
.ai-clear-btn:hover { color: var(--text); }

/* ─── CONDUIT BENDING CALC PAGE ─── */
.bend-diagram { background: var(--navy-light); border: 1px solid var(--border); border-radius: 10px; padding: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; min-height: 120px; }
.bend-result-box { background: var(--gold-dim); border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 14px; margin-top: 10px; }
.bend-result-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(201,168,76,0.15); }
.bend-result-row:last-child { border-bottom: none; }
.bend-result-label { font-size: 12px; color: var(--muted-light); font-weight: 600; }
.bend-result-val { font-size: 16px; font-weight: 800; color: var(--gold); font-family: monospace; }
.bend-tool-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* ─── NEC REFERENCE PAGE ─── */
.nec-search { position: relative; margin-bottom: 20px; }
.nec-search input { width: 100%; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px 12px 40px; color: var(--text); font-size: 14px; outline: none; }
.nec-search input:focus { border-color: var(--gold); }
.nec-search::before { content: ''; position: absolute; left: 13px; top: 50%; transform: translateY(-50%); font-size: 15px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%236b7a99' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E"); background-repeat: no-repeat; width: 15px; height: 15px; }
.nec-article-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 12px; transition: border-color 0.15s; }
.nec-article-card:hover { border-color: rgba(201,168,76,0.3); }
.nec-article-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer; }
.nec-article-num { background: var(--gold); color: var(--navy); font-size: 12px; font-weight: 800; padding: 3px 9px; border-radius: 6px; white-space: nowrap; }
.nec-article-title { font-size: 14px; font-weight: 700; color: var(--cream); flex: 1; }
.nec-article-toggle { color: var(--muted); font-size: 16px; transition: transform 0.2s; }
.nec-article-body { display: none; }
.nec-article-body.open { display: block; }
.nec-key-points { margin-bottom: 12px; }
.nec-key-points h5 { font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
.nec-key-points ul { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.nec-key-points li { font-size: 13px; color: var(--text); padding-left: 16px; position: relative; line-height: 1.4; }
.nec-key-points li::before { content: ''; position: absolute; left: 0; color: var(--gold); }
.nec-section-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.nec-section-chip { background: var(--navy-light); border: 1px solid var(--border-light); border-radius: 6px; padding: 4px 10px; font-size: 11.5px; font-weight: 600; color: var(--muted-light); }

/* ─── WIRE REFERENCE PAGE ─── */
.wire-table-wrap { overflow-x: auto; }
.wire-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.wire-table th { background: var(--navy-light); color: var(--gold); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 10px 14px; text-align: left; white-space: nowrap; border-bottom: 2px solid var(--border-light); }
.wire-table td { padding: 9px 14px; border-bottom: 1px solid var(--border); color: var(--text); font-family: monospace; font-size: 13px; white-space: nowrap; }
.wire-table tr:hover td { background: var(--card-hover); }
.wire-table .hl { color: var(--gold); font-weight: 700; }
.wire-search { position: relative; margin-bottom: 16px; }
.wire-search input { width: 100%; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 16px 12px 40px; color: var(--text); font-size: 14px; outline: none; }
.wire-search input:focus { border-color: var(--gold); }
.wire-search::before { content: ''; position: absolute; left: 13px; top: 50%; transform: translateY(-50%); font-size: 15px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%236b7a99' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E"); background-repeat: no-repeat; width: 15px; height: 15px; }

/* ─── FORMULA SHEET PAGE ─── */
.formula-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 12px; }
.formula-name { font-size: 14px; font-weight: 700; color: var(--cream); margin-bottom: 8px; }
.formula-expression { font-family: monospace; font-size: 20px; color: var(--gold); background: var(--navy-light); border: 1px solid var(--border); border-radius: 6px; padding: 10px 16px; text-align: center; margin-bottom: 10px; letter-spacing: 0.05em; }
.formula-vars { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.formula-var-item { font-size: 12px; color: var(--muted); background: var(--navy-light); border: 1px solid var(--border); border-radius: 4px; padding: 2px 8px; }
.formula-var-item strong { color: var(--gold); }
.formula-example { background: var(--navy-light); border-left: 3px solid var(--gold); border-radius: 0 6px 6px 0; padding: 10px 12px; font-size: 12.5px; color: var(--muted-light); line-height: 1.6; }
.formula-category { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); padding: 16px 0 8px; border-bottom: 1px solid var(--border); margin-bottom: 12px; }

/* Responsive */
@media (max-width: 860px) {
  .sidebar { transform: translateX(-100%); z-index: 200; }
  .sidebar.open { transform: translateX(0); }
  .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 199; display: none; }
  .sidebar-overlay.open { display: block; }
  .main-content { margin-left: 0; }
  .btn-hamburger { display: flex; }
  .page-inner { padding: 16px; }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .tf-options { grid-template-columns: 1fr 1fr; }
  .results-stats { gap: 20px; }
  .flashcard-container { height: 300px; }
  .card-text { font-size: 16px; }
  .bend-tool-grid { grid-template-columns: 1fr; }
  #calcPanel { width: 300px; }
  #aiChatPanel { width: 290px; }
  .fab-container { bottom: 16px; right: 16px; }
  .float-panel { right: 16px; bottom: 80px; }
}
@media (max-width: 480px) {
  .login-card { padding: 36px 24px; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
  .quiz-card { padding: 20px 16px; }
  .checkbox-grid { grid-template-columns: 1fr; }
  #calcPanel, #timerPanel, #aiChatPanel { width: calc(100vw - 32px); }
}
