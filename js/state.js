// ═══════════════════════════════════════
// FREE MODELS - Fallback list for API calls
// ═══════════════════════════════════════
const FREE_MODELS = ['meta-llama/llama-3.3-70b-instruct:free', 'openai/gpt-oss-120b:free'];
let cachedFreeModels = null;

async function getFreeModelList() {
  if (cachedFreeModels) return cachedFreeModels;
  try {
    const res = await fetch('https://openrouter.ai/api/v1/models?max_price=0');
    const data = await res.json();
    const slugs = (data.data || []).map(m => m.id).filter(id => id.endsWith(':free'));
    cachedFreeModels = slugs.length > 0 ? slugs : FREE_MODELS;
  } catch (e) {
    cachedFreeModels = FREE_MODELS;
  }
  return cachedFreeModels;
}

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const state = {
  user: null,
  apiKey: localStorage.getItem('voltage_api_key') || '',
  uploadedFiles: JSON.parse(localStorage.getItem('voltage_files') || '[]'),
  sessions: JSON.parse(localStorage.getItem('voltage_sessions') || '[]'),
  currentQuiz: null,
  currentQuestion: 0,
  answers: [],
  timerInterval: null,
  timeElapsed: 0,
  currentFlashcards: null,
  currentCardIndex: 0,
  cardKnown: [],
  progressChart: null,
  year: localStorage.getItem('voltage_year') || 'Year 1',
  fileContents: {},
  isReDrill: false,
  currentAISubject: null,
  aiChatHistory: [],
};
