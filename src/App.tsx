import React from 'react';
import './App.css';
import { CurrentQuestion } from './adapters/primary/components/currentQuestion';
import { Provider } from 'react-redux';
import { initReduxStore } from './store/initReduxStore';
import { InMemoryQuestionGateway } from './adapters/secondary/gateways/inMemoryQuestionGateway';

const questionGateway = new InMemoryQuestionGateway();
questionGateway.rightAnswer = 'B';
questionGateway.currentQuestion = {
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
const store = initReduxStore({ questionGateway });

function App() {
  return (
    <Provider store={store}>
      <CurrentQuestion />
    </Provider>
  );
}

export default App;
