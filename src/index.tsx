import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InMemoryQuestionGateway } from './adapters/secondary/gateways/inMemoryQuestionGateway';
import { initReduxStore } from './store/initReduxStore';
import { Provider } from 'react-redux';

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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
