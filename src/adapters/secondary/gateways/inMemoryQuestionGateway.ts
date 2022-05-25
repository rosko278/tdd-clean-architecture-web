import { QuestionGateway } from '../../../hexagon/gateways/questionGateway';

export class InMemoryQuestionGateway implements QuestionGateway {
  private _currentQuestion: string | null = null;

  current(): Promise<string | null> {
    return Promise.resolve(this._currentQuestion);
  }

  set currentQuestion(currentQuestion: string | null) {
    this._currentQuestion = currentQuestion;
  }
}
