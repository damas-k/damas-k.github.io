// ═══════════════════════════════════════
// FREE MODELS - Fallback list for API calls
// ═══════════════════════════════════════
const FREE_MODELS = ['openrouter/free', 'meta-llama/llama-3.1-8b-instruct:free', 'google/gemini-2.0-flash-exp:free', 'mistralai/mistral-7b-instruct:free'];

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
