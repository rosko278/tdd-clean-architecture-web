import { AppThunk } from '../../../store/initReduxStore';
import { retrieveCurrentQuestionAction, retrievedCurrentQuestionAction } from './action';

export const retrieveCurrentQuestion =
  (): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    dispatch(retrieveCurrentQuestionAction());
    const currentQuestion = await questionGateway.current();
    dispatch(retrievedCurrentQuestionAction({ currentQuestion }));
  };
