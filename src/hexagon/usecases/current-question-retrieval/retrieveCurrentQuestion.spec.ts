import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { retrieveCurrentQuestion } from './retrieveCurrentQuestion';
import { InMemoryQuestionGateway } from '../../../adapters/secondary/gateways/inMemoryQuestionGateway';
import { Question } from '../../models/question';

describe('Current question retrieval', () => {
  let store: ReduxStore;
  let questionGateway: InMemoryQuestionGateway;

  beforeEach(() => {
    questionGateway = new InMemoryQuestionGateway();
    store = initReduxStore({ questionGateway });
  });

  it('should not retrieve any current question if there is no one available', async () => {
    await _retrieveCurrentQuestion();
    expectCurrentQuestion(null);
  });

  it('should retrieve the current question', async () => {
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
    questionGateway.currentQuestion = currentQuestion;
    await _retrieveCurrentQuestion();
    expectCurrentQuestion(currentQuestion);
  });

  const _retrieveCurrentQuestion = () => store.dispatch(retrieveCurrentQuestion());

  const expectCurrentQuestion = (expectedCurrentQuestion: Question | null) =>
    expect(store.getState()).toEqual({
      currentQuestion: expectedCurrentQuestion
    });
});
