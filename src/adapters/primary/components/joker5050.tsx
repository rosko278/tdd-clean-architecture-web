import { useDispatch } from 'react-redux';
import { removeTwoWrongAnswers } from '../../../hexagon/usecases/two-wrong-answers-removal/removeTwoWrongAnswers';
import { AppDispatch } from '../../../store/initReduxStore';

export const Joker5050 = () => {
  const dispatch = useDispatch<AppDispatch>();

  const apply5050 = () => {
    dispatch(removeTwoWrongAnswers());
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={apply5050}>
        Joker 50 / 50
      </button>
    </div>
  );
};
