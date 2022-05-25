import { AppThunk } from '../../../store/initReduxStore';
import { validatedAnswerAction } from '../current-question-retrieval/reducers/currentQuestion.reducer';
import { QuestionLetter } from '../../models/question';

export const validateCurrentAnswer =
  (givenAnswer: QuestionLetter): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    const answerValidation = await questionGateway.validateAnswer(getState().currentQuestion!.id, givenAnswer);
    dispatch(validatedAnswerAction(answerValidation));
  };
