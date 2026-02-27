export type Category =
  | 'A. Measurement'
  | 'B. Skill Acquisition'
  | 'C. Behavior Reduction'
  | 'D. Documentation & Reporting'
  | 'E. Professional Conduct & Scope of Practice';

export interface Question {
  id: string;
  category: Category;
  taskCode: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  category: Category;
  taskCode: string;
  term: string;
  definition: string;
}

export type FlashcardStatus = 'know' | 'learning' | 'unseen';

export interface Progress {
  flashcards: Record<string, FlashcardStatus>;
  quizScores: QuizResult[];
  examScores: ExamResult[];
  streakDays: string[]; // ISO date strings
  lastActiveDate: string;
}

export interface QuizResult {
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  categories: Category[];
  wrongQuestionIds: string[];
}

export interface ExamResult {
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  timeUsedSeconds: number;
  categoryBreakdown: Record<Category, { correct: number; total: number }>;
  wrongQuestionIds: string[];
}
