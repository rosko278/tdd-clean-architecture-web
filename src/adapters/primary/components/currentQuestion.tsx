import { QuestionTitle } from './questionTitle.component';
import { PossibleAnswers } from './possibleAnswers.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { retrieveCurrentQuestion } from '../../../hexagon/usecases/current-question-retrieval/retrieveCurrentQuestion';
import { AppDispatch } from '../../../store/initReduxStore';
import { AppState } from '../../../store/appState';

export const CurrentQuestion = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const currentQuestion = useSelector((state: AppState) => state.currentQuestion);

  useEffect(() => {
    dispatch(retrieveCurrentQuestion());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-row justify-center">
        {currentQuestion && (
          <div className="flex flex-col w-9/12">
            <QuestionTitle title={currentQuestion.label} />
            <PossibleAnswers answers={currentQuestion.answers} />
          </div>
        )}
      </div>
    </div>
  );
};
