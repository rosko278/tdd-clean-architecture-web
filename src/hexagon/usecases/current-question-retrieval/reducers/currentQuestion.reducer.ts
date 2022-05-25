import { createAction, createReducer } from '@reduxjs/toolkit';
import { Question, QuestionLetter } from '../../../models/question';

export const retrievedCurrentQuestionAction = createAction<{ currentQuestion: Question | null }>(
  'questions/retrievedCurrentQuestion'
);

export const validatedAnswerAction = createAction<{ givenAnswer: QuestionLetter; rightAnswer: QuestionLetter }>(
  'questions/validatedAnswer'
);

const initialState: string | null = null;

export const currentQuestionReducer = createReducer<Question | null>(initialState, builder => {
  builder.addCase(retrievedCurrentQuestionAction, (state, { payload }) => {
    return payload.currentQuestion;
  });
  builder.addCase(validatedAnswerAction, (state, { payload }) => {
    if (!state) return null;
    return {
      ...state,
      givenAnswer: payload.givenAnswer,
      rightAnswer: payload.rightAnswer
    };
  });
});
