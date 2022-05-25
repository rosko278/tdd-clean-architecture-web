import { retrievedCurrentQuestionAction } from './reducers/currentQuestion.reducer';
import { AppThunk } from '../../../store/initReduxStore';

export const retrieveCurrentQuestion =
  (): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    const currentQuestion = await questionGateway.current();
    dispatch(retrievedCurrentQuestionAction({ currentQuestion }));
  };
