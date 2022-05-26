import { createReducer } from '@reduxjs/toolkit';
import {
  retrieveCurrentQuestionAction,
  retrievedCurrentQuestionAction,
  validatedAnswerAction
} from '../../hexagon/usecases/current-question-retrieval/action';
import { AppState } from '../appState';
import { removedTwoWrongAnswersAction } from '../../hexagon/usecases/two-wrong-answers-removal/action';

const initialState = {
  fetching: false,
  data: null
};

export const currentQuestionReducer = createReducer<AppState['currentQuestion']>(initialState, builder => {
  builder.addCase(retrieveCurrentQuestionAction, state => {
    return {
      ...state,
      fetching: true
    };
  });
  builder.addCase(retrievedCurrentQuestionAction, (state, { payload }) => {
    return {
      data: payload.currentQuestion,
      fetching: false
    };
  });
  builder.addCase(validatedAnswerAction, (state, { payload }) => {
    if (!state.data)
      return {
        fetching: false,
        data: null
      };
    return {
      ...state,
      data: {
        ...state.data,
        givenAnswer: payload.givenAnswer,
        rightAnswer: payload.rightAnswer
      }
    };
  });
  builder.addCase(removedTwoWrongAnswersAction, (state, { payload }) => {
    const leftAnswers = payload.questionLetters.reduce((acc, q) => {
      return {
        ...acc,
        [q]: state.data!.answers[q]
      };
    }, {});
    return {
      ...state,
      data: {
        ...state.data!,
        answers: leftAnswers
      }
    };
  });
});
