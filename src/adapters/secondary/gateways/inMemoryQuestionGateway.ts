import { QuestionGateway } from '../../../hexagon/gateways/questionGateway';
import { Question, QuestionLetter } from '../../../hexagon/models/question';
import { removeTwoWrongAnswersAlgorithm } from '../joker-handling/joker-algorithms';
import { RandomArrayIndexGenerator } from '../joker-handling/randomArrayIndexGenerator';

export class InMemoryQuestionGateway implements QuestionGateway {
  private _currentQuestion: Question | null = null;
  private _rightAnswer: QuestionLetter | null = null;
  private _givenAnswer: QuestionLetter | null = null;

  current(): Promise<Question | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this._currentQuestion);
      }, 5000);
    });
  }

  validateAnswer(
    id: string,
    givenAnswer: QuestionLetter
  ): Promise<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }> {
    this._givenAnswer = givenAnswer;
    return Promise.resolve({ givenAnswer, rightAnswer: this._rightAnswer! });
  }

  removeTwoWrongAnswers(currentQuestion: Question): Promise<QuestionLetter[]> {
    return Promise.resolve(removeTwoWrongAnswersAlgorithm(new RandomArrayIndexGenerator())(this._rightAnswer!));
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
