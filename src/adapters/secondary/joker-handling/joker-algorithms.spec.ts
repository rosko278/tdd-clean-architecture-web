import { removeTwoWrongAnswersAlgorithm } from './joker-algorithms';
import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { retrievedCurrentQuestionAction } from '../../../hexagon/usecases/current-question-retrieval/action';
import { DeterministicArrayIndexGenerator } from './deterministicArrayIndexGenerator';

describe('Joker algorithms', () => {
  let store: ReduxStore;
  let arrayIndexGenerator: DeterministicArrayIndexGenerator;

  beforeEach(() => {
    arrayIndexGenerator = new DeterministicArrayIndexGenerator();
    store = initReduxStore({});
    initStoreWithCurrentQuestion();
  });

  it('should remove two wrong answers randomly', () => {
    arrayIndexGenerator.nextRandomIndex = 1;
    expect(removeTwoWrongAnswersAlgorithm(arrayIndexGenerator)('B')).toEqual(['B', 'C']);
    arrayIndexGenerator.nextRandomIndex = 2;
    expect(removeTwoWrongAnswersAlgorithm(arrayIndexGenerator)('B')).toEqual(['B', 'D']);
  });

  it("can't remove the right answer", () => {
    arrayIndexGenerator.nextRandomIndex = 0;
    expect(removeTwoWrongAnswersAlgorithm(arrayIndexGenerator)('B')).toEqual(['B', 'A']);
  });

  const initStoreWithCurrentQuestion = () => {
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
  };
});
