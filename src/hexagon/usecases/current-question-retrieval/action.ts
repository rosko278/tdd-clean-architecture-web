import { createAction } from '@reduxjs/toolkit';
import { Question, QuestionLetter } from '../../models/question';

export const retrieveCurrentQuestionAction = createAction('questions/retrieveCurrentQuestion');

export const retrievedCurrentQuestionAction = createAction<{ currentQuestion: Question | null }>(
  'questions/retrievedCurrentQuestion'
);

export const validatedAnswerAction = createAction<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }>(
  'questions/validatedAnswer'
);
