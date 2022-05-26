import { AppState } from '../../../store/appState';

export const selectCurrentAnswersStatuses = (state: AppState) => {
  const defaultAnswersStatuses = {
    A: 'NOT_HIGHLIGHTED',
    B: 'NOT_HIGHLIGHTED',
    C: 'NOT_HIGHLIGHTED',
    D: 'NOT_HIGHLIGHTED'
  };
  if (!state.currentQuestion.data?.givenAnswer || !state.currentQuestion.data?.rightAnswer)
    return defaultAnswersStatuses;
  return {
    ...defaultAnswersStatuses,
    [state.currentQuestion.data?.givenAnswer]: 'ORANGE_HIGHLIGHTED',
    [state.currentQuestion.data?.rightAnswer]: 'GREEN_HIGHLIGHTED'
  };
};
