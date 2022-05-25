export interface Question {
  id: string;
  label: string;
  answers: Answers;
}

export type Answers = Record<'A' | 'B' | 'C' | 'D', string>;
