import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { retrieveCurrentQuestion } from '../../../hexagon/usecases/current-question-retrieval/retrieveCurrentQuestion';
import { AppDispatch } from '../../../store/initReduxStore';
import { AppState } from '../../../store/appState';
import { QuestionTitle } from './questionTitle.component';
import { PossibleAnswers } from './possibleAnswers.component';
import { Joker5050 } from './joker5050';

export const CurrentQuestion = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const { data, fetching } = useSelector((state: AppState) => state.currentQuestion);
  const [hasMountedComponent, setHasMountedComponent] = useState(false);

  useEffect(() => {
    dispatch(retrieveCurrentQuestion());
    setHasMountedComponent(true);
  }, [dispatch, setHasMountedComponent]);

  if (!hasMountedComponent) return null;

  if (hasMountedComponent && !fetching && !data)
    return <div data-testid="sentence-no-question">Pas de question disponible</div>;

  return (
    <>
      {data && (
        <>
          <div className="flex flex-col w-9/12">
            <QuestionTitle title={data.label} />
            <PossibleAnswers answers={data.answers} />
          </div>
          <div>
            <Joker5050 />
          </div>
        </>
      )}
    </>
  );
};
