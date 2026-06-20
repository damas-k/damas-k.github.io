// ═══════════════════════════════════════
// FREE MODELS - Fallback list for API calls
// ═══════════════════════════════════════
const FREE_MODELS = ['meta-llama/llama-3.3-70b-instruct:free', 'openai/gpt-oss-120b:free'];

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
