import { AppThunk } from '../../../store/initReduxStore';
import { QuestionLetter } from '../../models/question';
import { validatedAnswerAction } from '../current-question-retrieval/action';

export const validateCurrentAnswer =
  (givenAnswer: QuestionLetter): AppThunk =>
  async (dispatch, getState, { questionGateway }) => {
    const answerValidation = await questionGateway.validateAnswer(getState().currentQuestion.data!.id, givenAnswer);
    dispatch(validatedAnswerAction(answerValidation));
  };
