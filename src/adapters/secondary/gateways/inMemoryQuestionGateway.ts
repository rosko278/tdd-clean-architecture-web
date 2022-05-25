import { QuestionGateway } from '../../../hexagon/gateways/questionGateway';
import { Question } from '../../../hexagon/models/question';

export class InMemoryQuestionGateway implements QuestionGateway {
  private _currentQuestion: Question | null = null;

  current(): Promise<Question | null> {
    return Promise.resolve(this._currentQuestion);
  }

  set currentQuestion(currentQuestion: Question | null) {
    this._currentQuestion = currentQuestion;
  }
}
