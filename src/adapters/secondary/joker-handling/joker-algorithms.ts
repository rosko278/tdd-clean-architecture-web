import { QuestionLetter } from '../../../hexagon/models/question';
import { ArrayIndexGenerator } from './arrayIndexGenerator';

export const removeTwoWrongAnswersAlgorithm =
  (arrayIndexGenerator: ArrayIndexGenerator) =>
  (rightAnswer: QuestionLetter): QuestionLetter[] => {
    const questionLetters: QuestionLetter[] = ['A', 'B', 'C', 'D'];
    const candidateWrongAnswers = questionLetters.filter(q => q !== rightAnswer);
    const randomWrongAnswerIndex = arrayIndexGenerator.randomIndex(candidateWrongAnswers);
    return [rightAnswer, questionLetters[randomWrongAnswerIndex]];
  };
