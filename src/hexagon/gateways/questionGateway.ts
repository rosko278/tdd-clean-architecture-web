import { Question, QuestionLetter } from '../models/question';

export interface QuestionGateway {
  current(): Promise<Question | null>;

  validateAnswer(
    id: string,
    givenAnswer: QuestionLetter
  ): Promise<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }>;

  removeTwoWrongAnswers(currentQuestion: Question): Promise<QuestionLetter[]>;
}
