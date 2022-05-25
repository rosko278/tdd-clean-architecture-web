import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { retrieveCurrentQuestion } from './retrieveCurrentQuestion';
import { InMemoryQuestionGateway } from '../../../adapters/secondary/gateways/inMemoryQuestionGateway';

describe('Current question retrieval', () => {
  let store: ReduxStore;
  let questionGateway: InMemoryQuestionGateway;

  beforeEach(() => {
    questionGateway = new InMemoryQuestionGateway();
    store = initReduxStore({ questionGateway });
  });

  it('should not retrieve any current question if there is no one available', () => {
    store.dispatch(retrieveCurrentQuestion());
    expect(store.getState()).toEqual({
      currentQuestion: null
    });
  });

  it('should retrieve the current question', async () => {
    questionGateway.currentQuestion = {
      id: '123abc',
      label: 'Que veut dire un thunk ?',
      answers: {
        A: 'Un tank arménien',
        B: 'Une fonction qui retourne une fonction',
        C: 'Un type de musique',
        D: '42'
      }
    };
    await store.dispatch(retrieveCurrentQuestion());
    expect(store.getState()).toEqual({
      currentQuestion: 'Que veut dire un thunk ?'
    });
  });
});
