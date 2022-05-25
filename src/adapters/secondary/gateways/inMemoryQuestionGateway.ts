import { QuestionGateway } from '../../../hexagon/gateways/questionGateway';
import { Question, QuestionLetter } from '../../../hexagon/models/question';

export class InMemoryQuestionGateway implements QuestionGateway {
  private _currentQuestion: Question | null = null;

  current(): Promise<Question | null> {
    return Promise.resolve(this._currentQuestion);
  }

  set currentQuestion(currentQuestion: Question | null) {
    this._currentQuestion = currentQuestion;
  }

  validateAnswer(
    id: string,
    givenAnswer: string
  ): Promise<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }> {
    return Promise.resolve({ givenAnswer: 'A', rightAnswer: 'A' });
  }
}
