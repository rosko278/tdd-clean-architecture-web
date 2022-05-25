import { createAction, createReducer } from '@reduxjs/toolkit';

export const retrievedCurrentQuestionAction = createAction<{ currentQuestion: string | null }>(
  'questions/retrievedCurrentQuestion'
);

const initialState: string | null = null;

export const currentQuestionReducer = createReducer<string | null>(initialState, builder => {
  builder.addCase(retrievedCurrentQuestionAction, (state, { payload }) => {
    return payload.currentQuestion;
  });
});
