import { Question, QuestionLetter } from '../models/question';

export interface QuestionGateway {
  current(): Promise<Question | null>;
  validateAnswer(
    id: string,
    givenAnswer: string
  ): Promise<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }>;
}
