import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { retrievedCurrentQuestionAction } from '../current-question-retrieval/reducers/currentQuestion.reducer';
import { validateCurrentAnswer } from './retrieveCurrentQuestion';

describe('Answer validation', () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = initReduxStore({});
  });

  it('should validate an answer', async () => {
    const currentQuestion = {
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
    store.dispatch(retrievedCurrentQuestionAction({ currentQuestion }));
    await validateCurrentAnswer('A');
    expect(store.getState()).toEqual({
      ...currentQuestion,
      givenAnswer: 'A',
      rightAnswer: 'B'
    });
  });
});
