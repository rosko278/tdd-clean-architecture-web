import { QuestionTitle } from './questionTitle.component';
import { PossibleAnswers } from './possibleAnswers.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { retrieveCurrentQuestion } from '../../../hexagon/usecases/current-question-retrieval/retrieveCurrentQuestion';
import { AppDispatch } from '../../../store/initReduxStore';
import { AppState } from '../../../store/appState';

export const CurrentQuestion = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const { data, fetching } = useSelector((state: AppState) => state.currentQuestion);

  useEffect(() => {
    dispatch(retrieveCurrentQuestion());
  }, [dispatch]);

  if (fetching) {
    return <p>Chargement de la prochaine question ...</p>;
  }

  return (
    <div>
      <div className="flex flex-row justify-center">
        {data && (
          <div className="flex flex-col w-9/12">
            <QuestionTitle title={data.label} />
            <PossibleAnswers answers={data.answers} />
          </div>
        )}
      </div>
    </div>
  );
};
