import { AppThunk } from '../../../store/initReduxStore';
import { removedTwoWrongAnswersAction } from './action';

export const removeTwoWrongAnswers =
  (): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    const leftAnswers = await questionGateway.removeTwoWrongAnswers(getState().currentQuestion.data!);
    dispatch(removedTwoWrongAnswersAction({ questionLetters: leftAnswers }));
  };
