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
    questionGateway.currentQuestion = 'Que veut dire TDD ?';
    await store.dispatch(retrieveCurrentQuestion());
    expect(store.getState()).toEqual({
      currentQuestion: 'Que veut dire TDD ?'
    });
  });
});
