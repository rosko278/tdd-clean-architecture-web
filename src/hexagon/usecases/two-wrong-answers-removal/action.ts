import { createAction } from '@reduxjs/toolkit';
import { QuestionLetter } from '../../models/question';

export const removedTwoWrongAnswersAction = createAction<{ questionLetters: QuestionLetter[] }>(
  'questions/removedTwoWrongAnswers'
);

export const validatedAnswerAction = createAction<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }>(
  'questions/validatedAnswer'
);
