import { Action, AnyAction, configureStore, Store, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppState } from './appState';
import { currentQuestionReducer } from '../hexagon/usecases/current-question-retrieval/reducers/currentQuestion.reducer';
import { QuestionGateway } from '../hexagon/gateways/questionGateway';

interface Dependencies {
  questionGateway: QuestionGateway;
}

export const initReduxStore = (dependencies: Partial<Dependencies>) => {
  return configureStore({
    reducer: {
      currentQuestion: currentQuestionReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies
        }
      })
  });
};

export type ReduxStore = Store<AppState> & { dispatch: ThunkDispatch<AppState, Dependencies, Action> };

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, Dependencies, AnyAction>;
