import { createAction, createReducer } from '@reduxjs/toolkit';
import { Question } from '../../../models/question';

export const retrievedCurrentQuestionAction = createAction<{ currentQuestion: Question | null }>(
  'questions/retrievedCurrentQuestion'
);

const initialState: string | null = null;

export const currentQuestionReducer = createReducer<Question | null>(initialState, builder => {
  builder.addCase(retrievedCurrentQuestionAction, (state, { payload }) => {
    return payload.currentQuestion;
  });
});
