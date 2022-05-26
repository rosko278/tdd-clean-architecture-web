export interface Question {
  id: string;
  label: string;
  answers: Answers;
  givenAnswer: QuestionLetter | null;
  rightAnswer: QuestionLetter | null;
}

export type Answers = Partial<Record<QuestionLetter, string>>;

export type QuestionLetter = 'A' | 'B' | 'C' | 'D';
