import { QuestionGateway } from '../../../hexagon/gateways/questionGateway';
import { Question, QuestionLetter } from '../../../hexagon/models/question';

export class InMemoryQuestionGateway implements QuestionGateway {
  private _currentQuestion: Question | null = null;
  private _rightAnswer: QuestionLetter | null = null;
  private _givenAnswer: QuestionLetter | null = null;

  current(): Promise<Question | null> {
    return Promise.resolve(this._currentQuestion);
  }

  validateAnswer(
    id: string,
    givenAnswer: QuestionLetter
  ): Promise<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }> {
    this._givenAnswer = givenAnswer;
    return Promise.resolve({ givenAnswer, rightAnswer: this._rightAnswer! });
  }

  set currentQuestion(currentQuestion: Question | null) {
    this._currentQuestion = currentQuestion;
  }

  set rightAnswer(answer: QuestionLetter | null) {
    this._rightAnswer = answer;
  }

  get givenAnswer(): QuestionLetter | null {
    return this._givenAnswer;
  }
}
