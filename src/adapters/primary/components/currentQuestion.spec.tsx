import { render, waitFor, screen } from '@testing-library/react';
import { CurrentQuestion } from './currentQuestion';
import { initReduxStore, ReduxStore } from '../../../store/initReduxStore';
import { Provider } from 'react-redux';
import { InMemoryQuestionGateway } from '../../secondary/gateways/inMemoryQuestionGateway';
import { Question } from '../../../hexagon/models/question';

describe('Current question component', () => {
  let store: ReduxStore;
  let questionGateway: InMemoryQuestionGateway;

  beforeEach(() => {
    questionGateway = new InMemoryQuestionGateway();
    store = initReduxStore({ questionGateway });
  });

  describe('No question available', () => {
    it('should show a sentence warning about no current question', async () => {
      render(
        <Provider store={store}>
          <CurrentQuestion />
        </Provider>
      );
      await waitFor(() =>
        expect(store.getState().currentQuestion).toEqual({
          data: null,
          fetching: false
        })
      );
      expect(screen.getByTestId('sentence-no-question').textContent).toEqual('Pas de question disponible');
    });
  });

  describe('Current question available', () => {
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

    it('should show the question data', async () => {
      questionGateway.currentQuestion = currentQuestion;
      render(
        <Provider store={store}>
          <CurrentQuestion />
        </Provider>
      );
      await waitFor(() => expect(store.getState().currentQuestion).toEqual({ data: currentQuestion, fetching: false }));
      expect(screen.queryByTestId('sentence-no-question')).not.toBeInTheDocument();
    });

    it('should show a spinner while retrieving the current question', async () => {
      questionGateway = new (class extends InMemoryQuestionGateway {
        current(): Promise<Question | null> {
          return new Promise(resolve => {});
        }
      })();
      store = initReduxStore({ questionGateway });
      questionGateway.currentQuestion = currentQuestion;
      render(
        <Provider store={store}>
          <CurrentQuestion />
        </Provider>
      );
      await waitFor(() => expect(store.getState().currentQuestion).toEqual({ data: null, fetching: true }));
      expect(screen.queryByTestId('sentence-no-question')).not.toBeInTheDocument();
    });
  });
});
