import { selectCurrentAnswersStatuses } from './selectCurrentAnswersStatuses';
import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import {
  retrievedCurrentQuestionAction,
  validatedAnswerAction
} from '../../../hexagon/usecases/current-question-retrieval/reducers/currentQuestion.reducer';

describe('View model generators through Redux selectors', () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch(retrievedCurrentQuestionAction({ currentQuestion: defaultCurrentQuestion }));
  });

  it('should have all answers not highlighted before validating answer', () => {
    expect(selectCurrentAnswersStatuses(store.getState())).toEqual({
      A: 'NOT_HIGHLIGHTED',
      B: 'NOT_HIGHLIGHTED',
      C: 'NOT_HIGHLIGHTED',
      D: 'NOT_HIGHLIGHTED'
    });
  });

  it('should highlight the right given answer', () => {
    store.dispatch(validatedAnswerAction({ givenAnswer: 'B', rightAnswer: 'B' }));
    expect(selectCurrentAnswersStatuses(store.getState())).toEqual({
      A: 'NOT_HIGHLIGHTED',
      B: 'GREEN_HIGHLIGHTED',
      C: 'NOT_HIGHLIGHTED',
      D: 'NOT_HIGHLIGHTED'
    });
  });

  it('should highlight another right given answer', () => {
    store.dispatch(validatedAnswerAction({ givenAnswer: 'C', rightAnswer: 'C' }));
    expect(selectCurrentAnswersStatuses(store.getState())).toEqual({
      A: 'NOT_HIGHLIGHTED',
      B: 'NOT_HIGHLIGHTED',
      C: 'GREEN_HIGHLIGHTED',
      D: 'NOT_HIGHLIGHTED'
    });
  });

  it('should highlight the wrong given answer + the right answer', () => {
    store.dispatch(validatedAnswerAction({ givenAnswer: 'C', rightAnswer: 'B' }));
    expect(selectCurrentAnswersStatuses(store.getState())).toEqual({
      A: 'NOT_HIGHLIGHTED',
      B: 'GREEN_HIGHLIGHTED',
      C: 'ORANGE_HIGHLIGHTED',
      D: 'NOT_HIGHLIGHTED'
    });
  });

  const defaultCurrentQuestion = {
    id: '123abc',
    label: 'Que veut dire un thunk ?',
    answers: {
      A: 'Un tank arménien',
      B: 'Une fonction qui retourne une fonction',
      C: 'Un type de musique',
      D: '42'
    },
    givenAnswer: null,
    rightAnswer: null
  };
});
