import { AppThunk } from '../../../store/initReduxStore';
import { validatedAnswerAction } from '../current-question-retrieval/reducers/currentQuestion.reducer';

export const validateCurrentAnswer =
  (givenAnswer: string): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    const answerValidation = await questionGateway.validateAnswer(getState().currentQuestion!.id, givenAnswer);
    dispatch(validatedAnswerAction(answerValidation));
  };
