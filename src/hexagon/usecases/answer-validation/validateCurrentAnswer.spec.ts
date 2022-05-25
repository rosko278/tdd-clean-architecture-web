import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { retrievedCurrentQuestionAction } from '../current-question-retrieval/reducers/currentQuestion.reducer';
import { validateCurrentAnswer } from './validateCurrentAnswer';
import { InMemoryQuestionGateway } from '../../../adapters/secondary/gateways/inMemoryQuestionGateway';

describe('Answer validation', () => {
  let store: ReduxStore;
  let questionGateway: InMemoryQuestionGateway;

  beforeEach(() => {
    questionGateway = new InMemoryQuestionGateway();
    store = initReduxStore({ questionGateway });
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
    questionGateway.rightAnswer = 'B';
    store.dispatch(retrievedCurrentQuestionAction({ currentQuestion }));
    await store.dispatch(validateCurrentAnswer('A'));
    expect(store.getState()).toEqual({
      currentQuestion: {
        ...currentQuestion,
        givenAnswer: 'A',
        rightAnswer: 'B'
      }
    });
    expect(questionGateway.givenAnswer).toEqual('A');
  });
});
